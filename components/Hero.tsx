"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

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
    return () => { while (container.firstChild) container.removeChild(container.firstChild); };
  }, []);

  const spinStyle = (dur: number, rev = false): React.CSSProperties => ({
    animation: `heroSpin ${dur}s linear infinite ${rev ? "reverse" : ""}`,
  });

  return (
    <section
      id="hero-section"
      style={{
        minHeight: "100vh",
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
      {/* ── Background layer ── */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>

        {/* Ambient blobs */}
        <div style={{ position: "absolute", top: "-25%", right: "-25%", width: 800, height: 800, borderRadius: "50%", opacity: 0.4, background: "radial-gradient(circle,#ffedd5 0%,transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "-25%", left: "-25%", width: 600, height: 600, borderRadius: "50%", opacity: 0.4, background: "radial-gradient(circle,#fef08a 0%,transparent 70%)", filter: "blur(80px)" }} />

        {/* 3D Solar System */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", perspective: 1200 }}>
          <div style={{ position: "relative", width: 900, height: 900, transformStyle: "preserve-3d", transform: "rotateX(70deg) rotateZ(-10deg)" }}>

            {/* Sun core */}
            <div style={{ position: "absolute", inset: 0, margin: "auto", width: 128, height: 128, borderRadius: "50%", background: "linear-gradient(to bottom right,white,#fef9c3,#fb923c)", boxShadow: "0 0 100px rgba(245,158,11,0.8)", transformStyle: "preserve-3d" }}>
              <div style={{ position: "absolute", inset: -20, borderRadius: "50%", border: "1px solid rgba(251,146,60,0.3)", ...spinStyle(10) }} />
              <div style={{ position: "absolute", inset: -40, borderRadius: "50%", border: "1px dashed rgba(249,115,22,0.2)", ...spinStyle(15, true) }} />
            </div>

            {/* Orbit 1 */}
            <div style={{ position: "absolute", inset: 0, margin: "auto", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(249,115,22,0.3)", transformStyle: "preserve-3d", ...spinStyle(15) }}>
              <div style={{ position: "absolute", top: 0, left: "50%", marginLeft: -12, marginTop: -12, width: 24, height: 24, borderRadius: "50%", background: "#fb923c", boxShadow: "0 0 30px rgba(249,115,22,1)" }} />
            </div>

            {/* Orbit 2 */}
            <div style={{ position: "absolute", inset: 0, margin: "auto", width: 480, height: 480, borderRadius: "50%", border: "2px dashed rgba(251,146,60,0.2)", transformStyle: "preserve-3d", ...spinStyle(25, true) }}>
              <div style={{ position: "absolute", bottom: 0, left: "50%", marginLeft: -16, marginBottom: -16, width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(to right,#fde047,#f59e0b)", boxShadow: "0 0 40px rgba(245,158,11,1)" }}>
                <div style={{ position: "absolute", inset: -20, borderRadius: "50%", ...spinStyle(4) }}>
                  <div style={{ position: "absolute", top: 0, left: "50%", marginLeft: -6, marginTop: -6, width: 12, height: 12, borderRadius: "50%", background: "white", boxShadow: "0 0 15px rgba(255,255,255,0.9)" }} />
                </div>
              </div>
            </div>

            {/* Orbit 3 */}
            <div style={{ position: "absolute", inset: 0, margin: "auto", width: 660, height: 660, borderRadius: "50%", border: "1px solid rgba(234,88,12,0.15)", transformStyle: "preserve-3d", ...spinStyle(40) }}>
              <div style={{ position: "absolute", top: "50%", left: -20, marginTop: -20, width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(to bottom right,#fb923c,#ef4444)", boxShadow: "0 0 40px rgba(239,68,68,0.8)" }}>
                <div style={{ position: "absolute", inset: -15, borderRadius: "50%", border: "4px solid rgba(253,186,116,0.3)" }} />
                <div style={{ position: "absolute", inset: -25, borderRadius: "50%", border: "2px solid rgba(251,146,60,0.2)" }} />
              </div>
            </div>

            {/* Orbit 4 */}
            <div style={{ position: "absolute", inset: 0, margin: "auto", width: 820, height: 820, borderRadius: "50%", border: "1px dotted rgba(249,115,22,0.1)", transformStyle: "preserve-3d", ...spinStyle(60, true) }}>
              <div style={{ position: "absolute", top: "50%", right: -16, marginTop: -16, width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(to top right,#fef3c7,#fdba74)", boxShadow: "0 0 30px rgba(253,186,116,0.8)" }} />
              <div style={{ position: "absolute", top: "25%", left: "25%", width: 12, height: 12, borderRadius: "50%", background: "white", boxShadow: "0 0 20px rgba(255,255,255,1)" }} />
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div ref={particlesRef} style={{ position: "absolute", inset: 0 }} />
      </div>

      {/* ── Hero Content ── */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "80px 24px 0", maxWidth: 900, margin: "0 auto" }}>

        {/* Om circle */}
        <div style={{ display: "inline-block", marginBottom: 32, animation: "heroFadeIn 1s 0.2s ease-out both" }}>
          <div style={{ width: 96, height: 96, borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", background: "white", border: "2px solid rgba(249,115,22,0.15)", boxShadow: "0 10px 30px rgba(249,115,22,0.15),inset 0 0 20px rgba(252,211,77,0.1)" }}>
            <span style={{ fontSize: "3rem", background: "linear-gradient(135deg,#ea580c,#f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}>ॐ</span>
          </div>
        </div>

        {/* Badge */}
        <div style={{ marginBottom: 16, animation: "heroFadeUp 0.8s 0.4s ease-out both" }}>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", padding: "8px 20px", borderRadius: 100, border: "1px solid rgba(249,115,22,0.2)", color: "#ea580c", background: "white", boxShadow: "0 4px 10px rgba(249,115,22,0.05)" }}>
            ✦ The Divine Experience ✦
          </span>
        </div>

        {/* Title */}
        <h1 style={{ marginBottom: 24, animation: "heroFadeUp 0.8s 0.6s ease-out both" }}>
          <span style={{ display: "block", fontSize: "clamp(3.5rem,10vw,8rem)", lineHeight: 1, fontWeight: 800, letterSpacing: "-0.02em", paddingBottom: 8, background: "linear-gradient(135deg,#ea580c 0%,#f97316 40%,#fb923c 70%,#f59e0b 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            SANATAN
          </span>
          <span style={{ display: "block", fontSize: "clamp(1.5rem,4vw,2.5rem)", fontWeight: 600, marginTop: 8, letterSpacing: "0.2em", color: "#ea580c" }}>
            सनातन धर्म
          </span>
        </h1>

        {/* Description */}
        <p style={{ fontSize: "clamp(1rem,2.5vw,1.2rem)", maxWidth: 640, margin: "0 auto 48px", lineHeight: 1.7, fontWeight: 500, color: "#4b5563", animation: "heroFadeUp 0.8s 0.8s ease-out both" }}>
          The most{" "}
          <em style={{ color: "#ea580c", fontStyle: "normal", fontWeight: 700 }}>divine &amp; immersive</em>{" "}
          Hindu Dharma experience. Mantras, Bhajans, Aarti, Horoscope &amp; more — all in one sacred space.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", alignItems: "center", animation: "heroFadeUp 0.8s 1s ease-out both" }}>
          <a
            href="https://play.google.com/store/apps/details?id=com.sanatan.lite"
            target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 32px", borderRadius: 16, fontWeight: 700, fontSize: "1rem", color: "white", textDecoration: "none", background: "linear-gradient(135deg,#f97316 0%,#ea580c 100%)", boxShadow: "0 8px 25px rgba(234,88,12,0.3),0 4px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease", fontFamily: '"Plus Jakarta Sans",sans-serif' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 0 0 2.07-.15l11.46-6.62-2.52-2.51zM.69 1.17A2 2 0 0 0 0 2.78v18.44a2 2 0 0 0 .69 1.61L.8 22.9l10.33-10.33v-.24L.8 2zm18.81 8.88-2.63-1.52-2.81 2.81 2.81 2.81 2.66-1.54a2 2 0 0 0 0-3.56zM5.25.39 16.71 7l-2.52 2.52L11.67.39z" /></svg>
            Get on Play Store
          </a>
          <a
            href="https://apps.apple.com/in/app/sanatan-bhajan-mantra-status/id6744445436"
            target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 32px", borderRadius: 16, fontWeight: 700, fontSize: "1rem", color: "#ea580c", textDecoration: "none", background: "white", border: "2px solid rgba(251,146,60,0.3)", boxShadow: "0 8px 20px rgba(249,115,22,0.08)", transition: "all 0.3s ease", fontFamily: '"Plus Jakarta Sans",sans-serif' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
            Get on App Store
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, maxWidth: 480, margin: "64px auto 0", animation: "heroFadeUp 0.8s 1.2s ease-out both" }}>
          {[{ val: "2M+", lbl: "Downloads" }, { val: "108+", lbl: "Mantras" }, { val: "4.8★", lbl: "Rating" }].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 800, marginBottom: 4, background: "linear-gradient(135deg,#ea580c,#f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.val}</div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4, color: "#6b7280" }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "heroFadeIn 1s 1.6s ease-out both" }}>
        <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(249,115,22,0.7)", fontFamily: '"Plus Jakarta Sans",sans-serif' }}>Scroll to explore</span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(180deg,rgba(249,115,22,0.6),transparent)", animation: "heroPulseGlow 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}