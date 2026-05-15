#!/usr/bin/env node
/**
 * add-article-images.mjs
 *
 * translationKey → image path eşlemesini okur,
 * tüm 5 locale (tr/en/de/ru/ar) dosyalarına `image:` frontmatter alanı ekler.
 *
 * Kullanım: node scripts/add-article-images.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const matter = require("gray-matter");

// ── MAPPING: translationKey → /images/articles/filename.jpg ───────────────────
// Bu objeyi ajan tamamlandığında doldurun.
// translationKey her zaman EN slug'a eşittir.
const IMAGE_MAP = {
  "administrative-court-procedure-foreigners": "/images/articles/idare-mahkemesi-yabanci-uyruklu-administrative-court-procedure-antalya-turkey-avukat-hukuk-yargitay.jpg",
  "alimony-types-foreign-clients-turkey": "/images/articles/nafaka-turleri-yabanci-alimony-types-family-law-antalya-turkey-avukat-hukuk-aile-hukuku.jpg",
  "antalya-rental-agreement-rights-obligations": "/images/articles/antalya-kira-sozlesmesi-hak-yukumluluk-rental-agreement-rights-antalya-turkey-avukat-hukuk-kira.jpg",
  "artificial-intelligence-turkish-law-framework": "/images/articles/yapay-zeka-turk-hukuku-artificial-intelligence-turkish-law-antalya-turkey-avukat-hukuk-teknoloji.jpg",
  "buying-property-in-turkey-foreigner-guide": "/images/articles/turkiyede-emlak-alimi-yabanci-property-purchase-turkey-foreigner-antalya-turkey-avukat-hukuk-tapu.jpg",
  "certificate-of-inheritance-foreign-heirs": "/images/articles/veraset-ilamı-yabanci-mirascilar-inheritance-certificate-foreign-heirs-antalya-turkey-avukat-hukuk.jpg",
  "citizenship-stateless-persons-born-turkey": "/images/articles/vatansiz-kisi-turkiye-dogum-vatandaslik-citizenship-stateless-born-turkey-antalya-avukat-hukuk.jpg",
  "commercial-lease-turkey": "/images/articles/ticari-kira-sozlesmesi-commercial-lease-turkey-office-building-antalya-turkey-avukat-hukuk.jpg",
  "common-mistakes-commercial-contracts-turkey": "/images/articles/ticari-sozlesme-hatalari-commercial-contract-mistakes-turkey-antalya-avukat-hukuk-sozlesme.jpg",
  "company-merger-acquisition-legal-process": "/images/articles/sirket-birlesmesi-devralma-company-merger-acquisition-legal-antalya-turkey-avukat-hukuk.jpg",
  "criminal-procedure-foreigners-turkey": "/images/articles/ceza-yargilamasi-yabanci-criminal-procedure-foreigners-turkey-antalya-avukat-hukuk-ceza.jpg",
  "cross-border-data-transfer-foreign-companies-turkey": "/images/articles/sinir-otesi-veri-transferi-cross-border-data-transfer-turkey-antalya-avukat-hukuk-kvkk.jpg",
  "custody-rights-foreign-clients-turkey": "/images/articles/velayet-hakki-yabanci-musteri-custody-rights-foreign-clients-turkey-antalya-avukat-hukuk.jpg",
  "cybercrime-charges-foreigners-turkey": "/images/articles/siber-suc-yabanci-cybercrime-charges-foreigners-turkey-antalya-avukat-hukuk-digital.jpg",
  "deportation-order-appeal-turkey": "/images/articles/sinir-disi-karari-itiraz-deportation-order-appeal-turkey-antalya-avukat-hukuk-goc.jpg",
  "detention-judicial-control-foreigners-turkey": "/images/articles/gozalti-adli-kontrol-yabanci-detention-judicial-control-foreigners-antalya-turkey-avukat-hukuk.jpg",
  "ecommerce-kvkk-cookie-policy-compliance": "/images/articles/eticaret-kvkk-cerez-politikası-ecommerce-cookie-policy-compliance-antalya-turkey-avukat-hukuk.jpg",
  "enforcing-foreign-judgments-turkey-guide": "/images/articles/yabanci-mahkeme-karari-tenfiz-enforcing-foreign-judgments-turkey-antalya-avukat-hukuk.jpg",
  "eviction-landlord-need-turkey": "/images/articles/ihtiyac-nedeniyle-tahliye-ev-sahibi-eviction-landlord-need-turkey-antalya-avukat-hukuk-kira.jpg",
  "family-residence-permit-spouse-turkish-citizen": "/images/articles/aile-oturma-izni-turk-vatandas-esine-family-residence-permit-spouse-antalya-turkey-avukat-hukuk.jpg",
  "foreign-capital-partnership-turkey": "/images/articles/yabanci-sermaye-ortaklik-foreign-capital-partnership-turkey-antalya-avukat-hukuk-yatirim.jpg",
  "foreign-employee-termination-turkey": "/images/articles/yabanci-calisan-isten-cikarma-foreign-employee-termination-turkey-antalya-avukat-hukuk-is.jpg",
  "foreign-investor-company-formation-turkey": "/images/articles/yabanci-yatirimci-sirket-kurulumu-foreign-investor-company-formation-turkey-antalya-avukat-hukuk.jpg",
  "foreign-will-recognition-turkey": "/images/articles/yabanci-vasiyetname-taninmasi-foreign-will-recognition-turkey-antalya-avukat-hukuk-miras.jpg",
  "foreigners-property-turkey-inheritance-law": "/images/articles/yabancilarin-turkiyede-miras-yoluyla-mulk-property-inheritance-foreigners-antalya-turkey-avukat.jpg",
  "fraud-victims-foreigners-legal-remedies": "/images/articles/dolandiricilik-magduru-yabanci-fraud-victims-foreigners-legal-remedies-antalya-turkey-avukat.jpg",
  "inheritance-rejection-conditions-period": "/images/articles/mirasi-reddetme-kosullari-sure-inheritance-rejection-conditions-antalya-turkey-avukat-hukuk-miras.jpg",
  "international-child-abduction-hague-convention": "/images/articles/uluslararasi-cocuk-kacirma-lahey-international-child-abduction-hague-antalya-turkey-avukat-hukuk.jpg",
  "international-divorce-recognition-enforcement-turkey": "/images/articles/uluslararasi-bosanma-taninmasi-international-divorce-recognition-turkey-antalya-avukat-hukuk.jpg",
  "investment-property-turkey-tax-legal-obligations": "/images/articles/yatirim-amacli-gayrimenkul-vergi-investment-property-turkey-tax-antalya-turkey-avukat-hukuk-emlak.jpg",
  "jsc-vs-llc-which-to-choose-turkey": "/images/articles/anonim-limited-sirket-secimi-jsc-vs-llc-turkey-corporate-antalya-avukat-hukuk-sirket.jpg",
  "kira-hukukunda-guncel-gelismeler-2025": "/images/articles/kira-hukukunda-guncel-gelismeler-2025-rental-law-developments-antalya-turkey-avukat-hukuk.jpg",
  "kvkk-compliance-turkey-data-protection": "/images/articles/kvkk-uyum-veri-koruma-kvkk-compliance-data-protection-turkey-antalya-avukat-hukuk-gdpr.jpg",
  "long-term-residence-permit-turkey-requirements": "/images/articles/uzun-donemli-oturma-izni-long-term-residence-permit-turkey-antalya-avukat-hukuk-vize.jpg",
  "masak-aml-compliance-obligations-foreign-clients": "/images/articles/masak-aml-uyum-yabanci-musteri-aml-compliance-obligations-turkey-antalya-avukat-hukuk.jpg",
  "minority-shareholder-squeeze-out-turkey-llc": "/images/articles/azinlik-pay-sahibi-squeeze-out-minority-shareholder-turkey-llc-antalya-avukat-hukuk.jpg",
  "mobbing-workplace-harassment-legal-remedies": "/images/articles/mobbing-isveri-tacizi-workplace-harassment-legal-remedies-antalya-turkey-avukat-hukuk.jpg",
  "municipality-fines-objection-foreigners": "/images/articles/belediye-para-cezasi-itiraz-yabanci-municipality-fines-objection-foreigners-antalya-turkey-avukat.jpg",
  "narcotics-offences-defence-strategies-turkey": "/images/articles/uyusturucu-suc-savunma-narcotics-offences-defence-strategies-turkey-antalya-avukat-hukuk-ceza.jpg",
  "no-poach-wage-fixing-turkey-labour-market": "/images/articles/rekabet-etmeme-ucret-belirleme-no-poach-wage-fixing-turkey-labour-antalya-avukat-hukuk.jpg",
  "off-plan-property-purchase-risks-turkey": "/images/articles/plan-oncesi-konut-alimi-riski-off-plan-property-risks-turkey-antalya-avukat-hukuk-insaat.jpg",
  "prenuptial-agreement-foreign-couples-turkey": "/images/articles/evlilik-oncesi-mal-rejimi-yabanci-prenuptial-agreement-foreign-couples-turkey-antalya-avukat.jpg",
  "property-division-foreign-spouses-divorce-turkey": "/images/articles/yabanci-eslerin-bosanmada-mal-paylasimi-property-division-divorce-turkey-antalya-avukat-hukuk.jpg",
  "protecting-against-fraud-property-purchase-turkey": "/images/articles/emlak-dolandiriciligina-karsi-korunma-fraud-property-purchase-turkey-antalya-avukat-hukuk.jpg",
  "real-estate-agent-liability-turkey": "/images/articles/emlak-komisyoncusu-sorumlulugu-real-estate-agent-liability-turkey-antalya-avukat-hukuk.jpg",
  "remote-foreign-workers-rights-turkey": "/images/articles/uzaktan-calisan-yabanci-haklari-remote-foreign-workers-rights-turkey-antalya-avukat-hukuk.jpg",
  "renouncing-turkish-citizenship-procedure-guide": "/images/articles/turk-vatandasligini-birakmak-renouncing-turkish-citizenship-procedure-antalya-avukat-hukuk.jpg",
  "rent-determination-lawsuit-turkey": "/images/articles/kira-tespiti-davasi-rent-determination-lawsuit-turkey-antalya-avukat-hukuk-kira-hukuku.jpg",
  "rent-increase-cap-turkey": "/images/articles/kira-artis-siniri-rent-increase-cap-turkey-housing-antalya-avukat-hukuk-kira-artisi.jpg",
  "reserved-share-inheritance-turkey": "/images/articles/sakli-pay-miras-hukuku-reserved-share-inheritance-turkey-antalya-avukat-hukuk-miras.jpg",
  "residence-permit-cancellation-legal-routes": "/images/articles/oturma-izni-iptali-hukuki-yollar-residence-permit-cancellation-turkey-antalya-avukat-hukuk.jpg",
  "restriction-code-check-removal-foreigners": "/images/articles/seyahat-yasagi-kaldirma-yabanci-restriction-code-removal-foreigners-turkey-antalya-avukat-hukuk.jpg",
  "security-deposit-rental-turkey": "/images/articles/kira-depozito-guvence-bedeli-security-deposit-rental-turkey-antalya-avukat-hukuk-kira.jpg",
  "severance-notice-pay-foreigners-calculation": "/images/articles/kidem-ihbar-tazminati-yabanci-severance-notice-pay-foreigners-turkey-antalya-avukat-hukuk.jpg",
  "short-term-residence-permit-turkey-guide": "/images/articles/kisa-donem-oturma-izni-short-term-residence-permit-turkey-antalya-avukat-hukuk-vize.jpg",
  "social-media-defamation-legal-remedies": "/images/articles/sosyal-medya-hakaret-hukuki-yollar-social-media-defamation-remedies-antalya-turkey-avukat-hukuk.jpg",
  "software-license-agreements-legal-risks": "/images/articles/yazilim-lisans-sozlesmesi-riskler-software-license-agreement-risks-turkey-antalya-avukat-hukuk.jpg",
  "student-to-work-permit-transition-turkey": "/images/articles/ogrenci-calisma-izni-gecisi-student-to-work-permit-transition-turkey-antalya-avukat-hukuk.jpg",
  "title-deed-transfer-checklist-foreign-buyers": "/images/articles/tapu-devri-kontrol-listesi-yabanci-alicilar-title-deed-transfer-foreign-buyers-antalya-avukat-hukuk.jpg",
  "tourist-visa-to-residence-permit-turkey": "/images/articles/turist-vizesinden-oturma-iznine-tourist-visa-residence-permit-turkey-antalya-avukat-hukuk.jpg",
  "traffic-accident-criminal-liability-foreign-drivers": "/images/articles/trafik-kazasi-ceza-sorumlulugu-yabanci-traffic-accident-criminal-liability-turkey-antalya-avukat.jpg",
  "turkish-citizenship-application-rejection-appeal": "/images/articles/turk-vatandasligi-basvuru-red-itiraz-citizenship-application-rejection-appeal-antalya-avukat.jpg",
  "turkish-citizenship-by-investment-full-guide": "/images/articles/yatirim-yoluyla-turk-vatandasligi-citizenship-by-investment-turkey-antalya-avukat-hukuk-tapu.jpg",
  "turkish-citizenship-for-spouse-and-children": "/images/articles/turk-vatandasligi-es-cocuklar-citizenship-spouse-children-turkey-antalya-avukat-hukuk.jpg",
  "turkish-citizenship-through-marriage": "/images/articles/evlilik-yoluyla-turk-vatandasligi-citizenship-through-marriage-turkey-antalya-avukat-hukuk.jpg",
  "turkish-dual-citizenship-status": "/images/articles/turk-cift-vatandasligi-dual-citizenship-turkey-two-passports-antalya-avukat-hukuk.jpg",
  "visa-denial-cancellation-lawsuit-turkey": "/images/articles/vize-reddi-iptali-davasi-visa-denial-cancellation-lawsuit-turkey-antalya-avukat-hukuk-goc.jpg",
  "will-drafting-foreigners-turkey": "/images/articles/vasiyetname-duzenleme-yabanci-will-drafting-foreigners-turkey-notary-antalya-avukat-hukuk.jpg",
  "work-permit-cancellation-employment-contract-end": "/images/articles/calisma-izni-iptali-sozlesme-sona-ermesi-work-permit-cancellation-turkey-antalya-avukat-hukuk.jpg",
  "work-permit-denial-appeal-turkey": "/images/articles/calisma-izni-red-itiraz-work-permit-denial-appeal-turkey-antalya-avukat-hukuk-calisma.jpg",
};

// ── CONFIG ────────────────────────────────────────────────────────────────────
const LOCALES = ["tr", "en", "de", "ru", "ar"];
const CONTENT_DIR = join(process.cwd(), "content", "articles");

// ── HELPERS ──────────────────────────────────────────────────────────────────
function addImageToFile(filePath, imagePath) {
  const raw = readFileSync(filePath, "utf8");
  const { data } = matter(raw);

  if (data.image === imagePath) {
    return false; // already set
  }

  let newRaw;
  if (data.image) {
    // Replace existing image field in-place
    newRaw = raw.replace(/^image:.*$/m, `image: "${imagePath}"`);
  } else {
    // Inject image field right before closing --- of frontmatter
    newRaw = raw.replace(
      /^(---[\r\n][\s\S]*?[\r\n])(---)/m,
      `$1image: "${imagePath}"\n$2`
    );
  }

  writeFileSync(filePath, newRaw, "utf8");
  return true;
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
let updated = 0;
let skipped = 0;
let notFound = 0;

for (const [translationKey, imagePath] of Object.entries(IMAGE_MAP)) {
  for (const locale of LOCALES) {
    const dir = join(CONTENT_DIR, locale);

    let targetFile = null;

    if (locale === "tr") {
      // TR'de slug farklı olabilir — translationKey field'ını tara
      let files;
      try {
        files = readdirSync(dir).filter((f) => f.endsWith(".mdx"));
      } catch {
        continue;
      }
      for (const file of files) {
        const fullPath = join(dir, file);
        const raw = readFileSync(fullPath, "utf8");
        const { data } = matter(raw);
        // translationKey eşleşiyorsa veya slug eşleşiyorsa
        if (data.translationKey === translationKey || data.slug === translationKey) {
          targetFile = fullPath;
          break;
        }
      }
    } else {
      // EN, DE, RU, AR: dosya adı = translationKey.mdx
      const candidate = join(dir, `${translationKey}.mdx`);
      try {
        readFileSync(candidate); // existence check
        targetFile = candidate;
      } catch {
        // file not found
      }
    }

    if (!targetFile) {
      console.warn(`⚠️  Bulunamadı: [${locale}] ${translationKey}`);
      notFound++;
      continue;
    }

    const changed = addImageToFile(targetFile, imagePath);
    if (changed) {
      console.log(`✅  [${locale}] ${translationKey}`);
      updated++;
    } else {
      skipped++;
    }
  }
}

console.log(`\n──────────────────────────────────────`);
console.log(`Güncellendi : ${updated}`);
console.log(`Atlandı    : ${skipped}`);
console.log(`Bulunamadı : ${notFound}`);
console.log(`──────────────────────────────────────`);
