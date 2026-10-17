import { site, agent, brokerage } from "@/lib/site";
import { entityIds } from "@/lib/entity-ids";

/**
 * WebSite schema for Google Search (sitelinks, site-level understanding).
 */
export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": entityIds.website,
    name: site.name,
    url: site.baseUrl,
    description: site.shortDescription,
    inLanguage: "en-US",
    publisher: {
      "@type": "RealEstateAgent",
      "@id": entityIds.business,
      name: site.name,
    },
    about: {
      "@type": "Person",
      "@id": entityIds.agent,
      name: agent.name,
      jobTitle: "Real Estate Agent",
      worksFor: { "@id": entityIds.organization, name: brokerage.name },
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
