"use server";

import { headers } from "next/headers";
import { getSupabaseAdmin } from "@/lib/supabase";
import { generateToken, expiryFromNow } from "@/lib/token";
import { sendVerifyEmail } from "@/lib/mail";

export type NewsletterStatus =
  | "idle"
  | "pending"
  | "alreadyConfirmed"
  | "resent"
  | "interestRegistered" // Backend (Supabase/Resend) henüz yapılandırılmadı; kullanıcı ilgisi ileride işlenmek üzere log'a yazılır.
  | "error";

export type NewsletterState = {
  status: NewsletterStatus;
  errorKey: string;
} | null;

const SUPPORTED_LOCALES = ["tr", "en", "de", "ru", "ar", "es"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

function normalizeLocale(value: string | undefined): Locale {
  return SUPPORTED_LOCALES.includes(value as Locale) ? (value as Locale) : "tr";
}

async function getClientIp(): Promise<string | null> {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || null;
  return h.get("x-real-ip");
}

export async function subscribeToNewsletter(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = formData.get("email")?.toString().trim().toLowerCase() ?? "";
  const consent = formData.get("consent");
  const locale = normalizeLocale(formData.get("locale")?.toString());

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", errorKey: "invalidEmail" };
  }
  if (!consent) {
    return { status: "error", errorKey: "consentRequired" };
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // Backend henüz kurulu değil. Kullanıcıya yanıltıcı "kayıt" mesajı vermek
    // yerine "ilginiz alındı" göstereceğiz; e-postayı Vercel function logs'a
    // yazıyoruz ki backend devreye girince manuel kayıt edilebilsin.
    const h = await headers();
    console.log(
      `[Newsletter] interest_registered (no backend) — email=${email} locale=${locale} ua=${h.get("user-agent") ?? "-"}`
    );
    return { status: "interestRegistered", errorKey: "" };
  }

  const ip = await getClientIp();
  const h = await headers();
  const userAgent = h.get("user-agent");

  const { data: existing, error: selectErr } = await supabase
    .from("newsletter_subscribers")
    .select("id, status, confirmation_token, unsubscribe_token, language")
    .eq("email", email)
    .in("status", ["pending", "confirmed"])
    .maybeSingle();

  if (selectErr) {
    console.error("[Newsletter] Select error:", selectErr);
    return { status: "error", errorKey: "serverError" };
  }

  if (existing?.status === "confirmed") {
    return { status: "alreadyConfirmed", errorKey: "" };
  }

  let confirmationToken: string;
  let unsubscribeToken: string;

  if (existing?.status === "pending") {
    confirmationToken = generateToken();
    const { error: updErr } = await supabase
      .from("newsletter_subscribers")
      .update({
        confirmation_token: confirmationToken,
        token_expires_at: expiryFromNow().toISOString(),
        language: locale,
        ip_address: ip,
        user_agent: userAgent,
        consent_timestamp: new Date().toISOString(),
      })
      .eq("id", existing.id);
    if (updErr) {
      console.error("[Newsletter] Update error:", updErr);
      return { status: "error", errorKey: "serverError" };
    }
    unsubscribeToken = existing.unsubscribe_token;
  } else {
    confirmationToken = generateToken();
    unsubscribeToken = generateToken();
    const { error: insErr } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email,
        language: locale,
        status: "pending",
        consent_timestamp: new Date().toISOString(),
        ip_address: ip,
        user_agent: userAgent,
        confirmation_token: confirmationToken,
        unsubscribe_token: unsubscribeToken,
        token_expires_at: expiryFromNow().toISOString(),
      });
    if (insErr) {
      console.error("[Newsletter] Insert error:", insErr);
      return { status: "error", errorKey: "serverError" };
    }
  }

  const mail = await sendVerifyEmail({
    to: email,
    locale,
    confirmationToken,
    unsubscribeToken,
  });

  if (!mail.ok) {
    return { status: "error", errorKey: "serverError" };
  }

  return {
    status: existing?.status === "pending" ? "resent" : "pending",
    errorKey: "",
  };
}
