import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";

const HERO_IMAGE_URL = "/images/hero/antalya-donme-dolap-hero.jpg";
// Dönme dolabın merkezi (göbeği), kaynak fotoğrafta yaklaşık %70 sağda / %55 yukarıda.
// Ken Burns zoom'un bu noktaya doğru yakınlaşması için transform-origin ve
// object-position aynı noktaya hizalanır.
const HERO_FOCAL_POINT = "70% 55%";

export function CinematicHero() {
  const t = useTranslations("home");
  const tCta = useTranslations("cta");

  return (
    // sd-hero: bu bölüm kendi görüntü zaman çizelgesini yayınlar (--sd-hero);
    // içindeki katmanlar scroll konumuna göre bu çizelgeden sürülür.
    // 88svh (88vh değil): iOS'ta adres çubuğu açılıp kapanırken hero zıplamasın.
    <section className="sd-hero relative isolate -mt-px h-[88svh] min-h-[640px] w-full overflow-hidden">
      {/* İki katmanlı transform: dıştaki scroll'a bağlı derinlik zoom'u,
          içteki zamana bağlı Ken Burns. Aynı elemanda iki animasyon transform
          yazamayacağı için ayrıldılar. */}
      <div
        className="sd-hero-zoom absolute inset-0"
        style={{ transformOrigin: HERO_FOCAL_POINT }}
      >
        <div
          className="absolute inset-0 animate-ken-burns"
          style={{ transformOrigin: HERO_FOCAL_POINT }}
        >
          <Image
            src={HERO_IMAGE_URL}
            alt={t("hero.imageAlt")}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: HERO_FOCAL_POINT }}
          />
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy-950/55 via-navy-950/35 to-navy-950/90"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy-950/55 via-transparent to-transparent rtl:bg-gradient-to-l"
      />
      {/* Aşağı inildikçe sahne çekilir. Başlangıçta tamamen şeffaf. */}
      <div
        aria-hidden
        className="sd-hero-veil absolute inset-0 bg-navy-950/70 opacity-0"
      />

      <div className="sd-hero-copy relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-24 pt-32 md:pb-32">
        <div className="max-w-3xl">
          <div className="mb-20 md:mb-24">
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
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold-300 text-sm font-medium text-navy-950 shadow-lg shadow-navy-950/30 hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy-950/40 active:translate-y-0 active:scale-[0.98] transition-all duration-200 whitespace-nowrap w-full sm:w-auto h-[52px] px-6 flex-shrink-0"
            >
              <span className="block text-center">{tCta("consult")}</span>
              <ArrowRight size={16} className="shrink-0 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
            <Link
              href="/practice-areas"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream-100/40 bg-cream-50/5 text-sm font-medium text-cream-50 backdrop-blur-sm hover:bg-cream-50/15 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 whitespace-nowrap w-full sm:w-auto h-[52px] px-6 flex-shrink-0"
            >
              <span className="block text-center">{tCta("explore")}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="sd-hero-cue absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream-100/80">
        <ChevronDown size={28} className="animate-scroll-bob" strokeWidth={1.5} />
      </div>
    </section>
  );
}
