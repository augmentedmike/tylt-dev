// Server-only: imported solely by the submitLead server action. Sends lead
// notifications over SMTP via nodemailer, configured from MAIL_* env vars —
// the same setup the other apps use (local Maildev/"mailtrap" in dev, any SMTP
// provider in prod). Must never reach the client bundle.

import nodemailer from "nodemailer";

export type LeadType = "pilot" | "consultation";

export interface LeadPayload {
  type: LeadType;
  name: string;
  email: string;
  company?: string;
  /** Free-text: what they're building / what they need help with. */
  message: string;
  /** Pilot: team size. Consultation: budget range. */
  context?: string;
}

const TYPE_CONFIG: Record<
  LeadType,
  { recipientTag: string; subject: (name: string) => string; heading: string }
> = {
  pilot: {
    recipientTag: "pilot",
    subject: (name) => `New pilot application — ${name}`,
    heading: "Pilot program application",
  },
  consultation: {
    recipientTag: "consultation",
    subject: (name) => `New call request — ${name}`,
    heading: "Consultation / call request",
  },
};

/** Recipient inbox — plus-addressed by lead type, e.g. consultation+pilot@tylt.dev. */
function recipientFor(type: LeadType): string {
  return `consultation+${TYPE_CONFIG[type].recipientTag}@tylt.dev`;
}

const MAIL_FROM = process.env.MAIL_FROM ?? "Tylt Website <noreply@tylt.dev>";

function getTransporter() {
  const host = process.env.MAIL_HOST;
  if (!host) return null;
  const port = Number(process.env.MAIL_PORT) || 587;
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;
  const isLocal = host === "127.0.0.1" || host === "localhost";

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    ...(isLocal ? { ignoreTLS: true } : {}),
    ...(user && pass ? { auth: { user, pass } } : {}),
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderRows(payload: LeadPayload): Array<[string, string]> {
  const contextLabel = payload.type === "pilot" ? "Team size" : "Budget range";
  const messageLabel =
    payload.type === "pilot" ? "What they're building" : "What they need help with";
  return [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", payload.company || "—"],
    [contextLabel, payload.context || "—"],
    [messageLabel, payload.message],
  ];
}

function toHtml(payload: LeadPayload): string {
  const rows = renderRows(payload)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#888;font-size:13px;vertical-align:top;white-space:nowrap">${escapeHtml(
          label,
        )}</td><td style="padding:6px 0;font-size:14px;color:#111;white-space:pre-wrap">${escapeHtml(
          value,
        )}</td></tr>`,
    )
    .join("");
  return `<div style="font-family:system-ui,sans-serif;max-width:560px"><h2 style="font-size:16px;margin:0 0 12px">${escapeHtml(
    TYPE_CONFIG[payload.type].heading,
  )}</h2><table style="border-collapse:collapse;width:100%">${rows}</table></div>`;
}

function toText(payload: LeadPayload): string {
  return [
    TYPE_CONFIG[payload.type].heading,
    "",
    ...renderRows(payload).map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
}

/**
 * Sends a lead notification to the plus-addressed consultation inbox over SMTP.
 * Reply-to is the submitter so you can respond straight from the notification.
 * Throws "MISSING_SMTP" when MAIL_HOST is unset so the action can return a clear
 * setup message.
 */
export async function sendLeadEmail(payload: LeadPayload): Promise<void> {
  const transporter = getTransporter();
  if (!transporter) {
    throw new Error("MISSING_SMTP");
  }

  await transporter.sendMail({
    from: MAIL_FROM,
    to: recipientFor(payload.type),
    replyTo: payload.email,
    subject: TYPE_CONFIG[payload.type].subject(payload.name),
    text: toText(payload),
    html: toHtml(payload),
  });
}
