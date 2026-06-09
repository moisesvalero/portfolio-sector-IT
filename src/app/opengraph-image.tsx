import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#000000",
        color: "#ffffff",
        display: "flex",
        fontFamily: "Arial, Helvetica, sans-serif",
        height: "100%",
        justifyContent: "center",
        padding: "80px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <div
          style={{
            color: "#a1a1aa",
            fontSize: "28px",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Soporte IT / Helpdesk
        </div>
        <div
          style={{
            fontSize: "86px",
            fontWeight: 800,
            lineHeight: 0.95,
            maxWidth: "900px",
          }}
        >
          Moises Valero Sanchez
        </div>
        <div
          style={{
            color: "#a1a1aa",
            fontSize: "34px",
            lineHeight: 1.3,
            maxWidth: "820px",
          }}
        >
          Tecnico IT Nivel 1 con foco en usuarios, Microsoft 365, Windows y
          documentacion de incidencias.
        </div>
      </div>
    </div>,
    size,
  );
}
