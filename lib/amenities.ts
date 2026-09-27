/**
 * Peccole Ranch amenity map — community center and curated nearby places.
 * Center: Peccole Ranch Community Association clubhouse (9501 Red Hills Rd), geocoded via OpenStreetMap Nominatim (2026).
 */

import { fullAddress } from "@/lib/site";

export const community = {
  name: "Peccole Ranch",
  city: "Las Vegas",
  state: "NV",
  /** Clubhouse / HOA office — documented community hub */
  centerAddress: fullAddress,
  center: {
    latitude: 36.154412,
    longitude: -115.302415,
  },
  mapZoom: 14,
  /** Radius for Places searchNearby (meters) */
  searchRadiusMeters: 5000,
} as const;

export type AmenityCategoryId =
  | "restaurants"
  | "cafes"
  | "grocery"
  | "parks"
  | "golf"
  | "healthcare"
  | "pharmacies"
  | "shopping"
  | "parking"
  | "fitness"
  | "schools";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types for searchNearby */
  placeTypes: string[];
};

export const amenityCategories: AmenityCategory[] = [
  { id: "grocery", label: "Grocery", placeTypes: ["grocery_store", "supermarket"] },
  { id: "parks", label: "Parks", placeTypes: ["park"] },
  { id: "restaurants", label: "Restaurants", placeTypes: ["restaurant"] },
  { id: "cafes", label: "Cafes", placeTypes: ["cafe", "coffee_shop"] },
  { id: "shopping", label: "Shopping", placeTypes: ["shopping_mall", "department_store"] },
  { id: "healthcare", label: "Healthcare", placeTypes: ["hospital", "doctor"] },
  { id: "pharmacies", label: "Pharmacies", placeTypes: ["pharmacy"] },
  { id: "fitness", label: "Fitness", placeTypes: ["gym", "fitness_center"] },
  { id: "golf", label: "Golf", placeTypes: ["golf_course"] },
  { id: "schools", label: "Schools", placeTypes: ["school", "primary_school", "secondary_school"] },
  { id: "parking", label: "Parking", placeTypes: ["parking"] },
];

export type CuratedAmenity = {
  name: string;
  /** Omit from JSON-LD if unverified street-level address */
  address: string;
  category: AmenityCategoryId;
  /** schema.org @type for ItemList entries */
  schemaType: string;
  /** Official page used to verify name and address */
  sourceUrl: string;
  note?: string;
};

/**
 * Verified names and street addresses (official / CCSD / county park sources).
 * Used for SSR copy, fallback map list, and JSON-LD ItemList.
 */
export const curatedAmenities: CuratedAmenity[] = [
  {
    name: "Smith's Food and Drug",
    address: "9851 W Charleston Blvd, Las Vegas, NV 89117",
    category: "grocery",
    schemaType: "GroceryStore",
    sourceUrl: "https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/charleston/702-0008",
  },
  {
    name: "Whole Foods Market (Summerlin)",
    address: "2475 S Town Center Dr, Las Vegas, NV 89135",
    category: "grocery",
    schemaType: "GroceryStore",
    sourceUrl: "https://www.wholefoodsmarket.com/stores/summerlin",
  },
  {
    name: "Downtown Summerlin",
    address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
    category: "shopping",
    schemaType: "ShoppingCenter",
    sourceUrl: "https://www.downtownsummerlin.com/",
    note: "Department stores, specialty retail, and dining.",
  },
  {
    name: "Boca Park Fashion Village",
    address: "750 S Rampart Blvd, Las Vegas, NV 89145",
    category: "shopping",
    schemaType: "ShoppingCenter",
    sourceUrl: "https://www.bocaparklv.com/",
  },
  {
    name: "Peccole Ranch Community Association Clubhouse",
    address: "9501 Red Hills Rd, Las Vegas, NV 89117",
    category: "parks",
    schemaType: "SportsActivityLocation",
    sourceUrl: "https://www.peccoleranch.com/",
    note: "Tennis courts, playgrounds, trails, and disc golf in the community.",
  },
  {
    name: "Exploration Peak Park",
    address: "9700 S Buffalo Dr, Las Vegas, NV 89178",
    category: "parks",
    schemaType: "Park",
    sourceUrl: "https://parkslocator.clarkcountynv.gov/Search/ParkDetail?parkId=62",
    note: "Clark County regional park (~80 developed acres).",
  },
  {
    name: "Summerlin Hospital Medical Center",
    address: "657 N Town Center Dr, Las Vegas, NV 89144",
    category: "healthcare",
    schemaType: "Hospital",
    sourceUrl: "https://www.summerlinhospital.com/",
  },
  {
    name: "Centennial Hills Hospital Medical Center",
    address: "6900 N Durango Dr, Las Vegas, NV 89149",
    category: "healthcare",
    schemaType: "Hospital",
    sourceUrl: "https://www.centennialhillshospital.com/",
  },
  {
    name: "Palo Verde High School",
    address: "333 S Pavilion Center Dr, Las Vegas, NV 89144",
    category: "schools",
    schemaType: "School",
    sourceUrl: "https://paloverdehs.ccsd.net/",
    note: "CCSD high school; confirm Peccole Ranch assignments with the CCSD Zoning Search.",
  },
  {
    name: "William & Mary Scherkenbach Elementary School",
    address: "9371 Iron Mountain Rd, Las Vegas, NV 89143",
    category: "schools",
    schemaType: "School",
    sourceUrl: "https://williamandmaryscherkenbaches.ccsd.net/contact-us",
    note: "CCSD elementary; assignments vary by street — verify at ccsd.net/zoning.",
  },
  {
    name: "Angel Park Golf Club",
    address: "100 S Rampart Blvd, Las Vegas, NV 89145",
    category: "golf",
    schemaType: "GolfCourse",
    sourceUrl: "https://arcisgolf.com/clubs/angel-park-golf-club/hours-and-directions",
  },
  {
    name: "TPC Las Vegas",
    address: "9851 Canyon Run Dr, Las Vegas, NV 89144",
    category: "golf",
    schemaType: "GolfCourse",
    sourceUrl: "https://tpc.com/lasvegas/contact-directions/",
  },
];

export function getCuratedByCategory(category: AmenityCategoryId): CuratedAmenity[] {
  return curatedAmenities.filter((a) => a.category === category);
}

export function mapsEmbedFallbackUrl(): string {
  const { latitude, longitude } = community.center;
  return `https://www.google.com/maps?q=${latitude},${longitude}&z=${community.mapZoom}&output=embed`;
}

export function directionsToPlaceUrl(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}
