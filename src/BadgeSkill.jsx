// src/BadgeSkill.jsx
import React from "react";

/**
 * Komponen BadgeSkill (Tugas 1: Latihan Mandiri)
 * Menerima props 'namaSkill' dan 'level' (Pemula, Menengah, Mahir).
 * Didesain dengan estetika minimalis hitam-putih & ornamen grid bracket,
 * dengan pewarnaan aksen dinamis sesuai level keahlian.
 */
function BadgeSkill({ namaSkill, level }) {
  // Penentuan gaya aksen warna dinamis berdasarkan level keahlian
  const getBadgeTheme = (lvl) => {
    switch (lvl?.toLowerCase()) {
      case "pemula":
        return {
          bg: "#F0F9FF",
          border: "#BAE6FD",
          text: "#0369A1",
          dot: "#0284C7",
          tagBg: "#E0F2FE",
        };
      case "menengah":
        return {
          bg: "#FFFBEB",
          border: "#FDE68A",
          text: "#92400E",
          dot: "#F59E0B",
          tagBg: "#FEF3C7",
        };
      case "mahir":
        return {
          bg: "#F0FDF4",
          border: "#BBF7D0",
          text: "#166534",
          dot: "#16A34A",
          tagBg: "#DCFCE7",
        };
      default:
        return {
          bg: "#F4F4F5",
          border: "#E4E4E7",
          text: "#27272A",
          dot: "#71717A",
          tagBg: "#E4E4E7",
        };
    }
  };

  const theme = getBadgeTheme(level);

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "5px 12px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
        fontFamily: "'Space Grotesk', sans-serif",
        border: `1px solid ${theme.border}`,
        backgroundColor: theme.bg,
        color: theme.text,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.03)",
        transition: "all 0.2s ease",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: theme.dot,
        }}
      />
      <span style={{ letterSpacing: "-0.2px" }}>{namaSkill}</span>
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "10px",
          fontWeight: "700",
          padding: "2px 6px",
          borderRadius: "10px",
          backgroundColor: theme.tagBg,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {level}
      </span>
    </span>
  );
}

export default BadgeSkill;
