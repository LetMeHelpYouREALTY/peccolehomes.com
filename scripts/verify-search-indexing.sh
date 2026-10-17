#!/usr/bin/env bash
# Post-deploy verification for Search Console indexing prep (run after production deploy).
set -euo pipefail
BASE="https://www.peccolehomes.com"
UA="Googlebot"

paths=(
  "/"
  "/peccole-ranch"
  "/amenities"
  "/buyers"
  "/sellers"
  "/about"
  "/contact"
  "/faq"
  "/sitemap.xml"
  "/robots.txt"
  "/llms.txt"
  "/llms-full.txt"
)

echo "=== HTTP status (curl -A ${UA}) ==="
for p in "${paths[@]}"; do
  code=$(curl -sA "$UA" -o /dev/null -w "%{http_code}" "${BASE}${p}")
  echo "${code}  ${p}"
done

echo ""
echo "=== robots.txt AI crawlers ==="
curl -sA "$UA" "${BASE}/robots.txt" | grep -E '^(User-Agent: (GPTBot|ClaudeBot|PerplexityBot)|Sitemap:)' || true

echo ""
echo "=== Manual GSC steps (API requires Ryze plan or Search Console UI) ==="
echo "1. Search Console → Sitemaps → submit: sitemap.xml"
echo "2. URL Inspection → Request indexing for each marketing URL above (except sitemap/robots/llms)."
echo "Full checklist: GOOGLE_SEARCH.md"
