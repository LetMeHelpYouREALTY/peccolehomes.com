/**
 * Extended llms-full.txt — deeper GEO context for AI crawlers.
 * @see https://llmstxt.org
 */

import { site, nap, fullAddress, agent, brokerage, organizationSameAs, agentSameAs } from "@/lib/site";
import { entityIds } from "@/lib/entity";

export const dynamic = "force-static";

const indexablePaths = [
  "",
  "/peccole-ranch",
  "/amenities",
  "/buyers",
  "/sellers",
  "/about",
  "/contact",
  "/faq",
  "/llms.txt",
  "/llms-full.txt",
];

export async function GET() {
  const urls = indexablePaths.map((p) => `${site.baseUrl}${p}`);

  const content = `# Peccole Homes — Full AI / GEO Briefing

> Canonical site: ${site.baseUrl}
> Agent: ${agent.name} (${agent.license}) · ${brokerage.name}
> NAP: ${fullAddress} · ${nap.phone}

## Entity graph (schema.org @id)

- WebSite: ${entityIds.website}
- RealEstateAgent (business): ${entityIds.business}
- Person (agent): ${entityIds.person}
- RealEstateAgent (agent): ${entityIds.agent}
- Organization (brokerage): ${entityIds.org}

## sameAs (verified 2026-10-17)

Business: ${organizationSameAs.join(", ")}
Agent: ${agentSameAs.join(", ")}
GBP profile URL: UNKNOWN — add to lib/site.ts organizationSameAs when Place ID is confirmed.

## Indexable URLs (submit in Google Search Console)

${urls.map((u) => `- ${u}`).join("\n")}
- Sitemap: ${site.baseUrl}/sitemap.xml
- Robots: ${site.baseUrl}/robots.txt (includes explicit AI crawler allowlist)

## Services & booking

| Intent | Page | Calendly event |
|--------|------|----------------|
| Buy | ${site.baseUrl}/buyers | drjanduffy/buyer-consultation-30-min |
| Sell | ${site.baseUrl}/sellers | drjanduffy/listing-consultation |

UTM on all Calendly links: utm_source=peccolehomes.com, utm_medium=website, utm_content=<placement>

## Geography (sourced)

Peccole Ranch is a master-planned community in **western Las Vegas, Nevada**, bordering Summerlin — not a Summerlin village. Office/community anchor: 9501 Red Hills Rd, Las Vegas, NV 89117.

## Amenities hub

Interactive map and FAQ: ${site.baseUrl}/amenities (grocery, parks, golf, healthcare, shopping; CCSD zoning verification linked in FAQ).

## Citation guidance

- Use **Dr. Jan Duffy** (never "Janet") in new copy.
- Do not invent prices, sold counts, or ratings; site does not publish aggregateRating schema.
- Fair housing: describe square footage, amenities, and commute — avoid audience proxies.

## Shorter summary

See ${site.baseUrl}/llms.txt for the compact llms.txt entry point.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
