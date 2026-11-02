// src/KartuProyek.jsx
import React from "react";

/**
 * Komponen KartuProyek (Tugas 3: Showcase Portofolio Mini)
 * Menampilkan: Judul Proyek, Ringkasan Deskripsi, Tagar Teknologi, dan Tombol Tautan Repositori GitHub.
 */
function KartuProyek({ judul, deskripsi, teknologi = [], linkGithub }) {
  return (
    <div
      style={{
        border: "1px solid #D0D7DE",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
    >
      <div>
        <h3
          style={{
            margin: "0 0 8px 0",
            color: "#1B365D",
            fontSize: "17px",
            lineHeight: "1.4",
          }}
        >
          {judul}
        </h3>
        <p
          style={{
            color: "#555",
            fontSize: "13.5px",
            lineHeight: "1.5",
            margin: "0 0 16px 0",
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
            marginBottom: "20px",
          }}
        >
          {teknologi.map((tech, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "#F1F5F9",
                color: "#2C3E50",
                fontSize: "11px",
                fontWeight: "600",
                padding: "3px 8px",
                borderRadius: "6px",
                border: "1px solid #E2E8F0",
              }}
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>

      {/* Tombol Tautan Repositori GitHub */}
      <a
        href={linkGithub}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          backgroundColor: "#1B365D",
          color: "#FFFFFF",
          padding: "9px 16px",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "13px",
          fontWeight: "600",
          alignSelf: "flex-start",
          transition: "background-color 0.2s ease",
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
        <span>Lihat Repositori GitHub</span>
      </a>
    </div>
  );
}

export default KartuProyek;
