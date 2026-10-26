/**
 * "İlgili Makaleler" haritası — src/generated/related-articles.json
 *
 * Neden: getRelatedArticles() elle `relatedSlugs` verilmemiş makalelerde
 * kategorinin EN YENİ 3 makalesini gösteriyordu. Sonuç: bir kategorideki
 * yüzlerce sayfa aynı 3 yeni makaleye link veriyor, eski makaleler bu
 * kutudan hiç link almıyor ve yalnızca önceki/sonraki zinciriyle
 * erişilebiliyordu. GSC "Tarandı - şu anda dizine eklenmemiş" raporundaki
 * sayfalarda iç link alamayan (yetim) sayfa oranı belirgin şekilde yüksekti.
 *
 * Burada her locale için:
 *   1. Makaleler arası konu benzerliği hesaplanır (başlık + açıklama +
 *      kategori üzerinde TF-IDF kosinüs; aynı kategori ve aynı kanun
 *      serisinde yakın madde numarası için ek puan).
 *   2. Her makaleye RELATED_COUNT öneri seçilir. Elle girilmiş
 *      `relatedSlugs` önce gelir, kalan yerler benzerliğe göre doldurulur;
 *      çok link almış hedefler hafifçe cezalandırılarak linkler dağıtılır.
 *   3. MIN_INBOUND'dan az link alan makaleler, en benzer kaynak sayfalarda
 *      fazla link almış bir otomatik önerinin yerine konur.
 *
 * Çıktı sıkıştırılmış biçimde: { [locale]: { s: slug[], r: index[][] } }.
 * Kullanım: npm run generate:locale-manifest (bu script'i de çalıştırır).
 */
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(import.meta.dirname, "..");
const LOCALES = ["tr", "en", "de", "ru", "ar", "es", "fr"];

// RelatedArticles 3 sütunlu grid'de gösteriyor — 6 = iki tam satır.
const RELATED_COUNT = 6;
const MIN_INBOUND = 3;
const MAX_INBOUND = 15;
const CANDIDATES = 60;
// Çok link almış hedefe verilen ceza (benzerlik puanı biriminde, link başına).
const POPULARITY_PENALTY = 0.02;
// Bu puanın altındaki sayfalar "ilgili" sayılmaz; onarım adımında kullanılmaz.
const MIN_REPAIR_SCORE = 0.05;

// Kanun-madde serileri: TR slug'ında kanun kısaltması ve madde numarası var
// (…-ttk-267); diğer dillerde slug = translationKey (…-turkish-commercial-code)
// olduğundan numara TR karşılığından alınır.
const TR_SERIES = /-(ttk|tck|cmk|tbk|tmk|hmk|iik|ik|kmk)-(\d+)$/;

function tokenize(text, locale) {
  return String(text ?? "")
    .toLocaleLowerCase(locale)
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .split(/[^\p{L}\p{N}]+/u)
    .filter((w) => w.length >= 3 && !/^\d+$/.test(w));
}

async function loadLocale(locale) {
  const dir = path.join(ROOT, "content", "articles", locale);
  let files = [];
  try {
    files = (await fs.readdir(dir)).filter((f) => /\.mdx?$/.test(f));
  } catch {
    return [];
  }
  const out = [];
  for (const f of files) {
    const { data } = matter(await fs.readFile(path.join(dir, f), "utf8"));
    if (data.draft) continue;
    const slug = f.replace(/\.mdx?$/, "");
    out.push({
      slug,
      tk: data.translationKey ?? slug,
      category: data.category ?? "",
      manual: Array.isArray(data.relatedSlugs) ? data.relatedSlugs : [],
      tokens: [
        ...tokenize(data.title, locale),
        ...tokenize(data.title, locale),
        ...tokenize(data.description, locale),
        ...tokenize(data.category, locale),
      ],
    });
  }
  return out.sort((a, b) => a.slug.localeCompare(b.slug));
}

function tfidfVectors(docs) {
  const df = new Map();
  for (const d of docs) for (const t of new Set(d.tokens)) df.set(t, (df.get(t) ?? 0) + 1);
  const n = docs.length;
  return docs.map((d) => {
    const tf = new Map();
    for (const t of d.tokens) tf.set(t, (tf.get(t) ?? 0) + 1);
    const vec = new Map();
    let norm = 0;
    for (const [t, c] of tf) {
      const w = c * Math.log(1 + n / (df.get(t) ?? 1));
      vec.set(t, w);
      norm += w * w;
    }
    norm = Math.sqrt(norm) || 1;
    for (const [t, w] of vec) vec.set(t, w / norm);
    return vec;
  });
}

function cosine(a, b) {
  const [small, big] = a.size < b.size ? [a, b] : [b, a];
  let s = 0;
  for (const [t, w] of small) {
    const v = big.get(t);
    if (v) s += w * v;
  }
  return s;
}

function buildLocale(docs, seriesOf) {
  const n = docs.length;
  const vecs = tfidfVectors(docs);
  const index = new Map(docs.map((d, i) => [d.slug, i]));
  const series = docs.map((d) => seriesOf.get(d.tk) ?? null);

  const score = (i, j) => {
    let s = cosine(vecs[i], vecs[j]);
    if (docs[i].category && docs[i].category === docs[j].category) s += 0.08;
    const a = series[i];
    const b = series[j];
    if (a && b && a.code === b.code) s += 0.25 * Math.exp(-Math.abs(a.num - b.num) / 40);
    return s;
  };

  // Her makale için en benzer CANDIDATES aday.
  const cand = [];
  for (let i = 0; i < n; i++) {
    const scored = [];
    for (let j = 0; j < n; j++) if (j !== i) scored.push([j, score(i, j)]);
    scored.sort((x, y) => y[1] - x[1]);
    cand.push(scored.slice(0, CANDIDATES));
  }

  const lists = docs.map((d, i) =>
    [...new Set(d.manual)]
      .map((s) => index.get(s))
      .filter((j) => j !== undefined && j !== i)
      .slice(0, RELATED_COUNT)
  );
  const manualCount = lists.map((l) => l.length);
  const inbound = new Array(n).fill(0);
  for (const l of lists) for (const j of l) inbound[j]++;

  // Turlar hâlinde doldur: her turda her makale bir öneri alır, böylece
  // popüler hedefler erken dolup sonraki makalelere yer bırakır.
  for (let round = 0; round < RELATED_COUNT; round++) {
    for (let i = 0; i < n; i++) {
      if (lists[i].length >= RELATED_COUNT) continue;
      let best = -1;
      let bestVal = -Infinity;
      for (const [j, s] of cand[i]) {
        if (inbound[j] >= MAX_INBOUND || lists[i].includes(j)) continue;
        const v = s - POPULARITY_PENALTY * inbound[j];
        if (v > bestVal) {
          bestVal = v;
          best = j;
        }
      }
      if (best === -1) continue;
      lists[i].push(best);
      inbound[best]++;
    }
  }

  // Onarım: az link alan makaleyi, ona en benzer sayfalardaki fazla link
  // almış bir otomatik önerinin yerine koy.
  const order = [...Array(n).keys()].sort((a, b) => inbound[a] - inbound[b]);
  for (const t of order) {
    if (inbound[t] >= MIN_INBOUND) continue;
    for (const [src, s] of cand[t]) {
      if (inbound[t] >= MIN_INBOUND) break;
      if (s < MIN_REPAIR_SCORE) break;
      if (lists[src].includes(t)) continue;
      let swap = -1;
      let swapScore = Infinity;
      for (let k = manualCount[src]; k < lists[src].length; k++) {
        const u = lists[src][k];
        if (inbound[u] <= MIN_INBOUND) continue;
        const us = score(src, u);
        if (us < swapScore) {
          swapScore = us;
          swap = k;
        }
      }
      if (swap === -1) continue;
      inbound[lists[src][swap]]--;
      lists[src][swap] = t;
      inbound[t]++;
    }
  }

  return { s: docs.map((d) => d.slug), r: lists, inbound };
}

async function main() {
  const byLocale = {};
  for (const locale of LOCALES) byLocale[locale] = await loadLocale(locale);

  // translationKey -> { code, num } (TR slug'ından)
  const seriesOf = new Map();
  for (const d of byLocale.tr) {
    const m = d.slug.match(TR_SERIES);
    if (m) seriesOf.set(d.tk, { code: m[1], num: Number(m[2]) });
  }

  const manifest = {};
  for (const locale of LOCALES) {
    const docs = byLocale[locale];
    if (docs.length === 0) continue;
    const { s, r, inbound } = buildLocale(docs, seriesOf);
    manifest[locale] = { s, r };
    const below = inbound.filter((x) => x < MIN_INBOUND).length;
    console.log(
      `[generate-related-articles] ${locale}: ${s.length} makale, ` +
        `min/maks gelen link ${Math.min(...inbound)}/${Math.max(...inbound)}, ` +
        `${MIN_INBOUND}'ten az link alan: ${below}`
    );
  }

  const outDir = path.join(ROOT, "src", "generated");
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, "related-articles.json"), JSON.stringify(manifest));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
