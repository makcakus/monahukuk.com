import Image from "next/image";
import type { CSSProperties } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";

const HERO_IMAGE_URL = "/images/hero/antalya-donme-dolap-hero.jpg";
const IMG_W = 2170;
const IMG_H = 1984;

// Fotoğraftaki dolabın ölçüsü (fotoğraf pikseli). Kabin merkezlerinden geçen
// elips: kamera dolabı alttan çektiği için halka daire değil, hafif elips.
// Göbek (spokes'un birleştiği nokta) elips merkezinden biraz farklı yerde.
const EX = 1467.8;
const EY = 1259.2;
const RX = 525.3;
const RY = 650.5;
const HUB = { x: 1530, y: 1230 };

const N = PRACTICE_AREAS.length;
const CABINS_PER_AREA = 3;
const CABIN_COUNT = N * CABINS_PER_AREA;
const SPOKES = 72;

// Kaydırma payının ilk %30'u hero ve çizimin kurulması, kalan %70'i dolabın
// alan alan dönmesi. Kartın penceresi ile dolabın dönüşü aynı sınırda buluşur.
const INTRO = 30;
const SLOT = (100 - INTRO) / N;
const CARD_LAG = 0.8;
const MOVE_HALF = 0.9;

function pct(n: number) {
  return `${n.toFixed(3)}%`;
}

/** Dolap dönüşü: her alanda bekler, kart değişirken bir adım döner. */
function spinKeyframes() {
  const step = 360 / N;
  const frames = [`0% { --th: 0deg; }`];
  for (let k = 0; k < N - 1; k++) {
    const boundary = INTRO + (k + 1) * SLOT + CARD_LAG;
    frames.push(
      `${pct(boundary - MOVE_HALF)} { --th: ${(-step * k).toFixed(3)}deg; animation-timing-function: ease-in-out; }`,
      `${pct(boundary + MOVE_HALF)} { --th: ${(-step * (k + 1)).toFixed(3)}deg; }`
    );
  }
  frames.push(`100% { --th: ${(-step * (N - 1)).toFixed(3)}deg; }`);
  return `@keyframes wt-spin { ${frames.join("\n")} }`;
}

/** Açıklamanın ilk cümlesi: kartta tek cümlelik özet olarak durur. */
function firstSentence(text: string) {
  const m = text.match(/^.+?[.。](?=\s|$)/);
  return m ? m[0] : text;
}

const f = (n: number) => n.toFixed(1);

function ringPoint(scale: number, deg: number) {
  const r = (deg * Math.PI) / 180;
  return { x: EX + RX * scale * Math.cos(r), y: EY + RY * scale * Math.sin(r) };
}

export function HeroWheel() {
  const t = useTranslations("home");
  const tCta = useTranslations("cta");
  const locale = useLocale();

  const areas = PRACTICE_AREAS.map((a) => ({
    slug: a.slug,
    title: pickPA(a.title, locale),
    summary: firstSentence(pickPA(a.description, locale)),
  }));

  return (
    <section className="wt" style={{ "--n": N } as CSSProperties}>
      <style>{spinKeyframes()}</style>

      <div className="wt-stage">
        {/* Fotoğraf ve çizim aynı kutuda: kutu fotoğrafın oranında ve object-cover
            gibi yerleşir, bu yüzden çizim her ekran boyunda dolabın üstüne oturur. */}
        <div className="wt-box animate-ken-burns">
          <div className="wt-photo">
            <Image
              src={HERO_IMAGE_URL}
              alt={t("hero.imageAlt")}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <svg
            className="wt-wheel"
            viewBox={`0 0 ${IMG_W} ${IMG_H}`}
            aria-hidden="true"
            focusable="false"
            style={{ "--rx": RX, "--ry": RY } as CSSProperties}
          >
            <g className="wt-legs">
              {[
                [1366, 1966],
                [1456, 1951],
                [1681, 1966],
                [1936, 1966],
              ].map(([x, y]) => (
                <path key={x} className="wt-leg" pathLength={1} d={`M${HUB.x} ${HUB.y} L${x} ${y}`} />
              ))}
              <path className="wt-leg" pathLength={1} d="M1447 1600 L1734 1600" />
              <path className="wt-leg" pathLength={1} d="M1403 1800 L1844 1800" />
            </g>

            <ellipse className="wt-rim" pathLength={1} cx={EX} cy={EY} rx={RX * 0.96} ry={RY * 0.96} />
            <ellipse className="wt-rim wt-rim--inner" pathLength={1} cx={EX} cy={EY} rx={RX * 0.91} ry={RY * 0.91} />

            <g className="wt-spokes" style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}>
              {Array.from({ length: SPOKES }, (_, i) => {
                const p = ringPoint(0.91, (360 / SPOKES) * i);
                return <line key={i} x1={HUB.x} y1={HUB.y} x2={f(p.x)} y2={f(p.y)} />;
              })}
              <circle cx={HUB.x} cy={HUB.y} r={20} className="wt-hub" />
            </g>

            {/* Sabit gösterge: kartı gösteren kabin her adımda bu çentiğe gelir. */}
            <path className="wt-notch" pathLength={1} d={`M${f(EX - RX * 1.06)} ${f(EY)} L${f(EX - RX * 1.22)} ${f(EY)}`} />

            {Array.from({ length: CABIN_COUNT }, (_, i) => {
              const area = i % CABINS_PER_AREA === 0 ? i / CABINS_PER_AREA : -1;
              const a = 180 + (360 / CABIN_COUNT) * i;
              return (
                <g
                  key={i}
                  className={area >= 0 ? "wt-cab wt-cab--area" : "wt-cab"}
                  style={{ "--i": i, "--a": `${a.toFixed(3)}deg`, "--k": area } as CSSProperties}
                >
                  <circle className="wt-cab-ring" cx={EX} cy={EY} r={area >= 0 ? 30 : 23} />
                  {area >= 0 && <circle className="wt-cab-fill" cx={EX} cy={EY} r={17} />}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Geniş ekran: karartma metnin altındaki sol-alt bölgeye demirlenir;
            çarkın kemeri ve gün batımı göğü açık kalır. */}
        <div
          aria-hidden
          className="wt-scrim hidden md:block absolute inset-0 bg-[radial-gradient(140%_110%_at_0%_100%,rgba(5,13,36,0.92)_0%,rgba(5,13,36,0.72)_60%,rgba(5,13,36,0)_100%)] rtl:bg-[radial-gradient(140%_110%_at_100%_100%,rgba(5,13,36,0.92)_0%,rgba(5,13,36,0.72)_60%,rgba(5,13,36,0)_100%)]"
        />
        <div
          aria-hidden
          className="wt-scrim md:hidden absolute inset-0 bg-gradient-to-t from-navy-950/92 via-navy-950/70 to-navy-950/10"
        />

        <div className="wt-copy relative z-10 flex h-full w-full flex-col justify-end px-6 lg:px-10 pb-24 pt-32 md:pb-32">
          <div className="max-w-3xl">
            <div className="mb-16 md:mb-20">
              <h1 className="animate-hero-rise animate-hero-rise-delay-1 font-display text-4xl md:text-5xl lg:text-6xl text-cream-50 leading-[1.08] tracking-tight text-balance drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
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
      </div>

      {/* Çalışma alanları. Hareket destekleniyorsa sahnenin üstünde, dolapla
          birlikte adım adım açılır; desteklenmiyorsa ya da azaltılmış hareket
          açıksa hero'nun altında düz bir liste olarak durur. */}
      <div className="wt-areas">
        <div className="wt-head">
          <h2 className="wt-heading font-display text-3xl md:text-5xl leading-tight text-balance">
            {t("wheel.heading")}
          </h2>
          <Link
            href="/practice-areas"
            className="wt-all group mt-4 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
          >
            {tCta("explore")}
            <ArrowRight size={15} className="shrink-0 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        <ol className="wt-list">
          {areas.map((a, k) => (
            <li
              key={a.slug}
              className={k === N - 1 ? "wt-card wt-card--last" : "wt-card"}
              style={{ "--k": k } as CSSProperties}
            >
              <h3 className="wt-title font-display text-2xl md:text-4xl leading-tight">{a.title}</h3>
              <p className="wt-text mt-3 text-base md:text-lg leading-relaxed">{a.summary}</p>
              <Link
                href={`/practice-areas/${a.slug}`}
                className="wt-open group mt-4 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
              >
                {t("wheel.open")}
                <ArrowRight size={15} className="shrink-0 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
