/**
 * Calendly booking URLs for peccolehomes.com.
 */
const LISTING_CONSULTATION_BASE =
  "https://calendly.com/drjanduffy/listing-consultation";

const BUYER_CONSULTATION_BASE =
  "https://calendly.com/drjanduffy/buyer-consultation-30-min";

function calendlyUrl(base: string, utmContent: string): string {
  const params = new URLSearchParams({
    utm_source: "peccolehomes.com",
    utm_medium: "website",
    utm_content: utmContent,
  });
  return `${base}?${params.toString()}`;
}

export function listingConsultationUrl(utmContent: string): string {
  return calendlyUrl(LISTING_CONSULTATION_BASE, utmContent);
}

export function buyerConsultationUrl(utmContent: string): string {
  return calendlyUrl(BUYER_CONSULTATION_BASE, utmContent);
}
