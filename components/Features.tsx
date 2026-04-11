"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { 
  Sparkles, 
  Music, 
  Flame, 
  Landmark, 
  Star, 
  BookOpen, 
  ScrollText, 
  Newspaper, 
  CalendarDays 
} from "lucide-react";

export default function Features() {
  const { language } = useLanguage();
  const t = translations[language].features;
  const offeringsTexts = translations[language].offerings;

  // 1. Swap emojis for clean, consistent SVG icons
  const icons = [
    <Sparkles key="1" size={26} strokeWidth={1.5} />,
    <Music key="2" size={26} strokeWidth={1.5} />,
    <Flame key="3" size={26} strokeWidth={1.5} />,
    <Landmark key="4" size={26} strokeWidth={1.5} />,
    <Star key="5" size={26} strokeWidth={1.5} />,
    <BookOpen key="6" size={26} strokeWidth={1.5} />,
    <ScrollText key="7" size={26} strokeWidth={1.5} />,
    <Newspaper key="8" size={26} strokeWidth={1.5} />,
    <CalendarDays key="9" size={26} strokeWidth={1.5} />
  ];

  const offerings = offeringsTexts.map((item, index) => ({
    ...item,
    icon: icons[index] || <Sparkles size={26} strokeWidth={1.5} />,
  }));

  return (
    <section id="offerings">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header Content */}
        <div className="reveal visible" style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">
            {t.title} <span>{t.highlight}</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            {t.sub}
          </p>
        </div>

        {/* Premium Grid Area */}
        <div className="offerings-grid">
          {offerings.map((item, i) => (
            <div className="offering-card reveal visible group" key={i}>
              <div className="card-icon text-saffron">
                {item.icon}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
              
              {/* Added aria-hidden for accessibility on decorative elements */}
              <div className="card-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
} 