import React from 'react';
import cekKondisiImg from '../assets/images/cek-kondisi.svg';
import ilustrasiRumputPanjang from '../assets/images/ilustrasi-rumput-panjang.svg';

export default function CekKondisiPage() {
  return (
    <div className="bg-brand-bg min-h-screen relative overflow-hidden flex flex-col justify-center pt-20">

      {/* Konten Utama */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-40 md:pb-56">

        {/* Kolom Kiri: Teks Konten */}
        <div className="space-y-6 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-header leading-[1.1] tracking-tight">
            <span className="text-brand-dark block mb-2">Jawab Pertanyaan, dan</span>
            <span className="text-brand-green block">Dapatkan Solusi</span>
          </h1>

          <p className="text-brand-dark/70 font-sans font-medium text-sm lg:text-base leading-relaxed max-w-[420px]">
            Lengkapkan informasi mengenai area yang kamu ingin hijaukan jawaban mu akan membantu kami untuk memberikan hasil yang sesuai.
          </p>

          <div className="pt-2 flex">
            <button className="bg-brand-orange hover:bg-[#e87f2e] text-white font-sans font-medium text-sm lg:text-base px-6 py-3 rounded-[12px] transition-all shadow-sm flex items-center gap-2">
              Mulai Analisis <span>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Foto Cek Kondisi */}
        <div className="relative flex justify-center lg:justify-end items-center mt-8 md:mt-0">
          <img
            src={cekKondisiImg}
            alt="Cek Kondisi"
            className="w-full max-w-[400px] lg:max-w-[600px] object-contain z-10"
          />
        </div>

      </div>

      {/* Background Rumput / Ilustrasi */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <img
          src={ilustrasiRumputPanjang}
          alt="Ilustrasi Rumput"
          className="w-full h-auto object-cover object-bottom pointer-events-none"
        />
      </div>

    </div>
  );
}