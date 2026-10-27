"use client";

import { useEffect, useState } from "react";

export type HeroSlide = { title: string; lead: string };

const INTERVAL_MS = 3000;

/**
 * Hero başlığı ve açıklaması: her 3 saniyede bir sıradaki metne geçer.
 * Tüm metinler aynı grid hücresinde üst üste durur; kutu en uzun metne göre
 * boyutlanır, bu yüzden geçişte sayfa zıplamaz. Yalnızca ilk metin <h1>'dir
 * (SEO ve ekran okuyucu için); diğerleri aria-hidden dekoratif katmandır.
 * Azaltılmış hareket tercihinde dönüş durur, ilk metin sabit kalır.
 */
export function HeroRotator({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setActive((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const layer = (i: number) =>
    `col-start-1 row-start-1 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
      i === active ? "opacity-100" : "opacity-0 pointer-events-none"
    }`;

  const titleClass =
    "font-display text-4xl md:text-5xl lg:text-6xl text-cream-50 leading-[1.08] tracking-tight text-balance drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]";
  const leadClass =
    "max-w-2xl text-lg md:text-xl text-cream-100/95 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]";

  return (
    <>
      <div className="animate-hero-rise animate-hero-rise-delay-1 grid">
        {slides.map((s, i) =>
          i === 0 ? (
            <h1 key={i} className={`${layer(i)} ${titleClass}`}>
              {s.title}
            </h1>
          ) : (
            <div key={i} aria-hidden="true" className={`${layer(i)} ${titleClass}`}>
              {s.title}
            </div>
          )
        )}
      </div>
      <span className="animate-hero-rise animate-hero-rise-delay-2 gold-divider mt-8" />
      <div className="animate-hero-rise animate-hero-rise-delay-3 mt-6 grid">
        {slides.map((s, i) => (
          <p
            key={i}
            aria-hidden={i === 0 ? undefined : "true"}
            className={`${layer(i)} ${leadClass}`}
          >
            {s.lead}
          </p>
        ))}
      </div>
    </>
  );
}
