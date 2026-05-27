/**
 * GSC Indexing API — Tam Otomasyon
 * ─────────────────────────────────────────────────────────────────────────────
 * İlk çalıştırmada: tarayıcı açılır, Google hesabına giriş yapılır (tek seferlik).
 * Sonraki çalıştırmalarda: kayıtlı token ile otomatik çalışır.
 *
 * Kullanım:
 *   node scripts/gsc-index.mjs            # Bekleyen URL'leri gönder
 *   node scripts/gsc-index.mjs --dry-run  # Sadece listeyi göster
 *
 * Önce GSC'de monahukuk.com property'sine bu Google hesabını owner olarak ekleyin.
 */

import { google } from "googleapis";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { exec } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const OAUTH_CLIENT_FILE = join(ROOT, "gsc-oauth-client.json");
const TOKEN_FILE = join(ROOT, "gsc-token.json");
const SUBMITTED_LOG = join(ROOT, "gsc-submitted.json");
const DAILY_QUOTA = 200;

// ─── Gönderilecek URL'ler ─────────────────────────────────────────────────
const PENDING_URLS = [
  // ── Önceki batch (DE/RU/AR + hate speech) ────────────────────────────────
  "https://monahukuk.com/de/articles/condominium-management-kat-mulkiyeti-foreign-owners",
  "https://monahukuk.com/de/articles/health-insurance-requirement-residence-permit-turkey",
  "https://monahukuk.com/de/articles/turkey-climate-law-emission-permits-sanctions",
  "https://monahukuk.com/ru/articles/condominium-management-kat-mulkiyeti-foreign-owners",
  "https://monahukuk.com/ru/articles/health-insurance-requirement-residence-permit-turkey",
  "https://monahukuk.com/ru/articles/turkey-climate-law-emission-permits-sanctions",
  "https://monahukuk.com/ar/articles/condominium-management-kat-mulkiyeti-foreign-owners",
  "https://monahukuk.com/ar/articles/health-insurance-requirement-residence-permit-turkey",
  "https://monahukuk.com/ar/articles/turkey-climate-law-emission-permits-sanctions",
  "https://monahukuk.com/en/articles/exceptional-turkish-citizenship-outstanding-service",
  "https://monahukuk.com/tr/articles/exceptional-turkish-citizenship-outstanding-service",
  "https://monahukuk.com/de/articles/exceptional-turkish-citizenship-outstanding-service",
  "https://monahukuk.com/ru/articles/exceptional-turkish-citizenship-outstanding-service",
  "https://monahukuk.com/ar/articles/exceptional-turkish-citizenship-outstanding-service",
  "https://monahukuk.com/tr/articles/hate-speech-limits-turkish-criminal-law",
  "https://monahukuk.com/en/articles/hate-speech-limits-turkish-criminal-law",
  "https://monahukuk.com/de/articles/hate-speech-limits-turkish-criminal-law",
  "https://monahukuk.com/ru/articles/hate-speech-limits-turkish-criminal-law",
  "https://monahukuk.com/ar/articles/hate-speech-limits-turkish-criminal-law",
  // ── ES locale ana sayfaları ───────────────────────────────────────────────
  "https://monahukuk.com/es",
  "https://monahukuk.com/es/articles",
  "https://monahukuk.com/es/about",
  "https://monahukuk.com/es/contact",
  "https://monahukuk.com/es/practice-areas",
  "https://monahukuk.com/es/team",
  // ── ES makaleleri (83 adet) ───────────────────────────────────────────────
  "https://monahukuk.com/es/articles/administrative-court-procedure-foreigners",
  "https://monahukuk.com/es/articles/ai-tools-employee-data-kvkk-turkey",
  "https://monahukuk.com/es/articles/alimony-types-foreign-clients-turkey",
  "https://monahukuk.com/es/articles/antalya-rental-agreement-rights-obligations",
  "https://monahukuk.com/es/articles/arbitration-turkey-icc-istac-guide",
  "https://monahukuk.com/es/articles/artificial-intelligence-turkish-law-framework",
  "https://monahukuk.com/es/articles/buying-property-in-turkey-foreigner-guide",
  "https://monahukuk.com/es/articles/certificate-of-inheritance-foreign-heirs",
  "https://monahukuk.com/es/articles/citizenship-stateless-persons-born-turkey",
  "https://monahukuk.com/es/articles/commercial-lease-turkey",
  "https://monahukuk.com/es/articles/common-mistakes-commercial-contracts-turkey",
  "https://monahukuk.com/es/articles/company-director-criminal-liability-turkey",
  "https://monahukuk.com/es/articles/company-merger-acquisition-legal-process",
  "https://monahukuk.com/es/articles/condominium-management-kat-mulkiyeti-foreign-owners",
  "https://monahukuk.com/es/articles/criminal-procedure-foreigners-turkey",
  "https://monahukuk.com/es/articles/cross-border-data-transfer-foreign-companies-turkey",
  "https://monahukuk.com/es/articles/custody-rights-foreign-clients-turkey",
  "https://monahukuk.com/es/articles/cybercrime-charges-foreigners-turkey",
  "https://monahukuk.com/es/articles/deportation-order-appeal-turkey",
  "https://monahukuk.com/es/articles/detention-judicial-control-foreigners-turkey",
  "https://monahukuk.com/es/articles/ecommerce-kvkk-cookie-policy-compliance",
  "https://monahukuk.com/es/articles/enforcing-foreign-judgments-turkey-guide",
  "https://monahukuk.com/es/articles/eviction-landlord-need-turkey",
  "https://monahukuk.com/es/articles/exceptional-turkish-citizenship-outstanding-service",
  "https://monahukuk.com/es/articles/family-residence-permit-spouse-turkish-citizen",
  "https://monahukuk.com/es/articles/foreign-capital-partnership-turkey",
  "https://monahukuk.com/es/articles/foreign-employee-termination-turkey",
  "https://monahukuk.com/es/articles/foreign-investor-company-formation-turkey",
  "https://monahukuk.com/es/articles/foreign-will-recognition-turkey",
  "https://monahukuk.com/es/articles/foreigners-property-turkey-inheritance-law",
  "https://monahukuk.com/es/articles/fraud-victims-foreigners-legal-remedies",
  "https://monahukuk.com/es/articles/hate-speech-limits-turkish-criminal-law",
  "https://monahukuk.com/es/articles/health-insurance-requirement-residence-permit-turkey",
  "https://monahukuk.com/es/articles/inheritance-rejection-conditions-period",
  "https://monahukuk.com/es/articles/inheritance-tax-turkey-guide",
  "https://monahukuk.com/es/articles/interim-court-orders-divorce-turkey",
  "https://monahukuk.com/es/articles/international-child-abduction-hague-convention",
  "https://monahukuk.com/es/articles/international-divorce-recognition-enforcement-turkey",
  "https://monahukuk.com/es/articles/investment-property-turkey-tax-legal-obligations",
  "https://monahukuk.com/es/articles/jsc-vs-llc-which-to-choose-turkey",
  "https://monahukuk.com/es/articles/kira-hukukunda-guncel-gelismeler-2025",
  "https://monahukuk.com/es/articles/kvkk-compliance-turkey-data-protection",
  "https://monahukuk.com/es/articles/kvkk-privacy-notice-vs-explicit-consent-turkey",
  "https://monahukuk.com/es/articles/long-term-residence-permit-turkey-requirements",
  "https://monahukuk.com/es/articles/masak-aml-compliance-obligations-foreign-clients",
  "https://monahukuk.com/es/articles/minority-shareholder-squeeze-out-turkey-llc",
  "https://monahukuk.com/es/articles/mobbing-workplace-harassment-legal-remedies",
  "https://monahukuk.com/es/articles/municipality-fines-objection-foreigners",
  "https://monahukuk.com/es/articles/narcotics-offences-defence-strategies-turkey",
  "https://monahukuk.com/es/articles/no-poach-wage-fixing-turkey-labour-market",
  "https://monahukuk.com/es/articles/off-plan-property-purchase-risks-turkey",
  "https://monahukuk.com/es/articles/prenuptial-agreement-foreign-couples-turkey",
  "https://monahukuk.com/es/articles/probation-period-rights-turkey",
  "https://monahukuk.com/es/articles/property-division-foreign-spouses-divorce-turkey",
  "https://monahukuk.com/es/articles/protecting-against-fraud-property-purchase-turkey",
  "https://monahukuk.com/es/articles/real-estate-agent-liability-turkey",
  "https://monahukuk.com/es/articles/remote-foreign-workers-rights-turkey",
  "https://monahukuk.com/es/articles/renouncing-turkish-citizenship-procedure-guide",
  "https://monahukuk.com/es/articles/rent-determination-lawsuit-turkey",
  "https://monahukuk.com/es/articles/rent-increase-cap-turkey",
  "https://monahukuk.com/es/articles/reserved-share-inheritance-turkey",
  "https://monahukuk.com/es/articles/residence-permit-cancellation-legal-routes",
  "https://monahukuk.com/es/articles/restriction-code-check-removal-foreigners",
  "https://monahukuk.com/es/articles/security-deposit-rental-turkey",
  "https://monahukuk.com/es/articles/severance-notice-pay-foreigners-calculation",
  "https://monahukuk.com/es/articles/short-term-residence-permit-turkey-guide",
  "https://monahukuk.com/es/articles/social-media-defamation-legal-remedies",
  "https://monahukuk.com/es/articles/software-license-agreements-legal-risks",
  "https://monahukuk.com/es/articles/student-to-work-permit-transition-turkey",
  "https://monahukuk.com/es/articles/tenant-non-payment-eviction-two-notice-turkey",
  "https://monahukuk.com/es/articles/title-deed-transfer-checklist-foreign-buyers",
  "https://monahukuk.com/es/articles/tourist-visa-to-residence-permit-turkey",
  "https://monahukuk.com/es/articles/traffic-accident-criminal-liability-foreign-drivers",
  "https://monahukuk.com/es/articles/turkey-climate-law-emission-permits-sanctions",
  "https://monahukuk.com/es/articles/turkish-citizenship-application-rejection-appeal",
  "https://monahukuk.com/es/articles/turkish-citizenship-by-investment-full-guide",
  "https://monahukuk.com/es/articles/turkish-citizenship-for-spouse-and-children",
  "https://monahukuk.com/es/articles/turkish-citizenship-through-marriage",
  "https://monahukuk.com/es/articles/turkish-dual-citizenship-status",
  "https://monahukuk.com/es/articles/visa-denial-cancellation-lawsuit-turkey",
  "https://monahukuk.com/es/articles/will-drafting-foreigners-turkey",
  "https://monahukuk.com/es/articles/work-permit-cancellation-employment-contract-end",
  "https://monahukuk.com/es/articles/work-permit-denial-appeal-turkey",
];

// ─── Yardımcı fonksiyonlar ─────────────────────────────────────────────────
function loadSubmitted() {
  if (existsSync(SUBMITTED_LOG)) return JSON.parse(readFileSync(SUBMITTED_LOG, "utf8"));
  return {};
}

function saveSubmitted(data) {
  writeFileSync(SUBMITTED_LOG, JSON.stringify(data, null, 2));
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function openBrowser(url) {
  const cmd =
    process.platform === "win32" ? `start "" "${url}"` :
    process.platform === "darwin" ? `open "${url}"` :
    `xdg-open "${url}"`;
  exec(cmd);
}

// ─── OAuth2 Auth ──────────────────────────────────────────────────────────
async function getAuthClient() {
  const { client_id, client_secret, redirect_uris } = JSON.parse(
    readFileSync(OAUTH_CLIENT_FILE, "utf8")
  ).installed;

  const oauth2 = new google.auth.OAuth2(client_id, client_secret, "http://localhost:3737");

  // Kayıtlı token varsa kullan
  if (existsSync(TOKEN_FILE)) {
    const token = JSON.parse(readFileSync(TOKEN_FILE, "utf8"));
    oauth2.setCredentials(token);
    // Token yenile
    try {
      const { credentials } = await oauth2.refreshAccessToken();
      oauth2.setCredentials(credentials);
      writeFileSync(TOKEN_FILE, JSON.stringify(credentials, null, 2));
      console.log("🔑  Token yenilendi.\n");
    } catch (e) {
      console.log("⚠️   Token yenilenemedi, yeniden giriş gerekiyor...\n");
      return await doOAuthFlow(oauth2);
    }
    return oauth2;
  }

  return await doOAuthFlow(oauth2);
}

async function doOAuthFlow(oauth2) {
  const authUrl = oauth2.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/indexing"],
    prompt: "consent",
  });

  console.log("🌐  Tarayıcıda Google hesabına giriş yapın...");
  console.log(`    ${authUrl}\n`);
  openBrowser(authUrl);

  // Localhost:3737'de code bekle
  const code = await new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url, "http://localhost:3737");
      const code = url.searchParams.get("code");
      if (code) {
        res.end("<h2>✅ Yetkilendirme tamam! Bu sekmeyi kapatabilirsiniz.</h2>");
        server.close();
        resolve(code);
      } else {
        res.end("<h2>❌ Kod alınamadı.</h2>");
        server.close();
        reject(new Error("OAuth code alınamadı"));
      }
    });
    server.listen(3737, () => console.log("⏳  Yetkilendirme bekleniyor (localhost:3737)..."));
    setTimeout(() => { server.close(); reject(new Error("Zaman aşımı (120s)")); }, 120000);
  });

  const { tokens } = await oauth2.getToken(code);
  oauth2.setCredentials(tokens);
  writeFileSync(TOKEN_FILE, JSON.stringify(tokens, null, 2));
  console.log("✅  Giriş başarılı, token kaydedildi.\n");
  return oauth2;
}

// ─── URL Gönder ───────────────────────────────────────────────────────────
async function submitUrl(auth, url) {
  const response = await fetch(
    "https://indexing.googleapis.com/v3/urlNotifications:publish",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth.credentials.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    }
  );

  const data = await response.json();

  if (response.status === 200) return { status: "success", data };
  if (response.status === 429) return { status: "quota_exceeded", data };
  if (response.status === 403) return { status: "forbidden", data };
  return { status: "error", data };
}

// ─── Ana çalışma ──────────────────────────────────────────────────────────
async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const submitted = loadSubmitted();
  const pending = PENDING_URLS.filter((u) => !submitted[u]);

  console.log(`\n📋  Bekleyen URL sayısı: ${pending.length}`);
  console.log(`📌  Bugün gönderilebilecek: ${DAILY_QUOTA} (günlük kota)\n`);

  if (pending.length === 0) {
    console.log("✅  Tüm URL'ler gönderilmiş!");
    return;
  }

  if (dryRun) {
    pending.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));
    return;
  }

  const auth = await getAuthClient();
  const toSend = pending.slice(0, DAILY_QUOTA);
  let successCount = 0;

  for (const url of toSend) {
    console.log(`\n⏳  ${url}`);
    const result = await submitUrl(auth, url);
    const timestamp = new Date().toISOString();

    switch (result.status) {
      case "success":
        console.log(`  ✅  Dizine eklenmesi istendi`);
        submitted[url] = { status: "submitted", ts: timestamp };
        successCount++;
        break;
      case "quota_exceeded":
        console.log(`  🚫  Günlük kota doldu! Kalan URL'ler yarına ertelendi.`);
        saveSubmitted(submitted);
        const remaining2 = PENDING_URLS.filter((u) => !submitted[u]).length;
        console.log(`\n─────────────────────────────────────`);
        console.log(`✅  Başarıyla gönderilen: ${successCount}`);
        console.log(`📋  Kalan (yarına): ${remaining2}`);
        return;
      case "forbidden":
        console.log(`  ❌  Erişim reddedildi — GSC'de bu hesabı owner olarak ekleyin`);
        console.log(`      Hata: ${JSON.stringify(result.data?.error?.message)}`);
        break;
      default:
        console.log(`  ⚠️   Hata: ${JSON.stringify(result.data?.error?.message || result.data)}`);
        submitted[url] = { status: "error", ts: timestamp, detail: result.data?.error?.message };
    }

    saveSubmitted(submitted);

    if (url !== toSend[toSend.length - 1]) {
      await sleep(500); // API limit için kısa bekleme
    }
  }

  const remaining = PENDING_URLS.filter((u) => !submitted[u]).length;
  console.log(`\n─────────────────────────────────────`);
  console.log(`✅  Başarıyla gönderilen: ${successCount}`);
  console.log(`📋  Kalan (yarına): ${remaining}`);
  if (remaining > 0) {
    console.log(`💡  Yarın tekrar çalıştırın: node scripts/gsc-index.mjs`);
  } else {
    console.log(`🎉  Tüm URL'ler işlendi!`);
  }
}

main().catch((err) => {
  console.error("Hata:", err.message || err);
  process.exit(1);
});
