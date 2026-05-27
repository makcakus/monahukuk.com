/**
 * Schema.org JSON-LD veri yapılarını üreten saf fonksiyonlar.
 * Render etmek için <JsonLd data={...}/> kullanın (components/JsonLd.tsx).
 *
 * Kabul kriteri: Google Rich Results Test ve Schema.org Validator'da hata vermez.
 */

import { SITE } from "./site";
import type { LangMap, Member } from "./team";
import { authorSlug, formatAuthorName, plainAuthorName } from "./author";

const LANG_TAGS: Record<string, string> = {
  tr: "tr-TR",
  en: "en-GB",
  de: "de-DE",
  ru: "ru-RU",
  ar: "ar-SA",
  es: "es-ES",
  fr: "fr-FR",
};
const LANG_NAMES: Record<string, string> = {
  tr: "Turkish",
  en: "English",
  de: "German",
  ru: "Russian",
  ar: "Arabic",
  es: "Spanish",
  fr: "French",
};
const ATTORNEY_JOB_TITLE: Record<string, string> = {
  tr: "Avukat",
  en: "Attorney at Law",
  de: "Rechtsanwalt",
  ru: "Адвокат",
  ar: "محامٍ",
  es: "Abogado",
  fr: "Avocat",
};
const BAR_NAME: Record<string, string> = {
  tr: "Antalya Barosu",
  en: "Antalya Bar Association",
  de: "Rechtsanwaltskammer Antalya",
  ru: "Коллегия адвокатов Антальи",
  ar: "نقابة محامي أنطاليا",
  es: "Colegio de Abogados de Antalya",
  fr: "Barreau d'Antalya",
};

export const ORG_ID = `${SITE.url}#organization`;
export const WEBSITE_ID = `${SITE.url}#website`;

function pick(map: LangMap, locale: string): string {
  return (map as Record<string, string>)[locale] ?? map.en;
}

// ─────────────────────────────────────────────────────────────────────────────
// Site-wide: LegalService + LocalBusiness + ProfessionalService
// ─────────────────────────────────────────────────────────────────────────────

export function legalServiceSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "ProfessionalService", "LocalBusiness"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    image: `${SITE.url}${SITE.ogImage}`,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: String(SITE.founded),
    priceRange: "$$",
    knowsLanguage: SITE.languages.map((l) => LANG_TAGS[l] ?? l),
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Meltem Mah. Ismail Baha Sürelsan Cad. 21/10 Muratpaşa",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
      postalCode: SITE.postalCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Antalya" },
      { "@type": "AdministrativeArea", name: "Antalya Province" },
      { "@type": "Country", name: "Türkiye" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SITE.hours.days,
        opens: SITE.hours.opens,
        closes: SITE.hours.closes,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        email: SITE.email,
        contactType: "customer service",
        availableLanguage: SITE.languages.map((l) => LANG_NAMES[l] ?? l),
        areaServed: ["TR", "DE", "RU", "AE", "GB", "US"],
      },
    ],
    serviceType: [
      "Immigration Law",
      "Family Law",
      "Real Estate Law",
      "Criminal Law",
      "Labor Law",
      "Commercial Law",
      "IT and AI Law",
      "Data Protection (KVKK / GDPR)",
    ],
    inLanguage: LANG_TAGS[locale] ?? "en-GB",
    sameAs: SITE.social.length ? SITE.social : undefined,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Site-wide: WebSite (sitelinks search box destekli)
// ─────────────────────────────────────────────────────────────────────────────

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": ORG_ID },
    inLanguage: SITE.languages.map((l) => LANG_TAGS[l] ?? l),
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/tr/articles?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Article (BlogPosting kullanılıyor; daha güçlü rich result)
// ─────────────────────────────────────────────────────────────────────────────

export function articleSchema(opts: {
  locale: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  modifiedDate?: string;
  category?: string;
  author?: string;
  authorSameAs?: string[];
  wordCount?: number;
}) {
  const url = `${SITE.url}/${opts.locale}/articles/${opts.slug}`;
  const tag = LANG_TAGS[opts.locale] ?? "en-GB";

  let authorEntity:
    | Record<string, unknown>
    | undefined;

  if (opts.author) {
    const slug = authorSlug(opts.author);
    const personId = `${SITE.url}/${opts.locale}/team#${slug}`;
    authorEntity = {
      "@type": "Person",
      "@id": personId,
      name: formatAuthorName(opts.author, opts.locale),
      jobTitle: ATTORNEY_JOB_TITLE[opts.locale] ?? ATTORNEY_JOB_TITLE.en,
      memberOf: { "@type": "Organization", name: BAR_NAME[opts.locale] ?? BAR_NAME.en },
      worksFor: { "@id": ORG_ID },
      url: `${SITE.url}/${opts.locale}/team#${slug}`,
      ...(opts.authorSameAs && opts.authorSameAs.length
        ? { sameAs: opts.authorSameAs }
        : {}),
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.modifiedDate ?? opts.date,
    inLanguage: tag,
    articleSection: opts.category,
    keywords: opts.category ? [opts.category] : undefined,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [`${SITE.url}/${opts.locale}/articles/${opts.slug}/opengraph-image`],
    author:
      authorEntity ??
      { "@type": "Organization", "@id": ORG_ID, name: SITE.name },
    publisher: { "@id": ORG_ID },
    isAccessibleForFree: true,
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQPage
// ─────────────────────────────────────────────────────────────────────────────

export function faqPageSchema(pairs: { question: string; answer: string }[]) {
  if (pairs.length < 3) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pairs.map((p) => ({
      "@type": "Question",
      name: p.question,
      acceptedAnswer: { "@type": "Answer", text: p.answer },
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// BreadcrumbList
// ─────────────────────────────────────────────────────────────────────────────

export function breadcrumbSchema(opts: {
  locale: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: opts.items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: `${SITE.url}/${opts.locale}${it.path}`,
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Person (avukat profili — about & team sayfaları için)
// ─────────────────────────────────────────────────────────────────────────────

export function personSchema(member: Member, locale: string) {
  const slug = authorSlug(member.name);
  const ctxId = `${SITE.url}/${locale}/team#${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": ctxId,
    name: member.name,
    givenName: plainAuthorName(member.name).split(" ")[0],
    jobTitle: pick(member.role, locale),
    alumniOf: member.education,
    memberOf: {
      "@type": "Organization",
      name: BAR_NAME[locale] ?? BAR_NAME.en,
    },
    knowsAbout: member.areas.map((a) => pick(a, locale)),
    knowsLanguage: SITE.languages.map((l) => LANG_TAGS[l] ?? l),
    worksFor: { "@id": ORG_ID },
    url: ctxId,
    ...(member.sameAs && member.sameAs.length ? { sameAs: member.sameAs } : {}),
  };
}
