import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

async function loadTinos(text: string): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=Tinos:wght@700&text=${encodeURIComponent(text)}`;
    const css = await fetch(cssUrl, { headers: { "User-Agent": "Mozilla/5.0" } }).then((r) => r.text());
    const match = css.match(/src:\s*url\((.+?)\)\s*format\('truetype'\)/);
    if (!match) return null;
    return await fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function Icon() {
  const fontData = await loadTinos("MH");

  const options: ConstructorParameters<typeof ImageResponse>[1] = { ...size };
  if (fontData) {
    options.fonts = [{ name: "Tinos", data: fontData, weight: 700, style: "normal" }];
  }

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
          fontFamily: fontData ? "Tinos" : "Georgia, serif",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        MH
      </div>
    ),
    options
  );
}
