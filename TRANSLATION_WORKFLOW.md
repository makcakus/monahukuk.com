# Çeviri İş Akışı (TR → EN/DE/RU/AR)

Mona Hukuk makalelerinin tutarlı bir terminoloji ile diğer dillere çevrilmesi için önerilen süreç. **Glossary ile prompt inject zorunlu**: aksi halde "ikamet izni" makalede "residence permit" olur ama bir başkasında "residency permit" olur, bu da Google için sinyal kirliliği yaratır.

---

## 1. Glossary

Tüm proje genelinde kullanılan kanonik karşılıklar tek bir dosyada:

📄 [`content/glossary.json`](./content/glossary.json)

Her terim için 5 dil. Yeni terim eklerken: `snake_case` anahtar + 5 dilin tamamı dolu olmalı. Bu dosya çeviri promptlarına otomatik enjekte edilir.

## 2. Eşleştirme key'i (translationKey)

Her makale frontmatter'ına opsiyonel `translationKey` ekleyebilirsin. Aynı key'i taşıyan makaleler farklı dillerdeki çevirileri olarak işaretlenir; SEO açısından farklı slug'lar (her dil için optimize edilmiş) kullanılabilir.

**TR makale örneği:**
```yaml
---
title: "Aile İkamet İzni: Türk Vatandaşı Eşle Evli Yabancılar İçin Rehber"
slug: aile-ikamet-izni-turk-vatandasi-es
translationKey: family-residence-permit-turkish-spouse
---
```

**EN makale örneği (aynı içerik):**
```yaml
---
title: "Family Residence Permit for Foreigners Married to Turkish Citizens"
slug: family-residence-permit-foreigners-married-turkish
translationKey: family-residence-permit-turkish-spouse
---
```

`scripts/check-translation-coverage.mjs` bu key üzerinden eşleştirir; eksik dilleri raporlar.

## 3. Çeviri prompt'u (Claude API)

Aşağıdaki şablonu kullanın. `{{GLOSSARY_JSON}}` yerine `content/glossary.json`'ın `terms` bölümü ham haliyle injekte edilir; `{{SOURCE_TR_MDX}}` yerine TR makalenin tam MDX içeriği (frontmatter dahil).

````markdown
You are a senior legal translator specialised in Turkish law for international clients.

Translate the following Turkish legal article to {{TARGET_LANG}} ({{TARGET_LANG_NAME}}).

# Hard rules

1. Preserve MDX/Markdown structure exactly: headings, lists, tables, links, code blocks, images.
2. Preserve the YAML frontmatter block. Translate ONLY the values of `title` and
   `description`, plus translate `category` if it appears. Keep `date`, `slug` (you may
   propose a new locale-friendly slug — see below), `author`, `translationKey` unchanged.
3. **Use the glossary verbatim** for every legal term that appears in it. Do NOT invent
   alternative wording for terms listed in the glossary.
4. If a term is not in the glossary, translate naturally but stay close to standard legal
   register in the target language.
5. Do NOT add disclaimers, CTAs, or "Contact us" sections that were not in the source.
6. Numbers, statute references (e.g. "TBK m. 11", "İYUK 2/1-a"), and dates must remain
   exact. Translate the noun phrase around them, not the citation itself.
7. Output only the translated MDX. No commentary, no markdown fences around the whole.

# Slug guidance

For the target language, propose a new slug:
- ASCII lowercase, hyphen-separated.
- Reflect the target-language title — do NOT transliterate the Turkish slug.
- Place the new slug in the `slug:` frontmatter field.
- Keep `translationKey` identical to source so the coverage script can match siblings.

# Glossary (binding)

```json
{{GLOSSARY_JSON}}
```

# Source article (Turkish)

```mdx
{{SOURCE_TR_MDX}}
```
````

### Önerilen API çağrısı

```ts
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "node:fs";

const client = new Anthropic();
const glossary = JSON.parse(readFileSync("content/glossary.json", "utf8")).terms;
const source = readFileSync("content/articles/tr/aile-ikamet-izni-turk-vatandasi-es.mdx", "utf8");

const prompt = TEMPLATE
  .replace("{{TARGET_LANG}}", "EN")
  .replace("{{TARGET_LANG_NAME}}", "English (UK English, legal register)")
  .replace("{{GLOSSARY_JSON}}", JSON.stringify(glossary, null, 2))
  .replace("{{SOURCE_TR_MDX}}", source);

const result = await client.messages.create({
  model: "claude-sonnet-4-5",
  max_tokens: 8192,
  system:
    "You are a senior legal translator. Output exactly one MDX document, " +
    "preserving frontmatter and Markdown structure. No prose around it.",
  messages: [{ role: "user", content: prompt }],
});
```

**Prompt cache notu:** Glossary içeriği büyüktür (~4-5KB) ve sabittir. Bir batch çeviri sırasında (örn. 50 makale) glossary'yi `cache_control` ile işaretle ki ardışık çağrılarda yeniden tokenize edilmesin:

```ts
messages: [
  {
    role: "user",
    content: [
      {
        type: "text",
        text: `# Glossary\n\`\`\`json\n${glossaryJson}\n\`\`\``,
        cache_control: { type: "ephemeral" },
      },
      { type: "text", text: `# Article\n\`\`\`mdx\n${source}\n\`\`\`` },
    ],
  },
];
```

İlk istek normal fiyat, sonraki istekler glossary kısmı için %90 indirimli (5 dakika TTL).

## 4. Doğrulama

Çeviri sonrası mutlaka çalıştır:

```bash
node scripts/validate-content.mjs           # YAML, required alanlar
node scripts/check-translation-coverage.mjs # eksik dil var mı
```

`prebuild` hook'u zaten ilkini her deploy'da otomatik çalıştırıyor. İkincisini CI'da
`--strict` ile zorunlu kılabilirsin (fail-on-missing).

## 5. Hreflang otomatik düzelir

Bir makaleyi yeni bir dilde eklediğinde başka bir şey yapmana gerek yok:
- `articles/[slug]/page.tsx` `generateMetadata` her dilde slug'ı kontrol eder
- Yalnızca **gerçekten var olan** dillere `<link rel="alternate" hreflang>` üretir
- AR'da olmayan bir makalenin AR alternate'i çıkmaz → 404'e işaret eden hreflang yok
- `x-default` mevcut dillerden EN > TR > listedeki ilk dil sırasıyla seçilir
