import { ImageResponse } from "next/og";

// 1. ADD THIS EXACT LINE:
export const dynamic = "force-static";

const siteName = "Setu Sanatan";
const homeDescription =
  "The most divine and immersive Hindu Dharma experience with mantras, bhajans, aarti, slokas, horoscope, temples, and daily spiritual tools in one sacred space.";

export const runtime = "edge";
export const alt = `${siteName} - devotional Hindu app`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 18% 20%, rgba(255, 205, 112, 0.48), transparent 30%), linear-gradient(135deg, #fff8f2 0%, #fff 46%, #ffe2c4 100%)",
          color: "#3a1800",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#9a4a00",
            fontSize: 30,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(154, 74, 0, 0.28)",
              background: "rgba(255, 255, 255, 0.72)",
              fontSize: 30,
            }}
          >
            S
          </div>
          {siteName}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              maxWidth: 850,
              fontSize: 84,
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              fontWeight: 700,
            }}
          >
            Your digital bridge to daily devotion.
          </div>
          <div
            style={{
              maxWidth: 850,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#70420f",
            }}
          >
            {homeDescription}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            color: "#7a3500",
            fontSize: 28,
          }}
        >
          <span>Mantras</span>
          <span>/</span>
          <span>Bhajans</span>
          <span>/</span>
          <span>Aarti</span>
          <span>/</span>
          <span>Slokas</span>
        </div>
      </div>
    ),
    size,
  );
}