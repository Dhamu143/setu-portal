"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function Features() {
  const { language } = useLanguage();
  const t = translations[language].features;
  const offeringsTexts = translations[language].offerings;

  const icons = ["🕉️", "🎵", "🪔", "📿", "🏛️", "🌟", "📜", "📰", "📅"];
  const offerings = offeringsTexts.map((item, index) => ({
    ...item,
    icon: icons[index],
  }));

  return (
    <section id="offerings">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal visible">
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">
            {t.title} <span>{t.highlight}</span>
          </h2>
          <p className="section-sub">{t.sub}</p>
        </div>
        <div className="offerings-grid">
          {offerings.map((item, i) => (
            <div className="offering-card reveal visible" key={i}>
              <div className="card-icon">{item.icon}</div>
              <div className="card-title">{item.title}</div>
              <div className="card-desc">{item.desc}</div>
              <div className="card-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
