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
  searchRadiusMeters: 8000,
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

/** Family-oriented master-planned community — schools included; standard suburban ordering */
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
  address: string;
  category: AmenityCategoryId;
  /** schema.org @type for ItemList entries */
  schemaType: string;
  note?: string;
};

/**
 * Verified names and street addresses only (public listings / official sites).
 * Used for SSR copy, fallback map list, and JSON-LD ItemList.
 */
export const curatedAmenities: CuratedAmenity[] = [
  {
    name: "Smith's Food and Drug",
    address: "9851 W Charleston Blvd, Las Vegas, NV 89117",
    category: "grocery",
    schemaType: "GroceryStore",
  },
  {
    name: "Downtown Summerlin",
    address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
    category: "shopping",
    schemaType: "ShoppingCenter",
    note: "Trader Joe's, Whole Foods, Dillard's, Macy's, and dining.",
  },
  {
    name: "Boca Park Fashion Village",
    address: "750 S Rampart Blvd, Las Vegas, NV 89145",
    category: "shopping",
    schemaType: "ShoppingCenter",
  },
  {
    name: "Peccole Ranch Community Association Clubhouse",
    address: "9501 Red Hills Rd, Las Vegas, NV 89117",
    category: "parks",
    schemaType: "SportsActivityLocation",
    note: "Tennis courts, playgrounds, trails, and disc golf in the community.",
  },
  {
    name: "Exploration Peak Park",
    address: "9600 W Azure Dr, Las Vegas, NV 89117",
    category: "parks",
    schemaType: "Park",
  },
  {
    name: "Summerlin Hospital Medical Center",
    address: "657 N Town Center Dr, Las Vegas, NV 89144",
    category: "healthcare",
    schemaType: "Hospital",
  },
  {
    name: "Centennial Hills Hospital Medical Center",
    address: "6900 N Durango Dr, Las Vegas, NV 89149",
    category: "healthcare",
    schemaType: "Hospital",
  },
  {
    name: "Palo Verde High School",
    address: "333 S Pavilion Center Dr, Las Vegas, NV 89144",
    category: "schools",
    schemaType: "School",
    note: "CCSD high school serving parts of the west valley; confirm zoning by address at ccsd.net/zoning.",
  },
  {
    name: "William & Mary Scherkenbach Elementary School",
    address: "9371 Iron Mountain Rd, Las Vegas, NV 89143",
    category: "schools",
    schemaType: "School",
    note: "CCSD elementary; Peccole Ranch assignments vary by street — verify at ccsd.net/zoning.",
  },
  {
    name: "Angel Park Golf Club",
    address: "1001 S Rampart Blvd, Las Vegas, NV 89145",
    category: "golf",
    schemaType: "GolfCourse",
  },
  {
    name: "TPC Las Vegas",
    address: "1700 Village Center Cir, Las Vegas, NV 89134",
    category: "golf",
    schemaType: "GolfCourse",
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
