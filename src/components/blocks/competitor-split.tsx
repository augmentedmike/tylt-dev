import type { CSSProperties } from "react";

const checkItems = [
  "Every line reviewed and owned by senior engineers — not just generated",
  "Production-grade code — architected to scale, not to demo",
  "Security and IP handled — no leaked keys, no exposed customer data",
  "60%+ cheaper than a traditional onshore agency — savings passed straight to you",
  "Predictable velocity — workers run up to 80% utilization week over week",
];

const crossItems = [
  "Insecure by default — ~45% of AI-generated code ships with an OWASP-class flaw",
  "Leaked secrets & data — audits keep finding exposed API keys and customer PII",
  "Looks right, runs right, isn't right — passes the demo, fails real requirements",
  "Unmaintainable output — no one owns the architecture you have to scale on",
  "The rewrite lands on you — your senior engineers inherit the cleanup",
];

const checkIconStyle: CSSProperties = {
  color: "oklch(68% 0.18 145)",
  fontSize: "14px",
  flexShrink: 0,
  marginTop: "1px",
};

const crossIconStyle: CSSProperties = {
  color: "oklch(52% 0.18 25)",
  fontSize: "14px",
  flexShrink: 0,
  marginTop: "1px",
};

const checkTextStyle: CSSProperties = {
  fontSize: "14px",
  color: "oklch(82% 0.01 300)",
  lineHeight: 1.45,
};

const crossTextStyle: CSSProperties = {
  fontSize: "14px",
  color: "oklch(48% 0.01 300)",
  lineHeight: 1.45,
};

const itemRowStyle: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
};

export function CompetitorSplit() {
  return (
    <div
      style={{
        padding: "80px 24px",
        background: "oklch(12% 0.04 300)",
        borderTop: "1px solid oklch(100% 0 0 / 0.06)",
        borderBottom: "1px solid oklch(100% 0 0 / 0.06)",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "oklch(62% 0.22 350)",
              marginBottom: "14px",
            }}
          >
            The vibe-coding trap
          </div>
          <h2
            style={{
              fontSize: "clamp(24px,3.5vw,38px)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "oklch(96% 0.01 300)",
              margin: "0 0 14px",
              textWrap: "balance",
            }}
          >
            The demo ships in an hour. The vulnerabilities ship with it.
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "oklch(62% 0.02 300)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Base44, Bolt, and Lovable nail the demo — then leak secrets and ship
            vulnerabilities in production. Veracode found 45% of AI-generated
            code carries an OWASP-class flaw. Tylt gives you the same speed,
            with senior review on every line.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "oklch(14% 0.04 300)",
              border: "1px solid oklch(57% 0.31 350 / 0.3)",
              borderRadius: "12px",
              padding: "28px 32px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "22px",
              }}
            >
              <div
                className="tylt-pulse"
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "oklch(57% 0.31 350)",
                  boxShadow: "0 0 8px oklch(57% 0.31 350 / 0.7)",
                  flexShrink: 0,
                }}
              ></div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "oklch(75% 0.22 350)",
                }}
              >
                Tylt agentic workers
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {checkItems.map((item) => (
                <div key={item} style={itemRowStyle}>
                  <span style={checkIconStyle}>✓</span>
                  <span style={checkTextStyle}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              background: "oklch(11% 0.03 300)",
              border: "1px solid oklch(100% 0 0 / 0.08)",
              borderRadius: "12px",
              padding: "28px 32px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "22px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "oklch(35% 0.02 300)",
                  flexShrink: 0,
                }}
              ></div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "oklch(38% 0.02 300)",
                }}
              >
                Your team + Base44 / Bolt
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {crossItems.map((item) => (
                <div key={item} style={itemRowStyle}>
                  <span style={crossIconStyle}>✗</span>
                  <span style={crossTextStyle}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
