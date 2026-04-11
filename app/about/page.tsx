import type { Metadata } from "next";
import InfoPage, {
  type InfoPanel,
  type InfoSection,
  type InfoSidebarCard,
} from "@/components/InfoPage";
import {
  BookOpen,
  Compass,
  Globe,
  Heart,
  Landmark,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Setu Sanatan",
  description:
    "Learn about the mission behind Setu Sanatan and how the platform brings devotional content, temple discovery, and daily spiritual practice together.",
};

const panels: InfoPanel[] = [
  {
    title: "Sacred library",
    text: "A carefully designed place for mantras, bhajans, aarti, and devotional learning.",
    icon: BookOpen,
    accent: "saffron",
  },
  {
    title: "Daily guidance",
    text: "Built to support daily rituals, reminders, discovery, and a more connected spiritual routine.",
    icon: Compass,
    accent: "gold",
  },
  {
    title: "Built for devotees everywhere",
    text: "Made in India and designed for a wide community of users across languages and traditions.",
    icon: Globe,
    accent: "leaf",
  },
];

const sections: InfoSection[] = [
  {
    id: "mission",
    eyebrow: "01 / Why We Exist",
    title: "Setu Sanatan was created to make devotion easier to access",
    icon: Heart,
    accent: "saffron",
    paragraphs: [
      "Modern life can make spiritual consistency feel difficult. Setu Sanatan brings sacred content, guidance, and discovery tools into one place so daily practice feels simpler and more present.",
      "Our aim is not to replace tradition, but to support it with thoughtful digital design.",
    ],
  },
  {
    id: "experience",
    eyebrow: "02 / The Experience",
    title: "One platform for prayer, learning, and discovery",
    icon: BookOpen,
    accent: "gold",
    paragraphs: [
      "The app brings together mantras, bhajans, aarti, chalisa, temple information, reminders, and devotional reading so users can stay connected throughout the day.",
    ],
    bullets: [
      "Content that supports both learning and practice",
      "Temple discovery and localized spiritual tools",
      "An experience built to feel warm, calm, and intentional",
    ],
  },
  {
    id: "community",
    eyebrow: "03 / Community",
    title: "Designed for a broad and respectful spiritual community",
    icon: Users,
    accent: "earth",
    paragraphs: [
      "Setu Sanatan is meant to welcome users from many regions, languages, and traditions. We believe thoughtful design should make sacred content more approachable without flattening its depth.",
    ],
  },
  {
    id: "roots",
    eyebrow: "04 / Our Roots",
    title: "Rooted in Indian culture and devotional care",
    icon: Landmark,
    accent: "leaf",
    paragraphs: [
      "From the visual language to the content structure, the product is shaped around warmth, reverence, and everyday use. Every screen is meant to feel like a bridge back to something meaningful.",
    ],
  },
];

const sidebarCards: InfoSidebarCard[] = [
  {
    eyebrow: "Our direction",
    title: "Faith first, product second",
    text: "We want the app to feel useful because it is respectful, not because it is noisy. Clarity, warmth, and devotion guide the experience.",
  },
];

export default function AboutPage() {
  return (
    <InfoPage
      badge="About Setu Sanatan"
      title="A digital bridge to daily devotion."
      description="Setu Sanatan is built to bring sacred content, temple discovery, and a more immersive spiritual routine into one calm and beautiful experience."
      highlights={["Made with devotion", "Built in India", "Designed for daily use"]}
      panels={panels}
      sections={sections}
      sidebarCards={sidebarCards}
      outro={{
        title: "Want to build with us or share feedback?",
        text: "We are always open to hearing from devotees, collaborators, and teams who care about meaningful spiritual products.",
        href: "/contact",
        linkLabel: "Visit contact page",
      }}
    />
  );
}
