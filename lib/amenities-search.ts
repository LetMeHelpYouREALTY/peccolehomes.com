import { amenityCategories, community, type AmenityCategoryId } from "@/lib/amenities";

const cache = new Map<string, Promise<google.maps.places.Place[]>>();

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId
): Promise<google.maps.places.Place[]> {
  const category = amenityCategories.find((c) => c.id === categoryId);
  if (!category) {
    return Promise.resolve([]);
  }

  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress", "googleMapsURI"],
        locationRestriction: { center, radius: community.searchRadiusMeters },
        includedPrimaryTypes: category.placeTypes,
        maxResultCount: 10,
        rankPreference: "POPULARITY" as unknown as google.maps.places.SearchNearbyRankPreference,
      });
      return places ?? [];
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
