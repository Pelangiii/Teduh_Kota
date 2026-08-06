import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#FAF8F5] max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#7CB342] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
          TT
        </div>
        <span className="font-bold text-xl text-gray-800">Teduh Kota</span>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
        <a href="#home" className="text-[#8BC34A] border-b-2 border-[#8BC34A] pb-1 font-semibold">
          Home
        </a>
        <a href="#about" className="hover:text-[#8BC34A] transition">About</a>
        <a href="#cek-kondisi" className="hover:text-[#8BC34A] transition">Cek Kondisi</a>
        <a href="#solusi-teduh" className="hover:text-[#8BC34A] transition">Solusi Teduh</a>
      </div>

      {/* Action Button */}
      <button className="bg-[#FFB74D] hover:bg-[#ffa726] text-white px-6 py-2.5 rounded-full font-medium transition shadow-sm">
        Contact
      </button>
    </nav>
  );
}