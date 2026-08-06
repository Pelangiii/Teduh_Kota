import React from 'react';

export default function About() {
  return (
    <section className="bg-[#FDFBF7] py-16 px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Illustration */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-48 h-48 bg-[#F1F8E9] rounded-full flex items-center justify-center relative">
            <span className="text-6xl">🪴</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Tentang <span className="text-[#8BC34A]">Teduh Kota</span>
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Teduh Kota adalah website rekomendasi penghijauan yang dirancang untuk membantu masyarakat menentukan jenis tanaman yang paling sesuai berdasarkan kondisi area yang dimiliki, seperti pencahayaan, luas ruang, dan lokasi penanaman.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Melalui proses analisis yang sederhana, Teduh Kota memberikan rekomendasi tanaman beserta solusi penghijauan yang praktis tanpa harus memiliki pengetahuan khusus tentang tanaman.
          </p>
          <div className="pt-2">
            <button className="bg-[#FF8A65] hover:bg-[#ff7043] text-white px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 transition text-sm">
              Lihat lebih Detail <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}