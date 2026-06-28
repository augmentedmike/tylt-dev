import { ImageResponse } from "next/og";

// Route segment config — applies site-wide unless a deeper route overrides it.
export const alt = "Tylt — We're the AI experts. Your team doesn't have to be.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand colors as flat hex/rgb — Satori (the OG renderer) doesn't support oklch.
const BG = "#0a0a12";
const PINK = "#ec1e7f";
const WHITE = "#f7f7fa";
const MUTED = "#9a9aa8";

/**
 * Default social-share card for the whole site. Generated at build time with
 * the Next.js `ImageResponse` API (flexbox-only layout, system fonts).
 */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: BG,
        backgroundImage: `radial-gradient(900px 520px at 50% -10%, rgba(236,30,127,0.22), transparent 60%)`,
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Wordmark */}
      <div style={{ display: "flex", alignItems: "center", fontSize: 44 }}>
        <span style={{ color: WHITE, fontWeight: 800, letterSpacing: -1 }}>
          Tylt
        </span>
        <span style={{ color: PINK, fontWeight: 800 }}>.</span>
      </div>

      {/* Headline */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            color: WHITE,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          We&apos;re the AI experts.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            color: WHITE,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Your team doesn&apos;t have to be
          <span style={{ color: PINK }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: MUTED,
            lineHeight: 1.35,
            maxWidth: 920,
          }}
        >
          Design, build &amp; ship your software for 60%+ less than a
          traditional onshore agency.
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: PINK, fontSize: 26, fontWeight: 700 }}>
          tylt.dev
        </span>
        <span style={{ color: MUTED, fontSize: 22, fontWeight: 600 }}>
          American-owned · Agentic dev shop
        </span>
      </div>
    </div>,
    { ...size },
  );
}
