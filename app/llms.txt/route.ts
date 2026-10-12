/**
 * llms.txt — AI discoverability endpoint for peccolehomes.com (GEO)
 * Helps generative engines and AI models understand and cite this site.
 * @see https://llmstxt.org
 */

import { site, nap, fullAddress, agent, brokerage } from "@/lib/site";

export const dynamic = "force-dynamic";

export async function GET() {
  const content = `# Peccole Homes — Peccole Ranch Homes & Las Vegas Real Estate

> Real estate focused on Peccole Ranch Homes and the Summerlin area. ${agent.name}, ${brokerage.name}. Local expertise for buyers and sellers in Peccole Ranch, Las Vegas, Nevada.

## About

Peccole Homes is led by ${agent.name} (Nevada license ${agent.license}) with ${brokerage.name}, specializing in Peccole Ranch Homes and the greater Summerlin area in Las Vegas. We focus on this neighborhood to offer hyperlocal market insight, from listings and pricing to schools, HOA details, and community fit.

- **Business:** ${nap.businessName}
- **Agent:** ${agent.name} (${agent.license})
- **Brokerage:** ${brokerage.name}
- **Address:** ${fullAddress}
- **Phone:** ${nap.phone}
- **Website:** ${site.baseUrl}

## Services

- **Peccole Ranch Homes for Sale** — Search and view current listings in Peccole Ranch
- **Buyer representation** — Find and purchase Peccole Ranch homes with local expertise
- **Seller representation** — List and sell your Peccole Ranch home
- **Neighborhood guidance** — Schools, HOA, amenities, and lifestyle in Peccole Ranch and Summerlin
- **Market insight** — Pricing and trends for Peccole Ranch, Las Vegas

## Location

Peccole Ranch is a master-planned community in Summerlin, Las Vegas, Nevada. It is west of the Las Vegas Strip, with access to the 215 Beltway and Red Rock Canyon. Tree-lined streets, parks, top-rated schools, and family-friendly amenities. Part of Clark County School District.

## Key Pages

- [Home — Peccole Ranch Homes for Sale](${site.baseUrl}/)
- [Peccole Ranch Neighborhood](${site.baseUrl}/peccole-ranch)
- [Sell in Peccole Ranch](${site.baseUrl}/sellers)
- [Contact](${site.baseUrl}/contact)
- [About](${site.baseUrl}/about)
- [FAQ — Peccole Ranch Homes](${site.baseUrl}/faq)

## Peccole Ranch Facts

- Master-planned community in Summerlin, Las Vegas
- Strong schools and family-oriented amenities
- Parks, walking paths, outdoor recreation
- Convenient access to 215 and Red Rock Canyon
- Single-family and multi-family homes; HOA communities

## Contact

For Peccole Ranch Homes and Las Vegas real estate with ${agent.name}, ${brokerage.name}:
- **Phone:** ${nap.phone}
- **Address:** ${fullAddress}
- **Website:** ${site.baseUrl}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
