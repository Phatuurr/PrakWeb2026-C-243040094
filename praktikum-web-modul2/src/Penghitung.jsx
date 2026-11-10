// src/Penghitung.jsx
import { useState } from 'react';
import Kartu from './Kartu';

function Penghitung() {
  const [jumlah, setJumlah] = useState(0);

  const tambah = () => {
    setJumlah(jumlah + 1);
  };

  const ulangi = () => {
    setJumlah(0);
  };

  return (
    <div className="section-group">
      <div className="section-blueprint-header">
        <span className="section-label">[01 // PENGHITUNG KLIK & STATE COUNTER]</span>
        <span className="section-tag">HOOK_USESTATE</span>
      </div>

      <Kartu 
        subheader="COUNTER EXPERIMENT // MODUL 02" 
        badgeText="Status: Aktif"
        footerNote="LABORATORIUM PEMROGRAMAN WEB // IF UNPAS"
      >
        <div className="penghitung-box">
          <div className="penghitung-metric">
            <span className="penghitung-label">Total Klik Tercatat</span>
            <span className="penghitung-value">{jumlah}</span>
          </div>
          <div className="baris">
            <button className="tombol" onClick={tambah}>
              + Klik Saya
            </button>
            <button className="tombol tombol-merah" onClick={ulangi}>
              Reset
            </button>
          </div>
        </div>

        {/* Conditional rendering */}
        {jumlah >= 5 && (
          <div className="badge-notice">
            <span>⚡ Wah, kamu rajin sekali mengklik! ({jumlah} klik)</span>
          </div>
        )}
      </Kartu>
    </div>
  );
}

export default Penghitung;
