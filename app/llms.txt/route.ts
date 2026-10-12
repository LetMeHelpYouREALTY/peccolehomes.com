/**
 * llms.txt — entity summary for peccolehomes.com
 * Facts below are limited to sources dated in RESEARCH.md.
 */

import { agent, area, fullAddress, nap, site } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const content = `# ${site.name}

> Peccole Ranch homes for sale in west Las Vegas. ${agent.name}, ${agent.credential}, Nevada license ${agent.license}. Phone ${nap.phone}. Address ${fullAddress}.

## Who

- Business: ${nap.businessName}
- Agent: ${agent.name}, ${agent.credential}
- Nevada license: ${agent.license}
- Address: ${fullAddress}
- Phone: ${nap.phone}
- Website: ${site.baseUrl}
- Brokerage, also printed in the site footer: Berkshire Hathaway HomeServices Nevada Properties

## Where

- Area: ${area.name}
- City: Las Vegas, Nevada
- Beside: Summerlin
- Primary ZIP: 89117
- Also cited: ZIP 89145 in a guide updated September 19, 2026
- Master plan launched in 1989 by the Peccole family
- Not a confirmed age-restricted master plan. One August 24, 2026 MLS record lists Age Restricted: No.

## Services

- Search Peccole Ranch homes for sale
- Buyer guidance by sub-neighborhood, gate, and HOA range
- Seller valuation booking and September 2026 pricing context
- Market report with dated figures and closed-sale records

## Key facts with sources

- September 2026 median sold price: $595,000. Median list: $522,475. Active listings: 67. Median days on market: 42. Sale-to-list: 98 percent. Source: https://www.realtor.com/local/market/nevada/las-vegas/peccole-ranch (September 2026; retrieved October 12, 2026).
- Sub-neighborhood price bands and most HOA ranges: https://www.nevadarealestategroup.com/blog/peccole-ranch-las-vegas-established-master-plan-guide-2026/ (updated September 19, 2026).
- Queensridge price and combined HOA ranges: https://www.nevadarealestategroup.com/blog/queensridge-gated-estates-las-vegas-luxury-guide-2026/ (updated October 11, 2026).
- Association amenities: https://www.peccoleranchlv.com/amenities-map-overview/ (reviewed October 12, 2026).
- Lennar Preserve timing around 2028 is from the September 19, 2026 guide. No current builder incentive sheet was found on October 12, 2026.
- ZIP 89117 medians are wider than Peccole Ranch and are not the neighborhood median.

## Pages

- ${site.baseUrl}/
- ${site.baseUrl}/buyers
- ${site.baseUrl}/sellers
- ${site.baseUrl}/market
- ${site.baseUrl}/peccole-ranch
- ${site.baseUrl}/golf-and-gated
- ${site.baseUrl}/new-construction
- ${site.baseUrl}/about
- ${site.baseUrl}/contact
- ${site.baseUrl}/faq

## Not claimed

This file does not state agent sales totals, school ratings, or protected-class descriptions. Transfer fees, SID or LID amounts, and solar-lease counts for the whole community were not found in sources reviewed October 12, 2026.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
