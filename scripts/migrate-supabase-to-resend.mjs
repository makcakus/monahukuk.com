/**
 * Tek seferlik migration: Supabase'deki onaylı abonelerin dil bilgisini
 * Resend Audience'daki first_name alanına yazar.
 *
 * Kullanım:
 *   node scripts/migrate-supabase-to-resend.mjs
 *
 * Gerekli env: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY,
 *              RESEND_API_KEY, RESEND_AUDIENCE_ID
 */

import { readFileSync } from "node:fs";

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
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_ROLE_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY || env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || env.RESEND_AUDIENCE_ID;

if (!SUPABASE_URL || !SUPABASE_KEY || !RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
  console.error("Eksik env var. Gerekli: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, RESEND_AUDIENCE_ID");
  process.exit(1);
}

async function run() {
  console.log("Supabase'den onaylı aboneler çekiliyor...");

  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/newsletter_subscribers?select=email,language&status=eq.confirmed`,
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
  console.log(`${subscribers.length} onaylı abone bulundu.\n`);

  if (subscribers.length === 0) {
    console.log("Migration gerekmez.");
    return;
  }

  let ok = 0, failed = 0;

  for (const sub of subscribers) {
    const locale = sub.language || "tr";

    // Resend Audience'a ekle / güncelle (first_name = locale)
    const r = await fetch(
      `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: sub.email,
          first_name: locale,
          unsubscribed: false,
        }),
      }
    );

    if (r.ok || r.status === 409) {
      console.log(`  ✓  ${sub.email} [${locale}]`);
      ok++;
    } else {
      const err = await r.text();
      console.error(`  ✗  ${sub.email} — ${r.status} ${err}`);
      failed++;
    }

    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log(`\n─────────────────────────`);
  console.log(`✓ Taşınan   : ${ok}`);
  if (failed > 0) console.log(`✗ Başarısız : ${failed}`);
  console.log(`─────────────────────────`);
  console.log("\nMigration tamamlandı. Artık Supabase env var'larını kaldırabilirsiniz.");
}

run().catch(err => { console.error(err); process.exit(1); });
