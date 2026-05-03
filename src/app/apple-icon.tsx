import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0c1e3d",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#d4a045",
          fontFamily: "'Times New Roman', Times, serif",
          letterSpacing: "-0.02em",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          MH
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 14,
            marginTop: 8,
            color: "#d4a045",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          Antalya
        </div>
      </div>
    ),
    { ...size }
  );
}
