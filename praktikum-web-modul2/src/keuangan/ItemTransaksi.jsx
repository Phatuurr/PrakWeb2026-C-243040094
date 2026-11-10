// src/keuangan/ItemTransaksi.jsx
function ItemTransaksi({ transaksi, onHapus }) {
  const isPemasukan = transaksi.jenis === 'pemasukan';

  const formatRupiah = (angka) => {
    return 'Rp ' + Number(angka).toLocaleString('id-ID');
  };

  return (
    <li className="keuangan-item">
      <div className="keuangan-info">
        <span className="keuangan-keterangan">{transaksi.keterangan}</span>
        <span className={isPemasukan ? 'keuangan-nominal teks-pemasukan' : 'keuangan-nominal teks-pengeluaran'}>
          {isPemasukan ? '+' : '-'} {formatRupiah(transaksi.nominal)}
        </span>
      </div>
      <button
        className="tombol tombol-merah tombol-kecil"
        onClick={() => onHapus(transaksi.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;

