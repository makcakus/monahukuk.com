#!/usr/bin/env node
/**
 * Makale + bülten içeriklerindeki dahili (internal) link sağlığını kontrol eder.
 *
 * Tarama kapsamı:
 *   - content/articles/{locale}/*.mdx body
 *   - content/hukuki-haberler/{locale}/*.mdx body
 *
 * Link türleri:
 *   /articles/{slug}                  → aynı locale'de slug var mı?
 *   /{otherLocale}/articles/{slug}    → otherLocale'de slug var mı?
 *   /legal-news/{slug}                → aynı locale'de bülten slug var mı?
 *   /{otherLocale}/legal-news/{slug}  → otherLocale'de bülten slug var mı?
 *   https://monahukuk.com/...         → yukarıdakiyle aynı kuralla normalize edilir
 *   #anchor                           → atla (aynı sayfa anchor)
 *   diğer dahili (/about, /team, /practice-areas/...) → atla, esnek
 *   external (http/https başka domain, mailto, tel) → atla
 *
 * Exit:
 *   0 — tüm linkler geçerli
 *   1 — en az bir kırık link → build fail
 */

import { readdirSync, readFileSync } from "node:fs";
import { join, basename } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const matter = require("gray-matter");

const LOCALES = ["tr", "en", "de", "ru", "ar", "es", "fr"];
// Bu locale'lerde KAYNAK locale kırık link hard-error değil, sadece uyarı verir.
// FR: yavaş backfill nedeniyle genel warn-only
const WARN_ONLY_LOCALES = new Set(["fr"]);
const SITE = "monahukuk.com";

const ARTICLES_DIR = join(process.cwd(), "content", "articles");
const NEWS_DIR = join(process.cwd(), "content", "hukuki-haberler");

function loadSlugs(rootDir) {
  /** locale → Set<slug> */
  const out = {};
  for (const l of LOCALES) {
    const dir = join(rootDir, l);
    try {
      const files = readdirSync(dir).filter(
        (f) => f.endsWith(".mdx") || f.endsWith(".md")
      );
      out[l] = new Set(files.map((f) => f.replace(/\.mdx?$/, "")));
    } catch {
      out[l] = new Set();
    }
  }
  return out;
}

const articleSlugs = loadSlugs(ARTICLES_DIR);
const newsSlugs = loadSlugs(NEWS_DIR);

/**
 * Bir markdown gövdesinden tüm linkleri çıkar.
 * `[text](url)` ve referans-stil `[text][ref]` desteklenir.
 */
function extractLinks(body) {
  const links = [];
  // Inline linkler
  const inlineRe = /\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  let m;
  while ((m = inlineRe.exec(body)) !== null) {
    links.push({ text: m[1], url: m[2] });
  }
  // Otomatik linkler <https://...>
  const autoRe = /<((?:https?:)?\/\/[^>\s]+)>/g;
  while ((m = autoRe.exec(body)) !== null) {
    links.push({ text: m[1], url: m[1] });
  }
  return links;
}

/**
 * URL'i normalize et. Dahili ise { kind, locale, slug } döner; değilse null.
 *
 * kind: "article" | "legal-news" | "skip"
 *   "skip" = dahili ama articles/legal-news değil; doğrulamaya gerek yok.
 *
 * `sourceLocale` = linkin geçtiği makalenin dili (locale prefix yoksa fallback).
 */
function normalize(url, sourceLocale) {
  // External, mailto, tel, sayfa-içi anchor — atla
  if (/^(mailto:|tel:|#)/i.test(url)) return null;

  // Tam URL'i path'a indir
  let path = url;
  if (/^https?:\/\//i.test(url)) {
    try {
      const u = new URL(url);
      if (u.hostname !== SITE && !u.hostname.endsWith(`.${SITE}`)) return null;
      path = u.pathname;
    } catch {
      return null;
    }
  }

  // Protokolsüz dış (//example.com) → atla
  if (/^\/\//.test(path)) return null;

  // Anchor / query'i kes
  path = path.split("#")[0].split("?")[0];

  if (!path.startsWith("/")) return null;

  // Locale prefix var mı?
  let locale = sourceLocale;
  let rest = path;
  const segs = path.split("/").filter(Boolean);
  if (segs.length && LOCALES.includes(segs[0])) {
    locale = segs[0];
    rest = "/" + segs.slice(1).join("/");
  }

  // article eşle
  let m = rest.match(/^\/articles\/([^/]+)\/?$/);
  if (m) return { kind: "article", locale, slug: m[1] };

  m = rest.match(/^\/legal-news\/([^/]+)\/?$/);
  if (m) return { kind: "legal-news", locale, slug: m[1] };

  // articles veya legal-news listesi (slug'sız) → atla
  // about/team/contact/privacy-policy/practice-areas — atla
  return { kind: "skip" };
}

let totalChecked = 0;
let totalLinks = 0;
let totalSkipped = 0;
const broken = [];

function scan(rootDir, slugMap, label) {
  for (const locale of LOCALES) {
    const dir = join(rootDir, locale);
    let files;
    try {
      files = readdirSync(dir).filter(
        (f) => f.endsWith(".mdx") || f.endsWith(".md")
      );
    } catch {
      continue;
    }
    for (const file of files) {
      totalChecked++;
      const full = join(dir, file);
      const raw = readFileSync(full, "utf8");
      const { content } = matter(raw);
      const links = extractLinks(content);
      for (const { url } of links) {
        totalLinks++;
        const norm = normalize(url, locale);
        if (!norm || norm.kind === "skip") {
          totalSkipped++;
          continue;
        }
        const targetMap = norm.kind === "article" ? articleSlugs : newsSlugs;
        const slugSet = targetMap[norm.locale];
        if (!slugSet || !slugSet.has(norm.slug)) {
          // Slug hedef locale'de bulunamadı.
          // Eğer slug EN'de mevcutsa → çeviri bekleniyor (warn-only).
          // Eğer slug hiçbir locale'de yoksa → gerçek hata (blocking).
          const existsInEn =
            norm.kind === "article"
              ? articleSlugs["en"]?.has(norm.slug)
              : newsSlugs["en"]?.has(norm.slug);
          broken.push({
            source: `${label}/${locale}/${file}`,
            url,
            target: `${norm.locale}/${norm.kind}/${norm.slug}`,
            warnOnly:
              WARN_ONLY_LOCALES.has(locale) ||
              WARN_ONLY_LOCALES.has(norm.locale) ||
              Boolean(existsInEn), // EN'de var → çeviri bekleniyor → warn-only
          });
        }
      }
    }
  }
}

scan(ARTICLES_DIR, articleSlugs, "articles");
scan(NEWS_DIR, newsSlugs, "legal-news");

console.log(`\n──────────────────────────────────`);
console.log(`Taranan dosya     : ${totalChecked}`);
console.log(`Toplam link       : ${totalLinks}`);
console.log(`Doğrulanan        : ${totalLinks - totalSkipped}`);
console.log(`Atlanan (harici / statik): ${totalSkipped}`);
console.log(`Kırık link        : ${broken.length}`);
console.log(`──────────────────────────────────\n`);

const blockingBroken = broken.filter((b) => !b.warnOnly);
const warnBroken = broken.filter((b) => b.warnOnly);

if (warnBroken.length) {
  console.warn("⚠️  Kırık dahili linkler (warn-only, build engellenmez):\n");
  for (const b of warnBroken) {
    console.warn(`  ${b.source}`);
    console.warn(`    URL:    ${b.url}`);
    const reason = WARN_ONLY_LOCALES.has(b.source.split("/")[1])
      ? "kaynak locale warn-only"
      : "slug EN'de var — çeviri bekleniyor";
    console.warn(`    Hedef:  ${b.target} (bulunamadı — ${reason})`);
    console.warn();
  }
}

if (blockingBroken.length) {
  console.error("🔴 Kırık dahili linkler:\n");
  for (const b of blockingBroken) {
    console.error(`  ${b.source}`);
    console.error(`    URL:    ${b.url}`);
    console.error(`    Hedef:  ${b.target} (bulunamadı)`);
    console.error();
  }
  console.error("Lütfen hedef slug'ı düzeltin veya makaleyi yayına alın.");
  process.exit(1);
}

console.log("✅ Tüm zorunlu dahili linkler geçerli.\n");
