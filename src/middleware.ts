import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// routing.alternateLinks = false (bkz. src/i18n/routing.ts) — next-intl'in
// varsayılan davranışı, mevcut URL'nin locale segmentini blindly değiştirerek
// TÜM locale'ler için Link: rel=alternate header'ı üretir; hedef içerik o
// dilde gerçekten var mı diye bakmaz. TR-only içerik (TCK/CMK/mevzuat
// makaleleri) için bu, var olmayan sayfalara hreflang üretip GSC'de
// "Bulunamadı (404)" ve "Başka bir 4xx" sorununa yol açıyordu. Makale/haber
// sayfaları zaten kendi content-aware hreflang'ını generateMetadata
// (bkz. src/lib/seo.ts) üzerinden üretiyor.
const intlMiddleware = createMiddleware(routing);

// Çince (zh) dil versiyonu kaldırıldı. Google'ın eski /zh/ URL'lerini hızla
// dizinden düşürmesi için 404 yerine 410 (Gone) dönüyoruz.
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/zh" || pathname.startsWith("/zh/")) {
    return new NextResponse("Gone", {
      status: 410,
      headers: { "X-Robots-Tag": "noindex", "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  return intlMiddleware(request);
}

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
