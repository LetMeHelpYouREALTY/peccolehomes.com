import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Explicit allow for citation and index bots.
 * A blanket User-agent: * is kept, and is not treated as the only signal.
 * List aligned with the May 2026 AI crawler allowlist used on the Duffy sites.
 */
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "cohere-ai",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "meta-externalfetcher",
  "YouBot",
  "Diffbot",
  "CCBot",
  "Bytespider",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [...aiCrawlers],
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${site.baseUrl}/sitemap.xml`,
  };
}
