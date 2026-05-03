import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const copper = "#bf6830";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a1628",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 80, fontWeight: 700, lineHeight: 1, color: copper, letterSpacing: "-0.02em" }}>
          MH
        </div>
        <div style={{ display: "flex", width: 100, height: 1.5, background: copper, marginTop: 10, marginBottom: 10, opacity: 0.85 }} />
        <div
          style={{
            display: "flex",
            fontSize: 13,
            color: copper,
            letterSpacing: "0.22em",
            fontWeight: 700,
          }}
        >
          ATTORNEY AT LAW
        </div>
      </div>
    ),
    size
  );
}
