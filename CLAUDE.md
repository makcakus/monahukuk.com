# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## What This Project Is

**monahukuk.com** — MONA Hukuk bürosunun (Antalya) kurumsal sitesi. Yabancılara hukuki hizmet sunan firmanın 7 dilli (TR/EN/DE/RU/AR/ES/FR) web sitesi. Eski WordPress'in yerine geçti.

## Commands

```bash
npm run dev        # Geliştirme sunucusu
npm run build      # Production build (validate scriptleri önce çalışır)
npm start          # Production sunucusu
npx eslint src/    # Lint

npm run preview    # OpenNext build + yerel Cloudflare Workers önizleme
npm run deploy     # Güvenli tam deploy pipeline'ı (scripts/deploy-full.mjs)
```

### Validation Scriptleri

`npm run build` öncesinde otomatik çalışır, ayrıca manuel çalıştırılabilir:

```bash
node scripts/validate-content.mjs        # MDX frontmatter doğrulama
node scripts/validate-translations.mjs   # i18n mesaj anahtarları kontrolü
node scripts/check-translation-coverage.mjs  # Hangi locale'lerde çeviri eksik
node scripts/validate-links.mjs          # İç bağlantı kırık mı
node scripts/suggest-internal-links.mjs  # SEO için bağlantı önerisi
```

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript 5 + React 19
- **Styling**: Tailwind CSS v4 (PostCSS tabanlı — `tailwind.config.js` yok, `globals.css` içinde `@theme`)
- **i18n**: next-intl 4 — 7 locale, prefix-based routing (`/tr/`, `/en/`, `/de/`, `/ru/`, `/ar/`, `/es/`, `/fr/`)
- **İçerik**: MDX dosyaları + gray-matter frontmatter, next-mdx-remote ile render
- **E-posta / Newsletter**: Resend API + Supabase
- **Deployment**: Cloudflare Workers (OpenNext) — Vercel kullanılmıyor
  - `wrangler.jsonc` → worker adı `mona-site`, R2 cache bucket, IMAGES binding
  - `open-next.config.ts` → incremental cache R2 üzerinde
  - `.github/workflows/deploy-cloudflare.yml` → `main`'e push'ta otomatik deploy (GitHub Actions; Cloudflare Workers Builds'in 30dk build limiti yetmediği için buraya geri dönüldü)

## Proje Yapısı

```
src/
├── app/
│   ├── layout.tsx                 # Root layout (minimal)
│   └── [locale]/                  # Tüm sayfalar locale altında
│       ├── layout.tsx             # Ana layout (analytics, i18n provider)
│       ├── page.tsx               # Anasayfa
│       ├── articles/[slug]/       # Makale detay
│       ├── practice-areas/[slug]/ # Çalışma alanı detay
│       └── legal-news/[slug]/     # Hukuk haberleri (sadece tr/en)
├── components/                    # Server ve client component'lar
├── i18n/
│   ├── routing.ts                 # Locale listesi ve default
│   ├── request.ts                 # Sunucu tarafı i18n config
│   └── navigation.ts              # Locale-aware Link
├── lib/
│   ├── articles.ts                # MDX yükleme & parse
│   ├── practice-areas.ts          # 10 alan, 5 dil harita
│   ├── seo.ts                     # pageMetadata() helper
│   └── site.ts                    # SITE metadata objesi
content/
└── articles/
    ├── tr/    en/    de/    ru/    ar/    es/    fr/   # Locale başına ayrı MDX dosyaları
messages/
└── tr.json  en.json  de.json  ru.json  ar.json  es.json  fr.json  # i18n çeviri anahtarları
```

## İçerik Yönetimi (Makaleler)

Makaleler `content/articles/{locale}/slug.mdx` formatında saklanır.

**Zorunlu frontmatter** (`validate:content` build öncesi kontrol eder, eksik varsa build fail):
```yaml
---
title: "Başlık"
description: "SEO açıklaması (50–160 karakter)"
date: "2026-01-15"
category: "Ticaret & Şirketler Hukuku"
slug: "url-slug"
author: "Av. Mustafa Akcakuş"
translationKey: "english-slug"   # EN slug — tüm dil versiyonlarında aynı olmalı
---
```

**Opsiyonel frontmatter:**
```yaml
relatedSlugs: ["slug-1", "slug-2"]  # Manuel ilgili makale listesi
draft: true                          # Yayınlanmaz
```

Makale listelemek için `lib/articles.ts` içindeki `getAllArticles(locale)` / `getArticleBySlug(locale, slug)` kullanılır.

## i18n Kuralları

- Yeni sayfa ekliyorsan `app/[locale]/` altına ekle, `generateStaticParams()` ile tüm locale'leri döndür.
- UI metinleri doğrudan yazma — `messages/{locale}.json`'a ekle, `useTranslations()` / `getTranslations()` ile çek.
- Arabic için `dir="rtl"` layout'ta otomatik uygulanır.
- `legal-news` sadece `tr` ve `en`'de var; diğer locale'lerde routing.ts'de kısıtlı.

## Hukuki Bülten Yazım Kuralları (content/hukuki-haberler/)

`tr` ve `en` olmak üzere iki dilde haftalık yayımlanan haber bülteni. Hedef kitle hukuki bilgi düzeyi yüksek okurlar.

**1. AI görünmeme — şablon yapısından kaçın**  
Her öğeye aynı alt başlık kalıbını tekrarlama. "Eski durum / Kararın dayanağı / Pratikte önemi" üçlüsü tekrarlanınca makine çıktısı gibi durur. Her haber farklı yapılanabilir.

**2. Hukuki bağlam kısa ve başlıksız**  
Kanun numarası veriliyorsa tek cümlede geçip habere dönülür. "Hukuki çerçeve:", "Hukuki bağlam:" gibi ayrı alt başlık açılmaz — haber metninin içinde aynı paragrafta devam eder.

**3. Haber ver, yorum yapma**  
"Ne oldu" öne çıkar. "Pratikte önemi" / avukatlara yönelik tavsiye ya hiç olmaz ya da tek cümle. Okura ne yapacağını söyleme, olanı anlat.

**4. Her habere kaynak linki ekle — zorunlu**  
Her öğenin içinde, dayandığı resmi kaynağa Markdown link verilir: Resmî Gazete, AYM, Yargıtay, Danıştay, Rekabet Kurumu, BDDK, SEDDK vb. Linksiz öğe yarım kalır.

**5. Esas içerikten (articles/) tamamen farklı ol**  
Aynı konu hakkında sitede makale varsa o makalenin anlatımı, yapısı veya cümleleri bültene taşınmaz. Bülten o haftanın güncel gelişmesini haber diliyle aktarır; makale konuyu derinlemesine açıklar — ikisi birbirinin kopyası olmaz.

## Styling Notları

Tailwind CSS v4 kullanıyor — `tailwind.config.js` **yok**. Özel tema `src/globals.css` içinde `@theme` bloğunda tanımlı:
- Renkler: `cream`, `navy`, `gold`, `ink` (light/dark varyantları)
- Fontlar: **Alegreya üst ailesi** — `Alegreya` (display, 400/500/600/700) ve
  `Alegreya Sans` (sans, 400/500/700). İkisi de `latin, latin-ext, cyrillic`
  alt kümeleriyle yükleniyor; Arapça ve Çince bilinçli olarak sistem fontunda.
- Ağırlık tuzakları: **`Alegreya Sans`'ta 600 yok**, **`Alegreya`'da 300 yok**.
  `globals.css` tüm `h1`–`h4`'ü display fontuna bağlar, yani başlıklarda
  `font-semibold` (600) sorunsuz; ama `p`, `span`, `li` gibi gövde
  öğelerinde `font-semibold` kullanma — 700'e yuvarlanır, `font-medium` (500)
  veya `font-bold` (700) yaz. Display'de `font-light` (300) de kullanma.
- Özel utility'ler: `.prose-legal`, `.gold-divider`

## SEO & Schema

Her sayfada `pageMetadata()` ile meta tag üretilir (`lib/seo.ts`). Makale sayfaları ek olarak:
- `ArticleSchema` — Schema.org Article yapılandırılmış verisi
- `FAQPage` — `##` başlıklarından otomatik üretilir
- Dinamik OG görseli (`[slug]/opengraph-image.tsx`)

## Ortam Değişkenleri

`.env.local` dosyası gerekli (`.env.example`'a bak):
```
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
RESEND_AUDIENCE_ID=
RESEND_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=https://monahukuk.com
```
