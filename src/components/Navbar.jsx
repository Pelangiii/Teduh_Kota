import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="w-full bg-[#FAF8F5]">
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
          <Link to="/" className="hover:text-[#8BC34A] transition">
            Home
          </Link>
          <Link to="/about" className="text-[#8BC34A] font-semibold border-b-2 border-[#8BC34A] pb-0.5">
            About
          </Link>
          <a href="#cek-kondisi" className="hover:text-[#8BC34A] transition">
            Cek Kondisi
          </a>
          <a href="#solusi-teduh" className="hover:text-[#8BC34A] transition">
            Solusi Teduh
          </a>
        </div>

        {/* Button */}
        <button className="bg-[#FFB74D] hover:bg-[#ffa726] text-white px-6 py-2.5 rounded-full font-medium text-sm transition shadow-xs">
          Contact
        </button>

      </nav>
    </header>
  );
}