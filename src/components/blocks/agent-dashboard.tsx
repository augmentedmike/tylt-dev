// Agent workforce dashboard — hero visual
export function AgentDashboard() {
  return (
    <div
      style={{
        position: "relative",
        padding: "0 24px",
        marginTop: "-12px",
        marginBottom: "64px",
        zIndex: 10,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          pointerEvents: "none",
          position: "absolute",
          left: "50%",
          top: "-40px",
          transform: "translateX(-50%)",
          width: "min(700px, 100%)",
          height: "240px",
          background:
            "radial-gradient(ellipse at 50% 0%,oklch(57% 0.31 350 / 0.13),transparent 70%)",
          filter: "blur(36px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "860px",
          margin: "0 auto",
          borderRadius: "14px",
          overflow: "hidden",
          border: "1px solid var(--border)",
          boxShadow:
            "0 28px 80px oklch(0% 0 0 / 0.55),0 0 0 1px oklch(57% 0.31 350 / 0.1)",
          background: "var(--background)",
        }}
      >
        {/* header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "6px 16px",
            padding: "13px 20px",
            background: "var(--secondary)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <div
              className="tylt-pulse"
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--primary)",
                boxShadow: "0 0 6px oklch(57% 0.31 350 / 0.8)",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--foreground)",
                fontFamily: "ui-monospace,monospace",
                letterSpacing: "0.02em",
              }}
            >
              Tylt Workspace · Northwind Customer Portal
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span
              style={{
                fontSize: "11px",
                color: "var(--muted-foreground)",
                fontFamily: "ui-monospace,monospace",
              }}
            >
              2 agents active
            </span>
            <div
              style={{
                width: "1px",
                height: "14px",
                background: "var(--border)",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                color: "oklch(68% 0.16 145)",
                fontFamily: "ui-monospace,monospace",
              }}
            >
              $3,285 saved vs agency
            </span>
          </div>
        </div>

        {/* two-column body — stacks to one column on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px]">
          {/* left: features */}
          <div
            className="min-w-0 border-b border-border md:border-r md:border-b-0"
            style={{ padding: "16px 20px" }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: 600,
                color: "var(--muted-foreground)",
                fontFamily: "ui-monospace,monospace",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              Features shipped
            </div>
            {/* done */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "9px",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: "oklch(68% 0.18 145)",
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-sans-serif,system-ui,sans-serif",
                }}
              >
                User authentication &amp; SSO
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "10px",
                  color: "oklch(66% 0.12 145)",
                  fontFamily: "ui-monospace,monospace",
                  background: "oklch(68% 0.18 145 / 0.1)",
                  padding: "2px 7px",
                  borderRadius: "4px",
                }}
              >
                done
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "9px",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: "oklch(68% 0.18 145)",
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-sans-serif,system-ui,sans-serif",
                }}
              >
                Dashboard layout &amp; navigation
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "10px",
                  color: "oklch(66% 0.12 145)",
                  fontFamily: "ui-monospace,monospace",
                  background: "oklch(68% 0.18 145 / 0.1)",
                  padding: "2px 7px",
                  borderRadius: "4px",
                }}
              >
                done
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "9px",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: "oklch(68% 0.18 145)",
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-sans-serif,system-ui,sans-serif",
                }}
              >
                Customer data table with filters
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "10px",
                  color: "oklch(66% 0.12 145)",
                  fontFamily: "ui-monospace,monospace",
                  background: "oklch(68% 0.18 145 / 0.1)",
                  padding: "2px 7px",
                  borderRadius: "4px",
                }}
              >
                done
              </span>
            </div>
            {/* in progress */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "9px",
              }}
            >
              <div
                className="tylt-pulse"
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: "var(--primary)",
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-sans-serif,system-ui,sans-serif",
                }}
              >
                Email notification system
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "10px",
                  color: "var(--primary)",
                  fontFamily: "ui-monospace,monospace",
                  background: "oklch(57% 0.31 350 / 0.1)",
                  padding: "2px 7px",
                  borderRadius: "4px",
                }}
              >
                building
              </span>
            </div>
            {/* queued */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: "var(--muted)",
                  border: "1px solid var(--border)",
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-sans-serif,system-ui,sans-serif",
                }}
              >
                Analytics &amp; reporting view
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "10px",
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-monospace,monospace",
                  padding: "2px 7px",
                  borderRadius: "4px",
                  border: "1px solid var(--border)",
                }}
              >
                queued
              </span>
            </div>
          </div>

          {/* right: resources */}
          <div className="min-w-0" style={{ padding: "16px 20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-monospace,monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Resources
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-monospace,monospace",
                }}
              >
                Jun 16 – Jun 22
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <div
                  className="tylt-pulse"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: "oklch(65% 0.2 235)",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--muted-foreground)",
                    fontFamily: "ui-monospace,monospace",
                  }}
                >
                  Agent-01
                </span>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-monospace,monospace",
                  fontWeight: 500,
                }}
              >
                34.5 hrs
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <div
                  className="tylt-pulse"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: "oklch(65% 0.22 350)",
                    animationDelay: "0.5s",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--muted-foreground)",
                    fontFamily: "ui-monospace,monospace",
                  }}
                >
                  Agent-02
                </span>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-monospace,monospace",
                  fontWeight: 500,
                }}
              >
                31.2 hrs
              </span>
            </div>
            <div
              style={{
                height: "1px",
                background: "var(--border)",
                marginBottom: "14px",
              }}
            />
            <div style={{ marginBottom: "4px" }}>
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-monospace,monospace",
                }}
              >
                65.7 hrs total
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  fontFamily: "ui-monospace,monospace",
                  marginTop: "2px",
                }}
              >
                $1,643
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-monospace,monospace",
                }}
              >
                at $25/hr
              </div>
            </div>
            <div
              style={{
                height: "1px",
                background: "var(--border)",
                margin: "12px 0 10px",
              }}
            />
            <div>
              <div
                style={{
                  fontSize: "10px",
                  color: "var(--muted-foreground)",
                  fontFamily: "ui-monospace,monospace",
                  textDecoration: "line-through",
                }}
              >
                $4,928 at $75/hr agency
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "oklch(68% 0.16 145)",
                  fontFamily: "ui-monospace,monospace",
                  marginTop: "3px",
                }}
              >
                You saved $3,285 (67%)
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            padding: "11px 20px",
            background: "var(--card)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              color: "var(--muted-foreground)",
              fontFamily: "ui-monospace,monospace",
              flex: 1,
            }}
          >
            last commit 6 min ago · 0 bugs in production
          </span>
          <button
            style={{
              fontSize: "11px",
              padding: "5px 14px",
              borderRadius: "7px",
              border: "1px solid oklch(57% 0.31 350 / 0.4)",
              background: "oklch(57% 0.31 350 / 0.08)",
              color: "var(--primary)",
              fontFamily: "ui-monospace,monospace",
              cursor: "default",
              letterSpacing: "0.02em",
            }}
          >
            + Scale resources
          </button>
        </div>
      </div>
    </div>
  );
}
