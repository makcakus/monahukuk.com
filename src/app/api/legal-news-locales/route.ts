import { NextResponse, type NextRequest } from "next/server";
import { getLegalNewsLocaleSlugs } from "@/lib/hukuki-haberler";
import { routing } from "@/i18n/routing";

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.searchParams.get("locale") ?? "";
  const slug = req.nextUrl.searchParams.get("slug") ?? "";

  if (!routing.locales.includes(locale as (typeof routing.locales)[number]) || !slug) {
    return NextResponse.json({ slugs: {} }, { status: 400 });
  }

  const slugs = await getLegalNewsLocaleSlugs(locale, slug);
  return NextResponse.json({ slugs });
}
