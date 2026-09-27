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
  /** Must match Google Business Profile */
  phone: "(702) 500-0810",
  /** E.164 for tel: links */
  phoneTel: "+17025000810",
  /** Schema.org telephone */
  phoneSchema: "+1-702-500-0810",
} as const;

export const fullAddress = `${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}`;

export const geo = {
  /** Peccole Ranch Community Association clubhouse, 9501 Red Hills Rd (OSM geocode) */
  latitude: 36.154412,
  longitude: -115.302415,
} as const;

/** Google Maps URL for Directions CTA */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

/** Replace with your GBP review page URL */
export const googleReviewsUrl = "https://search.google.com/local/writereview?placeid=PLACE_ID";

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
