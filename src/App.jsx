// src/App.jsx
import React from "react";
import KartuProfil from "./KartuProfil";
import ItemMatkul from "./ItemMatkul";
import KartuProyek from "./KartuProyek";
import fotoSaya from "./assets/foto.png";

function App() {
  // Data keahlian praktikan (Tugas 1: Latihan Mandiri)
  const daftarSkill = [
    { id: 1, namaSkill: "HTML5 & CSS3", level: "Mahir" },
    { id: 2, namaSkill: "UI/UX & Figma", level: "Mahir" },
    { id: 3, namaSkill: "JavaScript (ES6+)", level: "Pemula" },
    { id: 4, namaSkill: "React JS", level: "Pemula" },
    { id: 5, namaSkill: "Git & GitHub", level: "Menengah" },
    { id: 6, namaSkill: "Node.js & Express", level: "Pemula" },
  ];

  // Data daftar mata kuliah praktikum semester ini (Tugas 2: Pemisahan Modul)
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 3,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Sistem Basis Data (PostgreSQL)",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF213",
      nama: "Rekayasa Perangkat Lunak Terapan",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF214",
      nama: "Arsitektur Sistem Terdistribusi",
      sks: 2,
      hari: "Jumat",
    },
  ];

  // Data daftar proyek yang terhubung ke repositori GitHub user (Tugas 3: Laporan Mandiri)
  const daftarProyek = [
    {
      id: 1,
      judul: "PUSTANI (Pusat Informasi Petani)",
      deskripsi:
        "Platform informasi pertanian berbasis web untuk berbagi artikel edukasi tani, verifikasi akun ahli pertanian, dengan monitoring Prometheus & Grafana serta deployment Docker Compose.",
      teknologi: ["PHP 8.1", "MariaDB", "Docker Compose", "Nginx", "Prometheus"],
      linkGithub: "https://github.com/bilker29/Pustaka-Informasi-Petani-PUSTANI-",
    },
    {
      id: 2,
      judul: "Personal Portfolio Website (ITW Project 1)",
      deskripsi:
        "Website portofolio personal interaktif yang memuat informasi profil biodata, latar belakang pendidikan, dan showcase karya kreatif dengan antarmuka berbasis HTML5 dan CSS kustom.",
      teknologi: ["HTML5", "CSS3", "Responsive Web", "GitHub Pages"],
      linkGithub: "https://github.com/Phatuurr/itw2024_project1_243040094",
    },
    {
      id: 3,
      judul: "Company Profile Landing Page (ITW Project 2)",
      deskripsi:
        "Halaman web profil perusahaan (company profile) responsif yang menyajikan branding bisnis, katalog layanan unggulan, galeri produk visual, dan form kontak terstruktur.",
      teknologi: ["HTML5", "CSS3", "Flexbox", "Responsive Design"],
      linkGithub: "https://github.com/Phatuurr/itw2024_project2_243040094",
    },
    {
      id: 4,
      judul: "Aplikasi Web Dinamis (Tubes Pemrograman Web 2025)",
      deskripsi:
        "Aplikasi web dinamis tugas besar dengan implementasi manajemen database relasional, operasi CRUD terstruktur, autentikasi pengguna, dan deployment cloud.",
      teknologi: ["PHP", "MySQL", "CSS3", "JavaScript", "Vercel"],
      linkGithub: "https://github.com/Phatuurr/pw2025_tubes_243040094",
    },
  ];

  // Fungsi penanganan interaksi event tombol
  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS, komponen modular, props, list rendering, dan estetika antarmuka profesional.",
    );
  };

  return (
    <div
      style={{
        maxWidth: "920px",
        margin: "36px auto",
        padding: "0 20px 80px 20px",
      }}
    >
      {/* Top Utility Bar (Ornamen Grid Blueprint Minimalis) */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "14px",
          marginBottom: "28px",
          borderBottom: "1.5px dashed rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#111113",
            }}
          />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "12px",
              fontWeight: "700",
              color: "#111113",
              letterSpacing: "0.5px",
            }}
          >
            [PRAKTIKUM WEB // MODUL 01]
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "11px",
            color: "#71717A",
          }}
        >
          REACT_V19 + VITE
        </span>
      </header>

      {/* Bagian 1: Profil Mahasiswa Praktikan (Tugas 1: Integrasi BadgeSkill) */}
      <section style={{ marginBottom: "40px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "14px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "16px",
              fontWeight: "800",
              color: "#111113",
              margin: 0,
              letterSpacing: "-0.3px",
            }}
          >
            [01 // PROFIL MAHASISWA PRAKTIKAN]
          </h2>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              color: "#A1A1AA",
            }}
          >
            MODULAR_COMPONENT
          </span>
        </div>

        <KartuProfil
          nama="Muhammad Fatur Rahman"
          npm="243040094"
          kelas="IF - Praktikum"
          status="Aktif"
          fotoUrl={fotoSaya}
          skills={daftarSkill}
        />
      </section>

      {/* Bagian 2: Daftar Rencana Praktikum Semester (Tugas 2: ItemMatkul List Rendering) */}
      <section style={{ marginBottom: "44px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "14px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "16px",
              fontWeight: "800",
              color: "#111113",
              margin: 0,
              letterSpacing: "-0.3px",
            }}
          >
            [02 // DAFTAR RENCANA PRAKTIKUM SEMESTER]
          </h2>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              color: "#A1A1AA",
            }}
          >
            ITEM_MATKUL.MAP()
          </span>
        </div>

        <div style={{ display: "grid", gap: "10px" }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      {/* Bagian 3: Showcase Portofolio Mini (Tugas 3: KartuProyek) */}
      <section id="showcase-portofolio" style={{ marginBottom: "48px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "16px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "16px",
                fontWeight: "800",
                color: "#111113",
                margin: "0 0 4px 0",
                letterSpacing: "-0.3px",
              }}
            >
              [03 // SHOWCASE PORTOFOLIO MINI]
            </h2>
            <p
              style={{
                color: "#71717A",
                fontSize: "13px",
                margin: 0,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Koleksi karya web yang terhubung langsung ke repositori GitHub resmi.
            </p>
          </div>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              color: "#A1A1AA",
              display: "none",
            }}
          >
            4_PROJECTS
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "16px",
          }}
        >
          {daftarProyek.map((proyek, idx) => (
            <KartuProyek key={proyek.id} index={idx + 1} {...proyek} />
          ))}
        </div>
      </section>

      {/* Tombol Interaktivitas Event (Gaya Brutalist Monochrome) */}
      <div style={{ textAlign: "center", marginTop: "44px" }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: "#111113",
            color: "#FFFFFF",
            padding: "14px 28px",
            border: "1.5px solid #111113",
            borderRadius: "32px",
            cursor: "pointer",
            fontWeight: "700",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.4px",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.12)",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#FFFFFF";
            e.currentTarget.style.color = "#111113";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#111113";
            e.currentTarget.style.color = "#FFFFFF";
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "#F59E0B",
            }}
          />
          <span>[ UJI INTERAKTIVITAS EVENT // KLIK DISINI ]</span>
        </button>
      </div>
    </div>
  );
}

export default App;
