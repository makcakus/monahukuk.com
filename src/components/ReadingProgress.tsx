/**
 * Uzun metinlerde sayfanın ne kadarının okunduğunu gösteren ince altın çizgi.
 *
 * Tamamen CSS scroll-driven animation (`animation-timeline: scroll(root)`) —
 * JavaScript, scroll dinleyicisi ve yeniden render yok. Desteklemeyen
 * tarayıcıda çubuk scaleX(0) kalır, yani hiç görünmez.
 *
 * Konum bilgisi taşıdığı için prefers-reduced-motion altında da çalışır:
 * zamana bağlı değil, doğrudan scroll konumuna bağlı.
 */
export function ReadingProgress() {
  return (
    <div
      aria-hidden
      className="sd-progress pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-gold-500 dark:bg-gold-400"
    />
  );
}
