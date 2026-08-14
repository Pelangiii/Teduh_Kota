import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoTeduhKota from '../assets/images/logo-teduhkota.svg';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path || (path === '/' && location.pathname === '/landing');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-xs font-sans">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 shrink-0">
          <img src={logoTeduhKota} alt="Logo Teduh Kota" className="w-9 h-9 md:w-10 md:h-10" />
          <span className="font-header text-xl text-gray-800 font-extrabold">Teduh Kota</span>
        </Link>

        {/* DESKTOP NAV LINKS (Tampil hanya di layar sedang/besar) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600 text-sm">
          <Link
            to="/"
            className={`transition ${isActive('/') ? 'text-brand-green font-semibold border-b-2 border-brand-green pb-0.5' : 'hover:text-brand-green'}`}
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

        {/* BUTTON CONTACT DESKTOP (Tampil hanya di layar sedang/besar) */}
        <div className="hidden md:block">
          <Link
            to="/kontak"
            className="bg-brand-light-orange hover:bg-brand-orange text-white px-6 py-2.5 rounded-[10px] font-medium text-sm shadow-xs transition inline-block"
          >
            Kontak
          </Link>
        </div>

        {/* HAMBURGER BUTTON (Tampil di Mobile & Tablet) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none transition"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </nav>

      {/* DROPDOWN MENU MOBILE / TABLET */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-4 text-sm font-medium text-gray-700 shadow-md">
          <Link
            to="/"
            onClick={closeMenu}
            className={`block py-2 ${isActive('/') ? 'text-brand-green font-semibold' : 'hover:text-brand-green'}`}
          >
            Beranda
          </Link>

          <Link
            to="/tentang"
            onClick={closeMenu}
            className={`block py-2 ${isActive('/tentang') ? 'text-brand-green font-semibold' : 'hover:text-brand-green'}`}
          >
            Tentang
          </Link>

          <Link
            to="/cek-kondisi"
            onClick={closeMenu}
            className={`block py-2 ${isActive('/cek-kondisi') ? 'text-brand-green font-semibold' : 'hover:text-brand-green'}`}
          >
            Cek Kondisi
          </Link>

          <Link
            to="/solusi-teduh"
            onClick={closeMenu}
            className={`block py-2 ${isActive('/solusi-teduh') ? 'text-brand-green font-semibold' : 'hover:text-brand-green'}`}
          >
            Solusi Teduh
          </Link>

          <div className="pt-2">
            <Link
              to="/kontak"
              onClick={closeMenu}
              className="block text-center bg-brand-light-orange text-white py-3 rounded-[10px] font-medium shadow-xs"
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}