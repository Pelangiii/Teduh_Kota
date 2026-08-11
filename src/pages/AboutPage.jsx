import React from 'react';
import { Link } from 'react-router-dom';

// Import Aset Gambar Ilustrasi Utama
import heroMejaImg from '../assets/images/ilustrasi-meja-laptop.svg';
import tanamanLoveImg from '../assets/images/tanaman-love.svg';
import tanamanTanyaImg from '../assets/images/tanaman-tanya.svg';

// Import Icon Problem & Target Pengguna
import iconKacaPembesar from '../assets/images/icon-kaca-pembesar.svg';
import iconMatahari from '../assets/images/icon-matahari.svg';
import iconPeringatan from '../assets/images/icon-peringatan.svg';

import iconRumah from '../assets/images/icon-rumah.svg';
import iconGedung from '../assets/images/icon-gedung.svg';
import iconSekolah from '../assets/images/icon-sekolah.svg';
import iconPublik from '../assets/images/icon-publik.svg';

export default function AboutPage() {
  const problems = [
    {
      icon: iconKacaPembesar,
      title: "Kurangnya Informasi",
      description: "Banyak orang tidak tahu tanaman apa yang cocok untuk kondisi lingkungan di area mereka."
    },
    {
      icon: iconMatahari,
      title: "Kondisi Area Berbeda",
      description: "Setiap area memiliki kondisi yang unik seperti cahaya, luas, dan jenis tanah yang berbeda."
    },
    {
      icon: iconPeringatan,
      title: "Kesalahan Pemilihan",
      description: "Salah memiliki tanaman dapat membuat tanaman sulit tumbuh dan tidak bertahan lama."
    }
  ];

  const targetUsers = [
    {
      icon: iconRumah,
      title: "Rumah",
      description: "Membuat halaman rumah menjadi lebih asri dan hijau."
    },
    {
      icon: iconGedung,
      title: "Perkantoran",
      description: "Mewujudkan ruang kerja yang nyaman dan produktif."
    },
    {
      icon: iconSekolah,
      title: "Sekolah / Kampus",
      description: "Mewujudkan lingkungan belajar yang sehat dan sejuk."
    },
    {
      icon: iconPublik,
      title: "Ruang Publik",
      description: "Bersama-sama menghijaukan lingkungan sekitar."
    }
  ];

  return (
    <div className="bg-[#FAF8ED] min-h-screen pt-24 md:pt-32 pb-32 relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-36 md:space-y-48 relative z-10">
        
        {/* 1. HEADER / HERO SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-8 md:pt-12">
          <div className="space-y-4 max-w-lg text-center md:text-left">
            <h1 className="font-header text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Apa itu <span className="text-brand-green">Teduh Kota?</span>
            </h1>
            <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed">
              Platform rekomendasi penghijauan yang membantu siapa saja menemukan solusi tanaman sesuai kondisi area mereka.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
            <img 
              src={heroMejaImg} 
              alt="Ilustrasi Laptop dan Pot" 
              className="w-full max-w-md object-contain" 
            />
          </div>
        </div>

        {/* 2. TENTANG TEDUH KOTA CARD */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xs border border-gray-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-36 md:w-44 shrink-0 flex justify-center">
            <img 
              src={tanamanLoveImg} 
              alt="Tentang Teduh Kota" 
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-header text-2xl md:text-3xl font-extrabold text-gray-900">
              Tentang <span className="text-brand-green">Teduh Kota</span>
            </h2>
            <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed">
              Teduh Kota adalah website rekomendasi penghijauan yang dirancang untuk membantu masyarakat menentukan jenis tanaman yang paling sesuai berdasarkan kondisi area yang dimiliki, seperti pencahayaan, luas ruang, dan lokasi penanaman.
            </p>
            <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed">
              Melalui proses analisis yang sederhana, Teduh Kota memberikan rekomendasi tanaman beserta solusi penghijauan yang praktis tanpa harus memiliki pengetahuan khusus tentang tanaman.
            </p>
          </div>
        </div>

        {/* 3. PROBLEM SECTION */}
        <div className="space-y-12 text-center">
          <h2 className="font-header text-3xl md:text-4xl font-extrabold text-gray-900">
            Problem yang <span className="text-brand-green">diangkat</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition">
                <div className="w-20 h-20 rounded-2xl bg-[#FFE4D6] flex items-center justify-center p-4">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-header text-lg font-bold text-gray-800 pt-2">{item.title}</h3>
                <p className="font-sans text-gray-500 text-xs md:text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. TUJUAN SECTION */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xs border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <h2 className="font-header text-3xl font-extrabold text-gray-900">Tujuan</h2>
            <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed">
              Teduh Kota bertujuan membantu masyarakat menemukan solusi penghijauan yang sesuai dengan kondisi area mereka melalui rekomendasi yang mudah dipahami, sehingga lebih banyak ruang dapat dimanfaatkan menjadi lingkungan yang hijau dan nyaman.
            </p>
          </div>
          <div className="w-36 h-36 bg-[#FFE4D6] rounded-3xl shrink-0 flex items-center justify-center text-6xl shadow-xs">
            🌳
          </div>
        </div>

        {/* 5. TARGET PENGGUNA SECTION */}
        <div className="space-y-12 text-center">
          <h2 className="font-header text-3xl md:text-4xl font-extrabold text-gray-900">
            Target <span className="text-brand-green">Pengguna</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {targetUsers.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition">
                <div className="w-20 h-20 rounded-2xl bg-[#FFE4D6] flex items-center justify-center p-4">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-header text-base font-bold text-gray-800 pt-1">{item.title}</h3>
                <p className="font-sans text-gray-500 text-xs md:text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. BANNER CTA */}
        <div className="bg-[#FFEAD8] rounded-3xl p-8 md:p-12 border border-orange-100 flex flex-col md:flex-row items-center justify-start gap-8 md:gap-10 shadow-xs">
          <div className="w-32 md:w-40 shrink-0 flex justify-center">
            <img 
              src={tanamanTanyaImg} 
              alt="Siap Menghijaukan Area Kamu?" 
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="space-y-1">
              <h3 className="font-header text-2xl md:text-3xl font-extrabold text-gray-900">
                Siap Menghijaukan Area Kamu?
              </h3>
              <p className="font-sans text-gray-600 text-sm md:text-base">
                Mulai analisis untuk mencobanya langsung
              </p>
            </div>
            <div>
              <Link 
                to="/cek-kondisi-form" 
                className="font-sans inline-flex items-center gap-2 bg-brand-orange hover:bg-[#e87f2e] text-white px-8 py-3.5 rounded-2xl font-medium text-base transition shadow-xs"
              >
                Mulai Analisis <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}