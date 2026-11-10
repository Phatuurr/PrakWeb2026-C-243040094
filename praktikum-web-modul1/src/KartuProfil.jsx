// src/KartuProfil.jsx
import React from "react";
import BadgeSkill from "./BadgeSkill";

/**
 * Komponen Functional KartuProfil
 * Mengusung tema minimalis profesional hitam-putih dengan ornamen grid arsitektural (blueprint style),
 * tipografi modern terstruktur, dan pembagian kisi yang rapi.
 */
function KartuProfil({ nama, npm, kelas, status, fotoUrl, skills = [] }) {
  return (
    <div
      style={{
        border: "1.5px solid #111113",
        borderRadius: "20px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
        position: "relative",
        overflow: "hidden",
        marginBottom: "32px",
      }}
    >
      {/* Header Bar Kartu Identitas */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 24px",
          borderBottom: "1px dashed rgba(0, 0, 0, 0.16)",
          backgroundColor: "#FAFAFA",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "11px",
            fontWeight: "700",
            color: "#52525B",
            letterSpacing: "0.5px",
          }}
        >
          [ KARTU IDENTITAS PRAKTIKAN // MODUL 01 ]
        </span>

        {/* Status Akademik Badge */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "#111113",
            color: "#FFFFFF",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "11.5px",
            fontWeight: "700",
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "0.3px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: status === "Aktif" ? "#22C55E" : "#EAB308",
            }}
          />
          <span>Status: {status}</span>
        </span>
      </div>

      {/* Konten Utama Profil: Foto & Informasi Mahasiswa */}
      <div
        style={{
          padding: "24px 28px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "24px",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Kolom Foto Mahasiswa dengan Bingkai Rapi */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "112px",
              height: "112px",
              borderRadius: "14px",
              border: "1.5px solid #111113",
              padding: "2px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
              overflow: "hidden",
            }}
          >
            <img
              src={fotoUrl || "https://via.placeholder.com/112"}
              alt={`Foto ${nama}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                display: "block",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              fontWeight: "700",
              color: "#52525B",
              backgroundColor: "#F4F4F5",
              padding: "2px 8px",
              borderRadius: "6px",
              border: "1px solid #E4E4E7",
            }}
          >
            NPM: {npm}
          </span>
        </div>

        {/* Kolom Detail Identitas & Studi */}
        <div style={{ flex: 1, minWidth: "260px" }}>
          <h3
            style={{
              margin: "0 0 6px 0",
              color: "#111113",
              fontSize: "22px",
              fontWeight: "800",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            {nama}
          </h3>
          <p
            style={{
              margin: "0 0 16px 0",
              fontSize: "13.5px",
              color: "#71717A",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Mahasiswa Teknik Informatika • Universitas Pasundan
          </p>

          {/* Rincian Kisi Meta */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "10px",
            }}
          >
            <div
              style={{
                padding: "8px 12px",
                backgroundColor: "#FBFBFB",
                border: "1px solid #E4E4E7",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "10px",
                  color: "#71717A",
                  marginBottom: "2px",
                }}
              >
                [ KELAS ]
              </div>
              <div
                style={{
                  fontSize: "12.5px",
                  fontWeight: "700",
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#111113",
                }}
              >
                {kelas}
              </div>
            </div>

            <div
              style={{
                padding: "8px 12px",
                backgroundColor: "#FBFBFB",
                border: "1px solid #E4E4E7",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "10px",
                  color: "#71717A",
                  marginBottom: "2px",
                }}
              >
                [ SEMESTER ]
              </div>
              <div
                style={{
                  fontSize: "12.5px",
                  fontWeight: "700",
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#111113",
                }}
              >
                Genap 2025/2026
              </div>
            </div>

            <div
              style={{
                padding: "8px 12px",
                backgroundColor: "#FBFBFB",
                border: "1px solid #E4E4E7",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "10px",
                  color: "#71717A",
                  marginBottom: "2px",
                }}
              >
                [ SPESIALISASI ]
              </div>
              <div
                style={{
                  fontSize: "12.5px",
                  fontWeight: "700",
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#111113",
                }}
              >
                UI/UX &amp; Web Dev
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Tugas 1: Daftar Keahlian di Bawah Profil */}
      {skills && skills.length > 0 && (
        <div
          style={{
            borderTop: "1px dashed rgba(0, 0, 0, 0.16)",
            padding: "18px 24px 22px 24px",
            backgroundColor: "#FAFAFA",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                fontWeight: "700",
                color: "#52525B",
                letterSpacing: "0.5px",
              }}
            >
              [ DAFTAR KEAHLIAN &amp; KOMPETENSI TEKNIS ]
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10.5px",
                color: "#71717A",
              }}
            >
              {skills.length} keahlian
            </span>
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

      {/* Footer Strip Kartu Identitas */}
      <div
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.08)",
          padding: "10px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          fontFamily: "'Space Mono', monospace",
          fontSize: "10.5px",
          color: "#71717A",
        }}
      >
        <span>LABORATORIUM PEMROGRAMAN WEB // IF UNPAS</span>
        <span style={{ color: "#22C55E", fontWeight: "700" }}>● TERVERIFIKASI AKTIF</span>
      </div>
    </div>
  );
}

export default KartuProfil;
