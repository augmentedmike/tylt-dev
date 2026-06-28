"use server";

import { insertLead, type LeadType } from "@/lib/leads";

const VALID_TYPES: LeadType[] = ["pilot", "consultation"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface LeadInput {
  type: string;
  name: string;
  email: string;
  company?: string;
  context?: string;
  message: string;
  /** Honeypot — must be empty for a genuine submission. */
  company_url?: string;
}

export type LeadResult = { ok: true } | { ok: false; error: string };

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Server Action: validates a lead submission and stores it in MongoDB for the
 * /system dashboard. Reachable via direct POST, so every field is validated here.
 */
export async function submitLead(input: LeadInput): Promise<LeadResult> {
  // Honeypot — bots fill this hidden field; humans never see it. Pretend success.
  if (str(input.company_url)) {
    return { ok: true };
  }

  const type = str(input.type) as LeadType;
  const name = str(input.name);
  const email = str(input.email);
  const message = str(input.message);
  const company = str(input.company);
  const context = str(input.context);

  if (!VALID_TYPES.includes(type)) {
    return { ok: false, error: "Unknown form type." };
  }
  if (!name || !email || !message) {
    return {
      ok: false,
      error: "Please fill in your name, email, and a short description.",
    };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  try {
    await insertLead({ type, name, email, message, company, context });
  } catch (err) {
    const reason = err instanceof Error ? err.message : "";
    if (reason === "MISSING_MONGODB_URI") {
      console.error("[lead] MONGODB_URI is not configured.");
    } else {
      console.error("[lead] save failed:", reason);
    }
    return {
      ok: false,
      error: "Something went wrong saving your request. Try again.",
    };
  }

  return { ok: true };
}
