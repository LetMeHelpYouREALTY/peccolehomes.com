import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { AI_CRAWLER_USER_AGENTS } from "@/lib/ai-crawlers";

const sharedDisallow = ["/api/"];

export default function robots(): MetadataRoute.Robots {
  const aiRules = AI_CRAWLER_USER_AGENTS.map((userAgent) => ({
    userAgent,
    allow: "/",
    disallow: sharedDisallow,
  }));

  return {
    rules: [
      ...aiRules,
      {
        userAgent: "*",
        allow: "/",
        disallow: sharedDisallow,
      },
    ],
    sitemap: `${site.baseUrl}/sitemap.xml`,
  };
}
