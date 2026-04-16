"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { Star } from "lucide-react";

export default function Reviews() {
  const { language } = useLanguage();
  const t = translations[language].reviews;
  const tStats = translations[language].stats;

  const reviews = [
    {
      name: "Ramesh Patel",
      loc: "Ahmedabad, Gujarat",
      initial: "R",
      text: "This app has completely transformed my morning routine. I start every day with Hanuman Chalisa and it fills my heart with peace and strength.",
    },
    {
      name: "Priya Sharma",
      loc: "Varanasi, Uttar Pradesh",
      initial: "P",
      text: "The offline feature is a blessing. I use it during travel to temples in remote areas. The audio quality of the bhajans is simply divine.",
    },
    {
      name: "Suresh Nair",
      loc: "Thrissur, Kerala",
      initial: "S",
      text: "Best spiritual app I have ever used. The horoscope section is accurate and the Panchang helps me plan all religious events perfectly.",
    },
  ];

  const scrollableReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" style={{ width: "100%", overflowX: "hidden", padding: "60px 0" }}>
      <style>{`
        .auto-scroll-wrapper {
          width: 100%;
          padding: 20px 0;
          /* Optional: Keeps a slight fade at the very edges of the screen so cards don't cut off sharply */
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        
        .auto-scroll-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: infinite-scroll 40s linear infinite;
          /* Add padding to the left so it doesn't start abruptly on load */
          padding-left: 24px; 
        }

        .auto-scroll-track:hover {
          animation-play-state: paused;
        }

        .review-card-fixed {
          width: 350px;
          flex-shrink: 0;
        }

        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          /* Adjusting the scroll distance based on 4 duplicated sets instead of 3 for ultra-wide screens */
          100% { transform: translateX(calc(-25% - 6px)); }
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">
            {t.title} <span>{t.highlight}</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            {t.sub}
          </p>
        </div>
      </div>

      <div className="auto-scroll-wrapper">
        <div className="auto-scroll-track">
          {scrollableReviews.map((r, i) => (
            <div className="review-card reveal visible review-card-fixed" key={i}>
              <div className="review-quote">"</div>
              <div className="review-stars" style={{ display: "flex", gap: "2px", color: "#f59e0b", marginBottom: "12px" }}>
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <div className="review-text">{r.text}</div>
              <div className="review-author" style={{ marginTop: "16px", display: "flex", gap: "12px", alignItems: "center" }}>
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <div className="review-name" style={{ fontWeight: "bold" }}>{r.name}</div>
                  <div className="review-loc" style={{ fontSize: "0.85rem", opacity: 0.8 }}>{r.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div
          className="stats-band reveal visible"
          style={{ maxWidth: "900px", margin: "72px auto 0" }}
        >
          <div className="stat-band-item">
            <span className="stat-band-val">4.8★</span>
            <span className="stat-band-lbl">{tStats.rating}</span>
          </div>
          <div className="stat-band-item">
            <span className="stat-band-val">2M+</span>
            <span className="stat-band-lbl">{tStats.users}</span>
          </div>
          <div className="stat-band-item">
            <span className="stat-band-val">50K+</span>
            <span className="stat-band-lbl">{tStats.fivestar}</span>
          </div>
          <div className="stat-band-item">
            <span className="stat-band-val">108+</span>
            <span className="stat-band-lbl">{tStats.mantras}</span>
          </div>
        </div>
      </div>
    </section>
  );
}