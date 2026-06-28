interface AgenticHeroProps {
  ctaHref?: string;
}

export function AgenticHero({
  ctaHref = "mailto:hello@tylt.dev",
}: AgenticHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        padding: "90px 24px 80px",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* glow */}
      <div
        aria-hidden="true"
        style={{
          pointerEvents: "none",
          position: "absolute",
          left: "50%",
          top: "-60px",
          transform: "translateX(-50%)",
          width: "900px",
          height: "560px",
          background:
            "radial-gradient(ellipse at 50% 20%,oklch(50% 0.28 350 / 0.22),transparent 62%)",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        {/* badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid oklch(100% 0 0 / 0.15)",
            background: "oklch(100% 0 0 / 0.05)",
            borderRadius: "100px",
            padding: "7px 18px",
            marginBottom: "36px",
          }}
        >
          <div
            className="tylt-pulse"
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "oklch(62% 0.3 350)",
              flexShrink: 0,
            }}
          ></div>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "oklch(70% 0.01 300)",
            }}
          >
            American-owned/operated · Agentic dev shop
          </span>
        </div>
        {/* H1 — two visual lines in a single heading, both white, pink period */}
        <h1
          style={{
            fontSize: "clamp(40px,6.5vw,82px)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            color: "oklch(97% 0 0)",
            margin: "0 0 36px",
          }}
        >
          <span style={{ display: "block", marginBottom: "4px" }}>
            We&apos;re the AI experts.
          </span>
          <span style={{ display: "block" }}>
            Your team doesn&apos;t have to be
            <span style={{ color: "oklch(62% 0.3 350)" }}>.</span>
          </span>
        </h1>
        {/* bold subheading */}
        <p
          style={{
            fontSize: "clamp(20px,2.6vw,30px)",
            fontWeight: 700,
            color: "oklch(92% 0.01 300)",
            lineHeight: 1.3,
            maxWidth: "720px",
            margin: "0 auto 20px",
          }}
        >
          Build, design &amp; ship for{" "}
          <span style={{ color: "oklch(62% 0.3 350)" }}>60%+ less</span> than a
          traditional agency.
        </p>
        {/* body */}
        <p
          style={{
            fontSize: "15px",
            color: "oklch(66% 0.02 300)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 40px",
          }}
        >
          Tylt runs in-house agentic digital workers, steered by senior product
          leads, to design, build, and ship your software.{" "}
          <strong style={{ color: "oklch(88% 0.01 300)", fontWeight: 600 }}>
            You get the output — we handle the AI.
          </strong>
        </p>
        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "52px",
          }}
        >
          <a
            href={ctaHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "oklch(53% 0.31 350)",
              color: "oklch(100% 0 0)",
              fontSize: "16px",
              fontWeight: 700,
              padding: "16px 36px",
              borderRadius: "10px",
              textDecoration: "none",
              boxShadow: "0 0 32px oklch(57% 0.31 350 / 0.35)",
            }}
          >
            Book a call
          </a>
          <a
            href="#how-it-works"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "oklch(100% 0 0 / 0.05)",
              color: "oklch(78% 0.01 300)",
              fontSize: "16px",
              fontWeight: 600,
              padding: "16px 32px",
              borderRadius: "10px",
              textDecoration: "none",
              border: "1px solid oklch(100% 0 0 / 0.14)",
            }}
          >
            See how it works →
          </a>
        </div>
        {/* highlights */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <span style={{ color: "oklch(62% 0.3 350)", fontSize: "13px" }}>
              ✓
            </span>
            <span style={{ fontSize: "13px", color: "oklch(66% 0.02 300)" }}>
              Senior oversight on every project
            </span>
          </div>
          <div
            style={{
              width: "1px",
              height: "13px",
              background: "oklch(100% 0 0 / 0.1)",
            }}
          ></div>
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <span style={{ color: "oklch(62% 0.3 350)", fontSize: "13px" }}>
              ✓
            </span>
            <span
              style={{
                fontSize: "13px",
                color: "oklch(72% 0.01 300)",
                fontWeight: 600,
              }}
            >
              You own all the code &amp; IP
            </span>
          </div>
          <div
            style={{
              width: "1px",
              height: "13px",
              background: "oklch(100% 0 0 / 0.1)",
            }}
          ></div>
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <span style={{ color: "oklch(62% 0.3 350)", fontSize: "13px" }}>
              ✓
            </span>
            <span style={{ fontSize: "13px", color: "oklch(66% 0.02 300)" }}>
              Ship in days, not quarters
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
