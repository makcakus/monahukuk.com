import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { addToResendAudience } from "@/lib/mail";

const SUPPORTED = ["tr", "en", "de", "ru", "ar"];

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

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("[Newsletter] confirm: Supabase not configured");
    return redirectTo(req, langFrom(req, null), "invalid");
  }

  const { data: row, error } = await supabase
    .from("newsletter_subscribers")
    .select("id, email, status, language, token_expires_at")
    .eq("confirmation_token", token)
    .maybeSingle();

  if (error || !row) {
    return redirectTo(req, langFrom(req, null), "invalid");
  }

  const lang = langFrom(req, row.language);

  if (row.status === "confirmed") {
    return redirectTo(req, lang, "confirmed");
  }
  if (row.status === "unsubscribed") {
    return redirectTo(req, lang, "invalid");
  }

  if (new Date(row.token_expires_at).getTime() < Date.now()) {
    return redirectTo(req, lang, "expired");
  }

  const { error: updErr } = await supabase
    .from("newsletter_subscribers")
    .update({
      status: "confirmed",
      confirmed_at: new Date().toISOString(),
    })
    .eq("id", row.id);

  if (updErr) {
    console.error("[Newsletter] confirm update error:", updErr);
    return redirectTo(req, lang, "invalid");
  }

  await addToResendAudience(row.email);

  return redirectTo(req, lang, "confirmed");
}
