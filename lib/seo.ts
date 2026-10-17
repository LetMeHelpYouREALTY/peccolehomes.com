import type { Metadata } from "next";
import { pageUpdated } from "@/lib/entity";
import { agent, site } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  kind?: "website" | "article";
};

export function pageMeta({
  title,
  description,
  path,
  kind = "website",
}: PageMetaInput): Metadata {
  if (title.length > 60) {
    throw new Error(`Title over 60 characters (${title.length}): ${title}`);
  }
  if (description.length > 155) {
    throw new Error(
      `Description over 155 characters (${description.length}): ${description}`,
    );
  }

  const url = path === "/" ? site.baseUrl : `${site.baseUrl}${path}`;
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Peccole Ranch homes for sale in west Las Vegas",
  } as const;
  const published = pageUpdated["/market"];

  const openGraph =
    kind === "article"
      ? {
          title,
          description,
          url,
          siteName: site.name,
          locale: "en_US",
          type: "article" as const,
          publishedTime: published,
          modifiedTime: published,
          authors: [agent.name],
          images: [image],
        }
      : {
          title,
          description,
          url,
          siteName: site.name,
          locale: "en_US",
          type: "website" as const,
          images: [image],
        };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
