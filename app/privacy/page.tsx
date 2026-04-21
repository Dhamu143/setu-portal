import type { Metadata } from "next";
import { getBaseUrl, getCanonicalUrl } from "@/components/BaseUrl";
import InfoPage, {
  type InfoPanel,
  type InfoSection,
  type InfoSidebarCard,
} from "@/components/InfoPage";
import { Bell, Database, Lock, MapPin, Shield } from "lucide-react";

const pagePath = "/privacy";
const pageTitle = "Privacy Policy | Setu Sanatan";
const pageDescription =
  "Learn how Setu Sanatan handles profile data, temple discovery, notifications, and account privacy.";
const pageKeywords = [
  "Setu Sanatan privacy",
  "Privacy policy",
  "Data protection",
  "User privacy",
  "Account security",
  "Personal data",
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

const panels: InfoPanel[] = [
  {
    title: "Minimal data",
    text: "We only collect details that help us personalize devotion, support temple discovery, and improve the app experience.",
    icon: Database,
    accent: "saffron",
  },
  {
    title: "Location on request",
    text: "Your location is used only when you ask for nearby temples, local timings, or other place-aware spiritual tools.",
    icon: MapPin,
    accent: "gold",
  },
  {
    title: "Protected access",
    text: "We use modern safeguards, access controls, and retention limits to keep personal information secure and limited.",
    icon: Lock,
    accent: "leaf",
  },
];

const sections: InfoSection[] = [
  {
    id: "collection",
    eyebrow: "01 / Data Collection",
    title: "What we collect",
    icon: Database,
    accent: "saffron",
    paragraphs: [
      "Setu Sanatan is designed to feel personal without collecting more information than we need. Most of what we store is tied to making your daily spiritual experience smoother and more relevant.",
    ],
    bullets: [
      "Basic account details like your name, email address, and profile image when you choose to sign in.",
      "Preference data such as favorite deities, saved chants, language choices, and notification settings.",
      "Device and usage information that helps us improve playback quality, performance, and content recommendations.",
      "Support messages or feedback you share directly with our team.",
    ],
  },
  {
    id: "usage",
    eyebrow: "02 / App Experience",
    title: "How we use your information",
    icon: Bell,
    accent: "gold",
    paragraphs: [
      "We use collected data to deliver the core experience of the app and keep it helpful, stable, and respectful of your time.",
    ],
    bullets: [
      "Personalize your home feed, mantras, bhajans, and saved spiritual routines.",
      "Send optional reminders for aarti, festivals, and devotional practices when you opt in.",
      "Improve search, app speed, and feature reliability across devices.",
      "Respond to support requests and protect the platform from misuse or abuse.",
    ],
  },
  {
    id: "location",
    eyebrow: "03 / Temple Discovery",
    title: "Location, temples, and local timings",
    icon: MapPin,
    accent: "earth",
    paragraphs: [
      "Location access is optional. If you allow it, we use it to make temple discovery and local spiritual timings more accurate for you.",
      "We do not use location for unrelated tracking or sell it to third parties for advertising.",
    ],
    bullets: [
      "Show temples and spiritual places close to your current area.",
      "Improve local sunrise, sunset, panchang, and festival-time calculations.",
      "Support place-specific content when you actively use those features.",
    ],
  },
  {
    id: "security",
    eyebrow: "04 / Security and Control",
    title: "Security, retention, and your choices",
    icon: Shield,
    accent: "leaf",
    paragraphs: [
      "We keep personal data only for as long as it serves a clear product, safety, or legal purpose. Access is restricted internally and protected with technical and operational safeguards.",
      "If you want help updating or removing personal information, you can contact us and we will guide you through the process.",
    ],
    bullets: [
      "We do not sell personal information.",
      "Sensitive access is limited to authorized team members only.",
      "Requests related to account updates or deletion can be sent to our support team.",
    ],
  },
];

const sidebarCards: InfoSidebarCard[] = [
  {
    eyebrow: "Need help?",
    title: "Questions about privacy",
    text: "If you need clarification about data handling, account changes, or deletion requests, our support team can help.",
    href: "mailto:support@setuapp.com",
    linkLabel: "support@setuapp.com",
  },
];

export default function PrivacyPage() {
  return (
    <InfoPage
      badge="Privacy Policy"
      title="A privacy promise built with faith and care."
      description="This page explains what Setu Sanatan collects, why it matters, and the choices you have over your personal information."
      highlights={["Minimal collection", "Temple discovery only", "No sale of personal data"]}
      panels={panels}
      sections={sections}
      sidebarCards={sidebarCards}
      outro={{
        title: "Your trust matters every day.",
        text: "By continuing to use Setu Sanatan, you acknowledge this privacy policy and the way it supports a safer, more personal devotional experience.",
        href: "mailto:support@setuapp.com",
        linkLabel: "Contact support",
      }}
    />
  );
}
