import { absoluteUrl, entityIds, fragmentUrl, webpageId } from "@/lib/entity";
import { site } from "@/lib/site";

type WebPageJsonLdProps = {
  name: string;
  description: string;
  path?: string;
  /** Defaults to the Peccole Homes business entity. */
  aboutId?: string;
};

/**
 * WebPage schema for AEO: helps answer engines identify and cite each page.
 */
export function WebPageJsonLd({
  name,
  description,
  path = "",
  aboutId = entityIds.business,
}: WebPageJsonLdProps) {
  const url = absoluteUrl(path || "/");
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": webpageId(path || "/"),
    name,
    description,
    url,
    inLanguage: "en-US",
    isPartOf: { "@id": entityIds.website },
    about: { "@id": aboutId },
    publisher: { "@id": entityIds.business },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${site.baseUrl}/opengraph-image`,
    },
    significantLink: [fragmentUrl(path || "/", "answer")],
  };

  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
