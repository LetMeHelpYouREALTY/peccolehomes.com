import { site, nap, fullAddress, geo, agent, brokerage } from "@/lib/site";
import { entityIds } from "@/lib/entity-ids";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": entityIds.business,
    name: nap.businessName,
    description: `Peccole Ranch Homes and Las Vegas real estate. ${agent.name}, ${brokerage.name}. Local expertise for buyers and sellers in Peccole Ranch and west Las Vegas.`,
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
      "@type": "Organization",
      "@id": entityIds.organization,
      name: brokerage.name,
    },
    employee: {
      "@type": "Person",
      "@id": entityIds.agent,
      name: agent.name,
      jobTitle: "Real Estate Agent",
      identifier: agent.license,
      worksFor: { "@id": entityIds.business },
    },
    areaServed: {
      "@type": "Place",
      name: "Peccole Ranch",
      containedInPlace: {
        "@type": "City",
        name: "Las Vegas",
        containedInPlace: {
          "@type": "State",
          name: "Nevada",
        },
      },
    },
  };

  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
