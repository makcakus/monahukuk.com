"use server";

import { headers } from "next/headers";
import { createConfirmToken, createUnsubToken } from "@/lib/newsletter-jwt";
import { sendVerifyEmail } from "@/lib/mail";

export type NewsletterStatus =
  | "idle"
  | "pending"
  | "alreadyConfirmed"
  | "resent"
  | "error";

export type NewsletterState = {
  status: NewsletterStatus;
  errorKey: string;
} | null;

const SUPPORTED_LOCALES = ["tr", "en", "de", "ru", "ar", "es", "fr"] as const;
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
