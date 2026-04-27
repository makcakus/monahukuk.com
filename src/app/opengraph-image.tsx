import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mona Hukuk — Antalya, Türkiye";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #050d24 0%, #0a1838 60%, #142450 100%)",
          color: "#fbf9f4",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            fontSize: 22,
            color: "#d3a14a",
          }}
        >
          Antalya · Türkiye
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 96, lineHeight: 1.05, letterSpacing: -2 }}>
            Mona Hukuk
          </div>
          <div
            style={{
              width: 80,
              height: 4,
              background: "#c08a36",
            }}
          />
          <div style={{ fontSize: 36, lineHeight: 1.25, color: "#dde4f1", maxWidth: 900 }}>
            Trusted legal counsel for foreign nationals and international business in Turkey
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#b8c6e0",
          }}
        >
          <span>monahukuk.com</span>
          <span>info@monahukuk.com  ·  +90 242 606 14 32</span>
        </div>
      </div>
    ),
    size
  );
}
