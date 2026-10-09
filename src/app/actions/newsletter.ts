"use server";

import { headers } from "next/headers";
import { createConfirmToken, createUnsubToken } from "@/lib/newsletter-jwt";
import { addToResendAudience, sendVerifyEmail } from "@/lib/mail";

export type NewsletterStatus =
  | "idle"
  | "pending"
  | "alreadyConfirmed"
  | "resent"
  | "subscribed"
  | "error";

export type NewsletterState = {
  status: NewsletterStatus;
  errorKey: string;
} | null;

const SUPPORTED_LOCALES = ["tr", "en", "de", "ru", "es", "fr"] as const;
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

/** Resend Audience'da e-posta zaten onaylı abone mi? */
async function isAlreadySubscribed(email: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) return false;

  try {
    // Resend contacts endpoint'inde email ile arama
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts?email=${encodeURIComponent(email)}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );
    if (!res.ok) return false;
    const data = (await res.json()) as {
      data?: Array<{ email: string; unsubscribed: boolean }>;
    };
    // data.data = kontakt listesi; ilk eşleşme unsubscribed değilse → zaten abone
    const contacts: Array<{ email: string; unsubscribed: boolean }> =
      data?.data ?? [];
    const match = contacts.find(
      (c) => c.email.toLowerCase() === email.toLowerCase()
    );
    return match ? !match.unsubscribed : false;
  } catch {
    return false;
  }
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

  // KVKK: rıza kaydı — Vercel function log'larında saklanır
  const ip = await getClientIp();
  const h = await headers();
  const ua = h.get("user-agent");
  console.log(
    `[Newsletter] consent email=${email} locale=${locale} ip=${ip ?? "-"} ua=${ua ?? "-"} ts=${new Date().toISOString()}`
  );

  // Zaten onaylı abone ise tekrar doğrulama maili gönderme
  const alreadySubscribed = await isAlreadySubscribed(email);
  if (alreadySubscribed) {
    return { status: "alreadyConfirmed", errorKey: "" };
  }

  // Stateless JWT tokenlar — veritabanı gerekmez
  const confirmationToken = createConfirmToken(email, locale);
  const unsubscribeToken = createUnsubToken(email, locale);

  const mail = await sendVerifyEmail({
    to: email,
    locale,
    confirmationToken,
    unsubscribeToken,
  });

  if (!mail.ok) {
    return { status: "error", errorKey: "serverError" };
  }

  return { status: "pending", errorKey: "" };
}

/**
 * Google ile kayıt: GIS'ten gelen ID token Google'ın tokeninfo uç noktasında
 * doğrulanır. E-posta Google tarafından doğrulanmış olduğundan çift onay
 * (doğrulama maili) atlanır ve kişi doğrudan listeye eklenir.
 */
export async function subscribeWithGoogle(
  credential: string,
  localeRaw: string,
  consent: boolean
): Promise<NewsletterState> {
  const locale = normalizeLocale(localeRaw);
  if (!consent) return { status: "error", errorKey: "consentRequired" };

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!clientId || !credential) {
    return { status: "error", errorKey: "serverError" };
  }

  let email = "";
  try {
    const res = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`
    );
    if (!res.ok) return { status: "error", errorKey: "serverError" };
    const info = (await res.json()) as {
      aud?: string;
      email?: string;
      email_verified?: string | boolean;
      iss?: string;
    };
    const verified = info.email_verified === true || info.email_verified === "true";
    const issuerOk =
      info.iss === "accounts.google.com" ||
      info.iss === "https://accounts.google.com";
    if (info.aud !== clientId || !issuerOk || !verified || !info.email) {
      return { status: "error", errorKey: "serverError" };
    }
    email = info.email.trim().toLowerCase();
  } catch {
    return { status: "error", errorKey: "serverError" };
  }

  const ip = await getClientIp();
  console.log(
    `[Newsletter] consent(google) email=${email} locale=${locale} ip=${ip ?? "-"} ts=${new Date().toISOString()}`
  );

  if (await isAlreadySubscribed(email)) {
    return { status: "alreadyConfirmed", errorKey: "" };
  }

  await addToResendAudience(email, locale);
  console.log(
    `[Newsletter] confirmed(google) email=${email} locale=${locale} ts=${new Date().toISOString()}`
  );
  return { status: "subscribed", errorKey: "" };
}
