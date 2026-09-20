import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { landingSlugs } from "@/data/landing";

/**
 * Mirrors the routes published in the previous sitemap so nothing that is
 * already indexed drops out of the index.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/pizza-catering-form", priority: 0.9 },
    { path: "/catering-form", priority: 0.8 },
    { path: "/gallery", priority: 0.8 },
    { path: "/roaming-cannoli", priority: 0.8 },
    { path: "/pizzaiolo-setup", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
  ];

  return [
    ...core.map((r) => ({
      url: `${site.url}${r.path === "/" ? "/" : r.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r.priority,
    })),
    ...landingSlugs.map((slug) => ({
      url: `${site.url}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
