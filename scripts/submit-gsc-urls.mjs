/**
 * GSC URL Indexing Request Automation
 * ─────────────────────────────────────────────────────────────────────────────
 * Bu script Chrome'u açar, Google Search Console URL Denetimi'ne gider ve
 * her URL için "DİZİNE EKLENMESİNİ İSTE" butonuna otomatik tıklar.
 *
 * Ön koşul: Chrome'da mustafaakcakus@gmail.com ile GSC'ye giriş yapılmış olmalı.
 *
 * Kullanım:
 *   node scripts/submit-gsc-urls.mjs            # PENDING_URLS listesini gönder
 *   node scripts/submit-gsc-urls.mjs --dry-run  # Sadece URL listesini göster
 *
 * Kurulum (ilk seferinde):
 *   npm install puppeteer --save-dev
 */

import puppeteer from "puppeteer";
import { readFileSync, writeFileSync, existsSync } from "fs";

// ─── Yapılandırma ──────────────────────────────────────────────────────────
const GSC_PROPERTY = "https://monahukuk.com/";
const GSC_INSPECT_BASE = `https://search.google.com/u/0/search-console/inspect?resource_id=${encodeURIComponent(GSC_PROPERTY)}&id=`;
const SUBMITTED_LOG = new URL("../gsc-submitted.json", import.meta.url).pathname;
const DELAY_BETWEEN_URLS = 8000; // ms — kota aşımını önlemek için
const DAILY_QUOTA = 10; // GSC günlük limit

// ─── Gönderilecek URL'ler ─────────────────────────────────────────────────
// Gönderildiğinde bu listeden çıkar, gsc-submitted.json dosyasına taşınır.
const PENDING_URLS = [
  // DE
  "https://monahukuk.com/de/articles/condominium-management-kat-mulkiyeti-foreign-owners",
  "https://monahukuk.com/de/articles/health-insurance-requirement-residence-permit-turkey",
  "https://monahukuk.com/de/articles/turkey-climate-law-emission-permits-sanctions",
  // RU
  "https://monahukuk.com/ru/articles/condominium-management-kat-mulkiyeti-foreign-owners",
  "https://monahukuk.com/ru/articles/health-insurance-requirement-residence-permit-turkey",
  "https://monahukuk.com/ru/articles/turkey-climate-law-emission-permits-sanctions",
  // AR
  "https://monahukuk.com/ar/articles/condominium-management-kat-mulkiyeti-foreign-owners",
  "https://monahukuk.com/ar/articles/health-insurance-requirement-residence-permit-turkey",
  "https://monahukuk.com/ar/articles/turkey-climate-law-emission-permits-sanctions",
  // Exceptional citizenship — tüm locale'ler
  "https://monahukuk.com/en/articles/exceptional-turkish-citizenship-outstanding-service",
  "https://monahukuk.com/tr/articles/exceptional-turkish-citizenship-outstanding-service",
  "https://monahukuk.com/de/articles/exceptional-turkish-citizenship-outstanding-service",
  "https://monahukuk.com/ru/articles/exceptional-turkish-citizenship-outstanding-service",
  "https://monahukuk.com/ar/articles/exceptional-turkish-citizenship-outstanding-service",
];

// ─── Yardımcı fonksiyonlar ─────────────────────────────────────────────────
function loadSubmitted() {
  if (existsSync(SUBMITTED_LOG)) {
    return JSON.parse(readFileSync(SUBMITTED_LOG, "utf8"));
  }
  return {};
}

function saveSubmitted(data) {
  writeFileSync(SUBMITTED_LOG, JSON.stringify(data, null, 2));
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function requestIndexing(page, url) {
  console.log(`\n⏳  ${url}`);

  // GSC URL Denetimi'ne git
  await page.goto(
    `https://search.google.com/u/0/search-console/inspect?resource_id=${encodeURIComponent(GSC_PROPERTY)}&id=`,
    { waitUntil: "networkidle2", timeout: 30000 }
  );

  // Arama kutusuna URL'yi yaz
  await page.waitForSelector('input[type="text"], [role="combobox"]', { timeout: 15000 });
  const searchBox = await page.$('[aria-label*="URL"], [placeholder*="URL"], input[type="text"]');
  if (!searchBox) throw new Error("Arama kutusu bulunamadı");

  await searchBox.click({ clickCount: 3 });
  await searchBox.type(url, { delay: 30 });
  await page.keyboard.press("Enter");

  // Sayfa yüklenene kadar bekle
  await sleep(4000);

  // "DİZİNE EKLENMESİNİ İSTE" butonuna JS ile tıkla
  const result = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("[jsaction*='cOuCgd']")).filter(
      (d) => d.textContent.includes("eklenmesini") && d.getBoundingClientRect().width > 0
    );
    const btn = btns[btns.length - 1];
    if (!btn) return { ok: false, reason: "button_not_found" };

    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    ["pointerdown", "mousedown", "pointerup", "mouseup", "click"].forEach((type) => {
      btn.dispatchEvent(
        new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          view: window,
          clientX: cx,
          clientY: cy,
          button: 0,
        })
      );
    });
    return { ok: true, text: btn.textContent.trim().substring(0, 50) };
  });

  if (!result.ok) {
    console.log(`  ⚠️  Buton bulunamadı: ${result.reason}`);
    return "button_not_found";
  }

  // Dialog bekle
  await sleep(5000);

  const dialogResult = await page.evaluate(() => {
    const body = document.body.innerText;
    if (body.includes("Dizine eklenmesi istendi")) return "success";
    if (body.includes("Kota Aşıldı")) return "quota_exceeded";
    if (body.includes("reddedildi")) return "rejected";
    if (body.includes("Google'da mevcut")) return "already_indexed";
    return "unknown";
  });

  // Dialog'u kapat (ESC)
  await page.keyboard.press("Escape");

  return dialogResult;
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

  const toSend = pending.slice(0, DAILY_QUOTA);

  const browser = await puppeteer.launch({
    headless: false, // GSC oturumunuzu görmek için false
    executablePath:
      process.platform === "win32"
        ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
        : "/usr/bin/google-chrome",
    userDataDir:
      process.platform === "win32"
        ? `C:\\Users\\${process.env.USERNAME}\\AppData\\Local\\Google\\Chrome\\User Data`
        : `${process.env.HOME}/.config/google-chrome`,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });

  let successCount = 0;
  let quotaHit = false;

  for (const url of toSend) {
    if (quotaHit) break;

    const result = await requestIndexing(page, url);
    const timestamp = new Date().toISOString();

    switch (result) {
      case "success":
        console.log(`  ✅  Dizine eklenmesi istendi`);
        submitted[url] = { status: "submitted", ts: timestamp };
        successCount++;
        break;
      case "already_indexed":
        console.log(`  ℹ️   Zaten dizinde`);
        submitted[url] = { status: "already_indexed", ts: timestamp };
        break;
      case "quota_exceeded":
        console.log(`  🚫  Günlük kota doldu! Kalan URL'ler yarına ertelendi.`);
        quotaHit = true;
        break;
      case "rejected":
        console.log(`  ❌  Reddedildi (sayfa erişilemez olabilir)`);
        submitted[url] = { status: "rejected", ts: timestamp };
        break;
      default:
        console.log(`  ⚠️  Bilinmeyen sonuç: ${result}`);
    }

    saveSubmitted(submitted);

    if (!quotaHit && url !== toSend[toSend.length - 1]) {
      console.log(`  ⏱️   ${DELAY_BETWEEN_URLS / 1000}s bekleniyor...`);
      await sleep(DELAY_BETWEEN_URLS);
    }
  }

  await browser.close();

  const remaining = PENDING_URLS.filter((u) => !submitted[u]).length;
  console.log(`\n─────────────────────────────────────`);
  console.log(`✅  Başarıyla gönderilen: ${successCount}`);
  console.log(`📋  Kalan (yarına): ${remaining}`);
  if (remaining > 0) {
    console.log(`💡  Yarın tekrar çalıştırın: node scripts/submit-gsc-urls.mjs`);
  } else {
    console.log(`🎉  Tüm URL'ler işlendi!`);
  }
}

main().catch((err) => {
  console.error("Hata:", err);
  process.exit(1);
});
