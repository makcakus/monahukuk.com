import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

async function loadTinos(text: string): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Tinos:wght@700&text=${encodeURIComponent(
    text
  )}`;
  const css = await fetch(cssUrl, {
    headers: { "User-Agent": "Mozilla/5.0" },
  }).then((r) => r.text());

  const match = css.match(/src:\s*url\((.+?)\)\s*format\('truetype'\)/);
  if (!match) throw new Error("Tinos font URL not found in CSS response");

  const fontResponse = await fetch(match[1]);
  return await fontResponse.arrayBuffer();
}

export default async function Icon() {
  const fontData = await loadTinos("MH");

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
          fontFamily: "Tinos",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        MH
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Tinos",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
