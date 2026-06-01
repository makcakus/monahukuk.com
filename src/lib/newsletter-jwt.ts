/**
 * Supabase bağımlılığı olmadan stateless newsletter token'ları.
 * HMAC-SHA256 imzalı minimal JWT benzeri token.
 *
 * Env: NEWSLETTER_JWT_SECRET (en az 32 karakter rastgele string)
 */
import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

// ── Helpers ──────────────────────────────────────────────────────────────────

function b64url(input: Buffer | string): string {
  const buf = typeof input === "string" ? Buffer.from(input, "utf8") : input;
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

function getSecret(): Buffer {
  const s = process.env.NEWSLETTER_JWT_SECRET;
  if (!s) throw new Error("NEWSLETTER_JWT_SECRET env var is not set");
  return Buffer.from(s, "utf8");
}

function sign(payload: Record<string, unknown>): string {
  const data = b64url(JSON.stringify(payload));
  const sig = b64url(createHmac("sha256", getSecret()).update(data).digest());
  return `${data}.${sig}`;
}

function verify(token: string): Record<string, unknown> | null {
  try {
    const dot = token.lastIndexOf(".");
    if (dot === -1) return null;
    const data = token.slice(0, dot);
    const sig = token.slice(dot + 1);

    const expected = b64url(
      createHmac("sha256", getSecret()).update(data).digest()
    );

    // Constant-time karşılaştırma (timing attack'a karşı)
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

    return JSON.parse(Buffer.from(data, "base64url").toString("utf8"));
  } catch {
    return null;
  }
}

// ── Token TTL ────────────────────────────────────────────────────────────────

const CONFIRM_TTL_MS = 48 * 60 * 60 * 1000; // 48 saat

// ── Public API ───────────────────────────────────────────────────────────────

export type ConfirmPayload = { email: string; locale: string };
export type UnsubPayload = { email: string; locale: string };

/** Onay e-postası için 48 saatlik token üretir. */
export function createConfirmToken(email: string, locale: string): string {
  return sign({
    t: "c",
    e: email,
    l: locale,
    exp: Date.now() + CONFIRM_TTL_MS,
  });
}

/**
 * Abonelik iptali için kalıcı token üretir (süresiz).
 * Aynı email+locale için her seferinde aynı token üretilir —
 * bu sayede eski e-postalardaki link de çalışmaya devam eder.
 */
export function createUnsubToken(email: string, locale: string): string {
  return sign({ t: "u", e: email, l: locale });
}

/** Onay token'ını doğrular; geçersiz veya süresi dolmuşsa null döner. */
export function verifyConfirmToken(token: string): ConfirmPayload | null {
  const p = verify(token);
  if (!p || p.t !== "c") return null;
  if (typeof p.exp !== "number" || p.exp < Date.now()) return null;
  if (typeof p.e !== "string" || typeof p.l !== "string") return null;
  return { email: p.e, locale: p.l };
}

/** İptal token'ını doğrular; geçersizse null döner. */
export function verifyUnsubToken(token: string): UnsubPayload | null {
  const p = verify(token);
  if (!p || p.t !== "u") return null;
  if (typeof p.e !== "string" || typeof p.l !== "string") return null;
  return { email: p.e, locale: p.l };
}
