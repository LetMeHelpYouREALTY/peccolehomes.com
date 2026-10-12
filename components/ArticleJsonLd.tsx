import { agent, site } from "@/lib/site";

type ArticleJsonLdProps = {
  headline: string;
  description: string;
  path: string;
};

export function ArticleJsonLd({ headline, description, path }: ArticleJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    author: {
      "@type": "Person",
      name: agent.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.baseUrl,
    },
    mainEntityOfPage: `${site.baseUrl}${path}`,
    about: {
      "@type": "Place",
      name: "Peccole Ranch",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
