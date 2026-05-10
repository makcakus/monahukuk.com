import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { removeFromResendAudience } from "@/lib/mail";

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

async function process(req: NextRequest, token: string | null) {
  if (!token) {
    return redirectTo(req, langFrom(req, null), "invalid");
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("[Newsletter] unsubscribe: Supabase not configured");
    return redirectTo(req, langFrom(req, null), "invalid");
  }

  const { data: row, error } = await supabase
    .from("newsletter_subscribers")
    .select("id, email, status, language")
    .eq("unsubscribe_token", token)
    .maybeSingle();

  if (error || !row) {
    return redirectTo(req, langFrom(req, null), "invalid");
  }

  const lang = langFrom(req, row.language);

  if (row.status === "unsubscribed") {
    return redirectTo(req, lang, "unsubscribed");
  }

  const { error: updErr } = await supabase
    .from("newsletter_subscribers")
    .update({
      status: "unsubscribed",
      unsubscribed_at: new Date().toISOString(),
    })
    .eq("id", row.id);

  if (updErr) {
    console.error("[Newsletter] unsubscribe update error:", updErr);
    return redirectTo(req, lang, "invalid");
  }

  await removeFromResendAudience(row.email);

  return redirectTo(req, lang, "unsubscribed");
}

export async function GET(req: NextRequest) {
  return process(req, req.nextUrl.searchParams.get("token"));
}

// RFC 8058: List-Unsubscribe-Post = One-Click → POST handler.
export async function POST(req: NextRequest) {
  return process(req, req.nextUrl.searchParams.get("token"));
}
