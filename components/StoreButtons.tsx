"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function StoreButtons() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="store-buttons">
      <a
        href="https://play.google.com/store/apps/details?id=com.sanatan.lite"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-store android"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.76a2 2 0 0 0 2.07-.15l11.46-6.62-2.52-2.51zM.69 1.17A2 2 0 0 0 0 2.78v18.44a2 2 0 0 0 .69 1.61L.8 22.9l10.33-10.33v-.24L.8 2zm18.81 8.88-2.63-1.52-2.81 2.81 2.81 2.81 2.66-1.54a2 2 0 0 0 0-3.56zM5.25.39 16.71 7l-2.52 2.52L11.67.39z" />
        </svg>
        {t.playstore}
      </a>
      {/* <a
        href="https://apps.apple.com/in/app/sanatan-bhajan-mantra-status/id6744445436"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-store ios"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        {t.appstore}
      </a> */}
    </div>
  );
}
