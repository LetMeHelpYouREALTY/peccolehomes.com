import { fragmentUrl } from "@/lib/entity";
import { site } from "@/lib/site";

export type BreadcrumbItem = {
  name: string;
  /** Omit on the current (last) crumb when it is not a separate URL. */
  path?: string;
};

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
  path: string;
};

export function BreadcrumbJsonLd({ items, path }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": fragmentUrl(path, "breadcrumb"),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path !== undefined
        ? { item: item.path === "/" ? site.baseUrl : `${site.baseUrl}${item.path}` }
        : {}),
    })),
  };

  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
