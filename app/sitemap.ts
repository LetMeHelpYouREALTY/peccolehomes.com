import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { sitemapLastModified } from "@/lib/sitemap-dates";

const base = site.baseUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/peccole-ranch", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/sellers", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/llms.txt", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${base}${path}` : base,
    lastModified: sitemapLastModified[path] ?? "2026-03-01",
    changeFrequency,
    priority,
  }));
}
