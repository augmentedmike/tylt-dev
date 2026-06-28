interface PilotBarProps {
  ctaHref?: string;
}

const badgeStyle: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  background: "oklch(57% 0.31 350 / 0.15)",
  border: "1px solid oklch(57% 0.31 350 / 0.4)",
  color: "var(--primary)",
  padding: "3px 9px",
  borderRadius: "5px",
  flexShrink: 0,
};

const claimStyle: React.CSSProperties = {
  marginLeft: "auto",
  fontSize: "12px",
  fontWeight: 600,
  color: "var(--primary)",
  whiteSpace: "nowrap",
  textDecoration: "none",
  flexShrink: 0,
};

export function PilotBar({ ctaHref = "mailto:hello@tylt.dev" }: PilotBarProps) {
  return (
    <div
      className="pilot-bar"
      style={{
        position: "sticky",
        top: "var(--header-h,64px)",
        zIndex: 39,
        background: "var(--background)",
        borderBottom: "1px solid oklch(57% 0.31 350 / 0.25)",
        padding: "11px 24px",
        transition: "top 0.25s ease, padding 0.2s ease",
      }}
    >
      {/* Full layout — desktop always, mobile until scrolled. */}
      <div
        className="pilot-full"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <span style={badgeStyle}>Pilot</span>
        <span
          style={{
            fontSize: "13px",
            color: "var(--foreground)",
            fontWeight: 500,
            flexShrink: 0,
          }}
        >
          10 of 15 pilot partner spots remaining
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "72px",
              height: "4px",
              background: "var(--border)",
              borderRadius: "3px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "33%",
                height: "100%",
                background: "var(--primary)",
                borderRadius: "3px",
              }}
            ></div>
          </div>
          <span style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>
            5 / 15 filled
          </span>
        </div>
        <div
          style={{
            width: "1px",
            height: "14px",
            background: "var(--border)",
            flexShrink: 0,
          }}
        ></div>
        <span style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
          Workers at{" "}
          <strong style={{ color: "var(--foreground)" }}>$12.50/hr</strong> —
          50% off for your first 6 months
        </span>
        <a href={ctaHref} style={claimStyle}>
          Claim a spot →
        </a>
      </div>

      {/* Compact single-line layout — mobile, once scrolled. */}
      <div
        className="pilot-compact"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span style={badgeStyle}>Pilot</span>
        <span
          style={{
            fontSize: "12px",
            color: "var(--foreground)",
            fontWeight: 500,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minWidth: 0,
          }}
        >
          10 of 15 spots left
        </span>
        <a href={ctaHref} style={claimStyle}>
          Claim a spot →
        </a>
      </div>
    </div>
  );
}
