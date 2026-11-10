// src/keuangan/CatatanKeuangan.jsx
import { useState, useEffect } from 'react';
import Kartu from '../Kartu';
import FormTransaksi from './FormTransaksi';
import ItemTransaksi from './ItemTransaksi';
import './Keuangan.css';

function CatatanKeuangan() {
  // (f) Data tersimpan di localStorage menggunakan useEffect & lazy initializer
  const [daftarTransaksi, setDaftarTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem('catatan-keuangan');
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }
    return [
      { id: 1, keterangan: 'Uang Saku Bulanan', nominal: 500000, jenis: 'pemasukan' },
      { id: 2, keterangan: 'Beli Buku Pemrograman', nominal: 120000, jenis: 'pengeluaran' },
    ];
  });

  // Sinkronisasi data ke localStorage setiap daftarTransaksi berubah
  useEffect(() => {
    localStorage.setItem('catatan-keuangan', JSON.stringify(daftarTransaksi));
  }, [daftarTransaksi]);

  // Tambah transaksi baru (immutable update dengan spread)
  const tambahTransaksi = (dataBaru) => {
    const transaksiBaru = {
      id: Date.now(),
      ...dataBaru,
    };
    setDaftarTransaksi([transaksiBaru, ...daftarTransaksi]);
  };

  // Hapus transaksi (immutable update dengan .filter)
  const hapusTransaksi = (id) => {
    setDaftarTransaksi(daftarTransaksi.filter((t) => t.id !== id));
  };

  // (c) Nilai turunan dihitung langsung dari state: Total Pemasukan, Pengeluaran, dan Saldo
  const totalPemasukan = daftarTransaksi
    .filter((t) => t.jenis === 'pemasukan')
    .reduce((acc, curr) => acc + curr.nominal, 0);

  const totalPengeluaran = daftarTransaksi
    .filter((t) => t.jenis === 'pengeluaran')
    .reduce((acc, curr) => acc + curr.nominal, 0);

  const totalSaldo = totalPemasukan - totalPengeluaran;

  const formatRupiah = (angka) => {
    return 'Rp ' + Number(angka).toLocaleString('id-ID');
  };

  return (
    <Kartu judul="Tugas 3: Catatan Keuangan Mini">
      {/* Ringkasan Saldo Otomatis */}
      <div className="keuangan-grid">
        <div className="keuangan-stat">
          <h4>Total Pemasukan</h4>
          <p className="teks-pemasukan">{formatRupiah(totalPemasukan)}</p>
        </div>
        <div className="keuangan-stat">
          <h4>Total Pengeluaran</h4>
          <p className="teks-pengeluaran">{formatRupiah(totalPengeluaran)}</p>
        </div>
        <div className="keuangan-stat">
          <h4>Sisa Saldo</h4>
          <p style={{ color: totalSaldo < 0 ? '#DC2626' : '#1B365D' }}>
            {formatRupiah(totalSaldo)}
          </p>
        </div>
      </div>

      {/* (a) Formulir Terkendali */}
      <FormTransaksi onTambahTransaksi={tambahTransaksi} />

      <h3 style={{ marginTop: '24px', marginBottom: '8px', fontSize: '16px', color: '#1B365D' }}>
        Riwayat Transaksi
      </h3>

      {/* (e) Pesan khusus jika belum ada transaksi (Conditional Rendering) */}
      {daftarTransaksi.length === 0 ? (
        <p className="kosong">Belum ada transaksi. Silakan catat transaksi baru di atas.</p>
      ) : (
        <ul className="daftar">
          {daftarTransaksi.map((transaksi) => (
            <ItemTransaksi
              key={transaksi.id}
              transaksi={transaksi}
              onHapus={hapusTransaksi}
            />
          ))}
        </ul>
      )}
    </Kartu>
  );
}

export default CatatanKeuangan;

