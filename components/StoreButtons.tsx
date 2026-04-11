"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function StoreButtons() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="store-buttons" style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
      <a
        href="https://play.google.com/store/apps/details?id=com.sanatan.lite"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-store android"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          backgroundColor: "#000000", // Black background
          color: "#ffffff", // White text
          padding: "10px 24px",
          borderRadius: "12px", // Nice rounded corners
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "1.1rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          transition: "transform 0.2s ease", // Smooth hover effect if you add CSS for it
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blue Left Triangle */}
          <path d="M1.7 1.1C1.2 1.6 1 2.3 1 3.2v17.6c0 .9.2 1.6.7 2.1l.1.1 9.9-9.9v-.2L1.8 1l-.1.1z" fill="#4285F4" />
          {/* Yellow Right Tip */}
          <path d="M14.9 16.3l-3.2-3.2v-.2l3.2-3.2.1.1 3.8 2.2c1.1.6 1.1 1.6 0 2.2l-3.8 2.1-.1 0z" fill="#FBBC04" />
          {/* Red Bottom Triangle */}
          <path d="M15 16.2l-3.3-3.3-10 10c.3.3.8.4 1.4.1l11.9-6.8z" fill="#EA4335" />
          {/* Green Top Triangle */}
          <path d="M15 7.8L3.1 1C2.5.7 2 .8 1.7 1.1l10 10 3.3-3.3z" fill="#34A853" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: "1.2" }}>
          <span style={{ fontSize: "0.5rem", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Get it on
          </span>
          <span>{t.playstore}</span>
        </div>
      </a>
      
      {/* <a
        href="https://apps.apple.com/in/app/sanatan-bhajan-mantra-status/id6744445436"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-store ios"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "10px 24px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "1.1rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: "1.2" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 400 }}>Download on the</span>
          <span>{t.appstore}</span>
        </div>
      </a> */}
    </div>
  );
}