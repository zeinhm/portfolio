import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { SITE } from "@/lib/data";

// Rendered at build/request time and used as the link-share thumbnail
// for Open Graph (Facebook, LinkedIn, Slack, iMessage, …).
export const runtime = "nodejs";
export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const avatar = await readFile(
    join(process.cwd(), "public/assets/zein.png")
  );
  const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0B1322",
          color: "#E7EAF0",
          fontFamily: "monospace",
          padding: "80px",
          borderBottom: "16px solid #F5A524",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarSrc}
            alt=""
            width={240}
            height={240}
            style={{
              width: 240,
              height: 240,
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid #1E2940",
              flexShrink: 0,
            }}
          />
          {/* flex:1 + minWidth:0 bounds the column so the name wraps
              instead of overflowing the card. */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontSize: 32,
                color: "#93A0B5",
                letterSpacing: "8px",
                textTransform: "uppercase",
              }}
            >
              Hey, I&apos;m
            </div>
            <div
              style={{
                fontSize: 62,
                fontWeight: 800,
                color: "#F5A524",
                lineHeight: 1.05,
                marginTop: 8,
              }}
            >
              {SITE.name}
            </div>
            <div style={{ fontSize: 38, color: "#E7EAF0", marginTop: 16 }}>
              {SITE.role}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 64,
            fontSize: 30,
            color: "#93A0B5",
          }}
        >
          <span>React · Next.js · TypeScript</span>
          <span style={{ color: "#F5A524" }}>zeinhm.dev</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
