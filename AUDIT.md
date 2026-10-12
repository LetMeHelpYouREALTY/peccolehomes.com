# AUDIT

Date: October 12, 2026  
Domain: https://www.peccolehomes.com  
Area derived from the domain: **Peccole Ranch**, west Las Vegas, beside Summerlin.  
Primary ZIP: **89117**. A guide updated September 19, 2026 also names **89145**.  
Master plan: Peccole Ranch, launched in 1989 by the Peccole family. It is not a Summerlin village.

Confirmed NAP for this build:

- Address: 9501 Red Hills Rd, Las Vegas, NV 89117
- Phone: (702) 500-0810

## Routes before this branch

| Path | H1 | Metadata title |
| --- | --- | --- |
| `/` | Peccole Ranch Homes for Sale | Layout default, over 60 characters with the template suffix |
| `/peccole-ranch` | Peccole Ranch Homes & Community | Peccole Ranch Homes \| Las Vegas Master-Planned Community |
| `/sellers` | Sell your Peccole Ranch home | Sell in Peccole Ranch |
| `/about` | About Peccole Homes | About Us |
| `/contact` | Contact us | Contact |
| `/faq` | Frequently asked questions | FAQ — Peccole Ranch Homes |
| `/llms.txt` | none (plain text) | n/a |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/manifest.webmanifest` | metadata routes | n/a |

No `app/api` routes. No `public/` images. No `components/idx` files.

## Components

- `Header`: text links, no mobile menu, brand “Peccole Homes”
- `Footer`: NAP, map iframe, placeholder Google review URL (`PLACE_ID`), brokerage line
- `RealScoutWidget`: search plus office listings, rendered from the root layout on every page
- JSON-LD: `RealEstateAgent`, `WebSite`, `WebPage`, `FAQPage`, `BreadcrumbList`
- Missing before this branch: `Place`, `Article`, buyers page, market report, golf page, new-construction page

## Headings

Home H2s: “Why Peccole Ranch?”, “Peccole Ranch questions”.  
Community H2s: “Location & lifestyle”, “Why buyers choose Peccole Ranch”, “Peccole Ranch Homes for Sale”.  
Sellers H2s: “Why sellers choose local representation”, “What happens at your consultation”, “Ready to list?”, “Seller questions”.  
Contact H2: business name only.  
No H3s on the prior pages. RealScout added two more H2s on every page because it lived in the layout.

## Images

No content images. No placeholder files in `public/`. The Open Graph image was a generated navy gradient with text, including the brokerage name. The manifest pointed at `/favicon.ico`, which was not in the repo.

## Placeholder and generic copy

- Google review link used the literal token `PLACE_ID`.
- Home and community copy used “top-rated schools”, “family-friendly”, “families”, “good schools”, “family-oriented”, and “established” neighborhood language.
- About used “straightforward”.
- Seller and about lines claimed local expertise without a sourced sales record.
- HOA, school, and price answers had no dates and no sources.
- No closed sales, no median, no builder note, no valuation form.
- Calendly listing-consultation links existed on `/sellers` only (`lib/calendly.ts`).
- Stack in `package.json` was Next.js 15, not Next.js 16.

## Phone and brokerage

The prior site already used (702) 500-0810. Brokerage copy appeared in the body, schema, Open Graph image, footer, and `llms.txt`. This branch keeps the brokerage name in the footer and in machine-readable identity, and removes it from page headlines.
