import type { Metadata } from "next";
import { getBaseUrl, getCanonicalUrl } from "@/components/BaseUrl";
import InfoPage, {
  type InfoPanel,
  type InfoSection,
  type InfoSidebarCard,
} from "@/components/InfoPage";
import {
  Clock3,
  Handshake,
  HelpCircle,
  Mail,
  MessageSquare,
} from "lucide-react";

const pagePath = "/contact";
const pageTitle = "Contact Us | Setu Sanatan";
const pageDescription =
  "Reach the Setu Sanatan team for support, partnerships, media, and product feedback.";
const pageKeywords = [
  "Contact Setu Sanatan",
  "Setu app support",
  "Partnerships",
  "Media inquiries",
  "Product feedback",
  "Customer support",
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
    title: "Support",
    text: "Need help with the app, account access, or feature questions?",
    icon: Mail,
    accent: "saffron",
    href: "mailto:support@setuapp.com",
    linkLabel: "support@setuapp.com",
  },
  {
    title: "Partnerships",
    text: "For collaborations, temple partnerships, or growth conversations.",
    icon: Handshake,
    accent: "gold",
    href: "mailto:partnerships@setuapp.com",
    linkLabel: "partnerships@setuapp.com",
  },
  {
    title: "Response time",
    text: "Most messages receive a reply within 24 to 48 business hours.",
    icon: Clock3,
    accent: "leaf",
  },
];

const sections: InfoSection[] = [
  {
    id: "support",
    eyebrow: "01 / App Support",
    title: "Help with your account or the app",
    icon: HelpCircle,
    accent: "saffron",
    paragraphs: [
      "If something is not working as expected, contact us with as much detail as you can. Screenshots, device type, and the steps you followed help us respond faster.",
    ],
    bullets: [
      "Login and account access issues",
      "Playback or notification problems",
      "Temple, article, or content feedback",
      "Requests related to privacy or account changes",
    ],
  },
  {
    id: "partnerships",
    eyebrow: "02 / Collaborations",
    title: "Partnerships, temples, and brand conversations",
    icon: Handshake,
    accent: "gold",
    paragraphs: [
      "We are open to thoughtful collaborations that align with the mission of making devotional experiences more accessible and meaningful.",
    ],
    bullets: [
      "Temple discovery and listing partnerships",
      "Content collaborations and devotional campaigns",
      "Community outreach and cultural initiatives",
    ],
  },
  {
    id: "feedback",
    eyebrow: "03 / Feedback",
    title: "Ideas, suggestions, and product input",
    icon: MessageSquare,
    accent: "earth",
    paragraphs: [
      "We actively use feedback to improve the product. If there is a feature you want, a translation you need, or something that feels confusing, tell us.",
    ],
    bullets: [
      "Share the feature or fix you want",
      "Explain where the experience feels unclear",
      "Tell us what would make the app more useful in your daily practice",
    ],
  },
];

const sidebarCards: InfoSidebarCard[] = [
  {
    eyebrow: "Best first step",
    title: "Include clear details",
    text: "When you contact us, include your issue, device type, and any screenshots if relevant. It helps us resolve things much faster.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <InfoPage
        badge="Contact Us"
        title="We are here when you need support."
        description="Reach the Setu Sanatan team for product support, collaborations, media requests, or thoughtful feedback about the experience."
        highlights={["Support", "Partnerships", "Fast replies"]}
        panels={panels}
        sections={sections}
        sidebarCards={sidebarCards}
        outro={{
          title: "Send us a note anytime.",
          text: "For general questions, the fastest path is still email. We read every message and route it to the right team.",
          href: "mailto:support@setuapp.com",
          linkLabel: "Email support",
        }}
      />

    </main>
  );
}
