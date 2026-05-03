import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a1628",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#bf6830",
          fontSize: 38,
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        MH
      </div>
    ),
    size
  );
}
