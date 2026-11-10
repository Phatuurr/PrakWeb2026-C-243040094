// src/keuangan/ItemTransaksi.jsx
function ItemTransaksi({ transaksi, onHapus, index }) {
  const isPemasukan = transaksi.jenis === 'pemasukan';
  const no = String(index + 1).padStart(2, '0');

  const formatRupiah = (angka) => {
    return 'Rp ' + Number(angka).toLocaleString('id-ID');
  };

  return (
    <li className="item-keuangan-row">
      <div className="item-left">
        <span className={`keuangan-badge-type ${isPemasukan ? 'pemasukan' : 'pengeluaran'}`}>
          TRX-{no} // {isPemasukan ? 'IN' : 'OUT'}
        </span>
        <span className="keuangan-keterangan">{transaksi.keterangan}</span>
      </div>

      <div className="item-right">
        <span className={`keuangan-amount-pill ${isPemasukan ? 'pemasukan' : 'pengeluaran'}`}>
          {isPemasukan ? '+' : '-'} {formatRupiah(transaksi.nominal)}
        </span>
        <button
          className="tombol tombol-merah tombol-kecil"
          onClick={() => onHapus(transaksi.id)}
        >
          Hapus
        </button>
      </div>
    </li>
  );
}

export default ItemTransaksi;
