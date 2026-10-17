import type { MetadataRoute } from "next";
import { pageUpdated, type SitePath } from "@/lib/entity";
import { site } from "@/lib/site";
import { sitemapLastModified } from "@/lib/sitemap-dates";

const base = site.baseUrl;

const routes: { path: SitePath; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/buyers", priority: 0.9, changeFrequency: "weekly" },
  { path: "/sellers", priority: 0.9, changeFrequency: "weekly" },
  { path: "/market", priority: 0.8, changeFrequency: "weekly" },
  { path: "/peccole-ranch", priority: 0.8, changeFrequency: "monthly" },
  { path: "/golf-and-gated", priority: 0.7, changeFrequency: "monthly" },
  { path: "/new-construction", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/amenities", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/llms.txt", priority: 0.4, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified: new Date(pageUpdated[path]),
    changeFrequency,
    priority,
  }));
}
