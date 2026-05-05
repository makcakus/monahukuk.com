import { randomBytes } from "node:crypto";

export function generateToken(): string {
  return randomBytes(32).toString("hex");
}

export const CONFIRMATION_TTL_MS = 48 * 60 * 60 * 1000;

export function expiryFromNow(ms = CONFIRMATION_TTL_MS): Date {
  return new Date(Date.now() + ms);
}
