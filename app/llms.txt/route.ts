/**
 * llms.txt — AI discoverability endpoint for peccolehomes.com (GEO)
 * Helps generative engines and AI models understand and cite this site.
 * @see https://llmstxt.org
 */

import { site, nap, fullAddress, agent, brokerage } from "@/lib/site";
import { entityIds } from "@/lib/entity-ids";

export const dynamic = "force-dynamic";

export async function GET() {
  const content = `# Peccole Homes — Peccole Ranch Homes & Las Vegas Real Estate

> Real estate focused on Peccole Ranch Homes in western Las Vegas, Nevada. ${agent.name}, ${brokerage.name}. Local expertise for buyers and sellers.

## About

Peccole Homes is led by ${agent.name} (Nevada license ${agent.license}) with ${brokerage.name}, specializing in Peccole Ranch Homes and nearby west Las Vegas communities. We focus on this neighborhood for hyperlocal market insight, from listings and pricing to HOA details and amenity access.

- **Business:** ${nap.businessName}
- **Agent:** ${agent.name} (${agent.license})
- **Brokerage:** ${brokerage.name}
- **Address:** ${fullAddress}
- **Phone:** ${nap.phone}
- **Website:** ${site.baseUrl}
- **Entity IDs:** ${entityIds.website}, ${entityIds.business}, ${entityIds.agent}

## Services

- **Peccole Ranch Homes for Sale** — Search and view current listings in Peccole Ranch
- **Buyer representation** — [Buy in Peccole Ranch](${site.baseUrl}/buyers) (Calendly: buyer-consultation-30-min)
- **Seller representation** — [Sell in Peccole Ranch](${site.baseUrl}/sellers) (Calendly: listing-consultation)
- **Neighborhood guidance** — HOA rules, amenities, and commute context in Peccole Ranch
- **Market insight** — Pricing and trends for Peccole Ranch, Las Vegas

## Location

Peccole Ranch is a master-planned community in western Las Vegas, Nevada, near Summerlin. It is west of the Las Vegas Strip, with access to the 215 Beltway and Red Rock Canyon. Amenities include tree-lined streets, parks, trails, and clubhouse facilities (varies by village).

## Key Pages

- [Home — Peccole Ranch Homes for Sale](${site.baseUrl}/)
- [Peccole Ranch Neighborhood](${site.baseUrl}/peccole-ranch)
- [Nearby Amenities Map](${site.baseUrl}/amenities)
- [Buy in Peccole Ranch](${site.baseUrl}/buyers)
- [Sell in Peccole Ranch](${site.baseUrl}/sellers)
- [Contact](${site.baseUrl}/contact)
- [About](${site.baseUrl}/about)
- [FAQ — Peccole Ranch Homes](${site.baseUrl}/faq)

## Peccole Ranch Facts

- Master-planned community in western Las Vegas near Summerlin
- Parks, walking paths, and outdoor recreation
- Clubhouse and on-site amenities (varies by sub-association)
- Convenient access to 215 and Red Rock Canyon
- Single-family homes, townhomes, condominiums; HOA villages

## Contact

For Peccole Ranch Homes and Las Vegas real estate with ${agent.name}, ${brokerage.name}:
- **Phone:** ${nap.phone}
- **Address:** ${fullAddress}
- **Website:** ${site.baseUrl}
- **Extended GEO brief:** ${site.baseUrl}/llms-full.txt
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
