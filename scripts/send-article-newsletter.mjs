/**
 * Yeni makaleyi tüm onaylı abonelere gönderir.
 * Aboneler Resend Audience'dan çekilir (first_name = dil kodu).
 *
 * Kullanım: node scripts/send-article-newsletter.mjs
 */

import { readFileSync } from "node:fs";
import { createHmac } from "node:crypto";

function loadEnv() {
  try {
    const raw = readFileSync(".env.local", "utf8");
    const env = {};
    for (const line of raw.split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const i = t.indexOf("=");
      if (i === -1) continue;
      env[t.slice(0, i).trim()] = t.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    }
    return env;
  } catch { return {}; }
}

const env = loadEnv();
const RESEND_API_KEY = process.env.RESEND_API_KEY || env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || env.RESEND_AUDIENCE_ID;
const JWT_SECRET = process.env.NEWSLETTER_JWT_SECRET || env.NEWSLETTER_JWT_SECRET;
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || env.NEXT_PUBLIC_SITE_URL || "https://monahukuk.com").replace(/\/$/, "");
const FROM = process.env.RESEND_FROM_EMAIL || env.RESEND_FROM_EMAIL || "MONA HUKUK <bulten@monahukuk.com>";

if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID || !JWT_SECRET) {
  console.error("Eksik env: RESEND_API_KEY, RESEND_AUDIENCE_ID veya NEWSLETTER_JWT_SECRET");
  process.exit(1);
}

// ── JWT unsubscribe token üretici ─────────────────────────────────────────────

function b64url(buf) {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

function createUnsubToken(email, locale) {
  const payload = b64url(Buffer.from(JSON.stringify({ t: "u", e: email, l: locale })));
  const sig = b64url(createHmac("sha256", JWT_SECRET).update(payload).digest());
  return `${payload}.${sig}`;
}

// ── Makale bilgileri ──────────────────────────────────────────────────────────
// Bu bölümü her gönderi öncesi güncelleyin.

const ARTICLE = {
  slug: "kira-hukukunda-guncel-gelismeler-2025",
  tr: {
    lang: "tr",
    subject: "Kira Hukukunda Güncel Gelişmeler — MONA HUKUK Bülteni",
    preheader: "Yargıtay 2025 kararları: arabuluculuk, tahliye taahhüdü, TBK 344.",
    heading: "Kira Hukukunda Güncel Gelişmeler",
    intro: "01.09.2023'te zorunlu hale gelen arabuluculuk uygulaması ve son Yargıtay kararları, kira uyuşmazlıklarını köklü biçimde dönüştürdü.",
    button: "Makaleyi Oku",
    footer: "Mona Hukuk · Antalya, Türkiye",
    unsubLabel: "Aboneliği iptal et",
    dir: "ltr",
  },
  en: {
    lang: "en",
    subject: "Turkish Rental Law 2025: Key Court Rulings — MONA HUKUK Newsletter",
    preheader: "Mandatory mediation, eviction commitments, TBK 344 and more.",
    heading: "Turkish Rental Law: Key Court Rulings in 2025",
    intro: "Since mandatory mediation was introduced for rental disputes in 2023, courts have been interpreting the new framework extensively.",
    button: "Read Article",
    footer: "Mona Hukuk · Antalya, Turkey",
    unsubLabel: "Unsubscribe",
    dir: "ltr",
  },
  de: {
    lang: "de",
    subject: "Türkisches Mietrecht 2025 — MONA HUKUK Newsletter",
    preheader: "Obligatorische Mediation, Räumungsverpflichtung, TBK 344.",
    heading: "Türkisches Mietrecht 2025: Aktuelle Gerichtsentscheidungen",
    intro: "Seit der Einführung der obligatorischen Mediation für Mietstreitigkeiten im Jahr 2023 haben türkische Gerichte das neue Verfahrenswerk intensiv ausgelegt.",
    button: "Artikel lesen",
    footer: "Mona Hukuk · Antalya, Türkei",
    unsubLabel: "Abbestellen",
    dir: "ltr",
  },
  ru: {
    lang: "ru",
    subject: "Арендное право Турции 2025 — Рассылка MONA HUKUK",
    preheader: "Обязательная медиация, ст. 344 ТКО и другое.",
    heading: "Арендное право Турции 2025: актуальные решения судов",
    intro: "С момента введения обязательной медиации по арендным спорам в 2023 году турецкие суды активно формируют практику.",
    button: "Читать статью",
    footer: "Mona Hukuk · Анталия, Турция",
    unsubLabel: "Отписаться",
    dir: "ltr",
  },
};

// AR ve ES/FR abonelere İngilizce gönder (makale yok)
const LANG_MAP = { tr: "tr", en: "en", de: "de", ru: "ru", ar: "en", es: "en", fr: "en" };

// ── HTML şablonu ──────────────────────────────────────────────────────────────

function buildEmail({ copy, articleUrl, unsubscribeUrl }) {
  const { subject, preheader, heading, intro, button, footer, unsubLabel, dir, lang } = copy;
  const html = `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${subject}</title></head>
<body style="margin:0;padding:0;background:#f6f1e7;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;color:#1a2238;">
<span style="display:none;max-height:0;overflow:hidden;color:transparent;">${preheader}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f1e7;padding:32px 16px;">
<tr><td align="center">
  <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#fff;border:1px solid #e7dec9;border-radius:8px;overflow:hidden;">
    <tr><td style="padding:32px 32px 8px 32px;">
      <div style="font-family:Georgia,serif;font-size:22px;color:#1a2238;letter-spacing:0.02em;">MONA HUKUK</div>
      <div style="font-size:11px;color:#a07d2a;letter-spacing:0.18em;text-transform:uppercase;margin-top:4px;">Antalya · Türkiye</div>
    </td></tr>
    <tr><td style="padding:16px 32px 0 32px;"><div style="height:2px;background:linear-gradient(90deg,#c4972b,#e7dec9);border-radius:1px;"></div></td></tr>
    <tr><td style="padding:24px 32px 8px 32px;">
      <h1 style="font-family:Georgia,serif;font-size:22px;line-height:1.3;margin:0 0 16px 0;color:#1a2238;">${heading}</h1>
      <p style="font-size:15px;line-height:1.7;color:#384055;margin:0 0 24px 0;">${intro}</p>
    </td></tr>
    <tr><td style="padding:0 32px 32px 32px;">
      <a href="${articleUrl}" style="display:inline-block;background:#c4972b;color:#1a2238;text-decoration:none;font-weight:600;font-size:15px;padding:14px 28px;border-radius:4px;">${button} →</a>
    </td></tr>
    <tr><td style="padding:16px 32px;border-top:1px solid #efe7d6;">
      <p style="font-size:11px;color:#9a9eb0;margin:0;">${footer} · <a href="${unsubscribeUrl}" style="color:#9a9eb0;text-decoration:underline;">${unsubLabel}</a></p>
    </td></tr>
  </table>
</td></tr>
</table>
</body></html>`;

  const text = `${heading}\n\n${intro}\n\n${button}: ${articleUrl}\n\n${footer}\n${unsubLabel}: ${unsubscribeUrl}`;
  return { subject, html, text };
}

// ── Tüm Resend Audience abonelerini çek ──────────────────────────────────────

async function getAllContacts() {
  const contacts = [];
  let cursor = null;

  while (true) {
    const url = new URL(`https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`);
    if (cursor) url.searchParams.set("cursor", cursor);

    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${RESEND_API_KEY}` },
    });

    if (!res.ok) {
      console.error("Resend API hatası:", res.status, await res.text());
      process.exit(1);
    }

    const data = await res.json();
    const page = data?.data ?? [];
    contacts.push(...page);

    if (!data?.next_cursor) break;
    cursor = data.next_cursor;
  }

  return contacts;
}

// ── Ana akış ─────────────────────────────────────────────────────────────────

async function run() {
  console.log("Resend Audience'dan aboneler çekiliyor...");
  const allContacts = await getAllContacts();

  // Sadece aktif (unsubscribed=false) aboneler
  const active = allContacts.filter(c => !c.unsubscribed);
  console.log(`${active.length} aktif abone (toplam: ${allContacts.length})\n`);

  if (active.length === 0) {
    console.log("Gönderilecek abone yok.");
    return;
  }

  let sent = 0, failed = 0;

  for (const contact of active) {
    const locale = contact.first_name || "tr"; // dil kodu first_name'de
    const langKey = LANG_MAP[locale] || "en";
    const copy = ARTICLE[langKey] || ARTICLE.en;
    const articleUrl = `${SITE_URL}/${copy.lang}/articles/${ARTICLE.slug}`;
    const unsubToken = createUnsubToken(contact.email, locale);
    const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe?token=${unsubToken}&lang=${locale}`;

    const { subject, html, text } = buildEmail({ copy, articleUrl, unsubscribeUrl });

    const mail = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: contact.email,
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
      console.log(`  ✓  ${contact.email} [${locale}] — gönderildi (${mailData.id})`);
      sent++;
    } else {
      console.error(`  ✗  ${contact.email} — hata:`, JSON.stringify(mailData));
      failed++;
    }

    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\n──────────────────────────────────`);
  console.log(`✓ Gönderildi : ${sent}`);
  if (failed > 0) console.log(`✗ Başarısız  : ${failed}`);
  console.log(`──────────────────────────────────\n`);
}

run().catch(err => { console.error(err); process.exit(1); });
