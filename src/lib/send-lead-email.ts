// Server-only: imported solely by the /api/lead route handler. Reads
// RESEND_API_KEY from the environment and must never reach the client bundle.

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

const FROM_EMAIL = process.env.LEAD_FROM_EMAIL ?? "Tylt Website <noreply@tylt.dev>";

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
 * Sends a lead notification to the plus-addressed consultation inbox via the
 * Resend REST API. Throws "MISSING_API_KEY" when unconfigured so the route can
 * return a clear setup message.
 */
export async function sendLeadEmail(payload: LeadPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("MISSING_API_KEY");
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [recipientFor(payload.type)],
      reply_to: payload.email,
      subject: TYPE_CONFIG[payload.type].subject(payload.name),
      html: toHtml(payload),
      text: toText(payload),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`RESEND_ERROR ${res.status} ${detail}`.trim());
  }
}
