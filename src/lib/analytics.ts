/**
 * GA4 event yardımcısı — client tarafında güvenli no-op.
 * gtag yalnızca çerez onayı ("accepted") sonrası yüklenir (GoogleAnalytics.tsx);
 * yüklü değilse çağrı sessizce yok sayılır.
 */
export function track(
  event: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", event, params ?? {});
}
