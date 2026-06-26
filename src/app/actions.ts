"use server";

import { sendLeadEmail, type LeadType } from "@/lib/send-lead-email";

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
 * Server Action: validates a lead submission and emails it to the plus-addressed
 * consultation inbox. Reachable via direct POST, so every field is validated here.
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
    await sendLeadEmail({ type, name, email, message, company, context });
  } catch (err) {
    const reason = err instanceof Error ? err.message : "";
    if (reason === "MISSING_SMTP") {
      console.error("[lead] MAIL_HOST is not configured.");
      return {
        ok: false,
        error: "Email isn't configured yet. Please email hello@tylt.dev.",
      };
    }
    console.error("[lead] send failed:", reason);
    return {
      ok: false,
      error: "Something went wrong sending your request. Try again.",
    };
  }

  return { ok: true };
}
