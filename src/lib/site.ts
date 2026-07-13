export const SITE = {
  url: "https://monahukuk.com",
  name: "MONA HUKUK",
  legalName: "MONA HUKUK Bürosu",
  email: "contact@monahukuk.com",
  phone: "+90 (242) 606 14 32",
  phoneE164: "+902426061432",
  city: "Antalya",
  region: "Antalya",
  country: "TR",
  countryName: "Türkiye",
  postalCode: "07050",
  geo: { latitude: 36.8841, longitude: 30.7056 },
  hours: { opens: "09:00", closes: "18:00", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
  founded: 2018,
  languages: ["tr", "en", "de", "ru", "ar", "es", "fr", "zh"],
  // Google Business Profile ve sosyal medya URL'leri → sameAs schema sinyali
  social: [
    "https://maps.app.goo.gl/txbVdEZPkMGj6wGt7",
  ] as string[],
  ogImage: "/opengraph-image",
} as const;
