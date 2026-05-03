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
  const fontData = await loadTinos("MHATORNEY AT LAW");

  const options: ConstructorParameters<typeof ImageResponse>[1] = { ...size };
  if (fontData) {
    options.fonts = [{ name: "Tinos", data: fontData, weight: 700, style: "normal" }];
  }

  const fontFamily = fontData ? "Tinos" : "Georgia, serif";
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
          fontFamily,
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
    options
  );
}
