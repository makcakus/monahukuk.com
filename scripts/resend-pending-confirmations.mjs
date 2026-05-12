/**
 * Beklemedeki (pending) abonelere yeni doğrulama maili gönderir.
 * Kullanım: node scripts/resend-pending-confirmations.mjs
 */
import { randomBytes } from "node:crypto";
import { readFileSync } from "node:fs";

// .env.local'dan değerleri oku
function loadEnv() {
  try {
    const raw = readFileSync(".env.local", "utf8");
    const env = {};
    for (const line of raw.split("\n")) {
      const [k, ...rest] = line.split("=");
      if (k && rest.length) env[k.trim()] = rest.join("=").trim();
    }
    return env;
  } catch {
    return {};
  }
}

const env = loadEnv();
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_ROLE_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY || env.RESEND_API_KEY;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || env.NEXT_PUBLIC_SITE_URL || "https://monahukuk.com";
const FROM = process.env.RESEND_FROM_EMAIL || env.RESEND_FROM_EMAIL || "MONA HUKUK <newsletter@monahukuk.com>";

if (!SUPABASE_URL || !SUPABASE_KEY || !RESEND_API_KEY) {
  console.error("Eksik env var: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY veya RESEND_API_KEY");
  process.exit(1);
}

function generateToken() {
  return randomBytes(32).toString("hex");
}

function expiryFromNow() {
  return new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();
}

function buildEmail({ email, confirmUrl, unsubscribeUrl }) {
  const subject = "Mona Hukuk Bültenine Aboneliğinizi Onaylayın";
  const html = `<!doctype html>
<html lang="tr">
<head><meta charset="utf-8"><title>${subject}</title></head>
<body style="margin:0;padding:0;background:#f6f1e7;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;color:#1a2238;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f1e7;padding:32px 16px;">
<tr><td align="center">
  <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid #e7dec9;border-radius:8px;overflow:hidden;">
    <tr><td style="padding:32px 32px 8px 32px;">
      <div style="font-family:Georgia,serif;font-size:22px;color:#1a2238;">MONA HUKUK</div>
      <div style="font-size:11px;color:#a07d2a;letter-spacing:0.18em;text-transform:uppercase;margin-top:4px;">Antalya · Türkiye</div>
    </td></tr>
    <tr><td style="padding:16px 32px 8px 32px;">
      <h1 style="font-family:Georgia,serif;font-size:24px;margin:16px 0 8px;color:#1a2238;">Aboneliğinizi onaylayın</h1>
      <p style="font-size:15px;line-height:1.6;color:#384055;margin:8px 0 24px;">Mona Hukuk haftalık hukuk bültenine abone olmak istediğinizi belirttiniz. Aboneliği aktifleştirmek için aşağıdaki düğmeye tıklayın.</p>
    </td></tr>
    <tr><td style="padding:0 32px 24px 32px;">
      <a href="${confirmUrl}" style="display:inline-block;background:#c4972b;color:#1a2238;text-decoration:none;font-weight:600;font-size:15px;padding:14px 28px;border-radius:4px;">Aboneliği onayla</a>
    </td></tr>
    <tr><td style="padding:0 32px 8px 32px;">
      <p style="font-size:12px;color:#6a7186;margin:8px 0;">Bu bağlantı 48 saat içinde geçerliliğini yitirir.</p>
      <p style="font-size:12px;color:#6a7186;margin:8px 0 24px;">Bu işlemi siz başlatmadıysanız bu mesajı yok sayabilirsiniz.</p>
      <p style="font-size:11px;color:#9a9eb0;word-break:break-all;margin:8px 0;">${confirmUrl}</p>
    </td></tr>
    <tr><td style="padding:16px 32px;border-top:1px solid #efe7d6;">
      <p style="font-size:11px;color:#9a9eb0;margin:0;">Mona Hukuk · Antalya, Türkiye · <a href="${unsubscribeUrl}" style="color:#9a9eb0;">Aboneliği iptal et</a></p>
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;

  const text = `Aboneliğinizi onaylayın\n\nMona Hukuk haftalık hukuk bültenine abone olmak istediğinizi belirttiniz.\n\nOnaylamak için: ${confirmUrl}\n\nBu bağlantı 48 saat geçerlidir.\nMona Hukuk · Antalya, Türkiye`;

  return { subject, html, text };
}

async function run() {
  // Beklemedeki aboneleri çek
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/newsletter_subscribers?select=id,email,language&status=eq.pending`,
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    }
  );
  const subscribers = await res.json();
  console.log(`${subscribers.length} bekleyen abone bulundu.`);

  for (const sub of subscribers) {
    const confirmationToken = generateToken();
    const unsubscribeToken = generateToken();
    const tokenExpiresAt = expiryFromNow();

    // Token güncelle
    const upd = await fetch(
      `${SUPABASE_URL}/rest/v1/newsletter_subscribers?id=eq.${sub.id}`,
      {
        method: "PATCH",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ confirmation_token: confirmationToken, unsubscribe_token: unsubscribeToken, token_expires_at: tokenExpiresAt }),
      }
    );

    if (!upd.ok) {
      console.error(`  ✗ ${sub.email} — DB güncelleme hatası: ${upd.status}`);
      continue;
    }

    const confirmUrl = `${SITE_URL}/api/newsletter/confirm?token=${confirmationToken}&lang=${sub.language}`;
    const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe?token=${unsubscribeToken}&lang=${sub.language}`;
    const { subject, html, text } = buildEmail({ email: sub.email, confirmUrl, unsubscribeUrl });

    const mail = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: sub.email,
        reply_to: "contact@monahukuk.com",
        subject,
        html,
        text,
        headers: {
          "List-Unsubscribe": `<${unsubscribeUrl}>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        },
      }),
    });

    const mailData = await mail.json();
    if (mail.ok) {
      console.log(`  ✓ ${sub.email} — mail gönderildi (id: ${mailData.id})`);
    } else {
      console.error(`  ✗ ${sub.email} — mail hatası:`, mailData);
    }
  }

  console.log("\nTamamlandı.");
}

run().catch(console.error);
