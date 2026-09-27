import { site, nap, fullAddress, geo, agent, brokerage } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: nap.businessName,
    description: `Peccole Ranch Homes and Las Vegas real estate. ${agent.name}, ${brokerage.name}. Local expertise for buyers and sellers in Peccole Ranch, Summerlin.`,
    url: site.baseUrl,
    telephone: nap.phoneSchema,
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
      jobTitle: "Real Estate Agent",
      identifier: agent.license,
    },
    areaServed: {
      "@type": "Place",
      name: "Peccole Ranch",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
