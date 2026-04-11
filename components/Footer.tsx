"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer>
      <Link className="footer-logo" href="/">
        {"\u0950"} SANATAN SETU
      </Link>
      <div className="footer-links">
        <Link href="/privacy">{t.privacy}</Link>
        <Link href="/terms">{t.terms}</Link>
        <Link href="/contact">{t.contact}</Link>
        <Link href="/about">{t.about}</Link>
      </div>
      <div className="footer-copy">{t.copy}</div>
    </footer>
  );  
}
