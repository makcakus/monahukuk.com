import "server-only";
import { Resend } from "resend";

const FROM_DEFAULT = "Mona Hukuk <bulten@monahukuk.com>";
const REPLY_TO = "contact@monahukuk.com";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function fromAddress(): string {
  return process.env.RESEND_FROM_EMAIL || FROM_DEFAULT;
}

/** İletişim formu bildirimi — büro adresine iletilir; yanıtla = gönderen. */
export async function sendContactEmail(opts: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  locale: string;
}): Promise<{ ok: boolean; error?: string }> {
  const resend = getResend();
  if (!resend) {
    console.log(`[Contact] Resend not configured. Message from: ${opts.email}`);
    return { ok: false, error: "RESEND_API_KEY not set" };
  }

  const lines = [
    `Ad Soyad: ${opts.name}`,
    `E-posta: ${opts.email}`,
    ...(opts.phone ? [`Telefon: ${opts.phone}`] : []),
    `Konu: ${opts.subject}`,
    `Site dili: ${opts.locale}`,
    "",
    opts.message,
  ];
  const text = lines.join("\n");

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const html = `<div style="font-family:sans-serif;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(
    text
  )}</div>`;

  try {
    const { error } = await resend.emails.send({
      from: fromAddress(),
      to: REPLY_TO,
      replyTo: opts.email,
      subject: `İletişim formu: ${opts.subject} — ${opts.name}`,
      html,
      text,
    });
    if (error) {
      console.error("[Contact] Resend send error:", error);
      return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch (err) {
    console.error("[Contact] Resend network error:", err);
    return { ok: false, error: "network" };
  }
}
