import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  // Helper function untuk cek route aktif
  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-[#FAF8F5] sticky top-0 z-50 shadow-xs">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#7CB34A] rounded-2xl flex items-center justify-center text-white font-bold text-lg">
            TT
          </div>
          <span className="font-bold text-xl text-gray-800">Teduh Kota</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 font-medium text-gray-600 text-sm">
          <Link 
            to="/" 
            className={`transition ${isActive('/') ? 'text-[#8BC34A] font-semibold border-b-2 border-[#8BC34A] pb-0.5' : 'hover:text-[#8BC34A]'}`}
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            className={`transition ${isActive('/about') ? 'text-[#8BC34A] font-semibold border-b-2 border-[#8BC34A] pb-0.5' : 'hover:text-[#8BC34A]'}`}
          >
            About
          </Link>
          
          <Link 
            to="/cek-kondisi" 
            className={`transition ${isActive('/cek-kondisi') ? 'text-[#8BC34A] font-semibold border-b-2 border-[#8BC34A] pb-0.5' : 'hover:text-[#8BC34A]'}`}
          >
            Cek Kondisi
          </Link>
          
          <Link 
            to="/solusi-teduh" 
            className={`transition ${isActive('/solusi-teduh') ? 'text-[#8BC34A] font-semibold border-b-2 border-[#8BC34A] pb-0.5' : 'hover:text-[#8BC34A]'}`}
          >
            Solusi Teduh
          </Link>
        </div>

        {/* Button Contact */}
        <Link 
          to="/contact" 
          className="bg-[#FFB74D] hover:bg-[#ffa726] text-white px-6 py-2.5 rounded-full font-medium text-sm transition shadow-xs inline-block"
        >
          Contact
        </Link>

      </nav>
    </header>
  );
}