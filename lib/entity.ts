/**
 * Stable entity anchors for JSON-LD and llms.txt.
 * AggregateRating is omitted: no confirmed Google Place ID or review count.
 */

import { site } from "@/lib/site";

export const entityIds = {
  website: `${site.baseUrl}/#website`,
  business: `${site.baseUrl}/#business`,
  person: `${site.baseUrl}/#person`,
  agent: `${site.baseUrl}/#agent`,
  org: `${site.baseUrl}/#org`,
  place: `${site.baseUrl}/peccole-ranch#place`,
} as const;

/** Brokerage site. Do not copy its phone or Henderson address onto this NAP. */
export const brokerageUrl = "https://www.bhhsnv.com/";

/**
 * Sitemap lastmod is the newest source cited on that URL.
 * Golf uses the October 11, 2026 Queensridge guide. The summary file
 * was revised October 17, 2026. Other pages cite an October 12, 2026 review.
 */
export const pageUpdated = {
  "/": "2026-10-12",
  "/sellers": "2026-10-12",
  "/market": "2026-10-12",
  "/faq": "2026-10-12",
  "/about": "2026-10-12",
  "/contact": "2026-10-12",
  "/amenities": "2026-10-17",
  "/buyers": "2026-10-12",
  "/golf-and-gated": "2026-10-11",
  "/peccole-ranch": "2026-10-12",
  "/new-construction": "2026-10-12",
  "/llms.txt": "2026-10-17",
} as const;

export type SitePath = keyof typeof pageUpdated;

export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") return site.baseUrl;
  return `${site.baseUrl}${path}`;
}

/** Fragment ids keep a slash before the hash on the homepage. */
export function fragmentUrl(path: string, fragment: string): string {
  const page = path === "/" || path === "" ? `${site.baseUrl}/` : `${site.baseUrl}${path}`;
  return `${page}#${fragment}`;
}

export function webpageId(path: string): string {
  return fragmentUrl(path, "webpage");
}
