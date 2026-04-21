import type { Metadata } from "next";
import { getBaseUrl, getCanonicalUrl } from "@/components/BaseUrl";
import InfoPage, {
  type InfoPanel,
  type InfoSection,
  type InfoSidebarCard,
} from "@/components/InfoPage";
import {
  BookOpen,
  Lock,
  Scale,
  ScrollText,
  ShieldAlert,
  UserCheck,
} from "lucide-react";

const pagePath = "/terms";
const pageTitle = "Terms of Use | Setu Sanatan";
const pageDescription =
  "Read the terms that guide the respectful use of Setu Sanatan, devotional content, and community features.";
const pageKeywords = [
  "Setu Sanatan terms",
  "Terms of use",
  "Terms and conditions",
  "User agreement",
  "Legal terms",
  "Platform rules",
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
    title: "Respectful use",
    text: "The app is meant to support sincere spiritual exploration and respectful community participation.",
    icon: UserCheck,
    accent: "saffron",
  },
  {
    title: "Sacred content",
    text: "We work carefully on devotional material, but traditions can vary and some guidance may differ by region.",
    icon: BookOpen,
    accent: "gold",
  },
  {
    title: "Fair access",
    text: "We may update features, suspend misuse, or revise parts of the service when needed to keep the platform safe.",
    icon: Lock,
    accent: "earth",
  },
];

const sections: InfoSection[] = [
  {
    id: "acceptance",
    eyebrow: "01 / Access and Agreement",
    title: "Using Setu Sanatan means accepting these terms",
    icon: Scale,
    accent: "saffron",
    paragraphs: [
      "By visiting or using Setu Sanatan, you agree to these terms and to the basic standards that keep the experience useful, lawful, and respectful for everyone.",
      "If you do not agree with the terms, you should not continue using the service.",
    ],
  },
  {
    id: "content",
    eyebrow: "02 / Spiritual Content",
    title: "Our content is devotional, educational, and carefully curated",
    icon: ScrollText,
    accent: "gold",
    paragraphs: [
      "Setu Sanatan provides spiritual content such as mantras, bhajans, aarti, temple information, and festival guidance for devotional use.",
      "We aim for clarity and care, but customs and interpretations can vary across sampradayas, regions, and local traditions.",
    ],
    bullets: [
      "Users should confirm critical ritual details with trusted local guidance when exact practice matters.",
      "App content may not be copied, republished, or commercially redistributed without permission.",
    ],
  },
  {
    id: "conduct",
    eyebrow: "03 / Community Conduct",
    title: "Please participate with dignity and respect",
    icon: UserCheck,
    accent: "leaf",
    paragraphs: [
      "If you use public or community features, you are responsible for keeping your behavior respectful and appropriate.",
    ],
    bullets: [
      "Do not post hateful, abusive, or inflammatory content.",
      "Respect the diversity of traditions within Sanatan Dharma.",
      "Do not misuse the platform for spam, impersonation, or harmful promotion.",
    ],
  },
  {
    id: "changes",
    eyebrow: "04 / Updates and Protection",
    title: "We may update the service and these terms over time",
    icon: ShieldAlert,
    accent: "earth",
    paragraphs: [
      "Features may change as the product evolves. We may also update these terms to reflect improvements, operational needs, or legal requirements.",
      "Continued use after changes means you accept the revised version in effect at that time.",
    ],
  },
];

const sidebarCards: InfoSidebarCard[] = [
  {
    eyebrow: "Need clarification?",
    title: "Questions about terms or content",
    text: "Reach out if you need help understanding usage rights, content questions, or community expectations.",
    href: "mailto:support@setuapp.com",
    linkLabel: "support@setuapp.com",
  },
];

export default function TermsPage() {
  return (
    <InfoPage
      badge="Terms of Use"
      title="Simple rules for a respectful devotional space."
      description="These terms explain how Setu Sanatan can be used, how our content should be treated, and what we expect from the community."
      highlights={["Respectful use", "Curated sacred content", "Community safety"]}
      panels={panels}
      sections={sections}
      sidebarCards={sidebarCards}
      outro={{
        title: "Need help with a policy question?",
        text: "Our team can help explain service rules, content use, and support expectations before you move forward.",
        href: "mailto:support@setuapp.com",
        linkLabel: "Contact our team",
      }}
    />
  );
}
