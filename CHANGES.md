# CHANGES

Branch: `cursor/luxury-hyperlocal-peccole-ranch-3977`  
Area: Peccole Ranch, west Las Vegas, beside Summerlin. Primary ZIP 89117. ZIP 89145 is also cited.  
NAP used: 9501 Red Hills Rd, Las Vegas, NV 89117 · (702) 500-0810  
Do not merge until this report is approved. Nothing was pushed to `main`.

## Pages

| Path | What changed |
| --- | --- |
| `/` | Full-bleed hero, September 2026 snapshot, sell and buy paths, RealScout search, FAQs |
| `/sellers` | Valuation form that opens the existing Calendly listing consult, pricing, prep, HOA steps |
| `/buyers` | New. Neighborhood bands, resale versus Lennar, HOA table, RealScout |
| `/market` | New. Dated September 2026 figures, four closed sales, ZIP 89117 called out as wider |
| `/peccole-ranch` | Rewritten community guide, Place schema, amenities, commutes, school names only |
| `/golf-and-gated` | New. Queensridge, One Queensridge Place, Canyon Gate |
| `/new-construction` | New. Resale now, Lennar Preserve around 2028, no invented incentives |
| `/about` | Agent, license, address, phone. No unsourced sales claims |
| `/contact` | Phone, address, map, valuation form. Association hours labeled as the association’s |
| `/faq` | Combined local questions |
| `/llms.txt` | Entity summary with sources and gaps |
| `/sell`, `/buy` | Permanent redirects to `/sellers` and `/buyers` |

Specialty pages not built: 55+, divorce or probate, investors or 1031. Research did not support them. See `RESEARCH.md`.

## Design

Charcoal `#12100E`, ivory `#F6F1E8`, desert-stone accent `#6E5430` / `#D8C4A0`. Contrast checked above WCAG AA 4.5:1. Cormorant Garamond for display, Manrope for body, via `next/font`. Dark-mode variables follow `prefers-color-scheme`. Motion is removed under `prefers-reduced-motion`.

## Schema types

Present in the HTML and checked for required fields on October 12, 2026:

- `RealEstateAgent` + `LocalBusiness`, with `areaServed` for Peccole Ranch and ZIPs 89117 and 89145
- `WebSite`, `WebPage`
- `FAQPage` on home, sellers, buyers, market, community, golf, new construction, and FAQ
- `BreadcrumbList` on inner pages
- `Place` on `/peccole-ranch`
- `Article` on `/market` (`datePublished` 2026-10-12)

Google’s hosted Rich Results Test was not run. It needs a public URL. This branch is not deployed. Local check confirmed `@type`, `address`, `telephone`, `areaServed`, FAQ `mainEntity`, article `headline` and date, place `name`, and breadcrumb `itemListElement`.

## Images

Eight WebP files under `/public/images`, each under 250KB. Logged in `IMAGES.md`. `XAI_API_KEY` was not in the environment, so the documented `grok-imagine-image-2.0` endpoint was not called. Prompts still follow the brief: no people, text, logos, or readable addresses. Alt text states the photograph illustrates the heading. A caption says it is not a listing.

## Lighthouse mobile

Chrome headless, mobile form factor, production `next start`, October 12, 2026. There was no prior Lighthouse run in the repo, so “before” is the unscored template. After:

| Page | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| `/` | 97 | 100 | 100 | 100 |
| `/about` | 99 | 100 | 100 | 100 |
| `/sellers` | 97 | 100 | 100 | 100 |
| `/buyers` | 96 | 100 | 100 | 100 |
| `/market` | 96 | 100 | 100 | 100 |
| `/peccole-ranch` | 94 | 100 | 100 | 100 |
| `/golf-and-gated` | 96 | 100 | 100 | 100 |
| `/new-construction` | 97 | 100 | 100 | 100 |
| `/contact` | 97 | 100 | 100 | 100 |
| `/faq` | 97 | 100 | 100 | 100 |

The first cold pass on `/new-construction` scored 87 performance while Next’s image optimizer encoded the hero. The cached rerun scored 97. Scores above are the cached runs.

## Stack

Next.js 16.4.0, React 19, TypeScript, Tailwind. `next build` completed with no errors.

## Research gaps

- Peccole Ranch transfer-fee amount: unknown
- SID or LID dollar amount: unknown
- Community-wide solar-lease count: unknown
- Named employers inside the community: unknown
- Agent business hours: unknown. Association hours are labeled separately
- Google review Place ID: the old `PLACE_ID` token was removed, not replaced
- Street boundary sources disagree. The site says so instead of picking one
- Q1 2026 trailing medians are older than 60 days and are not used as the current median
- Map coordinates were carried from the previous file and were not re-surveyed
- Valuation form opens the existing Calendly booking. It does not write to Follow Up Boss

## Search, answer, and entity pass (October 17, 2026)

Scored against the nine-point AEO checklist. Shipped the items that do not invent facts.

- `robots.txt` now names 18 AI crawlers and still allows every other agent. `/api/` stays disallowed for the general agent.
- JSON-LD is one graph with stable ids: `#website`, `#business`, `#person`, `#agent`, `#org`. The Peccole Ranch place id is `/peccole-ranch#place`. Pages, the market article, breadcrumbs, and FAQ blocks point at those ids.
- The brokerage node links to https://www.bhhsnv.com/ and does not copy that site’s Henderson address or phone.
- Sitemap `lastmod` follows the newest source on each URL. Golf and gated is October 11, 2026. `/llms.txt` is October 17, 2026. The other URLs are October 12, 2026. Dates are not one deploy stamp.
- FAQ questions are headings, so the answer sits under an `h3`. Each page’s lead paragraph is `#answer`.
- The market report’s Open Graph type is `article`, with the October 12, 2026 published and modified dates.
- Footer links now include golf, new construction, and about.
- AggregateRating was not added. There is still no confirmed Google Place ID or review count. A made-up rating would be worse than a gap.

## Compliance scan

Visible copy was checked for “safe neighborhood,” “good schools,” “family-friendly,” “established community,” “exclusive,” “top-rated,” “straightforward,” and “702-222-1964.” None of those phrases are in the rendered pages. Brokerage name is in the footer and in JSON-LD / `llms.txt`, not in page headlines. Phone on the site is (702) 500-0810.
