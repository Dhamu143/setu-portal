"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <a className="nav-logo" href="#">
        <span className="om">ॐ</span> SANATAN SETU
      </a>
      <ul className="nav-links">
        <li>
          <a href="#offerings">{t.offerings}</a>
        </li>
        <li>
          <a href="#showcase">{t.experience}</a>
        </li>
        <li>
          <a href="#deities">{t.deities}</a>
        </li>
        <li>
          <a href="#reviews">{t.reviews}</a>
        </li>
      </ul>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as any)}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,107,0,0.2)",
            borderRadius: "6px",
            padding: "4px 8px",
            fontFamily: "Lato, sans-serif",
            fontSize: "0.8rem",
            color: "#ff6b00",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="gu">ગુજરાતી</option>
          <option value="mr">मराठी</option>
          <option value="bn">বাংলা</option>
          <option value="ta">தமிழ்</option>
          <option value="te">తెలుగు</option>
          <option value="kn">ಕನ್ನಡ</option>
          <option value="od">ଓଡ଼ିଆ</option>
          <option value="ml">മലയാളം</option>
        </select>
        <button className="nav-btn" onClick={() => scrollTo("cta")}>
          {t.download}
        </button>
      </div>
    </nav>
  );
}
