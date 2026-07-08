import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // next-intl önerilen matcher:
  // 1. "/" → locale'e yönlendir
  // 2. "/(locale)/:path*" → locale'li URL'leri işle
  // 3. "/((?!_next|_vercel|api|.*\\..*).*))" → locale'siz URL'leri yakala
  //    ve defaultLocale'e (tr) yönlendir (örn. /contact → /tr/contact)
  //    Kök seviyedeki Next.js metadata route'ları (icon, opengraph-image vb.)
  //    uzantısız URL'de servis edildiği için ayrıca hariç tutulmalı, yoksa
  //    locale'e yönlendirilip 404 oluyorlar.
  matcher: [
    "/",
    "/(tr|en|de|ru|ar|es|fr|zh)/:path*",
    "/((?!_next|_vercel|api|icon|apple-icon|opengraph-image|twitter-image|manifest|.*\\..*).*)",
  ],
};
