import { brokerageUrl, entityIds } from "@/lib/entity";
import { agent, area, brokerage, fullAddress, geo, nap, site } from "@/lib/site";

const license = {
  "@type": "PropertyValue",
  propertyID: "Nevada real estate license",
  value: agent.license,
} as const;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: nap.street,
  addressLocality: nap.city,
  addressRegion: nap.state,
  postalCode: nap.zip,
  addressCountry: "US",
} as const;

const areaServed = [
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
];

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": entityIds.website,
        name: site.name,
        url: site.baseUrl,
        description: site.shortDescription,
        inLanguage: "en-US",
        publisher: { "@id": entityIds.business },
      },
      {
        "@type": "Organization",
        "@id": entityIds.org,
        name: brokerage.name,
        url: brokerageUrl,
      },
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": entityIds.business,
        name: nap.businessName,
        description:
          "Peccole Ranch homes for sale and seller valuations in west Las Vegas, beside Summerlin.",
        url: site.baseUrl,
        telephone: nap.phoneSchema,
        image: `${site.baseUrl}/opengraph-image`,
        address: postalAddress,
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        parentOrganization: { "@id": entityIds.org },
        employee: { "@id": entityIds.person },
        areaServed,
        knowsAbout: [fullAddress, area.name, "ZIP 89117", "ZIP 89145"],
      },
      {
        "@type": "Person",
        "@id": entityIds.person,
        name: agent.name,
        jobTitle: agent.credential,
        identifier: license,
        telephone: nap.phoneSchema,
        url: `${site.baseUrl}/about`,
        worksFor: [{ "@id": entityIds.org }, { "@id": entityIds.business }],
      },
      {
        "@type": "RealEstateAgent",
        "@id": entityIds.agent,
        name: agent.name,
        url: `${site.baseUrl}/about`,
        telephone: nap.phoneSchema,
        image: `${site.baseUrl}/opengraph-image`,
        identifier: license,
        address: postalAddress,
        parentOrganization: { "@id": entityIds.org },
        areaServed,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
