import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://setu-ten-rust.vercel.app"),
  title: "Sanatan — The Divine Experience",
  description:
    "The most divine & immersive Hindu Dharma experience. Mantras · Bhajans · Aarti · Horoscope · Temples & more — all in one sacred space.",
  keywords: [
    "Sanatan Dharma",
    "Hindu App",
    "Mantras",
    "Bhajans",
    "Aarti",
    "Horoscope",
    "Temples",
    "Chalisa",
    "Panchang",
    "Slokas",
    "Indian Gods",
    "Spirituality",
  ],
  authors: [{ name: "Sanatan App" }],
  creator: "Sanatan App",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sanatan — The Divine Experience",
    description:
      "Your digital sacred space for Hindu Dharma — Mantras, Bhajans, Aarti, Horoscope & more.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}