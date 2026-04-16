"use client";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ScrollText, Lightbulb, Compass, Feather, Sparkles } from "lucide-react";
import StoreButtons from "@/components/StoreButtons";
// import StoreButtons from "./StoreButtons";

// Note: If you need Metadata, move it to a layout.tsx or a separate server component wrapper 
// since this file now uses "use client" for the consistent CTA component.

const slokaData = [
  {
    id: "bhagavad-gita-2-47",
    sloka: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    meaning: "You have a right to perform your duty, but not to the fruits thereof.",
    source: "Bhagavad Gita 2:47",
    commentary: "This sloka teaches Karma Yoga - the yoga of action without attachment. It encourages focusing on the process rather than the outcome.",
    significance: "Removes fear and anxiety from actions, leading to mental peace and eventual liberation.",
  },
  {
    id: "bhagavad-gita-10-8",
    sloka: "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते।",
    meaning: "I am the source of all spiritual and material worlds. Everything emanates from Me.",
    source: "Bhagavad Gita 10:8",
    commentary: "Lord Krishna declares himself as the supreme source of all creation, both material and spiritual.",
    significance: "Instills the understanding that everything is interconnected and originates from the same divine source.",
  },
  {
    id: "upanishad-tat-tvam-asi",
    sloka: "तत् त्वम् असि।",
    meaning: "You are that. This reveals the non-dual nature of reality.",
    source: "Chandogya Upanishad 6.8.7",
    commentary: "A Mahavakya (Great Saying) establishing the identity of the Atman (individual soul) with Brahman (universal consciousness).",
    significance: "Guides the seeker towards ultimate self-realization and the dissolution of the ego.",
  },
  {
    id: "isha-upanishad-1",
    sloka: "ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्।",
    meaning: "All this universe is pervaded by the Lord, whatever is moving in this world.",
    source: "Isha Upanishad 1",
    commentary: "The divine presence is not distant but pervades every atom of existence. We should live and enjoy with a sense of non-attachment.",
    significance: "Teaches spiritual detachment, ethical living, and deep harmony with the divine in everyday life.",
  },
];

export default function SlokaPage() {
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
              Eternal Wisdom
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
              Sacred <span style={{ color: "var(--saffron)" }}>Slokas</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-mid)", maxWidth: "720px", margin: "0 auto", lineHeight: 1.8, fontWeight: 300 }}>
              Profound verses from the Bhagavad Gita, Vedas, and Upanishads containing the essence of Hindu philosophy and the path to liberation.
            </p>
          </div>

          {/* Stats Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", marginBottom: "80px" }}>
            {[
              { label: "Sacred Verses", value: "700+", icon: <ScrollText size={22} /> },
              { label: "Ancient Wisdom", value: "Truth", icon: <Lightbulb size={22} /> },
              { label: "Deep Commentary", value: "Insight", icon: <Feather size={22} /> },
              { label: "Spiritual Path", value: "Dharma", icon: <Compass size={22} /> },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(122, 53, 0, 0.06)",
                  borderRadius: "16px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  boxShadow: "0 10px 30px rgba(58, 24, 0, 0.02)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
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

          {/* Slokas Layout */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px", marginBottom: "80px" }}>
            {slokaData.map((sloka) => (
              <div
                key={sloka.id}
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(122, 53, 0, 0.06)",
                  borderRadius: "2px", // Editorial feel
                  padding: "48px",
                  boxShadow: "0 14px 40px rgba(58, 24, 0, 0.02)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Premium Top Line Accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--saffron), transparent)" }} />

                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                  <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.8rem", letterSpacing: "0.2em", color: "var(--text-soft)", textTransform: "uppercase", fontWeight: 600 }}>
                    ~ {sloka.source} ~
                  </span>
                </div>

                {/* The Sanskrit Verse */}
                <div style={{ marginBottom: "32px", padding: "32px", background: "linear-gradient(135deg, rgba(255, 248, 242, 0.6), transparent)", borderTop: "1px solid rgba(122, 53, 0, 0.05)", borderBottom: "1px solid rgba(122, 53, 0, 0.05)", textAlign: "center" }}>
                  <p style={{ fontSize: "2rem", color: "var(--saffron)", fontFamily: "serif", lineHeight: 1.6 }}>
                    {sloka.sloka}
                  </p>
                </div>

                {/* English Meaning */}
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                  <p style={{ fontSize: "1.2rem", color: "var(--text-dark)", fontStyle: "italic", fontFamily: "serif", maxWidth: "800px", margin: "0 auto" }}>
                    "{sloka.meaning}"
                  </p>
                </div>

                {/* Commentary & Significance Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", paddingTop: "32px", borderTop: "1px solid rgba(122, 53, 0, 0.06)" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                      <Feather size={18} color="var(--text-soft)" />
                      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", fontWeight: "600", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        Commentary
                      </h3>
                    </div>
                    <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.7, fontWeight: 300 }}>
                      {sloka.commentary}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                      <Sparkles size={18} color="var(--text-soft)" />
                      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", fontWeight: "600", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        Spiritual Significance
                      </h3>
                    </div>
                    <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.7, fontWeight: 300 }}>
                      {sloka.significance}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Sources Section */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
             <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "2.2rem", color: "var(--text-dark)", marginBottom: "16px" }}>
               Sacred Sources
             </h2>
             <div style={{ width: "40px", height: "2px", background: "var(--saffron)", margin: "0 auto" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { title: "Bhagavad Gita", desc: "The Song of God. 700 verses containing Lord Krishna's timeless wisdom on dharma, duty, and liberation." },
              { title: "The Vedas", desc: "The oldest and most authoritative spiritual texts in Hindu philosophy, containing the fundamental truths of reality." },
              { title: "Upanishads", desc: "The philosophical culmination of the Vedas, exploring the profound relationship between Brahman and Atman." },
            ].map((source) => (
              <div key={source.title} style={{ background: "var(--white)", border: "1px solid rgba(122, 53, 0, 0.08)", borderRadius: "16px", padding: "32px", textAlign: "center", boxShadow: "0 10px 30px rgba(58, 24, 0, 0.02)" }}>
                <BookOpen size={24} color="var(--saffron)" style={{ margin: "0 auto 16px", opacity: 0.8 }} />
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.2rem", fontWeight: "bold", color: "var(--text-dark)", marginBottom: "12px" }}>
                  {source.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-mid)", lineHeight: 1.6, fontWeight: 300 }}>
                  {source.desc}
                </p>
              </div>
            ))}
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