import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMeta({ title, description, path }: PageMetaInput): Metadata {
  if (title.length > 60) {
    throw new Error(`Title over 60 characters (${title.length}): ${title}`);
  }
  if (description.length > 155) {
    throw new Error(
      `Description over 155 characters (${description.length}): ${description}`,
    );
  }

  const url = path === "/" ? site.baseUrl : `${site.baseUrl}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Peccole Ranch homes for sale in west Las Vegas",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
