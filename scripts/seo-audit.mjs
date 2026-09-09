/**
 * Tüm makale korpusunun SEO denetimi.
 *
 * Kontroller: title/description eksikliği ve uzunlukları (dile duyarlı), aynı
 * dil içinde tekrar eden title/description, gövdede ikinci H1, gövdede iç
 * bağlantı yokluğu, FAQPage şeması üretecek kadar gerçek soru bulunup bulunmadığı.
 *
 * Kullanım:  node scripts/seo-audit.mjs [--json]
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content", "articles");
const LOCALES = ["tr", "en", "de", "ru", "ar", "es", "fr", "zh"];

/**
 * SERP genişliği piksel bazlıdır; CJK glifleri Latin harflerin ~2 katı yer
 * kaplar, bu yüzden zh için sınırlar yarıya iner. Arapça ve Kiril Latin'e yakın.
 */
const LIMITS = {
  zh: { title: [12, 34], desc: [24, 80] },
  default: { title: [30, 62], desc: [50, 160] },
};
const limitFor = (loc) => LIMITS[loc] ?? LIMITS.default;

/**
 * src/lib/articles.ts içindeki extractFaqPairs ile aynı kurallar. Orası
 * değişirse burası da güncellenmeli — denetim, üretilen şemayı ölçer.
 */
const QUESTION_MARK = /[?？؟]/;
const FAQ_PREFIX = /^(?:S|Q|F|P|В|س|问|問)\s*[:：]\s*/;
const isQuestionHeading = (h) => QUESTION_MARK.test(h) || FAQ_PREFIX.test(h);

export function auditAll() {
  const findings = [];
  const seen = {};
  LOCALES.forEach((l) => (seen[l] = { title: new Map(), desc: new Map() }));

  for (const locale of LOCALES) {
    const dir = path.join(ROOT, locale);
    if (!fs.existsSync(dir)) continue;
    const lim = limitFor(locale);

    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith(".mdx")) continue;
      const fp = path.join(dir, file);
      const { data, content } = matter(fs.readFileSync(fp, "utf8"));
      const id = `${locale}/${file.replace(/\.mdx$/, "")}`;
      const add = (kind, detail) => findings.push({ locale, id, file: fp, kind, detail });

      const title = data.title ?? "";
      const desc = data.description ?? "";

      if (!title) add("title-eksik", "frontmatter'da title yok");
      if (!desc) add("desc-eksik", "frontmatter'da description yok");

      if (title && title.length > lim.title[1]) add("title-uzun", `${title.length} > ${lim.title[1]}`);
      if (title && title.length < lim.title[0]) add("title-kisa", `${title.length} < ${lim.title[0]}`);
      if (desc && desc.length > lim.desc[1]) add("desc-uzun", `${desc.length} > ${lim.desc[1]}`);
      if (desc && desc.length < lim.desc[0]) add("desc-kisa", `${desc.length} < ${lim.desc[0]}`);

      const prevT = seen[locale].title.get(title);
      if (prevT) add("title-tekrar", `= ${prevT}`);
      else seen[locale].title.set(title, id);

      const prevD = seen[locale].desc.get(desc);
      if (prevD) add("desc-tekrar", `= ${prevD}`);
      else seen[locale].desc.set(desc, id);

      if (/^# /m.test(content)) add("govdede-h1", "sayfa basligi zaten H1");

      if (![...content.matchAll(/\]\(\/(?:[a-z]{2}\/)?articles\//g)].length)
        add("ic-baglanti-yok", "govdede /articles/ bagi yok");

      // FAQPage şeması: yalnızca gerçek sorular girer, üç çiftin altında şema basılmaz.
      const headings = [...content.matchAll(/^#{2,3} (.+)$/gm)].map((m) =>
        m[1].trim().replace(/\*\*/g, "")
      );
      const questions = headings.filter(isQuestionHeading);
      if (questions.length < 3) add("faq-semasi-yok", `${questions.length} soru — SSS bolumu ekleyin`);
    }
  }
  return findings;
}

if (import.meta.url.endsWith("seo-audit.mjs")) {
  const findings = auditAll();

  if (process.argv.includes("--json")) {
    console.log(JSON.stringify(findings, null, 2));
    process.exit(0);
  }

  const byKind = {};
  for (const f of findings) (byKind[f.kind] ??= []).push(f);

  const total = LOCALES.reduce(
    (n, l) => n + (fs.existsSync(path.join(ROOT, l)) ? fs.readdirSync(path.join(ROOT, l)).filter((f) => f.endsWith(".mdx")).length : 0),
    0
  );

  console.log(`\nSEO denetimi — ${total} makale dosyasi\n${"─".repeat(60)}`);
  const order = ["title-eksik", "desc-eksik", "desc-uzun", "desc-kisa", "title-uzun", "title-kisa", "title-tekrar", "desc-tekrar", "govdede-h1", "ic-baglanti-yok", "faq-semasi-yok"];
  for (const kind of order) {
    const list = byKind[kind] ?? [];
    const pct = ((list.length / total) * 100).toFixed(0);
    console.log(`${list.length ? "✗" : "✓"} ${kind.padEnd(22)} ${String(list.length).padStart(5)}  (%${pct})`);
  }
  console.log("─".repeat(60));

  // Uzunluk aşımlarının dağılımı — düzeltme stratejisi için
  const over = (byKind["desc-uzun"] ?? []).map((f) => Number(f.detail.split(" ")[0]));
  if (over.length) {
    over.sort((a, b) => a - b);
    const q = (p) => over[Math.floor((over.length - 1) * p)];
    console.log(`desc-uzun dagilimi: min ${over[0]}  medyan ${q(0.5)}  p90 ${q(0.9)}  max ${over.at(-1)}`);
  }
  console.log();
}
