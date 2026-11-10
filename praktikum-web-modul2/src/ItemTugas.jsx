// src/ItemTugas.jsx
function ItemTugas({ tugas, onUbahStatus, onHapus, index }) {
  // Format kode seperti IF211, IF212... atau TASK-01
  const nomorUrut = String(index + 1).padStart(2, '0');
  const kodeTugas = `TASK-${nomorUrut}`;

  return (
    <li className="item-blueprint-row">
      <div className="item-left">
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={tugas.selesai}
          onChange={() => onUbahStatus(tugas.id)}
        />
        <span className="badge-tag-code">{kodeTugas}</span>
        <span className={`item-text ${tugas.selesai ? 'selesai' : ''}`}>
          {tugas.judul}
        </span>
      </div>

      <div className="item-right">
        <span className={`status-badge-outline ${tugas.selesai ? 'selesai' : 'pending'}`}>
          {tugas.selesai ? '✓ SELESAI' : '• PENDING'}
        </span>
        <button
          className="tombol tombol-merah tombol-kecil"
          onClick={() => onHapus(tugas.id)}
        >
          Hapus
        </button>
      </div>
    </li>
  );
}

export default ItemTugas;
