// src/keuangan/FormTransaksi.jsx
import { useState } from 'react';

function FormTransaksi({ onTambahTransaksi }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('pemasukan'); // 'pemasukan' atau 'pengeluaran'

  const tidakValid = keterangan.trim() === '' || nominal === '' || Number(nominal) <= 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tidakValid) return;

    // Petunjuk Modul: ubah nominal menjadi angka dengan Number(nominal)
    onTambahTransaksi({
      keterangan: keterangan.trim(),
      nominal: Number(nominal),
      jenis: jenis,
    });

    // Reset formulir terkendali
    setKeterangan('');
    setNominal('');
    setJenis('pemasukan');
  };

  return (
    <form className="form-keuangan" onSubmit={handleSubmit}>
      <div className="baris">
        <input
          className="input"
          type="text"
          placeholder="Keterangan transaksi (misal: Beli Buku)"
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
          className="select-input"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
        >
          <option value="pemasukan">Pemasukan (+)</option>
          <option value="pengeluaran">Pengeluaran (-)</option>
        </select>

        <button className="tombol" type="submit" disabled={tidakValid}>
          Simpan
        </button>
      </div>
    </form>
  );
}

export default FormTransaksi;

