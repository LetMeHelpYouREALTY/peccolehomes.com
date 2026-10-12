import { agent, area, brokerage, fullAddress, geo, nap, site } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    name: nap.businessName,
    description:
      "Peccole Ranch homes for sale and seller valuations in west Las Vegas, beside Summerlin.",
    url: site.baseUrl,
    telephone: nap.phoneSchema,
    image: `${site.baseUrl}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: nap.street,
      addressLocality: nap.city,
      addressRegion: nap.state,
      postalCode: nap.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    parentOrganization: {
      "@type": "RealEstateAgent",
      name: brokerage.name,
    },
    employee: {
      "@type": "Person",
      name: agent.name,
      jobTitle: agent.credential,
      identifier: agent.license,
    },
    areaServed: [
      {
        "@type": "Place",
        name: area.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: area.city,
          addressRegion: area.state,
          postalCode: area.primaryZip,
          addressCountry: "US",
        },
      },
      ...area.zips.map((zip) => ({
        "@type": "AdministrativeArea",
        name: `ZIP ${zip}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: zip,
          addressCountry: "US",
        },
      })),
    ],
    knowsAbout: [fullAddress, area.name, "ZIP 89117", "ZIP 89145"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
