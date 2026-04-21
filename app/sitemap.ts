import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/components/BaseUrl";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/mantra", changeFrequency: "weekly", priority: 0.9 },
  { path: "/aarti", changeFrequency: "weekly", priority: 0.9 },
  { path: "/bhajan", changeFrequency: "weekly", priority: 0.9 },
  { path: "/sloka", changeFrequency: "weekly", priority: 0.85 },
  { path: "/article", changeFrequency: "weekly", priority: 0.85 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
] satisfies Array<{
  path: string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  priority: number;
}>;
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: getBaseUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
