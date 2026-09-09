/**
 * SERP'te kesilen meta açıklamalarını temiz bir cümle sınırında kısaltır.
 *
 * Google açıklamayı ~160 karakterde (zh gibi CJK dillerinde daha erken) keser.
 * Kesme kaçınılmazsa cümlenin ortasında değil, noktalama sınırında olsun diye
 * açıklamayı son uygun sınırdan kırpıyoruz. Sınır bulunamazsa ya da sonuç çok
 * kısalıyorsa dosyaya dokunulmaz; bunlar elle yazılmak üzere raporlanır.
 *
 * Kullanım:
 *   node scripts/fix-descriptions.mjs           # kuru çalıştırma (yazmaz)
 *   node scripts/fix-descriptions.mjs --write   # dosyalara yazar
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content", "articles");
const LOCALES = ["tr", "en", "de", "ru", "ar", "es", "fr", "zh"];
const WRITE = process.argv.includes("--write");

/**
 * [en kısa kabul edilebilir, hedef üst sınır]
 *
 * Alt sınır üst sınırın %75'i: 165 karakterlik bir açıklamayı Google zaten
 * yalnızca birkaç karakter kırpar; onu 90 karaktere indirmek kırpmadan daha
 * çok bilgi kaybettirir. Kısaltma ancak geriye dolu bir açıklama kalıyorsa
 * kazançlıdır, aksi hâlde dosyaya dokunmuyoruz.
 */
const BOUNDS = { zh: [60, 80], default: [120, 160] };
const boundsFor = (loc) => BOUNDS[loc] ?? BOUNDS.default;

/**
 * Yalnızca **cümle sonu** noktalaması sınır sayılır. Noktalı virgül ve iki
 * nokta klaz sınırıdır; oradan kesmek açıklamayı "…ve Bauplanverstößen;" gibi
 * sarkık bir noktalamayla bitirir. Bu yüzden listeden çıkarıldı.
 */
const HARD_BOUNDARY = /[。！？؟]/g;
const SOFT_BOUNDARY = /[.!?]/g;

/** Sonraki cümlenin başlangıcı: büyük harf, CJK veya Arapça harf. */
const SENTENCE_START = /[A-ZÀ-ÞĞİÖŞÜÇА-Я؀-ۿ一-鿿]/;

/**
 * Hukuk metinlerinde nokta çoğu zaman cümle sonu değil kısaltmadır:
 * "TCK Art. 97", "m. 18/B", "ст. 99", "Nr. 6325", "s.K.". Bu yüzden yumuşak
 * sınırı ancak ardından gerçek bir cümle başlıyorsa kabul ediyoruz.
 */
function isRealSentenceEnd(text, end) {
  const rest = text.slice(end);
  if (!rest.trim()) return true;
  if (!/^\s/.test(rest)) return false; // "m.102" gibi bitişik → kısaltma
  const next = rest.trimStart()[0];
  if (!SENTENCE_START.test(next)) return false; // rakam veya küçük harf → kısaltma
  // Noktadan önceki sözcük kısa ve noktalı ise (Art, m, ст, Nr, Abs) kısaltmadır.
  const word = text.slice(0, end - 1).split(/[\s(]/).pop() ?? "";
  if (word.length <= 4 && !/[.]/.test(word) === false) return false;
  return word.length > 4 || /[0-9)]$/.test(word);
}

/**
 * `text`i `max` karakteri aşmayacak biçimde, son gerçek cümle sınırından kırpar.
 * Güvenli sınır `min` karakterin altında kalıyorsa null döner — bu açıklamalar
 * kırpılamaz, yeniden yazılmaları gerekir.
 */
function trimAtBoundary(text, min, max) {
  const head = text.slice(0, max + 1);
  let cut = -1;

  for (const m of head.matchAll(HARD_BOUNDARY)) {
    const end = m.index + 1;
    if (end <= max) cut = Math.max(cut, end);
  }
  for (const m of head.matchAll(SOFT_BOUNDARY)) {
    const end = m.index + 1;
    if (end <= max && isRealSentenceEnd(text, end)) cut = Math.max(cut, end);
  }

  if (cut < min) return null;
  return text.slice(0, cut).trim();
}

const changed = [];
const skipped = [];

for (const locale of LOCALES) {
  const dir = path.join(ROOT, locale);
  if (!fs.existsSync(dir)) continue;
  const [min, max] = boundsFor(locale);

  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".mdx")) continue;
    const fp = path.join(dir, file);
    const raw = fs.readFileSync(fp, "utf8");
    const { data } = matter(raw);
    const desc = data.description ?? "";
    if (desc.length <= max) continue;

    const trimmed = trimAtBoundary(desc, min, max);
    const id = `${locale}/${file.replace(/\.mdx$/, "")}`;

    if (!trimmed) {
      skipped.push({ id, len: desc.length, desc });
      continue;
    }

    if (WRITE) {
      // Frontmatter'ı yeniden serialize etmeden yalnızca description satırını
      // değiştiriyoruz; gray-matter'ın stringify'ı tırnak/sıra biçimini bozuyor.
      const escaped = trimmed.replace(/"/g, "'");
      const next = raw.replace(
        /^description:[ \t]*(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|.*)$/m,
        `description: "${escaped}"`
      );
      if (next === raw) {
        skipped.push({ id, len: desc.length, desc, reason: "satir eslesmedi" });
        continue;
      }
      fs.writeFileSync(fp, next);
    }
    changed.push({ id, from: desc.length, to: trimmed.length, before: desc, after: trimmed });
  }
}

console.log(`\n${WRITE ? "YAZILDI" : "KURU CALISTIRMA"} — sinir disi aciklamalar\n${"─".repeat(62)}`);
console.log(`kirpilan : ${changed.length}`);
console.log(`atlanan  : ${skipped.length}  (temiz sinir yok — elle yazilmali)`);

if (!WRITE) {
  console.log(`\nörnekler:`);
  const byLocale = {};
  for (const c of changed) (byLocale[c.id.split("/")[0]] ??= []).push(c);
  for (const loc of LOCALES) {
    const s = byLocale[loc]?.[0];
    if (!s) continue;
    console.log(`\n[${loc}] ${s.id}  ${s.from} → ${s.to}`);
    console.log(`  ONCE : ${s.before}`);
    console.log(`  SONRA: ${s.after}`);
  }
  if (skipped.length) {
    console.log(`\natlananlardan örnek:`);
    for (const s of skipped.slice(0, 3)) console.log(`  [${s.id}] (${s.len}) ${s.desc.slice(0, 120)}…`);
  }
}
console.log();

// --verify: kırpılan tüm açıklamaları denetle (kuru çalıştırmada da çalışır)
if (process.argv.includes("--verify")) {
  const bad = changed.filter((c) => !/[.!?。！？؟]$/.test(c.after));
  const [dmin] = BOUNDS.default;
  const short = changed.filter((c) => !c.id.startsWith("zh/") && c.to < dmin);
  console.log(`dogrulama: cumle sonu olmayan ${bad.length}, alt sinirin altinda ${short.length}`);
  for (const b of bad.slice(0, 5)) console.log(`  ! ${b.id}: …${b.after.slice(-60)}`);
}
