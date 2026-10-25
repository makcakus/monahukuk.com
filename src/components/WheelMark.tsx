import type { CSSProperties } from "react";

// Kapanıştaki sönük dolap: açılıştaki dolabın sade, hareketsiz işareti. Kabinler
// bölüm görünüm alanından geçerken elips üzerinde yavaşça döner (globals.css, .wm).
const CX = 200;
const CY = 220;
const RX = 170;
const RY = 200;
const HUB = { x: 205, y: 214 };
const CABINS = 36;
const SPOKES = 36;

const f = (n: number) => n.toFixed(1);

export function WheelMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`wm ${className}`}
      viewBox="0 0 400 440"
      aria-hidden="true"
      focusable="false"
      style={{ "--rx": RX, "--ry": RY } as CSSProperties}
    >
      <ellipse className="wm-ring" cx={CX} cy={CY} rx={RX * 0.96} ry={RY * 0.96} />
      <ellipse className="wm-ring wm-ring--inner" cx={CX} cy={CY} rx={RX * 0.9} ry={RY * 0.9} />
      <g className="wm-spokes">
        {Array.from({ length: SPOKES }, (_, i) => {
          const r = ((360 / SPOKES) * i * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={HUB.x}
              y1={HUB.y}
              x2={f(CX + RX * 0.9 * Math.cos(r))}
              y2={f(CY + RY * 0.9 * Math.sin(r))}
            />
          );
        })}
      </g>
      <path className="wm-ring" d={`M${HUB.x} ${HUB.y} L150 440 M${HUB.x} ${HUB.y} L275 440`} />
      {Array.from({ length: CABINS }, (_, i) => (
        <circle
          key={i}
          className="wm-cab"
          cx={CX}
          cy={CY}
          r={7}
          style={{ "--a": `${180 + (360 / CABINS) * i}deg` } as CSSProperties}
        />
      ))}
    </svg>
  );
}
