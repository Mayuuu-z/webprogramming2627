import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang kamu cari tidak tersedia.</p>
      <p><Link to="/">Kembali ke Beranda</Link></p>
    </div>
  );
}