/**
 * Haftalık "Hukuki Haberler" bültenini Resend audience'ındaki aktif abonelere gönderir.
 *
 * E-posta bültenin kendisini taşımaz; siteye yayımlanmış yazının bağlantısını verir
 * (başlık + kısa açıklama + "Bülteni Oku" düğmesi). Yazı canlıda açılmadan GÖNDERİLMEZ.
 *
 * Alıcı dili: Resend contact'ının first_name alanındaki dil kodu. "tr" olanlara Türkçe,
 * diğer herkese İngilizce bülten gider (legal-news yalnızca tr ve en'de yayımlanıyor).
 *
 * Kullanım (repo kökünden, .env.local dolu olmalı):
 *
 *   node scripts/send-legal-news-newsletter.mjs                  # KURU ÇALIŞTIRMA, en yeni bülten
 *   node scripts/send-legal-news-newsletter.mjs --date=2026-10-05
 *   node scripts/send-legal-news-newsletter.mjs --date=2026-10-05 --test-to=siz@ornek.com
 *   node scripts/send-legal-news-newsletter.mjs --date=2026-10-05 --send
 *
 * Bayraklar:
 *   --date=YYYY-MM-DD   Bülten tarihi (frontmatter date). Verilmezse tr klasöründeki en yenisi.
 *   --test-to=ADRES     Yalnızca bu adrese, her iki dilde birer test maili gönderir.
 *   --send              Gerçek gönderim. Bu bayrak yoksa hiçbir e-posta gitmez.
 *
 * Güvenlik:
 *   - Yazının tr ve en adresleri canlıda 200 dönmüyorsa --send ve --test-to reddedilir.
 *   - Gönderilenler .newsletter-sent/<tarih>.json dosyasına yazılır; betik yarıda kesilip
 *     yeniden çalıştırılırsa aynı kişiye ikinci kez göndermez. (.gitignore'a ekleyin.)
 *   - Önizleme HTML dosyaları .newsletter-preview/ klasörüne yazılır.
 */

import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { createHmac } from "node:crypto";
import path from "node:path";
import matter from "gray-matter";

// ── Argümanlar ───────────────────────────────────────────────────────────────

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, ...v] = a.replace(/^--/, "").split("=");
    return [k, v.length ? v.join("=") : true];
  })
);

const SEND = args.send === true;
const TEST_TO = typeof args["test-to"] === "string" ? args["test-to"].trim() : null;
const WANT_DATE = typeof args.date === "string" ? args.date : null;
const REAL_SEND = SEND || Boolean(TEST_TO);

// ── Ortam ────────────────────────────────────────────────────────────────────

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
  } catch {
    return {};
  }
}

const env = loadEnv();
const pick = (k) => process.env[k] || env[k];

const RESEND_API_KEY = pick("RESEND_API_KEY");
const RESEND_AUDIENCE_ID = pick("RESEND_AUDIENCE_ID");
const JWT_SECRET = pick("NEWSLETTER_JWT_SECRET");
const SITE_URL = (pick("NEXT_PUBLIC_SITE_URL") || "https://monahukuk.com").replace(/\/$/, "");
const FROM = pick("RESEND_FROM_EMAIL") || "MONA HUKUK <bulten@monahukuk.com>";

if (REAL_SEND) {
  const missing = [
    ["RESEND_API_KEY", RESEND_API_KEY],
    ["RESEND_AUDIENCE_ID", RESEND_AUDIENCE_ID],
    ["NEWSLETTER_JWT_SECRET", JWT_SECRET],
  ]
    .filter(([, v]) => !v)
    .map(([k]) => k);
  if (missing.length) {
    console.error(`Eksik env: ${missing.join(", ")} (.env.local dosyasına ekleyin)`);
    process.exit(1);
  }
}

// ── Bülten yazılarını oku ────────────────────────────────────────────────────

const CONTENT_DIR = path.join(process.cwd(), "content", "hukuki-haberler");

function loadPosts(locale) {
  const dir = path.join(CONTENT_DIR, locale);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => {
      const { data } = matter(readFileSync(path.join(dir, f), "utf8"));
      return {
        file: f,
        title: String(data.title ?? ""),
        description: String(data.description ?? ""),
        date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? ""),
        slug: String(data.slug ?? f.replace(/\.mdx?$/, "")),
        draft: data.draft === true,
      };
    })
    .filter((p) => !p.draft && /^\d{4}-\d{2}-\d{2}$/.test(p.date));
}

const trPosts = loadPosts("tr");
const enPosts = loadPosts("en");

const DATE =
  WANT_DATE ?? trPosts.map((p) => p.date).sort().at(-1);

if (!DATE) {
  console.error("content/hukuki-haberler/tr altında tarihli yazı bulunamadı. Çalışma dizini repo kökü mü?");
  process.exit(1);
}

const POSTS = {
  tr: trPosts.find((p) => p.date === DATE),
  en: enPosts.find((p) => p.date === DATE),
};

for (const loc of ["tr", "en"]) {
  if (!POSTS[loc]) {
    console.error(`${DATE} tarihli ${loc} yazısı bulunamadı (content/hukuki-haberler/${loc}).`);
    process.exit(1);
  }
}

const COPY = {
  tr: {
    lang: "tr",
    button: "Bülteni Oku",
    all: "Tüm bültenler",
    footer: "Mona Hukuk · Antalya, Türkiye",
    unsub: "Aboneliği iptal et",
    reason: "Bu e-postayı bülten listemize kayıtlı olduğunuz için aldınız.",
  },
  en: {
    lang: "en",
    button: "Read the Bulletin",
    all: "All bulletins",
    footer: "Mona Hukuk · Antalya, Turkey",
    unsub: "Unsubscribe",
    reason: "You are receiving this email because you subscribed to our newsletter.",
  },
};

const urlFor = (loc) => `${SITE_URL}/${loc}/legal-news/${POSTS[loc].slug}`;
const indexUrlFor = (loc) => `${SITE_URL}/${loc}/legal-news`;

// ── Canlı yayın kontrolü ─────────────────────────────────────────────────────

async function checkLive(loc) {
  const url = urlFor(loc);
  try {
    const res = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(20000) });
    const body = res.ok ? await res.text() : "";
    const ok = res.status === 200 && body.includes(POSTS[loc].slug);
    return { loc, url, ok, status: res.status };
  } catch (e) {
    return { loc, url, ok: false, status: `hata: ${e.message}` };
  }
}

// ── Yardımcılar ──────────────────────────────────────────────────────────────

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function b64url(buf) {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

// src/lib/newsletter-jwt.ts içindeki createUnsubToken ile birebir aynı biçim.
function createUnsubToken(email, locale) {
  const payload = b64url(Buffer.from(JSON.stringify({ t: "u", e: email, l: locale })));
  const sig = b64url(createHmac("sha256", JWT_SECRET).update(payload).digest());
  return `${payload}.${sig}`;
}

function buildEmail(loc, unsubscribeUrl) {
  const post = POSTS[loc];
  const c = COPY[loc];
  const link = urlFor(loc);
  const subject = post.title;

  const html = `<!doctype html>
<html lang="${c.lang}" dir="ltr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:#f6f1e7;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;color:#1a2238;">
<span style="display:none;max-height:0;overflow:hidden;color:transparent;">${esc(post.description)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f1e7;padding:32px 16px;">
<tr><td align="center">
  <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#fff;border:1px solid #e7dec9;border-radius:8px;overflow:hidden;">
    <tr><td style="padding:32px 32px 8px 32px;">
      <div style="font-family:Georgia,serif;font-size:22px;color:#1a2238;letter-spacing:0.02em;">MONA HUKUK</div>
      <div style="font-size:11px;color:#a07d2a;letter-spacing:0.18em;text-transform:uppercase;margin-top:4px;">Antalya · Türkiye</div>
    </td></tr>
    <tr><td style="padding:16px 32px 0 32px;"><div style="height:2px;background:linear-gradient(90deg,#c4972b,#e7dec9);border-radius:1px;"></div></td></tr>
    <tr><td style="padding:24px 32px 8px 32px;">
      <h1 style="font-family:Georgia,serif;font-size:22px;line-height:1.3;margin:0 0 16px 0;color:#1a2238;">${esc(post.title)}</h1>
      <p style="font-size:15px;line-height:1.7;color:#384055;margin:0 0 24px 0;">${esc(post.description)}</p>
    </td></tr>
    <tr><td style="padding:0 32px 24px 32px;">
      <a href="${link}" style="display:inline-block;background:#c4972b;color:#1a2238;text-decoration:none;font-weight:600;font-size:15px;padding:14px 28px;border-radius:4px;">${c.button} →</a>
    </td></tr>
    <tr><td style="padding:0 32px 24px 32px;">
      <a href="${indexUrlFor(loc)}" style="font-size:13px;color:#a07d2a;text-decoration:underline;">${c.all}</a>
    </td></tr>
    <tr><td style="padding:16px 32px;border-top:1px solid #efe7d6;">
      <p style="font-size:11px;color:#9a9eb0;margin:0 0 6px 0;">${c.reason}</p>
      <p style="font-size:11px;color:#9a9eb0;margin:0;">${c.footer} · <a href="${unsubscribeUrl}" style="color:#9a9eb0;text-decoration:underline;">${c.unsub}</a></p>
    </td></tr>
  </table>
</td></tr>
</table>
</body></html>`;

  const text = `${post.title}\n\n${post.description}\n\n${c.button}: ${link}\n${c.all}: ${indexUrlFor(loc)}\n\n${c.footer}\n${c.unsub}: ${unsubscribeUrl}`;
  return { subject, html, text };
}

// ── Resend ───────────────────────────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getAllContacts() {
  const contacts = [];
  const seen = new Set();
  let after = null;
  let cursor = null;

  for (let page = 0; page < 500; page++) {
    const url = new URL(`https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`);
    url.searchParams.set("limit", "100");
    if (after) url.searchParams.set("after", after);
    if (cursor) url.searchParams.set("cursor", cursor);

    const res = await fetch(url, { headers: { Authorization: `Bearer ${RESEND_API_KEY}` } });
    if (!res.ok) {
      console.error("Resend contacts hatası:", res.status, await res.text());
      process.exit(1);
    }
    const data = await res.json();
    const rows = data?.data ?? [];
    const fresh = rows.filter((c) => c?.id && !seen.has(c.id));
    for (const c of fresh) seen.add(c.id);
    contacts.push(...fresh);

    if (fresh.length === 0) break;
    if (data?.next_cursor) {
      cursor = data.next_cursor;
    } else if (data?.has_more) {
      after = rows[rows.length - 1].id;
    } else {
      break;
    }
  }
  return contacts;
}

async function sendMail({ to, subject, html, text, unsubscribeUrl }) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to,
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
    if (res.status === 429) {
      await sleep(1500 * (attempt + 1));
      continue;
    }
    const body = await res.json().catch(() => ({}));
    return { ok: res.ok, body };
  }
  return { ok: false, body: { message: "429: yeniden deneme sınırı aşıldı" } };
}

// ── Ana akış ─────────────────────────────────────────────────────────────────

async function run() {
  console.log(`Bülten tarihi : ${DATE}`);
  console.log(`  tr  : ${POSTS.tr.title}\n        ${urlFor("tr")}`);
  console.log(`  en  : ${POSTS.en.title}\n        ${urlFor("en")}`);
  console.log(`Mod           : ${SEND ? "GERÇEK GÖNDERİM" : TEST_TO ? `TEST → ${TEST_TO}` : "kuru çalıştırma (e-posta gitmez)"}\n`);

  // 1) Canlı kontrol
  const live = await Promise.all(["tr", "en"].map(checkLive));
  for (const l of live) console.log(`  canlı ${l.loc}: ${l.ok ? "✓ 200" : `✗ ${l.status}`}  ${l.url}`);
  const allLive = live.every((l) => l.ok);
  if (REAL_SEND && !allLive) {
    console.error("\nYazı canlıda doğrulanamadı; deploy bitmeden bülten gönderilmez. Hiçbir e-posta gönderilmedi.");
    process.exit(1);
  }
  if (!allLive) console.log("  (kuru çalıştırmada yalnızca uyarı; gerçek gönderimde durdurur)");

  // 2) Önizleme dosyaları
  mkdirSync(".newsletter-preview", { recursive: true });
  for (const loc of ["tr", "en"]) {
    const { html } = buildEmail(loc, `${SITE_URL}/api/newsletter/unsubscribe?token=ORNEK&lang=${loc}`);
    const file = path.join(".newsletter-preview", `${DATE}-${loc}.html`);
    writeFileSync(file, html);
    console.log(`  önizleme: ${file}`);
  }

  // 3) Test modu
  if (TEST_TO) {
    for (const loc of ["tr", "en"]) {
      const token = createUnsubToken(TEST_TO, loc);
      const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe?token=${token}&lang=${loc}`;
      const mail = buildEmail(loc, unsubscribeUrl);
      const r = await sendMail({ to: TEST_TO, ...mail, subject: `[TEST] ${mail.subject}`, unsubscribeUrl });
      console.log(r.ok ? `  ✓ test (${loc}) gönderildi: ${r.body.id}` : `  ✗ test (${loc}) hata: ${JSON.stringify(r.body)}`);
      await sleep(600);
    }
    return;
  }

  // 4) Alıcılar
  if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
    console.log("\nRESEND_API_KEY / RESEND_AUDIENCE_ID yok: alıcı listesi çekilmedi (kuru çalıştırma).");
    return;
  }

  const all = await getAllContacts();
  const active = all.filter((c) => !c.unsubscribed && c.email);
  const byLang = { tr: 0, en: 0 };
  for (const c of active) byLang[(c.first_name || "tr") === "tr" ? "tr" : "en"]++;
  console.log(`\nAudience: ${all.length} kişi, ${active.length} aktif  (tr: ${byLang.tr}, en: ${byLang.en})`);

  if (!SEND) {
    console.log("\nKuru çalıştırma bitti. Göndermek için aynı komuta --send ekleyin.");
    return;
  }

  // 5) Gönderim (yeniden başlatılabilir)
  mkdirSync(".newsletter-sent", { recursive: true });
  const logFile = path.join(".newsletter-sent", `${DATE}.json`);
  const done = new Set(existsSync(logFile) ? JSON.parse(readFileSync(logFile, "utf8")) : []);
  if (done.size) console.log(`Daha önce gönderilmiş: ${done.size} kişi (atlanacak)`);

  let sent = 0, failed = 0, skipped = 0;
  for (const contact of active) {
    const email = contact.email.toLowerCase();
    if (done.has(email)) { skipped++; continue; }

    const locale = contact.first_name || "tr";
    const loc = locale === "tr" ? "tr" : "en";
    const token = createUnsubToken(contact.email, locale);
    const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe?token=${token}&lang=${locale}`;
    const mail = buildEmail(loc, unsubscribeUrl);

    const r = await sendMail({ to: contact.email, ...mail, unsubscribeUrl });
    if (r.ok) {
      console.log(`  ✓ ${contact.email} [${loc}] ${r.body.id}`);
      done.add(email);
      writeFileSync(logFile, JSON.stringify([...done], null, 2));
      sent++;
    } else {
      console.error(`  ✗ ${contact.email} — ${JSON.stringify(r.body)}`);
      failed++;
    }
    await sleep(600);
  }

  console.log(`\n──────────────────────────────────`);
  console.log(`✓ Gönderildi : ${sent}`);
  if (skipped) console.log(`↷ Atlandı    : ${skipped}`);
  if (failed) console.log(`✗ Başarısız  : ${failed}  (komutu yeniden çalıştırırsanız yalnızca bunlar denenir)`);
  console.log(`──────────────────────────────────\n`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
