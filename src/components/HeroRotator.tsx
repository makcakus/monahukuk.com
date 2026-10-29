"use client";

import { useState, useSyncExternalStore, type AnimationEvent, type CSSProperties } from "react";

type Slide = { title: string; lead: string };

/** Bir metnin ekranda kalma süresi; ilerleme çizgisi bu sürede dolar. */
const INTERVAL_MS = 6500;

const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribeMotion(cb: () => void) {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

// Hero sayfanın tepesindeyken ve sekme görünürken döner; dolap sahnesine
// inildiğinde ya da sekme arka plandayken durur.
function subscribeOnScreen(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  document.addEventListener("visibilitychange", cb);
  return () => {
    window.removeEventListener("scroll", cb);
    document.removeEventListener("visibilitychange", cb);
  };
}

/**
 * Hero metinleri arasında geçiş. Sayfanın tek H1'i her zaman ilk metindir
 * (ekran okuyucu ve arama motoru için sabit); dönen katman görsel kopyadır.
 *
 * Geçiş bir zamanlayıcıyla değil, etkin çizginin dolma animasyonu bittiğinde
 * tetiklenir: imleç metnin üzerindeyken ya da çizgilerden birine klavyeyle
 * odaklanıldığında animasyon durur, zamanlama da onunla birlikte durur.
 * Her çizgi bir düğmedir (WCAG 2.2.2: kendiliğinden değişen içerik için
 * kullanıcı denetimi). Azaltılmış hareket açıksa metinler kendiliğinden
 * değişmez; düğmelerle yine gezilebilir.
 */
export function HeroRotator({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const reduced = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(REDUCED).matches,
    () => true
  );
  const onScreen = useSyncExternalStore(
    subscribeOnScreen,
    () => window.scrollY < 60 && document.visibilityState === "visible",
    () => false
  );
  const running = slides.length > 1 && !reduced && onScreen;
  const paused = hovered || focused;

  function go(next: number) {
    if (next === active) return;
    setLeaving(active);
    setActive(next);
  }

  function onAnimationEnd(e: AnimationEvent<HTMLElement>) {
    if (e.animationName !== "hero-progress") return;
    go((active + 1) % slides.length);
  }

  return (
    <div
      className="hero-rot"
      data-running={running}
      data-paused={paused}
      style={{ "--hero-interval": `${INTERVAL_MS}ms` } as CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 className="sr-only">{slides[0].title}</h1>
      <p className="sr-only">{slides[0].lead}</p>

      <div aria-hidden="true" className="grid">
        {slides.map((s, i) => (
          <div
            key={i}
            className="hero-slide col-start-1 row-start-1"
            data-state={i === active ? "active" : i === leaving ? "leaving" : "idle"}
          >
            <p className="font-display text-4xl md:text-5xl lg:text-6xl text-cream-50 leading-[1.08] tracking-tight text-balance drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
              {s.title}
            </p>
            <span className="gold-divider mt-8" />
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-cream-100/95 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              {s.lead}
            </p>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div
          className="hero-dots mt-8 flex gap-2"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          {slides.map((s, i) => (
            <button
              key={i}
              type="button"
              aria-label={s.title}
              aria-current={i === active}
              onClick={() => go(i)}
              className="hero-dot"
              data-active={i === active}
            >
              <span onAnimationEnd={i === active ? onAnimationEnd : undefined} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
