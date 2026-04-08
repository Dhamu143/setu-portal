"use client";
import StoreButtons from "./StoreButtons";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function DownloadCTA() {
  const { language } = useLanguage();
  const t = translations[language].cta;

  return (
    <section id="cta">
      <div className="cta-mandala">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
          <circle
            cx="400"
            cy="400"
            r="350"
            stroke="#FF6B00"
            strokeWidth="1.5"
          />
          <circle cx="400" cy="400" r="280" stroke="#FF6B00" strokeWidth="1" />
          <circle
            cx="400"
            cy="400"
            r="210"
            stroke="#FF8C00"
            strokeWidth="1.5"
          />
          <circle cx="400" cy="400" r="140" stroke="#FF6B00" strokeWidth="1" />
          <line
            x1="50"
            y1="400"
            x2="750"
            y2="400"
            stroke="#FF6B00"
            strokeWidth="0.8"
          />
          <line
            x1="400"
            y1="50"
            x2="400"
            y2="750"
            stroke="#FF6B00"
            strokeWidth="0.8"
          />
          <line
            x1="152"
            y1="152"
            x2="648"
            y2="648"
            stroke="#FF6B00"
            strokeWidth="0.8"
          />
          <line
            x1="648"
            y1="152"
            x2="152"
            y2="648"
            stroke="#FF6B00"
            strokeWidth="0.8"
          />
        </svg>
      </div>
      <div
        className="om-circle"
        style={{ width: "88px", height: "88px", margin: "0 auto 30px" }}
      >
        <span className="om-symbol" style={{ fontSize: "2.4rem" }}>
          ॐ
        </span>
      </div>
      <h2 className="cta-title">
        {t.title}
        <br />
        <span>{t.highlight}</span>
      </h2>
      <p className="cta-sub">{t.sub}</p>
      <div className="cta-btns">
        <StoreButtons />
      </div>
    </section>
  );
}
