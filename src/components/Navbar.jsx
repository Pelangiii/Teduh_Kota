import { Link, useLocation } from 'react-router-dom';
import logoTeduhKota from '../assets/images/logo-teduhkota.svg';

export default function Navbar() {
  const location = useLocation();

  // Helper function untuk cek route aktif
  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-xs">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logoTeduhKota} alt="Logo Teduh Kota" className="w-10 h-10" />
          <span className="font-header text-xl text-gray-800">Teduh Kota</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 font-medium text-gray-600 text-sm">
          <Link
            to="/"
            className={`transition ${isActive('/beranda') ? 'text-brand-green font-semibold border-b-2 border-brand-green pb-0.5' : 'hover:text-brand-green'}`}
          >
            Beranda
          </Link>

          <Link
            to="/tentang"
            className={`transition ${isActive('/tentang') ? 'text-brand-green font-semibold border-b-2 border-brand-green pb-0.5' : 'hover:text-brand-green'}`}
          >
            Tentang
          </Link>

          <Link
            to="/cek-kondisi"
            className={`transition ${isActive('/cek-kondisi') ? 'text-brand-green font-semibold border-b-2 border-brand-green pb-0.5' : 'hover:text-brand-green'}`}
          >
            Cek Kondisi
          </Link>

          <Link
            to="/solusi-teduh"
            className={`transition ${isActive('/solusi-teduh') ? 'text-brand-green font-semibold border-b-2 border-brand-green pb-0.5' : 'hover:text-brand-green'}`}
          >
            Solusi Teduh
          </Link>
        </div>

        {/* Button Contact */}
        <Link
          to="/kontak"
          className="bg-brand-light-orange text-white px-6 py-2.5 rounded-[10px] font-medium text-sm shadow-xs inline-block">
          Kontak
        </Link>

      </nav>
    </header>
  );
}