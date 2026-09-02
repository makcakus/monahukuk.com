import type { CSSProperties, ReactNode } from "react";

type RevealVariant = "rise" | "soft" | "settle" | "inline";

const VARIANT_CLASS: Record<RevealVariant, string> = {
  rise: "sd",
  soft: "sd sd-soft",
  settle: "sd sd-settle",
  inline: "sd sd-inline",
};

/**
 * Bölüm görünüm alanına girerken hafifçe belirir.
 *
 * Hareket tamamen CSS scroll-driven animation ile üretilir (`animation-timeline:
 * view()`), JavaScript çalışmaz. Desteklemeyen tarayıcıda içerik statik ve tam
 * görünür kalır — hiçbir zaman opacity:0 ile sunulmaz.
 *
 * `variant` ardışık blokların aynı hareketi tekrarlamaması içindir; iki komşu
 * bölüm aynı varyantı kullanmamalı. `step` ise liste öğelerini sıralar: her
 * adım animasyonu scroll ekseninde biraz ileri kaydırır.
 */
export function Reveal({
  children,
  variant = "rise",
  step = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  variant?: RevealVariant;
  step?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const Comp = Tag as "div";
  const style = step
    ? ({ "--sd-step": `${step * 5}%` } as CSSProperties)
    : undefined;

  return (
    <Comp className={`${VARIANT_CLASS[variant]} ${className}`} style={style}>
      {children}
    </Comp>
  );
}
