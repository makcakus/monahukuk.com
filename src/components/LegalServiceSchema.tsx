import { SITE } from "@/lib/site";

export function LegalServiceSchema({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "ProfessionalService", "LocalBusiness"],
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    image: `${SITE.url}${SITE.ogImage}`,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: String(SITE.founded),
    priceRange: "$$",
    knowsLanguage: SITE.languages,
    address: {
      "@type": "PostalAddress",
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
        availableLanguage: ["English", "Turkish"],
        areaServed: "TR",
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
    inLanguage: locale === "tr" ? "tr-TR" : "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}#organization` },
    inLanguage: ["en-US", "tr-TR"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
