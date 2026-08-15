import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoTeduhKota from '../assets/images/logo-teduhkota.svg';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path || (path === '/' && (location.pathname === '/beranda' || location.pathname === '/landing'));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white dark:bg-mode-dark sticky top-0 z-50 shadow-xs font-sans transition-colors duration-300 border-b border-gray-100 dark:border-line-dark">
      <nav className="max-w-7xl mx-auto px-8 lg:px-16 py-4 md:py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 shrink-0">
          <img src={logoTeduhKota} alt="Logo Teduh Kota" className="w-9 h-9 md:w-10 md:h-10" />
          <span className="font-header text-2xl text-brand-dark dark:text-white font-medium">Teduh Kota</span>
        </Link>

        {/* DESKTOP NAV LINKS (Tampil hanya di layar besar/desktop >=1024px) */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-gray-600 dark:text-gray-300 text-base">
          <Link
            to="/"
            className={`transition ${isActive('/') ? 'text-brand-green font-semibold border-b-2 border-brand-green pb-0.5' : 'hover:text-brand-green dark:hover:text-brand-green'}`}
          >
            Beranda
          </Link>

          <Link
            to="/tentang"
            className={`transition ${isActive('/tentang') ? 'text-brand-green font-semibold border-b-2 border-brand-green pb-0.5' : 'hover:text-brand-green dark:hover:text-brand-green'}`}
          >
            Tentang
          </Link>

          <Link
            to="/cek-kondisi"
            className={`transition ${isActive('/cek-kondisi') ? 'text-brand-green font-semibold border-b-2 border-brand-green pb-0.5' : 'hover:text-brand-green dark:hover:text-brand-green'}`}
          >
            Cek Kondisi
          </Link>

          <Link
            to="/solusi-teduh"
            className={`transition ${isActive('/solusi-teduh') ? 'text-brand-green font-semibold border-b-2 border-brand-green pb-0.5' : 'hover:text-brand-green dark:hover:text-brand-green'}`}
          >
            Solusi Teduh
          </Link>
        </div>

        {/* BUTTON CONTACT & DARK MODE TOGGLE DESKTOP */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/kontak"
            className="bg-brand-light-orange hover:bg-brand-orange text-white px-6 py-2.5 rounded-[10px] font-medium text-base shadow-xs transition inline-block"
          >
            Kontak
          </Link>
          <ThemeToggle />
        </div>

        {/* MOBILE & TABLET RIGHT CONTROLS: ThemeToggle + Hamburger (<1024px) */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-all duration-200 active:scale-95 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <motion.svg 
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>

      </nav>

      {/* DROPDOWN MENU MOBILE & TABLET WITH ANIMATION */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-white dark:bg-card-dark-mode border-t border-gray-100 dark:border-line-dark shadow-lg"
          >
            <div className="px-6 py-5 space-y-3 text-base font-medium text-gray-700 dark:text-gray-200">
              <Link
                to="/"
                onClick={closeMenu}
                className={`block py-2.5 px-3 rounded-xl transition-all ${
                  isActive('/') 
                    ? 'text-brand-green bg-brand-green/10 dark:bg-brand-green/20 font-semibold' 
                    : 'hover:text-brand-green dark:hover:text-brand-green hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                Beranda
              </Link>

              <Link
                to="/tentang"
                onClick={closeMenu}
                className={`block py-2.5 px-3 rounded-xl transition-all ${
                  isActive('/tentang') 
                    ? 'text-brand-green bg-brand-green/10 dark:bg-brand-green/20 font-semibold' 
                    : 'hover:text-brand-green dark:hover:text-brand-green hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                Tentang
              </Link>

              <Link
                to="/cek-kondisi"
                onClick={closeMenu}
                className={`block py-2.5 px-3 rounded-xl transition-all ${
                  isActive('/cek-kondisi') 
                    ? 'text-brand-green bg-brand-green/10 dark:bg-brand-green/20 font-semibold' 
                    : 'hover:text-brand-green dark:hover:text-brand-green hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                Cek Kondisi
              </Link>

              <Link
                to="/solusi-teduh"
                onClick={closeMenu}
                className={`block py-2.5 px-3 rounded-xl transition-all ${
                  isActive('/solusi-teduh') 
                    ? 'text-brand-green bg-brand-green/10 dark:bg-brand-green/20 font-semibold' 
                    : 'hover:text-brand-green dark:hover:text-brand-green hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                Solusi Teduh
              </Link>

              <div className="pt-2">
                <Link
                  to="/kontak"
                  onClick={closeMenu}
                  className="block text-center bg-brand-light-orange hover:bg-brand-orange text-white py-3 rounded-xl font-medium shadow-xs transition cursor-pointer"
                >
                  Kontak
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}