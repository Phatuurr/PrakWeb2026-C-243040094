// src/KartuProfil.jsx
import React from "react";
import BadgeSkill from "./BadgeSkill";

/**
 * Komponen Functional KartuProfil
 * Menerima properti: nama, npm, kelas, status, fotoUrl, dan daftar skills (Tugas 1)
 */
function KartuProfil({ nama, npm, kelas, status, fotoUrl, skills = [] }) {
  return (
    <div
      style={{
        border: "1px solid #D0D7DE",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        maxWidth: "480px",
        marginBottom: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <img
          src={fotoUrl || "https://via.placeholder.com/80"}
          alt={`Foto ${nama}`}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #1B365D",
          }}
        />
        <div>
          <h3 style={{ margin: "0 0 4px 0", color: "#1B365D" }}>{nama}</h3>
          <p style={{ margin: "2px 0", fontSize: "14px", color: "#555" }}>
            NPM: <strong>{npm}</strong>
          </p>
          <p style={{ margin: "2px 0", fontSize: "14px", color: "#555" }}>
            Kelas: {kelas}
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "16px",
          borderTop: "1px solid #E1E4E8",
          paddingTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold",
            backgroundColor: status === "Aktif" ? "#D4EDDA" : "#FFF3CD",
            color: status === "Aktif" ? "#155724" : "#856404",
          }}
        >
          Status Akademik: {status}
        </span>
      </div>

      {/* Bagian Tugas 1: Daftar Keahlian di Bawah Profil */}
      {skills && skills.length > 0 && (
        <div
          style={{
            marginTop: "14px",
            borderTop: "1px solid #E1E4E8",
            paddingTop: "12px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#1B365D",
              marginBottom: "8px",
            }}
          >
            Daftar Keahlian:
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {skills.map((skill, index) => (
              <BadgeSkill
                key={skill.id || index}
                namaSkill={skill.namaSkill}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default KartuProfil;
