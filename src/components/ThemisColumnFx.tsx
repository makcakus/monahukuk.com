"use client";

// Header'da fare hareket edince imlecin altında 3,5 sn'lik bir sahne oynar:
//   0.0–0.9  Roma sütunu tabandan yukarı yükselir
//   0.5–2.4  yılan sütuna sarılarak tırmanır
//   1.2–1.8  Themis sütunun tepesinde belirir, kılıcı havada bekler
//   2.35–2.7 yılan zirveye varınca kılıç yılana saplanır (kıvılcım)
//   2.7–3.5  Themis ünlü pozunu verir: kılıç yılanda, terazi havada
// Sonra ~2 sn poz tutulur, söner. Hepsi SMIL (SVG'nin kendi zaman çizelgesi):
// her gösterimde svg yeniden mount edilir, zaman sıfırdan başlar, tüm parçalar
// aynı saate bağlı kalır. Koordinatlar viewBox "0 -30 100 280".

export const THEMIS_FX_WIDTH = 100;
export const THEMIS_FX_HEIGHT = 280;
export const THEMIS_FX_LIFETIME_MS = 6400;

const SERPENT_PATH =
  "M30 224 C30 214 70 204 70 194 C70 184 30 174 30 164 C30 154 70 144 70 134 C70 124 30 114 30 104 C30 96 31 88 31 76";

const SPLINE_OUT = "0.2 0.7 0.2 1";

export function ThemisColumnFx() {
  return (
    <svg
      viewBox="0 -30 100 280"
      width={THEMIS_FX_WIDTH}
      height={THEMIS_FX_HEIGHT}
      aria-hidden="true"
      className="themis-fx overflow-visible"
    >
      <defs>
        {/* Sütun tabandan yukarı açılır */}
        <clipPath id="themis-column-reveal">
          <rect x="0" width="100" y="250" height="0">
            <animate attributeName="y" values="250;50" dur="0.9s" begin="0s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines={SPLINE_OUT} />
            <animate attributeName="height" values="0;200" dur="0.9s" begin="0s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines={SPLINE_OUT} />
          </rect>
        </clipPath>
      </defs>

      {/* ---------- SÜTUN ---------- */}
      <g clipPath="url(#themis-column-reveal)" className="fill-gold-300">
        <rect x="12" y="246" width="76" height="4" />
        <rect x="18" y="238" width="64" height="8" />
        <rect x="26" y="230" width="48" height="8" />
        <rect x="30" y="222" width="40" height="8" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={34 + i * 8.33} y="70" width="7" height="152" />
        ))}
        {/* başlık: boyun, ekinus, abaküs */}
        <path d="M34 70h32l4-8H30z" />
        <path d="M30 62c0-6 4-8 8-8h24c4 0 8 2 8 8z" />
        <rect x="24" y="52" width="52" height="6" />
      </g>

      {/* ---------- YILAN ---------- */}
      {/* koyu dış hat + gövde; ikisi de aynı çizim animasyonunu paylaşır */}
      {[
        { w: 7.6, c: "#16382c" },
        { w: 5, c: "#3d8a66" },
      ].map((l) => (
        <path
          key={l.w}
          d={SERPENT_PATH}
          fill="none"
          stroke={l.c}
          strokeWidth={l.w}
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1 2"
          strokeDashoffset="1"
        >
          <animate attributeName="stroke-dashoffset" values="1;0" dur="1.9s" begin="0.5s" fill="freeze" calcMode="linear" />
        </path>
      ))}
      {/* baş: aynı yolu izler, kafası hep gidiş yönüne bakar */}
      <g opacity="0">
        <set attributeName="opacity" to="1" begin="0.5s" fill="freeze" />
        <animateMotion path={SERPENT_PATH} dur="1.9s" begin="0.5s" rotate="auto" fill="freeze" calcMode="linear" />
        <path d="M-5 -3.6 Q4 -5 8.5 0 Q4 5 -5 3.6Z" fill="#3d8a66" stroke="#16382c" strokeWidth="1" />
        <circle cx="3" cy="-1.6" r="1" fill="#f7e9b0" />
        {/* çatal dil */}
        <path d="M8.5 0h4m0 0 2-1.6m-2 1.6 2 1.6" stroke="#c0392b" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </g>

      {/* ---------- THEMIS ---------- */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.2s" fill="freeze" />
        <animateTransform attributeName="transform" type="translate" values="0 8;0 0" dur="0.6s" begin="1.2s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines={SPLINE_OUT} />

        {/* elbise */}
        <path d="M43.5 17q6.5-3.5 13 0L64 52H36z" className="fill-gold-300" stroke="#9a6f1f" strokeWidth="0.7" strokeLinejoin="round" />
        <path d="M46 20q-2 16-5 32M50 19v33M54 20q2 16 5 32" stroke="#9a6f1f" strokeWidth="0.9" fill="none" opacity="0.6" />
        <path d="M43 29q7 4 14 0" stroke="#9a6f1f" strokeWidth="0.9" fill="none" opacity="0.7" />
        {/* baş, gözbağı, saç */}
        <circle cx="50" cy="9" r="5.2" className="fill-gold-300" stroke="#9a6f1f" strokeWidth="0.7" />
        <path d="M44.5 8.2h11v2.6h-11z" fill="#0b1b45" />
        <path d="M45 6.5q5-6 10 0" stroke="#9a6f1f" strokeWidth="1.4" fill="none" strokeLinecap="round" />

        {/* sağ kol: terazi (görüntüde sağ) */}
        <path d="M56 19 70 9" stroke="#e5c07b" strokeWidth="3.4" strokeLinecap="round" fill="none" />
        <g className="fill-gold-300" stroke="#e5c07b" strokeWidth="0.9">
          <path d="M60 6.5h20" strokeLinecap="round" />
          <path d="M62 6.5l-3 8M62 6.5l3 8M78 6.5l-3 8M78 6.5l3 8" fill="none" />
          <path d="M58 14.5h8a4 2.2 0 0 1-8 0zM74 14.5h8a4 2.2 0 0 1-8 0z" />
          <circle cx="70" cy="5" r="1.2" />
        </g>

        {/* sol kol + kılıç (görüntüde sol): omuz çevresinde döner */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="140 44 18;140 44 18;-3 44 18;0 44 18;0 44 18"
            keyTimes="0;0.671;0.757;0.82;1"
            keySplines="0 0 1 1;0.6 0 1 0.6;0.2 0.6 0.4 1;0 0 1 1"
            calcMode="spline"
            dur="3.5s"
            begin="0s"
            fill="freeze"
          />
          <path d="M44 18 40 32" stroke="#e5c07b" strokeWidth="3.6" strokeLinecap="round" fill="none" />
          {/* kabza, siperlik, bıçak */}
          <path d="M40 32l-1.1-4.4" stroke="#7a4a12" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M36.4 33.3 43.6 31.7" stroke="#e5c07b" strokeWidth="2" strokeLinecap="round" />
          <path d="M39.4 33 41.9 33.5 31.8 72 30.6 71.6z" fill="#dfe5f1" stroke="#2b3556" strokeWidth="0.8" strokeLinejoin="round" />
        </g>
      </g>

      {/* çarpma kıvılcımı */}
      <g opacity="0" transform="translate(31 70)">
        <set attributeName="opacity" to="1" begin="2.38s" dur="0.4s" fill="remove" />
        <circle r="1" fill="none" stroke="#fff3c4" strokeWidth="1.4">
          <animate attributeName="r" values="1;9" dur="0.4s" begin="2.38s" fill="freeze" />
          <animate attributeName="opacity" values="0.9;0" dur="0.4s" begin="2.38s" fill="freeze" />
        </circle>
      </g>
    </svg>
  );
}
