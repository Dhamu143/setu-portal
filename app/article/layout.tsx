import type { Metadata } from "next";
import { getBaseUrl, getCanonicalUrl } from "@/components/BaseUrl";

const pagePath = "/article";
const pageTitle = "Divine Articles | Setu Sanatan";
const pageDescription =
  "Learn about Hindu gods, goddesses, spiritual concepts, sacred traditions, and devotional wisdom.";
const pageKeywords = [
  "Hindu gods",
  "Indian deities",
  "Lord Shiva",
  "Lord Vishnu",
  "Goddess Durga",
  "Hindu mythology",
  "Spiritual articles",
  "Sacred traditions",
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

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}