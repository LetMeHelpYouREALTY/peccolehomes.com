/**
 * Single source of truth for site and NAP.
 * Address and phone confirmed for this site on October 12, 2026.
 * Must match the published NAP exactly. Do not swap the phone.
 */

export const site = {
  name: "Peccole Homes",
  shortDescription: "Peccole Ranch homes for sale in west Las Vegas",
  baseUrl: "https://www.peccolehomes.com",
} as const;

export const nap = {
  businessName: site.name,
  street: "9501 Red Hills Rd",
  city: "Las Vegas",
  state: "NV",
  zip: "89117",
  /** Site phone. Never replace with another line. */
  phone: "(702) 500-0810",
  phoneTel: "+17025000810",
  phoneSchema: "+1-702-500-0810",
} as const;

export const fullAddress = `${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}`;

export const geo = {
  /**
   * Peccole Ranch Community Association clubhouse, 9501 Red Hills Rd.
   * OpenStreetMap Nominatim geocode recorded on the production amenity map in 2026.
   */
  latitude: 36.154412,
  longitude: -115.302415,
} as const;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

/**
 * A live Google review URL needs a confirmed Place ID.
 * The previous PLACE_ID token was a placeholder, so no review link is rendered.
 */
export const googleReviewsUrl: string | null = null;

export const agent = {
  name: "Dr. Jan Duffy",
  credential: "REALTOR®",
  license: "S.0197614.LLC",
} as const;

/** Visible brokerage line belongs in the footer only. */
export const brokerage = {
  name: "Berkshire Hathaway HomeServices Nevada Properties",
} as const;

export const area = {
  name: "Peccole Ranch",
  city: "Las Vegas",
  state: "NV",
  /** Primary ZIP cited for the neighborhood. 89145 is also named by one 2026 guide. */
  primaryZip: "89117",
  zips: ["89117", "89145"],
  masterPlan: "Peccole Ranch",
  beside: "Summerlin",
} as const;

/** RealScout widgets need the encoded id (base64 of "Agent-<n>"); a bare numeric id renders nothing. */
function normalizeRealScoutAgentId(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value) return "QWdlbnQtMjI1MDUw";
  if (/^\d+$/.test(value)) return btoa(`Agent-${value}`);
  return value;
}

export const realScoutAgentEncodedId = normalizeRealScoutAgentId(
  process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID,
);

export const ccsdLocatorUrl =
  "https://trans-webinfo.ccsd.net/InfoLocator/InfoLocator/Locator.aspx?OrgGuid=ORG-CCSD&ProfileGuid=CCSD-PROFILE-3";

/**
 * Verified sameAs URLs. drjanduffy.com returned HTTP 200 on October 17, 2026.
 * A Google Business Profile URL stays off this list until a Place ID is confirmed.
 */
export const organizationSameAs = [site.baseUrl, "https://www.drjanduffy.com"] as const;

export const agentSameAs = ["https://www.drjanduffy.com"] as const;
