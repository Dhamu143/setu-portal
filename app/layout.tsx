import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ClientEffects from "@/components/ClientEffects";
import { BASE_URL, getBaseUrl, getCanonicalUrl } from "@/components/BaseUrl";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Setu Sanatan";
const siteShortName = "Setu";
const siteTitle = "Setu Sanatan - The Divine Experience";
const siteDescription =
  "Setu Sanatan is a devotional Hindu app for mantras, bhajans, aarti, slokas, temple discovery, and daily spiritual practice.";
const siteKeywords = [
  "Setu Sanatan",
  "Sanatan Dharma",
  "Hindu app",
  "Mantras",
  "Bhajans",
  "Aarti",
  "Slokas",
  "Hindu temples",
  "Panchang",
  "Spirituality",
  "Devotional app",
];
const canonicalUrl = getCanonicalUrl("/");
const ogImage = getBaseUrl("/opengraph-image");
const twitterImage = getBaseUrl("/twitter-image");

const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    alternateName: siteShortName,
    url: BASE_URL,
    logo: getBaseUrl("/p.png"),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: siteShortName,
    url: BASE_URL,
    description: siteDescription,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: BASE_URL,
    },
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: siteName, url: BASE_URL }],
  creator: siteName,
  publisher: siteName,
  category: "Spirituality",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: canonicalUrl,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
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
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: canonicalUrl,
    siteName,
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [twitterImage],
  },
  appleWebApp: {
    capable: true,
    title: siteShortName,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff6b00",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={plusJakartaSans.className}>
        <LanguageProvider>
          <ClientEffects />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
