// src/Kartu.jsx
function Kartu({ subheader, badgeText, badgeStatus = 'active', children, footerNote }) {
  return (
    <section className="kartu-blueprint">
      {/* Kartu Subheader / Bracket Meta */}
      {(subheader || badgeText) && (
        <div className="kartu-top-bar">
          {subheader && <span className="kartu-bracket-tag">[ {subheader} ]</span>}
          {badgeText && (
            <div className={`kartu-status-pill ${badgeStatus}`}>
              <span className="status-dot"></span>
              <span>{badgeText}</span>
            </div>
          )}
        </div>
      )}

      {/* Konten Utama */}
      <div className="kartu-content">
        {children}
      </div>

      {/* Kartu Footer Note */}
      {footerNote && (
        <div className="kartu-footer-bar">
          <span className="kartu-footer-text">{footerNote}</span>
          <span className="kartu-footer-verified">• TERVERIFIKASI AKTIF</span>
        </div>
      )}
    </section>
  );
}

export default Kartu;
