"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer>
      <div className="footer-logo">ॐ SANATAN SETU</div>
      <div className="footer-links">
        <a href="#">{t.privacy}</a>
        <a href="#">{t.terms}</a>
        <a href="#">{t.contact}</a>
        <a href="#">{t.about}</a>
      </div>
      <div className="footer-copy">{t.copy}</div>
    </footer>
  );
}
