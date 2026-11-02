// src/ItemMatkul.jsx
import React from "react";

/**
 * Komponen ItemMatkul (Tugas 2: Pemisahan Modul Komponen)
 * Menerima props rincian mata kuliah praktikum: kode, nama, sks, hari.
 */
function ItemMatkul({ kode, nama, sks, hari }) {
  return (
    <div
      style={{
        padding: "14px 18px",
        backgroundColor: "#F8F9FA",
        borderLeft: "5px solid #1B365D",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div>
        <span style={{ fontWeight: "bold", color: "#1B365D" }}>{kode}</span> -{" "}
        {nama}
        <div
          style={{
            fontSize: "12px",
            color: "#777",
            marginTop: "4px",
          }}
        >
          Jadwal Sesi: {hari}
        </div>
      </div>
      <span
        style={{
          backgroundColor: "#E1E4E8",
          padding: "4px 10px",
          borderRadius: "12px",
          fontSize: "13px",
          fontWeight: "600",
          color: "#2C3E50",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;
