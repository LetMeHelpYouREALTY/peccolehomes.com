import { site } from "@/lib/site";

/** Stable schema.org @id anchors for GEO / entity linking across pages. */
export const entityIds = {
  website: `${site.baseUrl}/#website`,
  business: `${site.baseUrl}/#business`,
  agent: `${site.baseUrl}/#agent`,
  organization: `${site.baseUrl}/#organization`,
} as const;

export function webpageId(path: string): string {
  const url = path ? `${site.baseUrl}${path}` : site.baseUrl;
  return `${url}#webpage`;
}
