"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="site-footer">
      <style>{`
        .site-footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          padding: 24px 40px;
          border-top: 1px solid #eaeaea;
          background-color: #ffffff;
          gap: 20px;
        }

        .footer-logo {
          font-weight: 600;
          color: #ea580c; /* Thematic orange color */
          text-decoration: none;
          font-size: 1.1rem;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .footer-links a {
          color: #555;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease-in-out;
        }

        .footer-links a:hover {
          color: #ea580c;
        }

        .footer-copy {
          font-size: 0.85rem;
          color: #888;
        }

        /* Mobile Responsive View */
        @media (max-width: 900px) {
          .site-footer {
            flex-direction: column;
            text-align: center;
            padding: 32px 20px;
          }
        }
      `}</style>

      <Link className="footer-logo" href="/">
        {"\u0950"} SANATAN SETU
      </Link>
      
      <div className="footer-links">
        <Link href="/article">{t.article}</Link>
        <Link href="/aarti">{t.aarti}</Link>
        <Link href="/bhajan">{t.bhajan}</Link>
        <Link href="/mantra">{t.mantra}</Link>
        <Link href="/sloka">{t.sloka}</Link>
        <Link href="/privacy">{t.privacy}</Link>
        <Link href="/terms">{t.terms}</Link>
        <Link href="/contact">{t.contact}</Link>
        <Link href="/about">{t.about}</Link>
      </div>

      <div className="footer-copy">{t.copy}</div>
    </footer>
  );  
}