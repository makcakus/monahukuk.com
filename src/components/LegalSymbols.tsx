// Dolgulu (çizgisiz) hukuk simgeleri: sütun, terazi, paragraf işareti.
// Hepsi aynı 200x300 kutuda; renk currentColor'dan gelir. Hareket CSS'te
// (.sym-cycle) — simgeler sırayla belirip dağılır, hiçbiri sabit durmaz.

type SvgProps = { className?: string };

const base = {
  viewBox: "0 0 200 300",
  fill: "currentColor",
  "aria-hidden": true,
} as const;

export function ColumnSymbol({ className }: SvgProps) {
  return (
    <svg {...base} className={className}>
      {/* basamaklar ve taban */}
      <rect x="14" y="282" width="172" height="10" />
      <rect x="28" y="270" width="144" height="10" />
      <rect x="50" y="254" width="100" height="12" />
      <rect x="58" y="244" width="84" height="8" />
      {/* yivli gövde */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={62 + i * 16} y="104" width="12" height="136" />
      ))}
      {/* İyonik başlık */}
      <rect x="62" y="92" width="76" height="10" />
      <path
        fillRule="evenodd"
        d="M62 78a16 16 0 1 0 0 .01zM62 84a10 10 0 1 1 0-.01zM138 78a16 16 0 1 0 0 .01zM138 84a10 10 0 1 1 0-.01z"
      />
      <rect x="42" y="64" width="116" height="10" />
      {/* arşitrav ve alınlık */}
      <rect x="24" y="44" width="152" height="16" />
      <path d="M14 38 100 4l86 34z" />
    </svg>
  );
}

export function ScalesSymbol({ className }: SvgProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="100" cy="30" r="10" />
      <rect x="95" y="36" width="10" height="226" />
      <rect x="20" y="52" width="160" height="7" rx="3.5" />
      <rect x="60" y="262" width="80" height="10" />
      <rect x="46" y="274" width="108" height="12" />
      {/* zincirler */}
      <g stroke="currentColor" strokeWidth="2.5" fill="none">
        <path d="M30 59 6 168M30 59l24 109M170 59l-24 109M170 59l24 109" />
      </g>
      {/* kefeler */}
      <path d="M0 168h60a30 30 0 0 1-60 0z" />
      <path d="M140 168h60a30 30 0 0 1-60 0z" />
    </svg>
  );
}

export function ParagraphSymbol({ className }: SvgProps) {
  return (
    <svg {...base} className={className}>
      <text
        x="100"
        y="238"
        textAnchor="middle"
        fontSize="270"
        className="font-display"
        fontWeight="500"
      >
        §
      </text>
    </svg>
  );
}

export const LEGAL_SYMBOLS = [ColumnSymbol, ScalesSymbol, ParagraphSymbol] as const;
