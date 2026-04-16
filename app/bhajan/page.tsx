"use client";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Music, Heart, Headphones, Sparkles, BookOpen, Mic2 } from "lucide-react";
import StoreButtons from "@/components/StoreButtons";
// import StoreButtons from "./StoreButtons";

// Note: If you need Metadata, move it to a layout.tsx or a separate server component wrapper 
// since this file now uses "use client" for the consistent CTA component.

interface BhajanData {
  id: string;
  name: string;
  artist?: string;
  tradition: string;
  description: string;
  lyrics: string;
  meaning: string;
}

const bhajanData: BhajanData[] = [
  {
    id: "bhairav-bhajan",
    name: "भैरव भजन",
    artist: "Traditional",
    tradition: "Shaiva",
    description:
      "A powerful morning bhajan dedicated to Lord Shiva in his fierce form, Bhairav.",
    lyrics:
      "भैरव महाकाल... शंकर शंभू\nहर हर महादेव... नीलकंठ नथैया\nत्रिपुरारि तारक... सदा सुखकारी",
    meaning:
      "This bhajan invokes Lord Shiva as the supreme protector and destroyer of evil. It is traditionally sung to clear the mind of fear and ignorance.",
  },
  {
    id: "radha-krishna",
    name: "राधा कृष्ण भजन",
    artist: "Traditional",
    tradition: "Vaishnav",
    description:
      "A sweet devotional bhajan celebrating the divine love between Radha and Krishna.",
    lyrics:
      "राधा मनोहरी... कृष्ण सुंदर\nनीले नीलाम्बर... पीत पटाम्बर\nबंशी धुन रंजिनी... राधिका रंगी",
    meaning:
      "This bhajan celebrates divine love and teaches that love is the highest path to God. It highlights the beauty of devotion and surrender.",
  },
  {
    id: "durga-stuti",
    name: "दुर्गा स्तुति",
    artist: "Traditional",
    tradition: "Shakta",
    description:
      "A powerful hymn honoring Goddess Durga, the warrior goddess.",
    lyrics:
      "जय माता दी... दुर्गा भवानी\nशेरनवाली... महिषमर्दिनी\nचंड चामुंडा... अष्टभुजा",
    meaning:
      "This stuti praises the divine feminine power that destroys evil and ignorance, granting strength and courage to the devotee.",
  },
  {
    id: "hanuman-chalisa",
    name: "हनुमान चालीसा",
    artist: "Traditional",
    tradition: "Vaishnav",
    description:
      "The most popular devotional composition with 40 verses dedicated to Lord Hanuman.",
    lyrics:
      "श्री गुरु चरन सरोज रज\nनिज धाम को तजि देहु सब काहू\nकहत नटट सुनहु सुख साहू",
    meaning:
      "Hanuman Chalisa is a 40-verse prayer to Hanuman, the devoted follower of Ram. It is chanted to gain strength, courage, and to overcome obstacles.",
  },
];

export default function BhajanPage() {
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
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
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
              Sacred Melodies
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
              Devotional <span style={{ color: "var(--saffron)" }}>Bhajans</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-mid)", maxWidth: "720px", margin: "0 auto", lineHeight: 1.8, fontWeight: 300 }}>
              A curated collection of sacred hymns and kirtans from all spiritual traditions. Immerse yourself in the healing power of divine music.
            </p>
          </div>

          {/* Elegant Stats Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", marginBottom: "80px" }}>
            {[
              { label: "Sacred Bhajans", value: "1000+", icon: <Music size={22} /> },
              { label: "Pure Devotion", value: "Bhakti", icon: <Heart size={22} /> },
              { label: "High-Res Audio", value: "Listen", icon: <Headphones size={22} /> },
              { label: "Spiritual Paths", value: "10+", icon: <Sparkles size={22} /> },
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

          {/* Main Layout Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 350px", gap: "40px", alignItems: "start" }}>
            
            {/* Left Column: Bhajans List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {bhajanData.map((bhajan) => (
                <div
                  key={bhajan.id}
                  style={{
                    background: "var(--white)",
                    border: "1px solid rgba(122, 53, 0, 0.06)",
                    borderRadius: "24px",
                    padding: "48px",
                    boxShadow: "0 14px 40px rgba(58, 24, 0, 0.02)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Premium Top Line Accent */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--saffron), var(--orange-lt))" }} />

                  <div style={{ marginBottom: "24px" }}>
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--text-soft)", textTransform: "uppercase", fontWeight: 600 }}>
                      {bhajan.tradition} Tradition
                    </span>
                    <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "2.2rem", color: "var(--text-dark)", marginTop: "8px", marginBottom: "12px" }}>
                      {bhajan.name}
                    </h2>
                    {bhajan.artist && (
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-mid)", fontSize: "0.95rem" }}>
                        <Mic2 size={16} color="var(--saffron)" />
                        <span>Singer: <span style={{ fontWeight: 500, color: "var(--text-dark)" }}>{bhajan.artist}</span></span>
                      </div>
                    )}
                  </div>

                  <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "40px", fontWeight: 300 }}>
                    {bhajan.description}
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
                    {/* Lyrics Box */}
                    <div style={{ padding: "28px", background: "linear-gradient(135deg, rgba(255, 248, 242, 0.5), transparent)", borderRadius: "16px", border: "1px solid rgba(122, 53, 0, 0.05)", borderLeft: "3px solid var(--saffron)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                        <Music size={18} color="var(--saffron)" />
                        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", fontWeight: "600", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          Lyrics Overview
                        </h3>
                      </div>
                      <p style={{ fontSize: "1.1rem", color: "var(--text-dark)", fontFamily: "serif", whiteSpace: "pre-line", lineHeight: 1.9, fontStyle: "italic", opacity: 0.9 }}>
                        {bhajan.lyrics}
                      </p>
                    </div>

                    {/* Meaning Box */}
                    <div style={{ padding: "28px", background: "var(--white)", borderRadius: "16px", border: "1px solid rgba(122, 53, 0, 0.08)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                        <BookOpen size={18} color="var(--text-soft)" />
                        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", fontWeight: "600", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          Meaning & Significance
                        </h3>
                      </div>
                      <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.7, fontWeight: 300 }}>
                        {bhajan.meaning}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Benefits Sidebar */}
            <div style={{ position: "sticky", top: "140px" }}>
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(122, 53, 0, 0.06)",
                  borderRadius: "24px",
                  padding: "36px",
                  boxShadow: "0 14px 40px rgba(58, 24, 0, 0.02)",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                  <Sparkles size={24} color="var(--saffron)" style={{ margin: "0 auto 12px" }} />
                  <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1.6rem", color: "var(--text-dark)", lineHeight: 1.3 }}>
                    The Power of <br /> Chanting
                  </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  {[
                    { title: "Emotional Healing", desc: "Bhajans soothe the mind and heal deep emotional wounds." },
                    { title: "Spiritual Growth", desc: "Regular chanting elevates consciousness and focus." },
                    { title: "Mental Peace", desc: "Rhythmic melodies naturally calm a racing mind." },
                    { title: "Musical Beauty", desc: "Experience the therapeutic joy of sacred music." },
                  ].map((b, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--saffron)", marginTop: "8px", flexShrink: 0 }} />
                      <div>
                        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.05rem", fontWeight: "600", color: "var(--text-dark)", marginBottom: "6px" }}>
                          {b.title}
                        </h3>
                        <p style={{ fontSize: "0.95rem", color: "var(--text-mid)", lineHeight: 1.6, fontWeight: 300 }}>
                          {b.desc}
                        </p>
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