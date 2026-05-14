import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1676389608621-802649bd5f87?fm=jpg&q=75&w=2400&auto=format&fit=crop";

export function CinematicHero() {
  const t = useTranslations("home");
  const tCta = useTranslations("cta");

  return (
    <section className="relative isolate -mt-px h-[88vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src={HERO_IMAGE_URL}
          alt="Antalya — Konyaaltı sahili, Toros Dağları ve şehir manzarası"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy-950/55 via-navy-950/35 to-navy-950/90"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy-950/55 via-transparent to-transparent rtl:bg-gradient-to-l"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-24 pt-32 md:pb-32">
        <div className="max-w-3xl">
          <div className="mb-20 md:mb-24">
            <p className="animate-hero-rise text-xs uppercase tracking-[0.3em] text-gold-300 mb-6">
              {t("hero.kicker")}
            </p>
            <h1 className="animate-hero-rise animate-hero-rise-delay-1 font-display text-4xl md:text-6xl lg:text-7xl text-cream-50 leading-[1.05] tracking-tight drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
              {t("hero.title")}
            </h1>
            <span className="animate-hero-rise animate-hero-rise-delay-2 gold-divider mt-8" />
            <p className="animate-hero-rise animate-hero-rise-delay-3 mt-6 max-w-2xl text-lg md:text-xl text-cream-100/95 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              {t("hero.lead")}
            </p>
          </div>
          <div className="animate-hero-rise animate-hero-rise-delay-4 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold-500 text-sm font-medium text-navy-950 shadow-lg shadow-navy-950/30 hover:bg-gold-400 transition-colors whitespace-nowrap w-full sm:w-auto h-[52px] px-6 flex-shrink-0"
            >
              <span className="block text-center">{tCta("consult")}</span>
              <ArrowRight size={16} className="shrink-0 rtl:rotate-180" />
            </Link>
            <Link
              href="/practice-areas"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream-100/40 bg-cream-50/5 text-sm font-medium text-cream-50 backdrop-blur-sm hover:bg-cream-50/15 transition-colors whitespace-nowrap w-full sm:w-auto h-[52px] px-6 flex-shrink-0"
            >
              <span className="block text-center">{tCta("explore")}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream-100/80">
        <ChevronDown size={28} className="animate-scroll-bob" strokeWidth={1.5} />
      </div>

      <a
        href="https://unsplash.com/@mahykisreal"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="absolute bottom-3 end-4 z-10 text-[10px] uppercase tracking-wider text-cream-100/55 hover:text-cream-100/90 transition-colors"
      >
        Photo · Burak Mike / Unsplash
      </a>
    </section>
  );
}
