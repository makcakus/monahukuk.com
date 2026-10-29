import Image from "next/image";
import type { CSSProperties } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";
import { HeroRotator } from "./HeroRotator";

const HERO_IMAGE_URL = "/images/hero/antalya-donme-dolap-hero.jpg";
const IMG_W = 2170;
const IMG_H = 1984;

// Fotoğraftaki dolabın perspektif modeli (fotoğraf pikseli). Dolap gerçekte
// düz bir dairedir; kamera alttan ve yandan baktığı için daire fotoğrafta
// eğik bir elipse, kabinler arası eşit açı da eşit olmayan aralıklara dönüşür.
// H, birim çemberi (dolabın düzlemi) fotoğrafa izdüşüren 3x3 homografinin ilk
// 8 elemanı (h33 = 1). Kabinler fotoğraftan otomatik tespit edilip bu modele
// uyduruldu: 42 kabin (4'ü alttaki konstrüksiyonun arkasında), ortalama sapma
// 3.4 px. Kabin i'nin düzlemdeki açısı: TH0 + i * 360 / CABIN_COUNT.
const H = [706.449, 164.652, 1542.397, 79.754, 642.373, 1251.322, 0.137872, 0.00496] as const;
const TH0 = 192.3594;
const CABIN_COUNT = 42;
// En soldaki kabin: kartı açılan alanın kabini her adımda bu konuma gelir.
const ACTIVE_CABIN = 0;

function project(px: number, py: number) {
  const w = H[6] * px + H[7] * py + 1;
  return { x: (H[0] * px + H[1] * py + H[2]) / w, y: (H[3] * px + H[4] * py + H[5]) / w };
}
const HUB = project(0, 0);

// A çerçevelerinin ayakları ve kirişleri fotoğraftan ölçüldü.
const APEX_L = { x: 1478, y: 1272 };
const APEX_R = { x: 1600, y: 1224 };
const LEGS = [
  [APEX_L, { x: 1286, y: 1984 }],
  [APEX_L, { x: 1665, y: 1984 }],
  [APEX_R, { x: 1379, y: 1984 }],
  [APEX_R, { x: 1942, y: 1984 }],
  [APEX_L, APEX_R],
  [{ x: 1500, y: 1575 }, { x: 1745, y: 1575 }],
  [{ x: 1315, y: 1805 }, { x: 1910, y: 1805 }],
] as const;

const N = PRACTICE_AREAS.length;
const SPOKES = 72;
// Alan k'nın kabini etkin konumdan kaç kabin ötede: 13 alan 42 kabine olabildiğince
// eşit dağılır (3 ya da 4 kabin arayla). Dönüş hep tam kabin adımı olduğu için
// duran her karede çizim fotoğraftaki kabinlerle yine üst üste gelir.
const AREA_OFFSET = Array.from({ length: N }, (_, k) => Math.round((k * CABIN_COUNT) / N));
const AREA_OF_CABIN = new Map(AREA_OFFSET.map((d, k) => [(ACTIVE_CABIN + d) % CABIN_COUNT, k]));

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
  const angle = (k: number) => ((-360 * AREA_OFFSET[k]) / CABIN_COUNT).toFixed(3);
  const frames = [`0% { --th: 0deg; }`];
  for (let k = 0; k < N - 1; k++) {
    const boundary = INTRO + (k + 1) * SLOT + CARD_LAG;
    frames.push(
      `${pct(boundary - MOVE_HALF)} { --th: ${angle(k)}deg; animation-timing-function: ease-in-out; }`,
      `${pct(boundary + MOVE_HALF)} { --th: ${angle(k + 1)}deg; }`
    );
  }
  frames.push(`100% { --th: ${angle(N - 1)}deg; }`);
  return `@keyframes wt-spin { ${frames.join("\n")} }`;
}

/** Açıklamanın ilk cümlesi: kartta tek cümlelik özet olarak durur. */
function firstSentence(text: string) {
  const m = text.match(/^.+?[.。](?=\s|$)/);
  return m ? m[0] : text;
}

const f = (n: number) => n.toFixed(1);

/** Dolabın düzleminde rho yarıçaplı çemberin fotoğraftaki izdüşümü (kapalı yol). */
function ringPath(rho: number) {
  const pts = Array.from({ length: 180 }, (_, i) => {
    const t = (i / 180) * 2 * Math.PI;
    const p = project(rho * Math.cos(t), rho * Math.sin(t));
    return `${f(p.x)} ${f(p.y)}`;
  });
  return `M${pts.join(" L")} Z`;
}

function radial(rho: number, deg: number) {
  const r = (deg * Math.PI) / 180;
  return project(rho * Math.cos(r), rho * Math.sin(r));
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
            style={
              {
                "--h11": H[0], "--h12": H[1], "--h13": H[2],
                "--h21": H[3], "--h22": H[4], "--h23": H[5],
                "--h31": H[6], "--h32": H[7],
              } as CSSProperties
            }
          >
            <g className="wt-legs">
              {LEGS.map(([p, q], i) => (
                <path key={i} className="wt-leg" pathLength={1} d={`M${p.x} ${p.y} L${q.x} ${q.y}`} />
              ))}
            </g>

            <path className="wt-rim" pathLength={1} d={ringPath(0.95)} />
            <path className="wt-rim wt-rim--inner" pathLength={1} d={ringPath(0.905)} />

            <g className="wt-spokes" style={{ transformOrigin: `${f(HUB.x)}px ${f(HUB.y)}px` }}>
              {Array.from({ length: SPOKES }, (_, i) => {
                const p = radial(0.89, (360 / SPOKES) * i);
                return <line key={i} x1={f(HUB.x)} y1={f(HUB.y)} x2={f(p.x)} y2={f(p.y)} />;
              })}
              <circle cx={f(HUB.x)} cy={f(HUB.y)} r={20} className="wt-hub" />
            </g>


            {Array.from({ length: CABIN_COUNT }, (_, i) => {
              const area = AREA_OF_CABIN.get(i) ?? -1;
              const a = TH0 + (360 / CABIN_COUNT) * i;
              return (
                <g
                  key={i}
                  className={area >= 0 ? "wt-cab wt-cab--area" : "wt-cab"}
                  style={{ "--i": i, "--a": `${a.toFixed(3)}deg`, "--k": area } as CSSProperties}
                >
                  <circle className="wt-cab-ring" cx={0} cy={0} r={area >= 0 ? 28 : 25} />
                  {area >= 0 && <circle className="wt-cab-fill" cx={0} cy={0} r={15} />}
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
            <div className="animate-hero-rise animate-hero-rise-delay-1 mb-10 md:mb-14">
              <HeroRotator
                slides={[
                  { title: t("hero.title"), lead: t("hero.lead") },
                  ...(t.raw("hero.slides") as { title: string; lead: string }[]),
                ]}
              />
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
