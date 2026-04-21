import type { MetadataRoute } from "next";
export const dynamic = "force-static";

const siteName = "Setu Sanatan";
const siteShortName = "Setu";
const siteDescription =
  "Setu Sanatan is a devotional Hindu app for mantras, bhajans, aarti, slokas, temple discovery, and daily spiritual practice.";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: siteName,
    short_name: siteShortName,
    description: siteDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fff8f2",
    theme_color: "#ff6b00",
    orientation: "portrait",
    lang: "en-IN",
    categories: ["lifestyle", "education", "books"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
