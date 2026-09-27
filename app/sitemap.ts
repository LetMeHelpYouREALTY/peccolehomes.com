import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const base = site.baseUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/peccole-ranch", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/amenities", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/llms.txt", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${base}${path}` : base,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
