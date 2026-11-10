// src/KartuProyek.jsx
import React from "react";

/**
 * Komponen KartuProyek (Tugas 3: Showcase Portofolio Mini)
 * Menampilkan rincian proyek dengan tema arsitektural minimalis hitam-putih,
 * ornamen garis putus-putus, dan tombol pill GitHub.
 */
function KartuProyek({ judul, deskripsi, teknologi = [], linkGithub, index = 1 }) {
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <div
      style={{
        border: "1.5px solid #111113",
        borderRadius: "24px",
        padding: "24px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <div>
        {/* Header Kartu Proyek: Ornamen Grid Label */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "12px",
            marginBottom: "14px",
            borderBottom: "1px dashed rgba(0, 0, 0, 0.15)",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              fontWeight: "700",
              color: "#71717A",
              letterSpacing: "0.5px",
            }}
          >
            [{formattedIndex} // PROJECT]
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              color: "#A1A1AA",
            }}
          >
            ● PUBLIC REPO
          </span>
        </div>

        {/* Judul Proyek */}
        <h3
          style={{
            margin: "0 0 10px 0",
            color: "#111113",
            fontSize: "18px",
            fontWeight: "700",
            fontFamily: "'Space Grotesk', sans-serif",
            lineHeight: "1.35",
            letterSpacing: "-0.4px",
          }}
        >
          {judul}
        </h3>

        {/* Deskripsi Proyek */}
        <p
          style={{
            color: "#52525B",
            fontSize: "13.5px",
            lineHeight: "1.6",
            margin: "0 0 18px 0",
          }}
        >
          {deskripsi}
        </p>

        {/* Tagar Teknologi */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "24px",
          }}
        >
          {teknologi.map((tech, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: "#F4F4F5",
                color: "#18181B",
                fontSize: "11px",
                fontWeight: "600",
                fontFamily: "'Space Mono', monospace",
                padding: "3px 9px",
                borderRadius: "14px",
                border: "1px solid #E4E4E7",
                letterSpacing: "-0.2px",
              }}
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>

      {/* Tombol Tautan Repositori GitHub (Pill Button Minimalis) */}
      <div style={{ paddingTop: "12px", borderTop: "1px dashed rgba(0, 0, 0, 0.12)" }}>
        <a
          href={linkGithub}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#111113",
            color: "#FFFFFF",
            padding: "9px 18px",
            borderRadius: "30px",
            textDecoration: "none",
            fontSize: "12.5px",
            fontWeight: "700",
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "0.2px",
            transition: "all 0.2s ease",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
          }}
        >
          <svg
            height="15"
            width="15"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <span>buka repositori</span>
          <span style={{ fontSize: "14px", lineHeight: "1" }}>↗</span>
        </a>
      </div>
    </div>
  );
}

export default KartuProyek;
