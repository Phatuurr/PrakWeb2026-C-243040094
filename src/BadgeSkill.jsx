// src/BadgeSkill.jsx
import React from "react";

/**
 * Komponen BadgeSkill (Tugas 1: Latihan Mandiri)
 * Menerima props 'namaSkill' dan 'level' (Pemula, Menengah, Mahir)
 * Menampilkan badge keahlian dengan pewarnaan dinamis berdasarkan level.
 */
function BadgeSkill({ namaSkill, level }) {
  // Menentukan warna badge secara dinamis berdasarkan level keahlian
  const getBadgeStyle = (lvl) => {
    switch (lvl?.toLowerCase()) {
      case "pemula":
        return {
          backgroundColor: "#E3F2FD",
          color: "#0D47A1",
          borderColor: "#BBDEFB",
        };
      case "menengah":
        return {
          backgroundColor: "#FFF3CD",
          color: "#856404",
          borderColor: "#FFEEBA",
        };
      case "mahir":
        return {
          backgroundColor: "#D4EDDA",
          color: "#155724",
          borderColor: "#C3E6CB",
        };
      default:
        return {
          backgroundColor: "#E2E3E5",
          color: "#383D41",
          borderColor: "#D6D8DB",
        };
    }
  };

  const badgeTheme = getBadgeStyle(level);

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 10px",
        borderRadius: "16px",
        fontSize: "12px",
        fontWeight: "600",
        border: `1px solid ${badgeTheme.borderColor}`,
        backgroundColor: badgeTheme.backgroundColor,
        color: badgeTheme.color,
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <span>{namaSkill}</span>
      <span
        style={{
          fontSize: "10px",
          padding: "1px 6px",
          borderRadius: "8px",
          backgroundColor: "rgba(0, 0, 0, 0.08)",
          textTransform: "uppercase",
          letterSpacing: "0.4px",
          fontWeight: "700",
        }}
      >
        {level}
      </span>
    </span>
  );
}

export default BadgeSkill;
