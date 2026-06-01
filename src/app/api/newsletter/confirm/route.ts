import { NextResponse, type NextRequest } from "next/server";
import { verifyConfirmToken } from "@/lib/newsletter-jwt";
import { addToResendAudience } from "@/lib/mail";

const SUPPORTED = ["tr", "en", "de", "ru", "ar", "es", "fr"];

function langFrom(req: NextRequest, fallback: string | null): string {
  const q = req.nextUrl.searchParams.get("lang");
  if (q && SUPPORTED.includes(q)) return q;
  if (fallback && SUPPORTED.includes(fallback)) return fallback;
  return "tr";
}

function redirectTo(req: NextRequest, lang: string, slug: string) {
  const url = new URL(`/${lang}/newsletter/${slug}`, req.url);
  return NextResponse.redirect(url, { status: 303 });
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (!token) {
    return redirectTo(req, langFrom(req, null), "invalid");
  }

  // JWT doğrula (imza + süre)
  const payload = verifyConfirmToken(token);
  if (!payload) {
    // Eski hex token olabilir (migration öncesi pending aboneler)
    // ya da gerçekten geçersiz — her iki durumda da invalid
    return redirectTo(req, langFrom(req, null), "invalid");
  }

  const lang = langFrom(req, payload.locale);

  // Resend Audience'a ekle (dil = first_name)
  await addToResendAudience(payload.email, payload.locale);

  console.log(
    `[Newsletter] confirmed email=${payload.email} locale=${payload.locale} ts=${new Date().toISOString()}`
  );

  return redirectTo(req, lang, "confirmed");
}
