import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en", "de", "ru", "ar", "es"],
  defaultLocale: "tr",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
