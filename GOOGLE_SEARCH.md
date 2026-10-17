# Google Search setup

The site is prepared for Google Search with:

- **Metadata:** Title, description, keywords, and Open Graph on every page
- **Structured data:** RealEstateAgent (LocalBusiness) and WebSite JSON-LD in the root layout; WebPage, FAQPage, Service, and ItemList where applicable
- **Sitemap:** `https://www.peccolehomes.com/sitemap.xml` lists all indexable pages (including `/amenities`, `/buyers`, `/sellers`, `/llms-full.txt`)
- **Robots:** `https://www.peccolehomes.com/robots.txt` allows crawling, references the sitemap, and explicitly allows 18 AI crawlers (GEO)
- **Twitter cards:** Set for sharing
- **Web app manifest:** `/manifest.webmanifest` for name and start URL
- **Canonical URLs:** `metadataBase` in `lib/site.ts` so canonicals match production
- **Verification:** Root layout emits `<meta name="google-site-verification" content="...">` when `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` is set (see `.env.example`)
- **GEO:** `/llms.txt` (summary) and `/llms-full.txt` (extended entity + indexing list)

---

## Prepare for Google Search Console (step-by-step)

### 1. Add property in Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. **Add property** → choose **URL prefix**.
3. Enter: `https://www.peccolehomes.com` (primary; bare `peccolehomes.com` redirects to www and must match `lib/site.ts` `baseUrl`).

### 2. Verify ownership

**Recommended: HTML tag**

1. In GSC, pick **HTML tag** as the verification method.
2. Copy only the **content** value from the meta tag (e.g. `AbCdEf123456...`).
3. **Vercel:** Project → **Settings** → **Environment Variables** → add:
   - **Name:** `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - **Value:** the content string you copied
   - Apply to **Production** (and Preview if you want).
4. **Redeploy** the production site so the meta tag is present on the homepage.
5. In GSC, click **Verify**.

**Alternatives**

- **DNS:** Add the TXT record GSC gives you at your domain DNS (e.g. Cloudflare). No redeploy needed.
- **HTML file:** Download the file GSC provides, put it in `public/` (e.g. `public/google123abc.html`), deploy. No env var needed.

### 3. Submit the sitemap

1. In GSC, go to **Sitemaps** (left menu).
2. Under “Add a new sitemap”, enter: `sitemap.xml`
3. Click **Submit**.  
   Full URL will be: `https://www.peccolehomes.com/sitemap.xml`

**Automated check (no GSC API):** after deploy, run:

```bash
bash scripts/verify-search-indexing.sh
```

**API note:** Ryze Google Search Console `submitSitemap` requires an active Ryze plan on the workspace. If unavailable, use the GSC UI step above.

### 4. Request indexing for key URLs

In **URL Inspection**, enter and “Request indexing” for:

| Priority | URL |
|----------|-----|
| P0 | `https://www.peccolehomes.com` |
| P0 | `https://www.peccolehomes.com/sitemap.xml` (via Sitemaps submit only) |
| P1 | `https://www.peccolehomes.com/peccole-ranch` |
| P1 | `https://www.peccolehomes.com/amenities` |
| P1 | `https://www.peccolehomes.com/buyers` |
| P1 | `https://www.peccolehomes.com/sellers` |
| P2 | `https://www.peccolehomes.com/contact` |
| P2 | `https://www.peccolehomes.com/faq` |
| P2 | `https://www.peccolehomes.com/about` |
| GEO | `https://www.peccolehomes.com/llms.txt` |
| GEO | `https://www.peccolehomes.com/llms-full.txt` |

### 5. After verification

- **Performance** and **Coverage** will fill in as Google crawls.
- Keep **NAP** in `lib/site.ts` in sync with your **Google Business Profile**.
- Add confirmed GBP profile URL to `organizationSameAs` in `lib/site.ts` when Place ID is verified (replace `googleReviewsUrl` placeholder too).
- Use **Enhancements** (e.g. Core Web Vitals) and fix any reported issues.
- If you use a different production domain, update `site.baseUrl` in `lib/site.ts` and redeploy.

---

## After going live

- Confirm production `metadataBase` / `baseUrl` in `lib/site.ts` is your live domain.
- In Search Console, monitor **Coverage**, **Core Web Vitals**, and **Enhancements**.
- Keep NAP and opening hours in `lib/site.ts` (and any LocalBusiness schema) aligned with GBP.
- Re-run `scripts/verify-search-indexing.sh` after major releases.
