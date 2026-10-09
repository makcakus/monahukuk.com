import { ImageResponse } from "next/og";
import { getArticle } from "@/lib/articles";

export const runtime = "nodejs";
export const alt = "MONA HUKUK article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ArticleOGImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = await getArticle(locale, slug);
  const title = article?.title ?? "MONA HUKUK";
  const category = article?.category ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #050d24 0%, #0a1838 70%, #142450 100%)",
          color: "#fbf9f4",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 30, letterSpacing: -1 }}>MONA HUKUK</div>
          {category && (
            <div
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                fontSize: 18,
                color: "#d3a14a",
              }}
            >
              {category}
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ width: 70, height: 3, background: "#c08a36" }} />
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ fontSize: 22, color: "#b8c6e0" }}>
          {`monahukuk.com · Antalya, ${locale === "tr" ? "Türkiye" : "Turkey"}`}
        </div>
      </div>
    ),
    size
  );
}
