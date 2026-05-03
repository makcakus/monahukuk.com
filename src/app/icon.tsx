import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0c1e3d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#d4a045",
          fontSize: 38,
          fontWeight: 700,
          fontFamily: "'Times New Roman', Times, serif",
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        MH
      </div>
    ),
    { ...size }
  );
}
