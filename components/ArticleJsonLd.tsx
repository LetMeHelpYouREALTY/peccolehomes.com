import { entityIds, pageUpdated, webpageId } from "@/lib/entity";
import { site } from "@/lib/site";

type ArticleJsonLdProps = {
  headline: string;
  description: string;
  path: string;
};

export function ArticleJsonLd({ headline, description, path }: ArticleJsonLdProps) {
  const published = pageUpdated["/market"];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${site.baseUrl}${path}#article`,
    headline,
    description,
    datePublished: published,
    dateModified: published,
    author: { "@id": entityIds.person },
    publisher: { "@id": entityIds.business },
    mainEntityOfPage: { "@id": webpageId(path) },
    about: { "@id": entityIds.place },
    image: `${site.baseUrl}/opengraph-image`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
