// src/keuangan/CatatanKeuangan.jsx
import { useState, useEffect } from 'react';
import Kartu from '../Kartu';
import FormTransaksi from './FormTransaksi';
import ItemTransaksi from './ItemTransaksi';
import './Keuangan.css';

function CatatanKeuangan() {
  const [daftarTransaksi, setDaftarTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem('catatan-keuangan');
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }
    return [
      { id: 1, keterangan: 'Uang Saku Bulanan', nominal: 500000, jenis: 'pemasukan' },
      { id: 2, keterangan: 'Beli Buku Pemrograman React', nominal: 120000, jenis: 'pengeluaran' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('catatan-keuangan', JSON.stringify(daftarTransaksi));
  }, [daftarTransaksi]);

  const tambahTransaksi = (dataBaru) => {
    const transaksiBaru = {
      id: Date.now(),
      ...dataBaru,
    };
    setDaftarTransaksi([transaksiBaru, ...daftarTransaksi]);
  };

  const hapusTransaksi = (id) => {
    setDaftarTransaksi(daftarTransaksi.filter((t) => t.id !== id));
  };

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
    <div className="section-group">
      <div className="section-blueprint-header">
        <span className="section-label">[03 // CATATAN KEUANGAN MINI - TUGAS MANDIRI]</span>
        <span className="section-tag">LOCAL_STORAGE_STATE</span>
      </div>

      <Kartu
        subheader="MANAJEMEN ARUS KAS PRAKTIKAN"
        badgeText={`${daftarTransaksi.length} Catatan`}
        footerNote="LABORATORIUM PEMROGRAMAN WEB // CATATAN KEUANGAN"
      >
        {/* Ringkasan Saldo 3 Kolom */}
        <div className="keuangan-stats-grid">
          <div className="keuangan-stat-card">
            <div className="keuangan-stat-header">[ PEMASUKAN ]</div>
            <div className="keuangan-stat-value pemasukan">{formatRupiah(totalPemasukan)}</div>
          </div>
          <div className="keuangan-stat-card">
            <div className="keuangan-stat-header">[ PENGELUARAN ]</div>
            <div className="keuangan-stat-value pengeluaran">{formatRupiah(totalPengeluaran)}</div>
          </div>
          <div className="keuangan-stat-card">
            <div className="keuangan-stat-header">[ SISA SALDO ]</div>
            <div className={`keuangan-stat-value ${totalSaldo < 0 ? 'pengeluaran' : 'saldo'}`}>
              {formatRupiah(totalSaldo)}
            </div>
          </div>
        </div>

        {/* Form Tambah Transaksi */}
        <FormTransaksi onTambahTransaksi={tambahTransaksi} />

        {/* Riwayat Transaksi */}
        <div style={{ marginBottom: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: '#6C727F' }}>
            [ DAFTAR TRANSAKSI TERCATAT ]
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#9CA3AF' }}>
            {daftarTransaksi.length} entri
          </span>
        </div>

        {daftarTransaksi.length === 0 ? (
          <p className="kosong">Belum ada riwayat transaksi. Tambahkan data baru di atas.</p>
        ) : (
          <ul className="daftar">
            {daftarTransaksi.map((transaksi, idx) => (
              <ItemTransaksi
                key={transaksi.id}
                index={idx}
                transaksi={transaksi}
                onHapus={hapusTransaksi}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default CatatanKeuangan;
