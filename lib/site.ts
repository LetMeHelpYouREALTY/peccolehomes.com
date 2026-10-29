/**
 * Single source of truth for site and NAP.
 * Must match Google Business Profile exactly. Update when GBP changes.
 */

export const site = {
  name: "Peccole Homes",
  shortDescription: "Peccole Ranch Homes and real estate in Las Vegas",
  baseUrl: "https://www.peccolehomes.com",
} as const;

export const nap = {
  businessName: site.name,
  street: "9501 Red Hills Rd",
  city: "Las Vegas",
  state: "NV",
  zip: "89117",
  /** Replace with GBP phone; use tel: link in UI */
  phone: "(702) 555-0100",
} as const;

export const fullAddress = `${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}`;

export const geo = {
  /** For schema and map embed - office/Peccole Ranch area */
  latitude: 36.1797,
  longitude: -115.2648,
} as const;

/** Google Maps URL for Directions CTA */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

/**
 * Google "Write a review" URL for your Google Business Profile.
 * Set NEXT_PUBLIC_GOOGLE_PLACE_ID to your GBP Place ID (find it in GBP → Business info, or in the place URL on Google Maps).
 * If unset, link uses placeholder and should be updated before launch.
 */
const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? "PLACE_ID";
export const googleReviewsUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

/** Agent and brokerage for AEO/schema and footer. */
export const agent = {
  name: "Dr. Jan Duffy",
  license: "S.0197614.LLC",
} as const;

export const brokerage = {
  name: "Berkshire Hathaway HomeServices Nevada Properties",
} as const;

/** RealScout widget agent ID (base64). Same as heyberkshire.com if same agent. */
export const realScoutAgentEncodedId =
  process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID ?? "QWdlbnQtMjI1MDUw";
