import { ImageResponse } from "next/og";

// Browser-tab favicon: amber "ZM" wordmark on the dark page background.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1322",
          color: "#F5A524",
          fontSize: 17,
          fontWeight: 800,
          letterSpacing: "-1px",
          fontFamily: "monospace",
        }}
      >
        ZM
      </div>
    ),
    { ...size }
  );
}
