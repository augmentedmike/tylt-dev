"use client";

import { useState } from "react";

export interface PricingCalculatorProps {
  ctaHref?: string;
}

const fmt = (n: number): string => "$" + n.toLocaleString();

export function PricingCalculator({
  ctaHref = "mailto:hello@tylt.dev",
}: PricingCalculatorProps) {
  const [workers, setWorkers] = useState(2);
  const [util, setUtil] = useState(80);

  const hrs = Math.round(workers * (util / 100) * 160);
  const workerCost = hrs * 25;
  const total = 1000 + workerCost;
  const agency = hrs * 75;
  const savings = agency - total;
  const pct = agency > 0 ? Math.round((savings / agency) * 100) : 0;

  const calcDecWorkers = () => setWorkers((w) => Math.max(1, w - 1));
  const calcIncWorkers = () => setWorkers((w) => Math.min(8, w + 1));

  return (
    <section id="pricing" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "oklch(66% 0.31 350)",
              marginBottom: "14px",
            }}
          >
            Pricing
          </div>
          <h2
            style={{
              fontSize: "clamp(26px,4vw,42px)",
              fontWeight: 700,
              color: "oklch(96% 0.01 300)",
              margin: "0 0 14px",
              lineHeight: 1.15,
            }}
          >
            Simple, transparent pricing
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "oklch(60% 0.02 300)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            One flat platform fee plus hourly worker time. No retainers, no
            surprise invoices, no estimates that balloon.
          </p>
        </div>

        {/* two cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "28px",
          }}
        >
          {/* platform fee */}
          <div
            style={{
              background: "oklch(14% 0.04 300)",
              border: "1px solid oklch(100% 0 0 / 0.1)",
              borderRadius: "16px",
              padding: "36px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "oklch(66% 0.02 300)",
                marginBottom: "20px",
              }}
            >
              Platform fee
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "6px",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "50px",
                  fontWeight: 700,
                  color: "oklch(96% 0.01 300)",
                  lineHeight: 1,
                }}
              >
                $1,000
              </span>
              <span style={{ fontSize: "15px", color: "oklch(66% 0.02 300)" }}>
                / month
              </span>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "oklch(66% 0.02 300)",
                margin: "0 0 28px",
                lineHeight: 1.55,
              }}
            >
              The foundation of every engagement — covers senior oversight,
              delivery management, and your workspace.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "11px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "oklch(57% 0.31 350)",
                    flexShrink: 0,
                  }}
                ></div>
                <span
                  style={{ fontSize: "14px", color: "oklch(72% 0.01 300)" }}
                >
                  Senior product manager oversight
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "oklch(57% 0.31 350)",
                    flexShrink: 0,
                  }}
                ></div>
                <span
                  style={{ fontSize: "14px", color: "oklch(72% 0.01 300)" }}
                >
                  Product designer access
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "oklch(57% 0.31 350)",
                    flexShrink: 0,
                  }}
                ></div>
                <span
                  style={{ fontSize: "14px", color: "oklch(72% 0.01 300)" }}
                >
                  Workspace &amp; tooling
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "oklch(57% 0.31 350)",
                    flexShrink: 0,
                  }}
                ></div>
                <span
                  style={{ fontSize: "14px", color: "oklch(72% 0.01 300)" }}
                >
                  Delivery coordination &amp; roadmap
                </span>
              </div>
            </div>
          </div>

          {/* worker hours */}
          <div
            style={{
              background: "oklch(14% 0.04 300)",
              border: "1px solid oklch(57% 0.31 350 / 0.35)",
              borderRadius: "16px",
              padding: "36px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "oklch(66% 0.31 350)",
                marginBottom: "20px",
              }}
            >
              + Worker hours
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "6px",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "50px",
                  fontWeight: 700,
                  color: "oklch(96% 0.01 300)",
                  lineHeight: 1,
                }}
              >
                $25
              </span>
              <span style={{ fontSize: "15px", color: "oklch(66% 0.02 300)" }}>
                / hr · per worker
              </span>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "oklch(66% 0.02 300)",
                margin: "0 0 28px",
                lineHeight: 1.55,
              }}
            >
              Workers are billed by the hour. Each can run up to 80% of monthly
              hours, Sun–Sat. You pay only for hours worked.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "11px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "oklch(57% 0.31 350)",
                    flexShrink: 0,
                  }}
                ></div>
                <span
                  style={{ fontSize: "14px", color: "oklch(72% 0.01 300)" }}
                >
                  Up to 80% monthly capacity, Sun–Sat
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "oklch(57% 0.31 350)",
                    flexShrink: 0,
                  }}
                ></div>
                <span
                  style={{ fontSize: "14px", color: "oklch(72% 0.01 300)" }}
                >
                  Pay only for hours actually worked
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "oklch(57% 0.31 350)",
                    flexShrink: 0,
                  }}
                ></div>
                <span
                  style={{ fontSize: "14px", color: "oklch(72% 0.01 300)" }}
                >
                  Scale workers up or down monthly
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "oklch(57% 0.31 350)",
                    flexShrink: 0,
                  }}
                ></div>
                <span
                  style={{ fontSize: "14px", color: "oklch(72% 0.01 300)" }}
                >
                  No minimums, no lock-in
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* pilot partner callout */}
        <div
          style={{
            background: "oklch(11% 0.05 350 / 0.5)",
            border: "1px solid oklch(57% 0.31 350 / 0.3)",
            borderRadius: "12px",
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <div style={{ flex: 1, minWidth: "260px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "oklch(72% 0.22 350)",
                  background: "oklch(57% 0.31 350 / 0.12)",
                  border: "1px solid oklch(57% 0.31 350 / 0.3)",
                  padding: "2px 8px",
                  borderRadius: "4px",
                }}
              >
                Pilot pricing
              </span>
              <span style={{ fontSize: "12px", color: "oklch(66% 0.02 300)" }}>
                10 spots left · 6-month program
              </span>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "oklch(68% 0.01 300)",
                margin: 0,
                lineHeight: 1.55,
              }}
            >
              Join as a pilot partner and we cut the worker rate in half for
              your first 6 months. We&apos;re onboarding 15 companies to
              validate the model with real production workloads — 5 spots are
              already filled.
            </p>
          </div>
          <div style={{ textAlign: "center", flexShrink: 0 }}>
            <div
              style={{
                fontSize: "12px",
                color: "oklch(66% 0.02 300)",
                textDecoration: "line-through",
                marginBottom: "2px",
              }}
            >
              $25/hr
            </div>
            <div
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "oklch(72% 0.22 350)",
                lineHeight: 1,
              }}
            >
              $12.50
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "oklch(66% 0.02 300)",
                }}
              >
                /hr
              </span>
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "oklch(66% 0.02 300)",
                marginTop: "2px",
              }}
            >
              for 6 months
            </div>
          </div>
          <a
            href={ctaHref}
            style={{
              flexShrink: 0,
              fontSize: "13px",
              fontWeight: 600,
              padding: "10px 20px",
              borderRadius: "8px",
              background: "oklch(57% 0.31 350 / 0.12)",
              border: "1px solid oklch(57% 0.31 350 / 0.4)",
              color: "oklch(72% 0.22 350)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Claim a pilot spot →
          </a>
        </div>

        {/* live calculator */}
        <div
          style={{
            background: "oklch(12% 0.04 300)",
            border: "1px solid oklch(100% 0 0 / 0.08)",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          {/* controls */}
          <div
            style={{
              padding: "24px 28px",
              borderBottom: "1px solid oklch(100% 0 0 / 0.07)",
              display: "flex",
              alignItems: "flex-end",
              gap: "36px",
              flexWrap: "wrap",
            }}
          >
            {/* workers stepper */}
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "oklch(66% 0.02 300)",
                  marginBottom: "10px",
                }}
              >
                Workers
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid oklch(100% 0 0 / 0.12)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={calcDecWorkers}
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "transparent",
                    border: "none",
                    color: "oklch(66% 0.02 300)",
                    fontSize: "20px",
                    cursor: "pointer",
                    lineHeight: 1,
                  }}
                >
                  −
                </button>
                <span
                  style={{
                    minWidth: "38px",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "oklch(92% 0.01 300)",
                    borderLeft: "1px solid oklch(100% 0 0 / 0.08)",
                    borderRight: "1px solid oklch(100% 0 0 / 0.08)",
                    padding: "8px 0",
                  }}
                >
                  {workers}
                </span>
                <button
                  onClick={calcIncWorkers}
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "transparent",
                    border: "none",
                    color: "oklch(66% 0.02 300)",
                    fontSize: "20px",
                    cursor: "pointer",
                    lineHeight: 1,
                  }}
                >
                  +
                </button>
              </div>
            </div>
            {/* utilization pills */}
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "oklch(66% 0.02 300)",
                  marginBottom: "10px",
                }}
              >
                Utilization
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={() => setUtil(25)}
                  data-util-active={util === 25 ? "true" : "false"}
                  style={{
                    fontSize: "13px",
                    padding: "7px 16px",
                    borderRadius: "7px",
                    border: "1px solid oklch(100% 0 0 / 0.12)",
                    background: "transparent",
                    color: "oklch(66% 0.02 300)",
                    cursor: "pointer",
                  }}
                >
                  25%
                </button>
                <button
                  onClick={() => setUtil(50)}
                  data-util-active={util === 50 ? "true" : "false"}
                  style={{
                    fontSize: "13px",
                    padding: "7px 16px",
                    borderRadius: "7px",
                    border: "1px solid oklch(100% 0 0 / 0.12)",
                    background: "transparent",
                    color: "oklch(66% 0.02 300)",
                    cursor: "pointer",
                  }}
                >
                  50%
                </button>
                <button
                  onClick={() => setUtil(80)}
                  data-util-active={util === 80 ? "true" : "false"}
                  style={{
                    fontSize: "13px",
                    padding: "7px 16px",
                    borderRadius: "7px",
                    border: "1px solid oklch(100% 0 0 / 0.12)",
                    background: "transparent",
                    color: "oklch(66% 0.02 300)",
                    cursor: "pointer",
                  }}
                >
                  80%
                </button>
              </div>
            </div>
            {/* hrs computed */}
            <div style={{ marginLeft: "auto", textAlign: "right" }}>
              <div
                style={{
                  fontSize: "11px",
                  color: "oklch(66% 0.02 300)",
                  marginBottom: "4px",
                }}
              >
                Worker hrs / mo
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "oklch(88% 0.01 300)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {hrs} hrs
              </div>
            </div>
          </div>

          {/* breakdown row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              borderBottom: "1px solid oklch(100% 0 0 / 0.07)",
            }}
          >
            <div
              style={{
                padding: "20px 28px",
                borderRight: "1px solid oklch(100% 0 0 / 0.07)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "oklch(66% 0.02 300)",
                  marginBottom: "5px",
                }}
              >
                Worker cost
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "oklch(80% 0.01 300)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {fmt(workerCost)}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "oklch(66% 0.02 300)",
                  marginTop: "3px",
                }}
              >
                {hrs} hrs × $25/hr
              </div>
            </div>
            <div
              style={{
                padding: "20px 28px",
                borderRight: "1px solid oklch(100% 0 0 / 0.07)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "oklch(66% 0.02 300)",
                  marginBottom: "5px",
                }}
              >
                Platform fee
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "oklch(80% 0.01 300)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                $1,000
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "oklch(66% 0.02 300)",
                  marginTop: "3px",
                }}
              >
                flat / month
              </div>
            </div>
            <div style={{ padding: "20px 28px" }}>
              <div
                style={{
                  fontSize: "11px",
                  color: "oklch(66% 0.31 350)",
                  marginBottom: "5px",
                }}
              >
                Total / mo
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "oklch(96% 0.01 300)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {fmt(total)}
              </div>
            </div>
          </div>

          {/* savings row */}
          <div
            style={{
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              gap: "28px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "11px",
                  color: "oklch(66% 0.02 300)",
                  marginBottom: "4px",
                }}
              >
                Agency equiv. ({hrs} hrs × $75/hr)
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: "oklch(66% 0.02 300)",
                  textDecoration: "line-through",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {fmt(agency)}
              </div>
            </div>
            <div
              style={{
                width: "1px",
                height: "36px",
                background: "oklch(100% 0 0 / 0.07)",
                flexShrink: 0,
              }}
            ></div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  color: "oklch(60% 0.14 145)",
                  marginBottom: "4px",
                }}
              >
                You save / mo
              </div>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "oklch(72% 0.18 145)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {fmt(savings)}
              </div>
            </div>
            <div
              style={{
                marginLeft: "auto",
                background: "oklch(68% 0.16 145 / 0.08)",
                border: "1px solid oklch(68% 0.16 145 / 0.2)",
                borderRadius: "12px",
                padding: "12px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "oklch(70% 0.18 145)",
                  lineHeight: 1,
                }}
              >
                {pct}%
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "oklch(66% 0.12 145)",
                  marginTop: "3px",
                }}
              >
                savings vs agency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
