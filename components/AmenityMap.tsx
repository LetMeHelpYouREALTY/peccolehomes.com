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

const MAP_MIN_HEIGHT = 420;

type LoadState = "idle" | "loading" | "ready" | "fallback";

function getApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || undefined;
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

function getMapId(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() || undefined;
}

export type AmenityMapProps = {
  /** Shown in the community center marker info window */
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
  const [loadState, setLoadState] = useState<LoadState>(apiKey ? "idle" : "fallback");
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>("grocery");
  const listId = useId();
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const placesLibRef = useRef<google.maps.PlacesLibrary | null>(null);
  const initStartedRef = useRef(false);

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

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const showCommunityMarker = useCallback(
    async (map: google.maps.Map) => {
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

      const content = `
        <div style="max-width:220px;font-family:system-ui,sans-serif">
          <strong>${communityLabel}</strong><br/>
          <span style="font-size:13px;color:#444">${community.centerAddress}</span><br/>
          <a href="${directionsToPlaceUrl(community.centerAddress)}" target="_blank" rel="noopener noreferrer">Directions</a>
        </div>
      `;

      marker.addListener("click", () => {
        infoWindowRef.current?.setContent(content);
        infoWindowRef.current?.open({ map, anchor: marker });
      });
    },
    [communityLabel]
  );

  const loadPlacesForCategory = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      clearMarkers();
      await showCommunityMarker(map);

      const category = amenityCategories.find((c) => c.id === categoryId);
      if (!category || !placesLibRef.current) return;

      const { Place } = placesLibRef.current;

      try {
        const request = {
          fields: [
            "displayName",
            "location",
            "formattedAddress",
            "rating",
            "googleMapsURI",
          ],
          locationRestriction: {
            center: {
              lat: community.center.latitude,
              lng: community.center.longitude,
            },
            radius: community.searchRadiusMeters,
          },
          includedPrimaryTypes: category.placeTypes,
          maxResultCount: 18,
        };

        const { places } = await Place.searchNearby(request);

        places?.forEach((place) => {
          const loc = place.location;
          if (!loc) return;

          const displayName = placeDisplayName(place.displayName);
          const address = place.formattedAddress ?? "";
          const rating = place.rating;
          const mapsUri =
            place.googleMapsURI ?? directionsToPlaceUrl(address || displayName);

          const marker = new google.maps.Marker({
            map,
            position: loc,
            title: displayName,
          });

          markersRef.current.push(marker);

          marker.addListener("click", () => {
            const ratingLine =
              rating != null ? `<br/><span style="font-size:13px">Rating: ${rating}</span>` : "";
            const html = `
              <div style="max-width:240px;font-family:system-ui,sans-serif">
                <strong>${displayName}</strong>${ratingLine}
                ${address ? `<br/><span style="font-size:13px;color:#444">${address}</span>` : ""}
                <br/><a href="${mapsUri}" target="_blank" rel="noopener noreferrer">Directions</a>
              </div>
            `;
            infoWindowRef.current?.setContent(html);
            infoWindowRef.current?.open({ map, anchor: marker });
          });
        });
      } catch {
        // Keep community marker; static list covers copy when search fails
      }
    },
    [clearMarkers, showCommunityMarker]
  );

  useEffect(() => {
    if (!inView || !apiKey || loadState === "fallback") return;
    if (initStartedRef.current) return;
    initStartedRef.current = true;

    let cancelled = false;

    async function initMap() {
      setLoadState("loading");

      try {
        if (!window.google?.maps?.importLibrary) {
          await new Promise<void>((resolve, reject) => {
            const existing = document.querySelector<HTMLScriptElement>(
              'script[data-amenity-map="true"]'
            );
            if (existing) {
              existing.addEventListener("load", () => resolve());
              existing.addEventListener("error", () => reject(new Error("Maps script failed")));
              return;
            }
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey!)}&loading=async`;
            script.async = true;
            script.defer = true;
            script.dataset.amenityMap = "true";
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("Maps script failed"));
            document.head.appendChild(script);
          });
        }

        if (cancelled || !mapDivRef.current) return;

        const mapsLib = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
        placesLibRef.current = (await google.maps.importLibrary(
          "places"
        )) as google.maps.PlacesLibrary;

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
        if (!cancelled) setLoadState("fallback");
      }
    }

    void initMap();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once when in view
  }, [inView, apiKey, loadState]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || loadState !== "ready") return;
    void loadPlacesForCategory(map, activeCategory);
  }, [activeCategory, loadPlacesForCategory, loadState]);

  const curatedForCategory = getCuratedByCategory(activeCategory);
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
          {curatedForCategory.length > 0
            ? curatedForCategory.map((place) => (
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
        {showFallbackMap && (
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Set <code className="text-xs">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> in Vercel for the
            interactive amenity map with live Places results.
          </p>
        )}
      </div>
    </div>
  );
}

function catLabel(id: AmenityCategoryId): string {
  return amenityCategories.find((c) => c.id === id)?.label ?? id;
}
