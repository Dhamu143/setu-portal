"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "\u0939\u093f\u0928\u094d\u0926\u0940" },
  { code: "gu", label: "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0" },
  { code: "mr", label: "\u092e\u0930\u093e\u0920\u0940" },
  { code: "bn", label: "\u09ac\u09be\u0982\u09b2\u09be" },
  { code: "ta", label: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd" },
  { code: "te", label: "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41" },
  { code: "kn", label: "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1" },
  { code: "od", label: "\u0b13\u0b21\u0b3c\u0b3f\u0b06" },
  { code: "ml", label: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02" },
] as const;

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownloadClick = () => {
    const cta = document.getElementById("cta");

    if (cta) {
      cta.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.location.href = "/#cta";
  };

  const currentLangLabel =
    LANGUAGES.find((item) => item.code === language)?.label ?? "English";

  return (
    <nav>
      <Link className="nav-logo" href="/">
        <span className="om">{"\u0950"}</span> SANATAN SETU
      </Link>

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <div ref={dropdownRef} style={{ position: "relative" }}>
          <button
            onClick={() => setIsOpen((value) => !value)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#fff5eb",
              border: "1px solid #fed7aa",
              borderRadius: "20px",
              padding: "8px 16px",
              fontFamily: "inherit",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#ea580c",
              cursor: "pointer",
              outline: "none",
              transition: "all 0.2s ease",
              boxShadow: isOpen
                ? "0 4px 12px rgba(234, 88, 12, 0.15)"
                : "0 2px 4px rgba(234, 88, 12, 0.05)",
            }}
          >
            <Globe size={18} />
            <span>{currentLangLabel}</span>
            <ChevronDown
              size={16}
              style={{
                transition: "transform 0.3s ease",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>

          {isOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                backgroundColor: "#ffffff",
                border: "1px solid #fed7aa",
                borderRadius: "12px",
                boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.1)",
                minWidth: "140px",
                maxHeight: "300px",
                overflowY: "auto",
                zIndex: 50,
                display: "flex",
                flexDirection: "column",
                padding: "8px 0",
              }}
            >
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  onMouseEnter={(event) => {
                    if (language !== lang.code) {
                      event.currentTarget.style.backgroundColor = "#fffcf9";
                    }
                  }}
                  onMouseLeave={(event) => {
                    if (language !== lang.code) {
                      event.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                  style={{
                    padding: "10px 16px",
                    textAlign: "left",
                    backgroundColor:
                      language === lang.code ? "#fff5eb" : "transparent",
                    color: language === lang.code ? "#ea580c" : "#4b5563",
                    fontWeight: language === lang.code ? 600 : 400,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: "0.85rem",
                    transition: "background-color 0.15s ease",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {lang.label}
                  {language === lang.code && <Check size={16} />}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="nav-btn" onClick={handleDownloadClick}>
          {t.download}
        </button>
      </div>
    </nav>
  );
}
