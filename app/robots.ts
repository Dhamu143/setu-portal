import type { MetadataRoute } from "next";
import { BASE_URL, getBaseUrl } from "@/components/BaseUrl";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"],
    },
    sitemap: getBaseUrl("/sitemap.xml"),
    host: BASE_URL,
  };
}