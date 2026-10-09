import { NextResponse, type NextRequest } from "next/server";
import { verifyUnsubToken } from "@/lib/newsletter-jwt";
import { removeFromResendAudience } from "@/lib/mail";

const SUPPORTED = ["tr", "en", "de", "ru", "es", "fr"];
// Arapça/Çince siteden kaldırıldı; eski e-postalardaki ?lang=ar|zh linkleri EN'e düşer.
const REMOVED_LOCALES = ["ar", "zh"];

function langFrom(req: NextRequest, fallback: string | null): string {
  const q = req.nextUrl.searchParams.get("lang");
  if (q && SUPPORTED.includes(q)) return q;
  if (fallback && SUPPORTED.includes(fallback)) return fallback;
  if ((q && REMOVED_LOCALES.includes(q)) || (fallback && REMOVED_LOCALES.includes(fallback))) return "en";
  return "tr";
}

function redirectTo(req: NextRequest, lang: string, slug: string) {
  const url = new URL(`/${lang}/newsletter/${slug}`, req.url);
  return NextResponse.redirect(url, { status: 303 });
}

async function process(req: NextRequest, token: string | null) {
  if (!token) {
    return redirectTo(req, langFrom(req, null), "invalid");
  }

  // JWT doğrula
  const payload = verifyUnsubToken(token);
  if (!payload) {
    return redirectTo(req, langFrom(req, null), "invalid");
  }

  const lang = langFrom(req, payload.locale);

  await removeFromResendAudience(payload.email);

  console.log(
    `[Newsletter] unsubscribed email=${payload.email} ts=${new Date().toISOString()}`
  );

  return redirectTo(req, lang, "unsubscribed");
}

export async function GET(req: NextRequest) {
  return process(req, req.nextUrl.searchParams.get("token"));
}

// RFC 8058: List-Unsubscribe-Post = One-Click
export async function POST(req: NextRequest) {
  return process(req, req.nextUrl.searchParams.get("token"));
}
