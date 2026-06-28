interface PilotBarProps {
  ctaHref?: string;
}

export function PilotBar({ ctaHref = "mailto:hello@tylt.dev" }: PilotBarProps) {
  return (
    <div
      style={{
        position: "sticky",
        top: "var(--header-h,64px)",
        zIndex: 39,
        background: "oklch(11% 0.05 350)",
        borderBottom: "1px solid oklch(57% 0.31 350 / 0.25)",
        padding: "11px 24px",
        transition: "top 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: "oklch(57% 0.31 350 / 0.15)",
            border: "1px solid oklch(57% 0.31 350 / 0.4)",
            color: "oklch(72% 0.22 350)",
            padding: "3px 9px",
            borderRadius: "5px",
            flexShrink: 0,
          }}
        >
          Pilot
        </span>
        <span
          style={{
            fontSize: "13px",
            color: "oklch(82% 0.01 300)",
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
              background: "oklch(100% 0 0 / 0.08)",
              borderRadius: "3px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "33%",
                height: "100%",
                background: "oklch(57% 0.31 350)",
                borderRadius: "3px",
              }}
            ></div>
          </div>
          <span style={{ fontSize: "11px", color: "oklch(66% 0.02 300)" }}>
            5 / 15 filled
          </span>
        </div>
        <div
          style={{
            width: "1px",
            height: "14px",
            background: "oklch(100% 0 0 / 0.1)",
            flexShrink: 0,
          }}
        ></div>
        <span style={{ fontSize: "13px", color: "oklch(62% 0.01 300)" }}>
          Workers at{" "}
          <strong style={{ color: "oklch(88% 0.01 300)" }}>$12.50/hr</strong> —
          50% off for your first 6 months
        </span>
        <a
          href={ctaHref}
          style={{
            marginLeft: "auto",
            fontSize: "12px",
            fontWeight: 600,
            color: "oklch(70% 0.22 350)",
            whiteSpace: "nowrap",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          Claim a spot →
        </a>
      </div>
    </div>
  );
}
