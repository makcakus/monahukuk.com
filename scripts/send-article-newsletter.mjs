/**
 * Yeni makaleyi tüm onaylı abonelere gönderir.
 * Kullanım: node scripts/send-article-newsletter.mjs
 *
 * Aboneler kendi dillerinde e-posta alır (TR/EN/DE/RU/AR→EN).
 */

import { readFileSync } from "node:fs";

// .env.local'dan değerleri oku
function loadEnv() {
  try {
    const raw = readFileSync(".env.local", "utf8");
    const env = {};
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const idx = trimmed.indexOf("=");
      if (idx === -1) continue;
      const k = trimmed.slice(0, idx).trim();
      const v = trimmed.slice(idx + 1).trim();
      env[k] = v;
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
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || env.NEXT_PUBLIC_SITE_URL || "https://monahukuk.com").replace(/\/$/, "");
const FROM = process.env.RESEND_FROM_EMAIL || env.RESEND_FROM_EMAIL || "MONA HUKUK <newsletter@monahukuk.com>";

if (!SUPABASE_URL || !SUPABASE_KEY || !RESEND_API_KEY) {
  console.error("Eksik env: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY veya RESEND_API_KEY");
  process.exit(1);
}

// ── Makale bilgileri ──────────────────────────────────────────────────────────

const ARTICLE = {
  slug: "kira-hukukunda-guncel-gelismeler-2025",
  tr: {
    lang: "tr",
    subject: "Kira Hukukunda Güncel Gelişmeler — MONA HUKUK Bülteni",
    preheader: "Yargıtay 2025 kararları: arabuluculuk, tahliye taahhüdü, TBK 344.",
    heading: "Kira Hukukunda Güncel Gelişmeler",
    intro: "01.09.2023'te zorunlu hale gelen arabuluculuk uygulaması ve son Yargıtay kararları, kira uyuşmazlıklarını köklü biçimde dönüştürdü. Arabuluculuk zamanlaması, tahliye taahhüdü, iki haklı ihtar ve TBK 344 yorumuna ilişkin 2024–2025 dönemi güncel kararlarını derledik.",
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
    intro: "Since mandatory mediation was introduced for rental disputes in 2023, courts have been interpreting the new framework extensively. We summarise the most significant Yargıtay and Regional Court decisions of 2024–2025 on mediation timing, eviction commitments, the two-justified-notice rule, and rent determination under TBK 344.",
    button: "Read Article",
    footer: "Mona Hukuk · Antalya, Turkey",
    unsubLabel: "Unsubscribe",
    dir: "ltr",
  },
  de: {
    lang: "de",
    subject: "Türkisches Mietrecht 2025: Aktuelle Gerichtsentscheidungen — MONA HUKUK Newsletter",
    preheader: "Obligatorische Mediation, Räumungsverpflichtung, TBK 344 und mehr.",
    heading: "Türkisches Mietrecht 2025: Aktuelle Gerichtsentscheidungen",
    intro: "Seit der Einführung der obligatorischen Mediation für Mietstreitigkeiten im Jahr 2023 haben türkische Gerichte das neue Verfahrenswerk intensiv ausgelegt. Wir fassen die wichtigsten Yargıtay- und Berufungsgerichtsentscheidungen von 2024–2025 zusammen: Mediationszeitpunkt, Räumungsverpflichtungen, Zwei-Mahnungen-Regel und Mietfestsetzung nach TBK 344.",
    button: "Artikel lesen",
    footer: "Mona Hukuk · Antalya, Türkei",
    unsubLabel: "Abbestellen",
    dir: "ltr",
  },
  ru: {
    lang: "ru",
    subject: "Арендное право Турции 2025: актуальные решения судов — Рассылка MONA HUKUK",
    preheader: "Обязательная медиация, обязательство о выселении, ст. 344 ТКО и другое.",
    heading: "Арендное право Турции 2025: актуальные решения судов",
    intro: "С момента введения обязательной медиации по арендным спорам в 2023 году турецкие суды активно формируют практику применения нового порядка. Мы собрали наиболее важные решения Верховного суда и апелляционных судов за 2024–2025 годы: сроки медиации, обязательства о выселении, правило двух предупреждений и определение арендной платы по ст. 344 ТКО.",
    button: "Читать статью",
    footer: "Mona Hukuk · Анталия, Турция",
    unsubLabel: "Отписаться",
    dir: "ltr",
  },
};

// AR abonelere İngilizce gönder (AR makale yok)
const LANG_MAP = { tr: "tr", en: "en", de: "de", ru: "ru", ar: "en" };

// ── HTML şablonu ──────────────────────────────────────────────────────────────

function buildEmail({ copy, articleUrl, unsubscribeUrl }) {
  const { subject, preheader, heading, intro, button, footer, unsubLabel, dir, lang } = copy;

  const html = `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#f6f1e7;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;color:#1a2238;">
<span style="display:none;max-height:0;overflow:hidden;color:transparent;">${preheader}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f1e7;padding:32px 16px;">
<tr><td align="center">
  <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid #e7dec9;border-radius:8px;overflow:hidden;">

    <!-- Header -->
    <tr><td style="padding:32px 32px 8px 32px;">
      <div style="font-family:Georgia,serif;font-size:22px;color:#1a2238;letter-spacing:0.02em;">MONA HUKUK</div>
      <div style="font-size:11px;color:#a07d2a;letter-spacing:0.18em;text-transform:uppercase;margin-top:4px;">Antalya · Türkiye</div>
    </td></tr>

    <!-- Divider -->
    <tr><td style="padding:16px 32px 0 32px;">
      <div style="height:2px;background:linear-gradient(90deg,#c4972b,#e7dec9);border-radius:1px;"></div>
    </td></tr>

    <!-- Article card -->
    <tr><td style="padding:24px 32px 8px 32px;">
      <div style="font-size:11px;color:#a07d2a;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:12px;">Hukuki Makale</div>
      <h1 style="font-family:Georgia,serif;font-size:22px;line-height:1.3;margin:0 0 16px 0;color:#1a2238;">${heading}</h1>
      <p style="font-size:15px;line-height:1.7;color:#384055;margin:0 0 24px 0;">${intro}</p>
    </td></tr>

    <!-- CTA button -->
    <tr><td style="padding:0 32px 32px 32px;">
      <a href="${articleUrl}"
         style="display:inline-block;background:#c4972b;color:#1a2238;text-decoration:none;font-weight:600;font-size:15px;padding:14px 28px;border-radius:4px;">
        ${button} →
      </a>
    </td></tr>

    <!-- Footer -->
    <tr><td style="padding:16px 32px;border-top:1px solid #efe7d6;">
      <p style="font-size:11px;color:#9a9eb0;margin:0;">
        ${footer} ·
        <a href="${unsubscribeUrl}" style="color:#9a9eb0;text-decoration:underline;">${unsubLabel}</a>
      </p>
    </td></tr>

  </table>
</td></tr>
</table>
</body>
</html>`;

  const text = [
    heading,
    "",
    intro,
    "",
    `${button}: ${articleUrl}`,
    "",
    `${footer}`,
    `${unsubLabel}: ${unsubscribeUrl}`,
  ].join("\n");

  return { subject, html, text };
}

// ── Ana akış ─────────────────────────────────────────────────────────────────

async function run() {
  // Onaylı aboneleri çek
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/newsletter_subscribers?select=id,email,language,unsubscribe_token&status=eq.confirmed`,
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    }
  );

  if (!res.ok) {
    console.error("Supabase hatası:", res.status, await res.text());
    process.exit(1);
  }

  const subscribers = await res.json();
  console.log(`\n${subscribers.length} onaylı abone bulundu.\n`);

  if (subscribers.length === 0) {
    console.log("Gönderilecek abone yok.");
    return;
  }

  let sent = 0;
  let failed = 0;

  for (const sub of subscribers) {
    const langKey = LANG_MAP[sub.language] || "en";
    const copy = ARTICLE[langKey] || ARTICLE.en;
    const articleUrl = `${SITE_URL}/${copy.lang}/articles/${ARTICLE.slug}`;
    const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe?token=${sub.unsubscribe_token}&lang=${sub.language}`;

    const { subject, html, text } = buildEmail({ copy, articleUrl, unsubscribeUrl });

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
      console.log(`  ✓  ${sub.email} [${sub.language}] — gönderildi (id: ${mailData.id})`);
      sent++;
    } else {
      console.error(`  ✗  ${sub.email} [${sub.language}] — hata:`, JSON.stringify(mailData));
      failed++;
    }

    // Rate-limit: 2 saniyede 1 istek (Resend free plan: 1 req/s)
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log(`\n──────────────────────────────────`);
  console.log(`✓ Gönderildi : ${sent}`);
  if (failed > 0) console.log(`✗ Başarısız  : ${failed}`);
  console.log(`──────────────────────────────────\n`);
}

run().catch((err) => {
  console.error("Beklenmeyen hata:", err);
  process.exit(1);
});
