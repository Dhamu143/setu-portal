import type { Metadata } from "next";
import { getBaseUrl, getCanonicalUrl } from "@/components/BaseUrl";

const pagePath = "/aarti";
const pageTitle = "Aarti | Setu Sanatan";
const pageDescription =
  "Perform sacred aarti ceremonies with divine worship songs including Shiva Aarti, Devi Aarti, Ganesh Aarti, and traditional temple aartis.";
const pageKeywords = [
  "Aarti",
  "Sacred ceremonies",
  "Temple worship",
  "Shiva Aarti",
  "Devi Aarti",
  "Ganesh Aarti",
  "Hindu rituals",
  "Puja Aarti",
];
const canonicalUrl = getCanonicalUrl(pagePath);
const ogImage = getBaseUrl("/opengraph-image");
const twitterImage = getBaseUrl("/twitter-image");

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: pageKeywords,
  alternates: {
    canonical: canonicalUrl,
  },
  authors: [{ name: "Setu Sanatan", url: getBaseUrl() }],
  creator: "Setu Sanatan",
  publisher: "Setu Sanatan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "Setu Sanatan",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Setu Sanatan preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [twitterImage],
  },
};

export default function AartiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}