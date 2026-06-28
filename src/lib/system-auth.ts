// Server-only: minimal password gate for the internal /system dashboard.
// A correct password sets an httpOnly cookie holding sha256(password); every
// request re-derives that hash and compares in constant time.
import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "tylt_system";

/** Whether a password has been configured at all. */
export function isConfigured(): boolean {
  return Boolean(process.env.SYSTEM_PASSWORD);
}

function expectedToken(): string | null {
  const pw = process.env.SYSTEM_PASSWORD;
  if (!pw) return null;
  return createHash("sha256").update(pw).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

/** Constant-time check of a submitted password against SYSTEM_PASSWORD. */
export function passwordMatches(input: string): boolean {
  const pw = process.env.SYSTEM_PASSWORD;
  if (!pw) return false;
  return safeEqual(input, pw);
}

/** True when the request carries a valid session cookie. */
export async function isAuthenticated(): Promise<boolean> {
  const token = expectedToken();
  if (!token) return false;
  const cookie = (await cookies()).get(COOKIE)?.value;
  return Boolean(cookie) && safeEqual(cookie!, token);
}

/** Set the session cookie (call only after a successful password check). */
export async function signIn(): Promise<void> {
  const token = expectedToken();
  if (!token) return;
  (await cookies()).set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

/** Clear the session cookie. */
export async function signOut(): Promise<void> {
  (await cookies()).delete(COOKIE);
}
