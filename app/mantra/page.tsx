"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Volume2, Sun, Moon, Shield, Heart } from "lucide-react";
import StoreButtons from "../../components/StoreButtons";

// Note: If you need Metadata, move it to a layout.tsx or a separate server component wrapper 
// since this file now uses "use client" for the consistent CTA component.

const mantraData = [
  {
    id: "om-namah-shivaya",
    name: "ॐ नमः शिवाय",
    transliteration: "Om Namah Shivaya",
    meaning: "I bow to Shiva, the supreme consciousness.",
    benefits: ["Meditation", "Inner Peace", "Spiritual Awakening"],
    deity: "Lord Shiva",
    icon: <Moon size={24} strokeWidth={1.5} />,
  },
  {
    id: "gayatri-mantra",
    name: "गायत्री मंत्र",
    transliteration: "Om Bhur Bhuvah Svah...",
    meaning: "The most sacred mantra invoking divine illumination and wisdom.",
    benefits: ["Intellectual Clarity", "Wisdom", "Illumination"],
    deity: "Surya (Sun God)",
    icon: <Sun size={24} strokeWidth={1.5} />,
  },
  {
    id: "hare-krishna",
    name: "हरे कृष्ण",
    transliteration: "Hare Krishna Hare Krishna...",
    meaning: "Calls upon divine love and grace of Lord Krishna.",
    benefits: ["Divine Love", "Joy", "Devotion"],
    deity: "Lord Krishna",
    icon: <Heart size={24} strokeWidth={1.5} />,
  },
  {
    id: "durga-mantra",
    name: "दुर्गा मंत्र",
    transliteration: "Om Dum Durgayai Namah",
    meaning: "I bow to the Divine Mother.",
    benefits: ["Protection", "Courage", "Obstacle Removal"],
    deity: "Goddess Durga",
    icon: <Shield size={24} strokeWidth={1.5} />,
  },
];

export default function MantraPage() {
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
          background: "linear-gradient(180deg, var(--white) 0%, var(--off-white) 20%, var(--off-white) 80%, var(--white) 100%)",
          paddingTop: "150px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Background Glow */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw",
            height: "500px",
            background: "radial-gradient(ellipse, rgba(255, 107, 0, 0.03) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", paddingBottom: "80px", position: "relative", zIndex: 1 }}>
          
          {/* Header Section */}
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.85rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--text-soft)",
                marginBottom: "16px",
                display: "block",
                fontWeight: 600,
              }}
            >
              Vedic Vibrations
            </span>
            <h1
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                fontWeight: "bold",
                color: "var(--text-dark)",
                marginBottom: "24px",
                lineHeight: 1.1,
              }}
            >
              Sacred <span style={{ color: "var(--saffron)" }}>Mantras</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-mid)", maxWidth: "720px", margin: "0 auto", lineHeight: 1.8, fontWeight: 300 }}>
              108+ sacred mantras with Sanskrit text, transliteration, and meaning. Harness the power of sound to transform your consciousness.
            </p>
          </div>

          {/* Mantras Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px", marginBottom: "80px" }}>
            {mantraData.map((mantra) => (
              <div
                key={mantra.id}
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(122, 53, 0, 0.06)",
                  borderRadius: "24px",
                  padding: "40px",
                  boxShadow: "0 14px 40px rgba(58, 24, 0, 0.02)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Premium Top Line Accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--saffron), transparent)" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                  <div>
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--text-soft)", textTransform: "uppercase", fontWeight: 600 }}>
                      {mantra.deity}
                    </span>
                    <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "2.4rem", color: "var(--text-dark)", marginTop: "8px" }}>
                      {mantra.name}
                    </h2>
                  </div>
                  <div style={{ color: "var(--saffron)", opacity: 0.8 }}>
                    {mantra.icon}
                  </div>
                </div>

                {/* Transliteration Box */}
                <div style={{ marginBottom: "24px", padding: "16px 20px", background: "linear-gradient(135deg, rgba(255, 248, 242, 0.5), transparent)", borderRadius: "12px", border: "1px solid rgba(122, 53, 0, 0.05)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <Volume2 size={14} color="var(--saffron)" />
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--text-dark)", textTransform: "uppercase", fontWeight: 600 }}>
                      Chant
                    </span>
                  </div>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-dark)", fontStyle: "italic", fontFamily: "serif" }}>
                    "{mantra.transliteration}"
                  </p>
                </div>

                <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "32px", flexGrow: 1, fontWeight: 300 }}>
                  {mantra.meaning}
                </p>

                {/* Benefits Tags */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
                    <Sparkles size={14} color="var(--text-soft)" />
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--text-soft)", textTransform: "uppercase" }}>
                      Benefits
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {mantra.benefits.map((b) => (
                      <span
                        key={b}
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "0.7rem",
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          background: "var(--off-white)",
                          color: "var(--text-dark)",
                          padding: "6px 14px",
                          borderRadius: "100px",
                          border: "1px solid rgba(122, 53, 0, 0.08)",
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Instructions Section */}
          <div style={{ background: "var(--white)", border: "1px solid rgba(122, 53, 0, 0.06)", borderRadius: "24px", padding: "60px 40px", boxShadow: "0 14px 40px rgba(58, 24, 0, 0.02)" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "2.4rem", color: "var(--text-dark)" }}>
                The Practice of Japa
              </h2>
              <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", maxWidth: "600px", margin: "16px auto 0", fontWeight: 300 }}>
                Chanting (Japa) is a profound spiritual discipline. Follow these steps to maximize the spiritual benefits of your practice.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px" }}>
              {[
                { num: "I", title: "Sacred Space", desc: "Find a quiet, clean place. Sit facing East or North for optimal energy flow." },
                { num: "II", title: "Posture", desc: "Keep your spine comfortably erect to allow the free flow of prana (life force)." },
                { num: "III", title: "The Mala", desc: "Use a mala (rosary) of 108 beads to maintain focus and count repetitions." },
                { num: "IV", title: "Devotion", desc: "Focus entirely on the sound and meaning. Let the vibration absorb your mind." },
              ].map((step) => (
                <div key={step.num} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "2rem", color: "var(--saffron)", marginBottom: "16px", opacity: 0.8 }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", fontWeight: "600", color: "var(--text-dark)", marginBottom: "12px" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-mid)", lineHeight: 1.6, fontWeight: 300 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            DOWNLOAD CTA SECTION
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
          }}
        >
          {/* Background Mandala */}
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