import { area, geo } from "@/lib/site";

export function PlaceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: area.name,
    description:
      "Master-planned community in west Las Vegas, beside Summerlin, primarily ZIP 89117.",
    address: {
      "@type": "PostalAddress",
      addressLocality: area.city,
      addressRegion: area.state,
      postalCode: area.primaryZip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    containedInPlace: {
      "@type": "City",
      name: "Las Vegas",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
