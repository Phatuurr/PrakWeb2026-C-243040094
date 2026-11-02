// src/ItemMatkul.jsx
import React from "react";

/**
 * Komponen ItemMatkul (Tugas 2: Pemisahan Modul Komponen)
 * Menampilkan item praktikum dengan tema minimalis hitam-putih dan ornamen grid blueprint.
 */
function ItemMatkul({ kode, nama, sks, hari }) {
  return (
    <div
      style={{
        padding: "16px 22px",
        backgroundColor: "#FFFFFF",
        border: "1.5px solid #111113",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.03)",
        position: "relative",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "12px",
              fontWeight: "700",
              backgroundColor: "#111113",
              color: "#FFFFFF",
              padding: "2px 8px",
              borderRadius: "4px",
              letterSpacing: "0.5px",
            }}
          >
            {kode}
          </span>
          <span
            style={{
              fontWeight: "700",
              color: "#111113",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "15px",
            }}
          >
            {nama}
          </span>
        </div>
        <div
          style={{
            fontSize: "12px",
            fontFamily: "'Space Mono', monospace",
            color: "#71717A",
            marginTop: "6px",
          }}
        >
          [jadwal sesi: {hari.toLowerCase()}]
        </div>
      </div>

      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          border: "1.5px solid #111113",
          padding: "5px 12px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "700",
          color: "#111113",
          backgroundColor: "#FBFBFB",
          letterSpacing: "0.5px",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;
