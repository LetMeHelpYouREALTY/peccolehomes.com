/**
 * Calendly booking URLs for peccolehomes.com (listing consultation / seller flow).
 */
const LISTING_CONSULTATION_BASE =
  "https://calendly.com/drjanduffy/listing-consultation";

export function listingConsultationUrl(utmContent: string): string {
  const params = new URLSearchParams({
    utm_source: "peccolehomes.com",
    utm_medium: "website",
    utm_content: utmContent,
  });
  return `${LISTING_CONSULTATION_BASE}?${params.toString()}`;
}
