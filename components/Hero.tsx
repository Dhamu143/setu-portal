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
    for (let i = 0; i < 20; i++) {
      const el = document.createElement("div");
      el.style.cssText = `
        position:absolute;
        width:6px; height:6px; border-radius:50%;
        left:${10 + Math.random() * 80}%;
        top:${10 + Math.random() * 80}%;
        background:${i % 2 === 0 ? "#f59e0b" : "#ea580c"};
        opacity:${0.2 + Math.random() * 0.3};
        animation:heroFloat ${4 + Math.random() * 4}s ease-in-out ${Math.random() * 6}s infinite;
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
    <section
      id="hero-section"
      style={{
        minHeight: "100vh",
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "80px",
        position: "relative",
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,237,213,0.8) 0%, rgba(255,250,240,1) 60%, #ffffff 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-25%",
            right: "-25%",
            width: 800,
            height: 800,
            borderRadius: "50%",
            opacity: 0.4,
            background: "radial-gradient(circle,#ffedd5 0%,transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-25%",
            left: "-25%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            opacity: 0.4,
            background: "radial-gradient(circle,#fef08a 0%,transparent 70%)",
            filter: "blur(80px)",
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
              transform: "rotateX(70deg) rotateZ(-10deg)",
            }}
          >
            {/* Sun core */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                margin: "auto",
                width: 128,
                height: 128,
                borderRadius: "50%",
                background:
                  "linear-gradient(to bottom right,white,#fef9c3,#fb923c)",
                boxShadow: "0 0 100px rgba(245,158,11,0.8)",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: -20,
                  borderRadius: "50%",
                  border: "1px solid rgba(251,146,60,0.3)",
                  ...spinStyle(10),
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: -40,
                  borderRadius: "50%",
                  border: "1px dashed rgba(249,115,22,0.2)",
                  ...spinStyle(15, true),
                }}
              />
            </div>

            {/* Orbit 1 */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                margin: "auto",
                width: 300,
                height: 300,
                borderRadius: "50%",
                border: "1px solid rgba(249,115,22,0.3)",
                transformStyle: "preserve-3d",
                ...spinStyle(15),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  marginLeft: -12,
                  marginTop: -12,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "#fb923c",
                  boxShadow: "0 0 30px rgba(249,115,22,1)",
                }}
              />
            </div>

            {/* Orbit 2 */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                margin: "auto",
                width: 480,
                height: 480,
                borderRadius: "50%",
                border: "2px dashed rgba(251,146,60,0.2)",
                transformStyle: "preserve-3d",
                ...spinStyle(25, true),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  marginLeft: -16,
                  marginBottom: -16,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "linear-gradient(to right,#fde047,#f59e0b)",
                  boxShadow: "0 0 40px rgba(245,158,11,1)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: -20,
                    borderRadius: "50%",
                    ...spinStyle(4),
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
                      background: "white",
                      boxShadow: "0 0 15px rgba(255,255,255,0.9)",
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
                width: 660,
                height: 660,
                borderRadius: "50%",
                border: "1px solid rgba(234,88,12,0.15)",
                transformStyle: "preserve-3d",
                ...spinStyle(40),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: -20,
                  marginTop: -20,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(to bottom right,#fb923c,#ef4444)",
                  boxShadow: "0 0 40px rgba(239,68,68,0.8)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: -15,
                    borderRadius: "50%",
                    border: "4px solid rgba(253,186,116,0.3)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: -25,
                    borderRadius: "50%",
                    border: "2px solid rgba(251,146,60,0.2)",
                  }}
                />
              </div>
            </div>

            {/* Orbit 4 */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                margin: "auto",
                width: 820,
                height: 820,
                borderRadius: "50%",
                border: "1px dotted rgba(249,115,22,0.1)",
                transformStyle: "preserve-3d",
                ...spinStyle(60, true),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: -16,
                  marginTop: -16,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "linear-gradient(to top right,#fef3c7,#fdba74)",
                  boxShadow: "0 0 30px rgba(253,186,116,0.8)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "25%",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "white",
                  boxShadow: "0 0 20px rgba(255,255,255,1)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div ref={particlesRef} style={{ position: "absolute", inset: 0 }} />
      </div>

      {/* ── Hero Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "80px 24px 0",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {/* Om circle */}
        <div
          style={{
            display: "inline-block",
            marginBottom: 32,
            animation: "heroFadeIn 1s 0.2s ease-out both",
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "white",
              border: "2px solid rgba(249,115,22,0.15)",
              boxShadow:
                "0 10px 30px rgba(249,115,22,0.15),inset 0 0 20px rgba(252,211,77,0.1)",
            }}
          >
            <span
              style={{
                fontSize: "3rem",
                background: "linear-gradient(135deg,#ea580c,#f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
              }}
            >
              ॐ
            </span>
          </div>
        </div>

        {/* Badge */}
        {/* <div
          style={{
            marginBottom: 16,
            animation: "heroFadeUp 0.8s 0.4s ease-out both",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              padding: "8px 20px",
              borderRadius: 100,
              border: "1px solid rgba(249,115,22,0.2)",
              color: "#ea580c",
              background: "white",
              boxShadow: "0 4px 10px rgba(249,115,22,0.05)",
            }}
          >
            {t.badge}
          </span>
        </div> */}

        {/* Title */}
        <h1
          style={{
            marginBottom: 24,
            animation: "heroFadeUp 0.8s 0.6s ease-out both",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(3rem,10vw,6rem)",
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              paddingBottom: 8,
              background:
                "linear-gradient(135deg,#ea580c 0%,#f97316 40%,#fb923c 70%,#f59e0b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SANATAN SETU
          </span>

        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(1rem,2.5vw,1.2rem)",
            maxWidth: 640,
            margin: "0 auto 48px",
            lineHeight: 1.7,
            fontWeight: 500,
            color: "#4b5563",
            animation: "heroFadeUp 0.8s 0.8s ease-out both",
          }}
        >
          {t.desc}
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
            alignItems: "center",
            animation: "heroFadeUp 0.8s 1s ease-out both",
          }}
        >
          <StoreButtons />
        </div>

        {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 32,
            maxWidth: 480,
            margin: "64px auto 0",
            animation: "heroFadeUp 0.8s 1.2s ease-out both",
          }}
        >
          {[
            { val: "2M+", lbl: t.dl },
            { val: "108+", lbl: t.mantras },
            { val: "4.8★", lbl: t.rating },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(1.8rem,4vw,2.5rem)",
                  fontWeight: 800,
                  marginBottom: 4,
                  background: "linear-gradient(135deg,#ea580c,#f59e0b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginTop: 4,
                  color: "#6b7280",
                }}
              >
                {s.lbl}
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "heroFadeIn 1s 1.6s ease-out both",
        }}
      >

      </div>
    </section>
  );
}
