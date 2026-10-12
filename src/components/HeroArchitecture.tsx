import type { CSSProperties } from "react";

// Hero'nun hukuk dilini kuran iki mimari katman: sağ üstte kendini çizen İyonik
// sütun dizisi, metnin arkasında çok soluk dev bir alınlık (pediment).
// Saf SVG + CSS: JS yok, ek paket yok. Çizim animasyonu pathLength=1 ile
// stroke-dashoffset üzerinden yürür; reduced-motion'da çizgiler baştan tamdır.
// Sütunlar simetrik olduğu için RTL'de aynalamaya gerek yok (konum end-* ile
// mantıksal).

type Stroke = { d: string; delay: number; faint?: boolean };

const COLUMN_X = [60, 180, 300] as const;

function column(cx: number, order: number): Stroke[] {
  const t = 0.45 + order * 0.28;
  const volute = (x: number) =>
    `M ${x - 8} 112 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0`;
  const eye = (x: number) => `M ${x - 3} 112 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0`;
  return [
    // taban: plint + torus
    { d: `M ${cx - 32} 382 H ${cx + 32} V 392 H ${cx - 32} Z`, delay: t },
    { d: `M ${cx - 28} 372 H ${cx + 28} V 382 H ${cx - 28} Z`, delay: t + 0.1 },
    // gövde
    { d: `M ${cx - 20} 372 V 124`, delay: t + 0.2 },
    { d: `M ${cx + 20} 372 V 124`, delay: t + 0.2 },
    // yivler (flutes)
    { d: `M ${cx - 10} 368 V 128`, delay: t + 0.4, faint: true },
    { d: `M ${cx} 368 V 128`, delay: t + 0.45, faint: true },
    { d: `M ${cx + 10} 368 V 128`, delay: t + 0.5, faint: true },
    // başlık: boyun, volütler, abaküs
    { d: `M ${cx - 20} 124 H ${cx + 20}`, delay: t + 0.7 },
    { d: volute(cx - 24), delay: t + 0.8 },
    { d: volute(cx + 24), delay: t + 0.8 },
    { d: eye(cx - 24), delay: t + 0.95, faint: true },
    { d: eye(cx + 24), delay: t + 0.95, faint: true },
    { d: `M ${cx - 16} 108 Q ${cx} 128 ${cx + 16} 108`, delay: t + 0.9 },
    { d: `M ${cx - 32} 90 H ${cx + 32} V 98 H ${cx - 32} Z`, delay: t + 1.0 },
  ];
}

const STRUCTURE: Stroke[] = [
  // basamaklar
  { d: "M 0 392 H 360 V 400 H 0 Z", delay: 0.1 },
  { d: "M -8 400 H 368 V 408 H -8 Z", delay: 0.2 },
  // arşitrav ve friz
  { d: "M 4 62 H 356 V 90 H 4 Z", delay: 1.5 },
  { d: "M 4 76 H 356", delay: 1.65, faint: true },
  // korniş ve alınlık
  { d: "M 0 52 H 360 V 62 H 0 Z", delay: 1.75 },
  { d: "M 0 52 L 180 6 L 360 52", delay: 1.9 },
  { d: "M 24 48 L 180 14 L 336 48", delay: 2.1, faint: true },
];

function Paths({ strokes }: { strokes: Stroke[] }) {
  return (
    <>
      {strokes.map((s, i) => (
        <path
          key={i}
          d={s.d}
          pathLength={1}
          className="arch-line"
          style={
            {
              "--arch-delay": `${s.delay}s`,
              opacity: s.faint ? 0.55 : 1,
            } as CSSProperties
          }
        />
      ))}
    </>
  );
}

export function HeroArchitecture() {
  return (
    <>
      {/* Metnin arkasında: fotoğraftan farklı hızda kayan dev alınlık. */}
      <div
        aria-hidden
        className="sd-hero-arch pointer-events-none absolute -start-24 bottom-0 hidden w-[920px] text-cream-50/[0.13] md:block"
      >
        <svg viewBox="0 0 920 300" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M 0 300 L 460 20 L 920 300" />
          <path d="M 60 300 L 460 58 L 860 300" opacity="0.6" />
          <path d="M 0 300 H 920" />
          {/* dentil sırası */}
          {Array.from({ length: 30 }).map((_, i) => (
            <path key={i} d={`M ${20 + i * 30} 282 v 18 h 14 v -18 z`} opacity="0.7" />
          ))}
        </svg>
      </div>

      {/* Sağ üst: gün batımı göğünün açık kaldığı bölge. Dar ekranda metinle
          çakışacağı için yalnız xl ve üstünde. */}
      <div
        aria-hidden
        className="sd-hero-columns pointer-events-none absolute end-8 top-28 hidden w-[min(26vw,380px)] text-gold-300/45 xl:block 2xl:end-14"
      >
        <svg
          viewBox="-10 0 380 412"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
         
        >
          <Paths strokes={STRUCTURE} />
          <Paths strokes={COLUMN_X.flatMap((cx, i) => column(cx, i))} />
        </svg>
      </div>
    </>
  );
}
