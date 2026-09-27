import { ImageResponse } from "next/og";

export const alt = "Peccole Ranch Homes — Las Vegas real estate in Summerlin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
          Peccole Ranch Homes
        </div>
        <div style={{ marginTop: 24, fontSize: 32, color: "#cbd5e1", maxWidth: 800 }}>
          Homes for sale in Summerlin, Las Vegas
        </div>
        <div style={{ marginTop: 48, fontSize: 24, color: "#94a3b8" }}>
          Dr. Jan Duffy · Berkshire Hathaway HomeServices Nevada Properties
        </div>
      </div>
    ),
    { ...size }
  );
}
