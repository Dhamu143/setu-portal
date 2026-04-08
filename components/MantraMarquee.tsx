"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function MantraMarquee() {
  const { language } = useLanguage();
  const items = translations[language].marquee;

  const all = [...items, ...items];

  return (
    <div className="features-strip">
      <div className="strip-track">
        {all.map((item, i) => (
          <span className="strip-item" key={i}>
            <span className="strip-dot"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
