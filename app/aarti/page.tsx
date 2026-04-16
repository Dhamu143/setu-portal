"use client";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Flame, Music, Clock, Sparkles, BookOpen, Info } from "lucide-react";
import StoreButtons from "@/components/StoreButtons";
// Import your actual StoreButtons and translation logic here
// import StoreButtons from "./StoreButtons"; 
// import { useLanguage } from "@/context/LanguageContext";
// import { translations } from "@/translations";

/* If you need to export metadata, remember to separate it into a server component 
  or a layout file, as this page now uses "use client" for the language hooks.
*/

interface AartiData {
  id: string;
  name: string;
  deity: string;
  description: string;
  lyrics: string;
  significance: string;
  timing: string;
}

const aartiData: AartiData[] = [
  {
    id: "shiva-aarti",
    name: "शिव आरती",
    deity: "Lord Shiva",
    description:
      "The most sacred aarti dedicated to Lord Shiva, performed during evening prayers in temples dedicates to the Supreme Yogi.",
    lyrics:
      "जय शिव ओमकार... भोले भंडारी भाला चढ़ो\nयह दुनिया अंधकार... बहुरिद अब हमवारे\n\nThe aarti celebrates Shiva's cosmic dance and his role in the destruction of ego and ignorance.",
    significance:
      "Shiva Aarti is performed to invoke blessings of peace, meditation, and spiritual awakening. It is believed to remove negative energies and bring inner peace.",
    timing: "Evening (6:00 PM - 8:00 PM) • Evening Aarti",
  },
  {
    id: "devi-aarti",
    name: "देवी आरती",
    deity: "Mother Goddess",
    description:
      "The Devi Aarti celebrates the divine feminine energy. Performed with devotion and reverence during Navratri and regular pujas.",
    lyrics:
      "जय माता दी... तुम को ध्यान लगाऊं\nहर दिन मैं तुम्हारे... चरणों में आऊं\n\nThis aarti honors the goddess in her various forms - Durga, Lakshmi, and Saraswati.",
    significance:
      "Devi Aarti invokes the blessings of the Mother Goddess for protection, prosperity, and spiritual wisdom. It strengthens feminine divine energy.",
    timing: "Morning & Evening • Year-round",
  },
  {
    id: "ganesha-aarti",
    name: "गणेश आरती",
    deity: "Lord Ganesha",
    description:
      "The Ganesha Aarti is performed at the beginning of all puja and ceremonies to seek the blessings of the remover of obstacles.",
    lyrics:
      "जय गणेश जय गणेश... जय गणेश देवा\nमाता जाकी पार्वती... पिता महादेवा\n\nThis aarti invokes the elephant-headed god for successful new beginnings.",
    significance:
      "Ganesha Aarti removes obstacles from life's path and grants wisdom and intelligence. It is the first aarti performed before any ritual.",
    timing: "Morning • Before any ceremony",
  },
];

export default function AartiPage() {
  // Uncomment when you add your context back
  // const { language } = useLanguage();
  // const t = translations[language].cta;

  // Placeholder for translations to keep the code running
  const t = {
    title: "Experience the Divine",
    highlight: "Anywhere, Anytime",
    sub: "Get the complete collection of Aarti, Bhajans, and daily Panchang right in your pocket. Download the Setu Sanatan app today."
  };

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          // Perfect gradient: Softly blends from white at the top to your warm off-white
          background: "linear-gradient(180deg, var(--white) 0%, var(--off-white) 20%, var(--off-white) 80%, var(--white) 100%)",
          paddingTop: "150px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle, Warm Glow - Not overly orange, just a hint of light */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(255, 107, 0, 0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", paddingBottom: "80px", position: "relative", zIndex: 1 }}>
          
          {/* Header Section */}
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.85rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--text-soft)", // Earthy orange-brown instead of bright orange
                marginBottom: "16px",
                display: "block",
                fontWeight: 600,
              }}
            >
              Divine Hymns
            </span>
            <h1
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                fontWeight: "bold",
                color: "var(--text-dark)",
                marginBottom: "24px",
                lineHeight: 1.1,
              }}
            >
              Sacred Aarti <span style={{ color: "var(--saffron)" }}>Collection</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-mid)", maxWidth: "720px", margin: "0 auto", lineHeight: 1.8, fontWeight: 300 }}>
              Each aarti is a divine hymn of praise and gratitude, performed with flowers, lights, and devotion to invoke the blessings of the divine.
            </p>
          </div>

          {/* Stats Section */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", marginBottom: "80px" }}>
            {[
              { label: "Sacred Aartis", value: "5+", icon: <BookOpen size={22} /> },
              { label: "Audio Included", value: "Yes", icon: <Music size={22} /> },
              { label: "Devotional", value: "Pure", icon: <Flame size={22} /> },
              { label: "Daily Practice", value: "Timing", icon: <Clock size={22} /> },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--white)",
                  // Earthy border instead of bright orange
                  border: "1px solid rgba(122, 53, 0, 0.06)",
                  borderRadius: "20px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  // Dark brown shadow for a premium feel
                  boxShadow: "0 10px 30px rgba(58, 24, 0, 0.03)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "none",
                }}
                className="offering-card"
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, rgba(255,107,0,0.08), rgba(255,169,64,0.04))",
                    color: "var(--saffron)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: "var(--text-dark)", fontFamily: "'Cinzel', serif" }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-mid)" }}>{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Layout Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 350px", gap: "40px", alignItems: "start" }}>
            
            {/* Left Column: Aarti List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {aartiData.map((aarti) => (
                <div
                  key={aarti.id}
                  style={{
                    background: "var(--white)",
                    border: "1px solid rgba(122, 53, 0, 0.06)",
                    borderRadius: "24px",
                    padding: "48px",
                    boxShadow: "0 14px 40px rgba(58, 24, 0, 0.03)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Premium Top Line Accent */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--saffron), var(--orange-lt))" }} />

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                    <div>
                      <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--text-soft)", textTransform: "uppercase", fontWeight: 600 }}>
                        {aarti.deity}
                      </span>
                      <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "2.2rem", color: "var(--text-dark)", marginTop: "8px" }}>
                        {aarti.name}
                      </h2>
                    </div>
                  </div>

                  <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "40px", fontWeight: 300 }}>
                    {aarti.description}
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", marginBottom: "32px" }}>
                    {/* Lyrics Box - Softer background */}
                    <div style={{ padding: "28px", background: "linear-gradient(135deg, rgba(255, 248, 242, 0.5), transparent)", borderRadius: "16px", border: "1px solid rgba(122, 53, 0, 0.05)", borderLeft: "3px solid var(--saffron)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                        <Music size={18} color="var(--saffron)" />
                        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", fontWeight: "600", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          Lyrics Overview
                        </h3>
                      </div>
                      <p style={{ fontSize: "1.1rem", color: "var(--text-dark)", fontFamily: "serif", whiteSpace: "pre-line", lineHeight: 1.9, fontStyle: "italic", opacity: 0.9 }}>
                        {aarti.lyrics}
                      </p>
                    </div>

                    {/* Significance Box */}
                    <div style={{ padding: "28px", background: "var(--white)", borderRadius: "16px", border: "1px solid rgba(122, 53, 0, 0.08)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                        <Sparkles size={18} color="var(--text-soft)" />
                        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", fontWeight: "600", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          Significance
                        </h3>
                      </div>
                      <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.7, fontWeight: 300 }}>
                        {aarti.significance}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", color: "var(--text-soft)", paddingTop: "20px", borderTop: "1px solid rgba(122, 53, 0, 0.06)" }}>
                    <Clock size={16} />
                    <span>{aarti.timing}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Instructions Sticky Sidebar */}
            <div style={{ position: "sticky", top: "140px" }}>
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(122, 53, 0, 0.06)",
                  borderRadius: "24px",
                  padding: "36px",
                  boxShadow: "0 14px 40px rgba(58, 24, 0, 0.03)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "rgba(255, 107, 0, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--saffron)" }}>
                    <Info size={22} />
                  </div>
                  <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1.6rem", color: "var(--text-dark)" }}>
                    How to Perform
                  </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  {[
                    { num: "1", title: "Prepare", desc: "Light a lamp or diya with ghee or oil." },
                    { num: "2", title: "Gather", desc: "Collect flowers, incense, and offerings." },
                    { num: "3", title: "Chant", desc: "Sing the sacred aarti hymn with devotion." },
                    { num: "4", title: "Offer", desc: "Wave the lamp in circular motions." },
                  ].map((step, i, arr) => (
                    <div key={step.num} style={{ display: "flex", gap: "18px", position: "relative" }}>
                      {/* Thinner, softer connecting line */}
                      {i !== arr.length - 1 && (
                        <div style={{ position: "absolute", top: "42px", bottom: "-28px", left: "20px", width: "1px", background: "rgba(122, 53, 0, 0.15)" }} />
                      )}
                      <div
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                          color: "var(--text-soft)",
                          minWidth: "42px",
                          height: "42px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "var(--white)",
                          border: "1px solid rgba(122, 53, 0, 0.15)",
                          borderRadius: "50%",
                          zIndex: 1,
                        }}
                      >
                        {step.num}
                      </div>
                      <div style={{ paddingTop: "2px" }}>
                        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.05rem", fontWeight: "600", color: "var(--text-dark)", marginBottom: "6px" }}>
                          {step.title}
                        </h3>
                        <p style={{ fontSize: "0.95rem", color: "var(--text-mid)", lineHeight: 1.6, fontWeight: 300 }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            DOWNLOAD CTA SECTION
            Perfectly integrated with the background
        ========================================= */}
        <section
          id="cta"
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "120px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            // Removes hard border and relies on the gradient blend
          }}
        >
          {/* Background Mandala - Very subtle */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.04, 
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
              <circle cx="400" cy="400" r="350" stroke="var(--text-soft)" strokeWidth="1.5" />
              <circle cx="400" cy="400" r="280" stroke="var(--text-soft)" strokeWidth="1" />
              <circle cx="400" cy="400" r="210" stroke="var(--text-soft)" strokeWidth="1.5" />
              <circle cx="400" cy="400" r="140" stroke="var(--text-soft)" strokeWidth="1" />
              <line x1="50" y1="400" x2="750" y2="400" stroke="var(--text-soft)" strokeWidth="0.8" />
              <line x1="400" y1="50" x2="400" y2="750" stroke="var(--text-soft)" strokeWidth="0.8" />
              <line x1="152" y1="152" x2="648" y2="648" stroke="var(--text-soft)" strokeWidth="0.8" />
              <line x1="648" y1="152" x2="152" y2="648" stroke="var(--text-soft)" strokeWidth="0.8" />
            </svg>
          </div>

          <div style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}>
            <div
              className="om-circle"
              style={{
                width: "80px",
                height: "80px",
                margin: "0 auto 24px",
                backgroundColor: "var(--white)",
                border: "1px solid rgba(255, 107, 0, 0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 30px rgba(255, 107, 0, 0.08)",
              }}
            >
              <span className="om-symbol" style={{ fontSize: "2.5rem", color: "var(--saffron)", lineHeight: 1 }}>
                ॐ
              </span>
            </div>

            <h2
              className="cta-title"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                color: "var(--text-dark)",
                lineHeight: 1.2,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
              }}
            >
              {t.title}
              <br />
              <span style={{ color: "var(--saffron)" }}>{t.highlight}</span>
            </h2>

            <p
              className="cta-sub"
              style={{
                fontSize: "1.1rem",
                color: "var(--text-mid)",
                lineHeight: 1.6,
                marginBottom: "40px",
                padding: "0 20px",
                fontWeight: 300,
              }}
            >
              {t.sub}
            </p>

            <div className="cta-btns" style={{ display: "flex", justifyContent: "center" }}>
             <StoreButtons />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}