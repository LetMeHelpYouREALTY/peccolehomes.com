import { site } from "@/lib/site";
import { entityIds, webpageId } from "@/lib/entity-ids";

type WebPageJsonLdProps = {
  name: string;
  description: string;
  path?: string;
};

/**
 * WebPage schema for AEO: helps answer engines identify and cite each page.
 */
export function WebPageJsonLd({ name, description, path = "" }: WebPageJsonLdProps) {
  const url = path ? `${site.baseUrl}${path}` : site.baseUrl;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": webpageId(path),
    name,
    description,
    url,
    isPartOf: {
      "@id": entityIds.website,
    },
    about: {
      "@id": entityIds.business,
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
