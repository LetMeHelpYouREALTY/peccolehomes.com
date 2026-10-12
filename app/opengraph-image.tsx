import { ImageResponse } from "next/og";

export const alt = "Peccole Ranch homes for sale in west Las Vegas";
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
          justifyContent: "flex-end",
          padding: "72px",
          background: "#12100E",
          color: "#F6F1E8",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, color: "#D8C4A0" }}>
          WEST LAS VEGAS · ZIP 89117
        </div>
        <div style={{ marginTop: 24, fontSize: 68, lineHeight: 1.05, maxWidth: 900 }}>
          Peccole Ranch homes for sale
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#D2C8BA" }}>
          Dr. Jan Duffy, REALTOR® · (702) 500-0810
        </div>
      </div>
    ),
    { ...size },
  );
}
