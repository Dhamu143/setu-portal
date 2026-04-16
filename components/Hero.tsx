"use client";
import { useEffect, useRef } from "react";
import StoreButtons from "./StoreButtons";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = translations[language].hero;

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 30; i++) {
      const el = document.createElement("div");
      // Mix of saffron and golden particles for a richer feel
      const color = i % 2 === 0 ? "#f59e0b" : i % 3 === 0 ? "#ea580c" : "#fde047";
      const size = 3 + Math.random() * 5;
      
      el.style.cssText = `
        position: absolute;
        width: ${size}px; 
        height: ${size}px; 
        border-radius: 50%;
        left: ${5 + Math.random() * 90}%;
        top: ${5 + Math.random() * 90}%;
        background: ${color};
        box-shadow: 0 0 ${size * 2}px ${color};
        opacity: ${0.1 + Math.random() * 0.4};
        animation: heroFloat ${4 + Math.random() * 5}s ease-in-out ${Math.random() * 5}s infinite alternate;
      `;
      container.appendChild(el);
    }
    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  const spinStyle = (dur: number, rev = false): React.CSSProperties => ({
    animation: `heroSpin ${dur}s linear infinite ${rev ? "reverse" : ""}`,
  });

  return (
    <>
      {/* Required Animations for the beautiful UI effects */}
      <style>{`
        @keyframes heroSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes heroFloat { 0% { transform: translateY(0px) scale(1); } 100% { transform: translateY(-20px) scale(1.1); } }
        @keyframes heroFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes heroFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes omPulse { 
          0%, 100% { transform: scale(1); box-shadow: 0 10px 30px rgba(249,115,22,0.15), inset 0 0 20px rgba(252,211,77,0.1); } 
          50% { transform: scale(1.05); box-shadow: 0 15px 40px rgba(249,115,22,0.3), inset 0 0 30px rgba(252,211,77,0.3); } 
        }
      `}</style>

      <section
        id="hero-section"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: "100px",
          paddingBottom: "60px",
          position: "relative",
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          background:
            "radial-gradient(ellipse 100% 80% at 50% -20%, #fff7ed 0%, #fffbeb 40%, #ffffff 100%)",
        }}
      >
        {/* ── Background Cosmic Orbits ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {/* Ambient Glows */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "70vw",
              height: "70vw",
              minWidth: 600,
              borderRadius: "50%",
              opacity: 0.5,
              background: "radial-gradient(circle, rgba(255,237,213,0.8) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              left: "-10%",
              width: "60vw",
              height: "60vw",
              minWidth: 500,
              borderRadius: "50%",
              opacity: 0.4,
              background: "radial-gradient(circle, rgba(254,240,138,0.6) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              perspective: 1200,
            }}
          >
            <div
              style={{
                position: "relative",
                width: 900,
                height: 900,
                transformStyle: "preserve-3d",
                transform: "rotateX(65deg) rotateZ(-15deg)",
              }}
            >
              {/* Sun core (Brahmand Center) */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  margin: "auto",
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #ffffff, #fef9c3, #fb923c)",
                  boxShadow: "0 0 120px rgba(245,158,11,0.6), inset 0 0 40px #fff",
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: -25,
                    borderRadius: "50%",
                    border: "1px solid rgba(251,146,60,0.4)",
                    ...spinStyle(12),
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: -50,
                    borderRadius: "50%",
                    border: "1px dashed rgba(249,115,22,0.3)",
                    ...spinStyle(18, true),
                  }}
                />
              </div>

              {/* Orbit 1 */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  margin: "auto",
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  border: "1px solid rgba(249,115,22,0.25)",
                  transformStyle: "preserve-3d",
                  ...spinStyle(20),
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    marginLeft: -14,
                    marginTop: -14,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 30% 30%, #fcd34d, #fb923c)",
                    boxShadow: "0 0 30px rgba(249,115,22,0.8)",
                  }}
                />
              </div>

              {/* Orbit 2 */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  margin: "auto",
                  width: 520,
                  height: 520,
                  borderRadius: "50%",
                  border: "2px dashed rgba(251,146,60,0.15)",
                  transformStyle: "preserve-3d",
                  ...spinStyle(30, true),
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    marginLeft: -18,
                    marginBottom: -18,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "linear-gradient(to right, #fde047, #ea580c)",
                    boxShadow: "0 0 40px rgba(245,158,11,0.8)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: -24,
                      borderRadius: "50%",
                      ...spinStyle(6),
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        marginLeft: -6,
                        marginTop: -6,
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#fff",
                        boxShadow: "0 0 20px rgba(255,255,255,1)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Orbit 3 */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  margin: "auto",
                  width: 720,
                  height: 720,
                  borderRadius: "50%",
                  border: "1px solid rgba(234,88,12,0.1)",
                  transformStyle: "preserve-3d",
                  ...spinStyle(45),
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: -24,
                    marginTop: -24,
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "linear-gradient(to bottom right, #f97316, #dc2626)",
                    boxShadow: "0 0 50px rgba(239,68,68,0.6)",
                  }}
                >
                  <div style={{ position: "absolute", inset: -15, borderRadius: "50%", border: "2px solid rgba(253,186,116,0.4)" }} />
                  <div style={{ position: "absolute", inset: -30, borderRadius: "50%", border: "1px solid rgba(251,146,60,0.2)" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating particles container */}
          <div ref={particlesRef} style={{ position: "absolute", inset: 0, mixBlendMode: "multiply" }} />
        </div>

        {/* ── Hero Content Front ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "0 24px",
            maxWidth: 1000,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Om Emblem */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 110,
              height: 110,
              marginBottom: 40,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(249,115,22,0.2)",
              animation: "heroFadeIn 1s ease-out both, omPulse 4s infinite ease-in-out",
            }}
          >
            <span
              style={{
                fontSize: "3.5rem",
                background: "linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0px 4px 6px rgba(234,88,12,0.2))",
              }}
            >
              ॐ
            </span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              marginBottom: 24,
              animation: "heroFadeUp 0.8s 0.2s ease-out both",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                paddingBottom: 10,
                background: "linear-gradient(135deg, #c2410c 0%, #f97316 40%, #fb923c 70%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SANATAN SETU
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
              maxWidth: 700,
              margin: "0 auto 48px",
              lineHeight: 1.6,
              fontWeight: 500,
              color: "#4b5563",
              animation: "heroFadeUp 0.8s 0.4s ease-out both",
              textShadow: "0 1px 2px rgba(255,255,255,0.8)",
            }}
          >
            {t.desc}
          </p>

          {/* Call To Action Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              justifyContent: "center",
              alignItems: "center",
              animation: "heroFadeUp 0.8s 0.6s ease-out both",
            }}
          >
            <StoreButtons />
          </div>
        </div>
      </section>
    </>
  );
}