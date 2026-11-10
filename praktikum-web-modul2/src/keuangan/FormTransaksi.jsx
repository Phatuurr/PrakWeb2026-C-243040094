// src/keuangan/FormTransaksi.jsx
import { useState } from 'react';

function FormTransaksi({ onTambahTransaksi }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('pemasukan');

  const tidakValid = keterangan.trim() === '' || nominal === '' || Number(nominal) <= 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tidakValid) return;

    onTambahTransaksi({
      keterangan: keterangan.trim(),
      nominal: Number(nominal),
      jenis: jenis,
    });

    setKeterangan('');
    setNominal('');
    setJenis('pemasukan');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div className="baris" style={{ marginBottom: '10px' }}>
        <input
          className="input"
          type="text"
          placeholder="Keterangan transaksi (misal: Uang Saku, Beli Buku)"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />
      </div>

      <div className="baris">
        <input
          className="input"
          type="number"
          min="1"
          placeholder="Nominal (Rp)"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
        />

        <select
          className="select-blueprint"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
        >
          <option value="pemasukan">+ Pemasukan</option>
          <option value="pengeluaran">- Pengeluaran</option>
        </select>

        <button className="tombol" type="submit" disabled={tidakValid}>
          + Catat
        </button>
      </div>
    </form>
  );
}

export default FormTransaksi;
