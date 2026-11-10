// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Kartu from './Kartu';
import Penghitung from './Penghitung';
import FormTugas from './FormTugas';
import ItemTugas from './ItemTugas';
import CatatanKeuangan from './keuangan/CatatanKeuangan';

function App() {
  // 1. State utama: coba ambil dari localStorage, jika kosong pakai data contoh
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem('daftar-tugas');
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }
    return [
      { id: 1, judul: 'Install Node.js dan Vite', selesai: true },
      { id: 2, judul: 'Pelajari useState & Lifecycle Hook', selesai: false },
      { id: 3, judul: 'Implementasi Controlled Form & Validation', selesai: true },
    ];
  });

  // State untuk filter (Tugas 1: 'semua' | 'belum' | 'selesai')
  const [filter, setFilter] = useState('semua');

  // Efek A: dijalankan SEKALI saat App pertama kali tampil
  useEffect(() => {
    console.log('Aplikasi Modul 2 siap digunakan!');
  }, []);

  // Efek B: perbarui judul tab peramban setiap daftarTugas berubah
  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `(${sisa}) Tugas Belum Selesai // Modul 02`;
  }, [daftarTugas]);

  // Efek C: simpan daftarTugas ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem('daftar-tugas', JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  // Menambah tugas
  const tambahTugas = (judul) => {
    const tugasBaru = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  // Mengubah status selesai
  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai };
      }
      return tugas;
    });
    setDaftarTugas(daftarBaru);
  };

  // Menghapus tugas
  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // Tugas 2: Menghapus semua tugas yang berstatus selesai
  const hapusSemuaSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  // Nilai turunan
  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  // Tugas 1: Filter daftar tugas
  const tugasTerfilter = daftarTugas.filter((tugas) => {
    if (filter === 'belum') return !tugas.selesai;
    if (filter === 'selesai') return tugas.selesai;
    return true;
  });

  return (
    <div className="wadah">
      {/* Top System Bar */}
      <div className="system-header-bar">
        <div className="system-title-left">
          <span className="system-dot"></span>
          <span>[PRAKTIKUM WEB // MODUL 02]</span>
        </div>
        <div className="system-version-right">
          REACT_V19 + VITE
        </div>
      </div>

      {/* Komponen 01: Penghitung Klik (useState Demo) */}
      <Penghitung />

      {/* Komponen 02: Manajemen Tugas (Controlled Form & List) */}
      <div className="section-group">
        <div className="section-blueprint-header">
          <span className="section-label">[02 // DAFTAR TUGAS PRAKTIKUM]</span>
          <span className="section-tag">ITEM_TUGAS_MAP()</span>
        </div>

        <Kartu 
          subheader="FORMULIR INPUT // TAMBAH TUGAS" 
          badgeText="Mode: Controlled Form"
        >
          <FormTugas onTambah={tambahTugas} />
        </Kartu>

        <Kartu
          subheader="DAFTAR RENCANA TUGAS PRAKTIKAN"
          badgeText={`Status: ${jumlahSelesai}/${daftarTugas.length} Selesai`}
          footerNote="LABORATORIUM PEMROGRAMAN WEB // IF UNPAS"
        >
          {/* Header Filter & Keterangan */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
            <div className="grup-filter" style={{ marginBottom: 0 }}>
              <button
                className={`tombol-filter ${filter === 'semua' ? 'aktif' : ''}`}
                onClick={() => setFilter('semua')}
              >
                Semua ({daftarTugas.length})
              </button>
              <button
                className={`tombol-filter ${filter === 'belum' ? 'aktif' : ''}`}
                onClick={() => setFilter('belum')}
              >
                Belum Selesai ({daftarTugas.length - jumlahSelesai})
              </button>
              <button
                className={`tombol-filter ${filter === 'selesai' ? 'aktif' : ''}`}
                onClick={() => setFilter('selesai')}
              >
                Selesai ({jumlahSelesai})
              </button>
            </div>

            <span className="ringkasan" style={{ marginBottom: 0 }}>
              {jumlahSelesai} dari {daftarTugas.length} selesai
            </span>
          </div>

          {/* List Tugas */}
          {tugasTerfilter.length === 0 ? (
            <p className="kosong">
              {daftarTugas.length === 0
                ? 'Belum ada tugas tercatat. Tambahkan tugas pertamamu di atas.'
                : 'Tidak ada tugas yang sesuai filter saat ini.'}
            </p>
          ) : (
            <ul className="daftar">
              {tugasTerfilter.map((tugas, index) => (
                <ItemTugas
                  key={tugas.id}
                  index={index}
                  tugas={tugas}
                  onUbahStatus={ubahStatus}
                  onHapus={hapusTugas}
                />
              ))}
            </ul>
          )}

          {/* Tugas 2: Tombol Hapus Semua yang Selesai */}
          {jumlahSelesai > 0 && (
            <button
              className="tombol tombol-merah tombol-hapus-semua"
              onClick={hapusSemuaSelesai}
            >
              Hapus Semua yang Selesai ({jumlahSelesai})
            </button>
          )}
        </Kartu>
      </div>

      {/* Komponen 03: Catatan Keuangan Mini */}
      <CatatanKeuangan />
    </div>
  );
}

export default App;
