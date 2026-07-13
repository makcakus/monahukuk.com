"use server";

import { headers } from "next/headers";
import { sendContactEmail } from "@/lib/mail";

export type ContactStatus = "idle" | "sent" | "error";

export type ContactState = {
  status: ContactStatus;
  errorKey: string;
} | null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: botlar doldurur, insanlar görmez — sessizce başarılı görün
  if (formData.get("website")) {
    return { status: "sent", errorKey: "" };
  }

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim().toLowerCase() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const subject = formData.get("subject")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const consent = formData.get("consent");
  const locale = formData.get("locale")?.toString() ?? "tr";

  if (name.length < 2 || name.length > 200) {
    return { status: "error", errorKey: "invalidName" };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", errorKey: "invalidEmail" };
  }
  if (message.length < 10 || message.length > 5000) {
    return { status: "error", errorKey: "invalidMessage" };
  }
  if (!consent) {
    return { status: "error", errorKey: "consentRequired" };
  }

  // KVKK: rıza kaydı — Vercel function log'larında saklanır
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip");
  console.log(
    `[Contact] consent email=${email} locale=${locale} ip=${ip ?? "-"} ts=${new Date().toISOString()}`
  );

  const mail = await sendContactEmail({
    name,
    email,
    phone: phone || undefined,
    subject: subject || "-",
    message,
    locale,
  });

  if (!mail.ok) {
    return { status: "error", errorKey: "serverError" };
  }
  return { status: "sent", errorKey: "" };
}
