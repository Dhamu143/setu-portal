"use client";
import StoreButtons from "./StoreButtons";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function DownloadCTA() {
  const { language } = useLanguage();
  const t = translations[language].cta;

  return (
    <section
      id="cta"
      style={{
        position: "relative",
        overflow: "hidden", // Keeps the mandala from stretching the page
        padding: "100px 20px", // Adds generous breathing room top and bottom
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#fffcf9", // Very soft, warm background color
      }}
    >
      {/* Background Mandala - Absolutely positioned and low opacity */}
      <div
        className="cta-mandala"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.10, // Dropped opacity to make it a subtle watermark
          pointerEvents: "none", // Ensures it doesn't block clicks
          zIndex: 0,
        }}
      >
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="350" stroke="#ea580c" strokeWidth="1.5" />
          <circle cx="400" cy="400" r="280" stroke="#ea580c" strokeWidth="1" />
          <circle cx="400" cy="400" r="210" stroke="#ea580c" strokeWidth="1.5" />
          <circle cx="400" cy="400" r="140" stroke="#ea580c" strokeWidth="1" />
          <line x1="50" y1="400" x2="750" y2="400" stroke="#ea580c" strokeWidth="0.8" />
          <line x1="400" y1="50" x2="400" y2="750" stroke="#ea580c" strokeWidth="0.8" />
          <line x1="152" y1="152" x2="648" y2="648" stroke="#ea580c" strokeWidth="0.8" />
          <line x1="648" y1="152" x2="152" y2="648" stroke="#ea580c" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Content Container - Set to sit above the background */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}>
        
        {/* Styled Om Circle */}
        <div
          className="om-circle"
          style={{
            width: "80px",
            height: "80px",
            margin: "0 auto 24px",
            backgroundColor: "#fffcf9",
            border: "2px solid #fed7aa",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 20px rgba(234, 88, 12, 0.1)", // Soft glowing shadow
          }}
        >
          <span className="om-symbol" style={{ fontSize: "2.5rem", color: "#ea580c", lineHeight: 1 }}>
            ॐ
          </span>
        </div>

        {/* Typography Updates */}
        <h2
          className="cta-title"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)", // Responsive text sizing
            fontWeight: 700,
            color: "#431407", // Deep warm brown for high contrast
            lineHeight: 1.2,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          {t.title}
          <br />
          <span style={{ color: "#ea580c" }}>{t.highlight}</span>
        </h2>

        <p
          className="cta-sub"
          style={{
            fontSize: "1.1rem",
            color: "#78350f",
            lineHeight: 1.6,
            marginBottom: "40px",
            padding: "0 20px", // Prevents text from hitting the edges on mobile
          }}
        >
          {t.sub}
        </p>

        {/* Buttons Centered */}
        <div
          className="cta-btns"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}