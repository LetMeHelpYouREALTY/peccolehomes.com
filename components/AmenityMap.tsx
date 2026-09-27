"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  amenityCategories,
  community,
  curatedAmenities,
  directionsToPlaceUrl,
  getCuratedByCategory,
  mapsEmbedFallbackUrl,
  type AmenityCategoryId,
} from "@/lib/amenities";
import { searchCategory } from "@/lib/amenities-search";
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/google-maps-loader";

const MAP_MIN_HEIGHT = 420;

type LoadState = "idle" | "loading" | "ready" | "fallback";

function getApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || undefined;
}

function getMapId(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() || undefined;
}

function placeDisplayName(name: unknown): string {
  if (!name) return "Place";
  if (typeof name === "string") return name;
  if (typeof name === "object" && name !== null && "text" in name) {
    const text = (name as { text?: string }).text;
    if (typeof text === "string") return text;
  }
  return "Place";
}

function latLngFromPlace(location: google.maps.LatLng | google.maps.LatLngLiteral): google.maps.LatLngLiteral {
  if (typeof (location as google.maps.LatLng).lat === "function") {
    const ll = location as google.maps.LatLng;
    return { lat: ll.lat(), lng: ll.lng() };
  }
  if ("lat" in location && "lng" in location) {
    const literal = location as google.maps.LatLngLiteral;
    return { lat: literal.lat, lng: literal.lng };
  }
  const json = (location as google.maps.LatLng).toJSON?.();
  return json ?? { lat: community.center.latitude, lng: community.center.longitude };
}

function buildInfoWindowContent(options: {
  title: string;
  lines?: string[];
  directionsHref: string;
}): HTMLElement {
  const wrap = document.createElement("div");
  wrap.style.maxWidth = "240px";
  wrap.style.fontFamily = "system-ui, sans-serif";

  const strong = document.createElement("strong");
  strong.textContent = options.title;
  wrap.appendChild(strong);

  options.lines?.forEach((line) => {
    const span = document.createElement("span");
    span.style.fontSize = "13px";
    span.style.color = "#444";
    span.style.display = "block";
    span.textContent = line;
    wrap.appendChild(span);
  });

  const link = document.createElement("a");
  link.href = options.directionsHref;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Directions";
  wrap.appendChild(link);

  return wrap;
}

export type AmenityMapProps = {
  communityLabel?: string;
  className?: string;
};

export function AmenityMap({
  communityLabel = community.name,
  className = "",
}: AmenityMapProps) {
  const apiKey = getApiKey();
  const mapId = getMapId();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [loadState, setLoadState] = useState<LoadState>(
    !apiKey || mapsAuthFailed ? "fallback" : "idle"
  );
  const [placesSearchFailed, setPlacesSearchFailed] = useState(false);
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>("grocery");
  const listId = useId();
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const initStartedRef = useRef(false);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const enterFallback = useCallback(() => {
    mapRef.current = null;
    clearMarkers();
    setLoadState("fallback");
  }, [clearMarkers]);

  useEffect(() => {
    const onAuthFailure = () => enterFallback();
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const showCommunityMarker = useCallback(
    (map: google.maps.Map) => {
      const position = {
        lat: community.center.latitude,
        lng: community.center.longitude,
      };

      const marker = new google.maps.Marker({
        map,
        position,
        title: communityLabel,
        zIndex: 1000,
      });

      markersRef.current.push(marker);

      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }

      marker.addListener("click", () => {
        infoWindowRef.current?.setContent(
          buildInfoWindowContent({
            title: communityLabel,
            lines: [community.centerAddress],
            directionsHref: directionsToPlaceUrl(community.centerAddress),
          })
        );
        infoWindowRef.current?.open({ map, anchor: marker });
      });
    },
    [communityLabel]
  );

  const loadPlacesForCategory = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      clearMarkers();
      showCommunityMarker(map);
      setPlacesSearchFailed(false);

      const center = {
        lat: community.center.latitude,
        lng: community.center.longitude,
      };

      try {
        const places = await searchCategory(center, categoryId);

        places.forEach((place) => {
          const loc = place.location;
          if (!loc) return;

          const position = latLngFromPlace(loc);
          const displayName = placeDisplayName(place.displayName);
          const address = place.formattedAddress ?? "";
          const mapsUri =
            place.googleMapsURI ?? directionsToPlaceUrl(address || displayName);

          const marker = new google.maps.Marker({
            map,
            position,
            title: displayName,
          });

          markersRef.current.push(marker);

          marker.addListener("click", () => {
            const lines = address ? [address] : undefined;
            infoWindowRef.current?.setContent(
              buildInfoWindowContent({
                title: displayName,
                lines,
                directionsHref: mapsUri,
              })
            );
            infoWindowRef.current?.open({ map, anchor: marker });
          });
        });
      } catch {
        setPlacesSearchFailed(true);
      }
    },
    [clearMarkers, showCommunityMarker]
  );

  useEffect(() => {
    if (!inView || !apiKey || loadState === "fallback") return;
    if (mapsAuthFailed) {
      enterFallback();
      return;
    }
    if (initStartedRef.current) return;
    initStartedRef.current = true;

    let cancelled = false;

    async function initMap() {
      setLoadState("loading");

      try {
        await loadGoogleMaps(apiKey!);
        if (cancelled || !mapDivRef.current) return;

        const mapsLib = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;

        const mapOptions: google.maps.MapOptions = {
          center: {
            lat: community.center.latitude,
            lng: community.center.longitude,
          },
          zoom: community.mapZoom,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        };

        if (mapId) {
          mapOptions.mapId = mapId;
        }

        const map = new mapsLib.Map(mapDivRef.current, mapOptions);
        mapRef.current = map;
        infoWindowRef.current = new google.maps.InfoWindow();

        await loadPlacesForCategory(map, activeCategory);
        if (!cancelled) setLoadState("ready");
      } catch {
        if (!cancelled) enterFallback();
      }
    }

    void initMap();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once when in view
  }, [inView, apiKey, loadState, enterFallback]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || loadState !== "ready") return;
    void loadPlacesForCategory(map, activeCategory);
  }, [activeCategory, loadPlacesForCategory, loadState]);

  const curatedForCategory = getCuratedByCategory(activeCategory);
  const showCuratedList =
    placesSearchFailed || loadState === "fallback" || !apiKey
      ? curatedForCategory
      : curatedForCategory;
  const showFallbackMap = loadState === "fallback" || !apiKey;

  return (
    <div ref={containerRef} className={className}>
      <div
        role="toolbar"
        aria-label="Filter nearby amenities by category"
        className="mb-3 flex flex-wrap gap-2"
      >
        {amenityCategories.map((cat) => {
          const pressed = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={pressed}
              aria-label={`Show ${cat.label} near ${community.name}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 dark:focus-visible:ring-gray-100 ${
                pressed
                  ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                  : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        className="relative w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
        style={{ minHeight: MAP_MIN_HEIGHT, height: MAP_MIN_HEIGHT }}
      >
        {showFallbackMap ? (
          <iframe
            title={`Map of ${community.name}, ${community.city}`}
            src={mapsEmbedFallbackUrl()}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: MAP_MIN_HEIGHT }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <div
            ref={mapDivRef}
            role="application"
            aria-label={`Interactive map of ${catLabel(activeCategory)} near ${community.name}`}
            className="absolute inset-0 h-full w-full"
          />
        )}
        {loadState === "loading" && !showFallbackMap && (
          <p
            className="pointer-events-none absolute inset-x-0 bottom-2 text-center text-sm text-gray-600 dark:text-gray-300"
            aria-live="polite"
          >
            Loading map…
          </p>
        )}
      </div>

      <div className="mt-4" id={listId}>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Featured nearby — {catLabel(activeCategory)}
        </h3>
        <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {showCuratedList.length > 0
            ? showCuratedList.map((place) => (
                <li key={`${place.name}-${place.address}`}>
                  <span className="font-medium text-gray-900 dark:text-white">{place.name}</span>
                  <span className="text-gray-600 dark:text-gray-400"> — {place.address}</span>
                  {place.note ? (
                    <span className="block text-gray-500 dark:text-gray-400">{place.note}</span>
                  ) : null}
                </li>
              ))
            : curatedAmenities.slice(0, 5).map((place) => (
                <li key={`${place.name}-${place.address}`}>
                  <span className="font-medium text-gray-900 dark:text-white">{place.name}</span>
                  <span className="text-gray-600 dark:text-gray-400"> — {place.address}</span>
                </li>
              ))}
        </ul>
        {placesSearchFailed && loadState === "ready" && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400" role="status">
            Live place results are unavailable right now; showing verified nearby locations below.
          </p>
        )}
      </div>
    </div>
  );
}

function catLabel(id: AmenityCategoryId): string {
  return amenityCategories.find((c) => c.id === id)?.label ?? id;
}
