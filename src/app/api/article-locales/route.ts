import { NextResponse, type NextRequest } from "next/server";
import { getAvailableLocalesForArticle } from "@/lib/articles";
import { routing } from "@/i18n/routing";

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.searchParams.get("locale") ?? "";
  const slug = req.nextUrl.searchParams.get("slug") ?? "";

  if (!routing.locales.includes(locale as (typeof routing.locales)[number]) || !slug) {
    return NextResponse.json({ locales: [] }, { status: 400 });
  }

  const locales = await getAvailableLocalesForArticle(locale, slug);
  return NextResponse.json({ locales });
}
