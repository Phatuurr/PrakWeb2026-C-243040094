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
    { id: 2, namaSkill: "JavaScript (ES6+)", level: "Menengah" },
    { id: 3, namaSkill: "React JS", level: "Menengah" },
    { id: 4, namaSkill: "Git & GitHub", level: "Mahir" },
    { id: 5, namaSkill: "UI/UX & Figma", level: "Pemula" },
    { id: 6, namaSkill: "Node.js & Express", level: "Pemula" },
  ];

  // 1. Data daftar mata kuliah praktikum semester ini (Tugas 2: Pemisahan Modul)
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

  // Data daftar proyek untuk showcase portofolio mini (Tugas 3: Laporan Mandiri)
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


  // 2. Fungsi penanganan interaksi event tombol
  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS, komponen modular, props, dan list rendering.",
    );
  };

  return (
    <div
      style={{
        maxWidth: "880px",
        margin: "40px auto",
        padding: "0 24px 60px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header Halaman */}
      <header style={{ textAlign: "center", marginBottom: "36px" }}>
        <h1 style={{ color: "#1B365D", margin: "0 0 8px 0" }}>
          Praktikum Pemrograman Web
        </h1>
        <p style={{ color: "#666", fontSize: "15px", margin: 0 }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS &amp; Vite
        </p>
      </header>

      {/* Bagian 1: Profil Mahasiswa Praktikan (Tugas 1: Integrasi BadgeSkill) */}
      <section style={{ marginBottom: "36px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Profil Mahasiswa Praktikan
        </h2>
        <KartuProfil
          nama="Muhammad Fatur Rahman"
          npm="243040094"
          kelas="IF - Praktikum"
          status="Aktif"
          fotoUrl={fotoSaya}
          skills={daftarSkill}
        />
      </section>

      {/* Bagian 2: Daftar Rencana Praktikum Semester (Tugas 2: Pemisahan Modul ItemMatkul) */}
      <section style={{ marginBottom: "36px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Daftar Rencana Praktikum Semester (List Rendering)
        </h2>
        <div style={{ display: "grid", gap: "12px" }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      {/* Bagian 3: Showcase Portofolio Mini (Tugas 3: Tugas Terstruktur) */}
      <section style={{ marginBottom: "36px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Showcase Portofolio Mini
        </h2>
        <p style={{ color: "#666", fontSize: "14px", marginTop: "-4px" }}>
          Koleksi proyek pilihan yang dikembangkan menggunakan fondasi rekayasa perangkat lunak modern.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "16px",
          }}
        >
          {daftarProyek.map((proyek) => (
            <KartuProyek key={proyek.id} {...proyek} />
          ))}
        </div>
      </section>

      {/* Tombol Interaktivitas Event */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: "#1B365D",
            color: "#FFFFFF",
            padding: "12px 26px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
            transition: "background-color 0.2s ease",
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;
