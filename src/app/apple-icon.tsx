import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
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

export default async function AppleIcon() {
  const fontData = await loadTinos("MHANTLY");

  const options: ConstructorParameters<typeof ImageResponse>[1] = { ...size };
  if (fontData) {
    options.fonts = [{ name: "Tinos", data: fontData, weight: 700, style: "normal" }];
  }

  const fontFamily = fontData ? "Tinos" : "Georgia, serif";

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
          fontFamily,
          letterSpacing: "-0.01em",
        }}
      >
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1 }}>
          MH
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 14,
            marginTop: 8,
            color: "#d4a045",
            letterSpacing: "0.18em",
            opacity: 0.85,
            fontWeight: 700,
          }}
        >
          ANTALYA
        </div>
      </div>
    ),
    options
  );
}
