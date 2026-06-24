import { ImageResponse } from "next/og";

// Branded social-share image, generated at build time. Edit copy/colors here.
export const runtime = "nodejs";
export const alt =
  "Harborline Systems — digital operations for service businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(160deg, #20242c 0%, #181b21 60%, #14161b 100%)",
          color: "#ECE7DD",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 22 22" fill="none">
              <line x1="5" y1="7" x2="17" y2="7" stroke="#ECE7DD" strokeOpacity="0.5" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="5" y1="11" x2="17" y2="11" stroke="#D2A85B" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="5" y1="15" x2="13" y2="15" stroke="#ECE7DD" strokeOpacity="0.5" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="17" cy="11" r="2" fill="#D2A85B" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
              Harborline
            </span>
            <span
              style={{
                fontSize: 15,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#9AA0AB",
              }}
            >
              Systems
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            Less digital clutter. More time to run your business.
          </span>
          <span style={{ fontSize: 26, color: "#B9BEC7", maxWidth: 820 }}>
            The quiet operating layer behind local service businesses — websites,
            leads, CRM, data, reporting, and automation.
          </span>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#D2A85B",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#D2A85B" }} />
          Digital operations agency · Greater Philadelphia
        </div>
      </div>
    ),
    { ...size }
  );
}
