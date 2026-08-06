import React from 'react';

export default function AboutPage() {
  const problems = [
    {
      icon: "🔍",
      title: "Kurangnya Informasi",
      description: "Banyak orang tidak tahu tanaman apa yang cocok untuk kondisi lingkungan di area mereka."
    },
    {
      icon: "☀️",
      title: "Kondisi Area Berbeda",
      description: "Setiap area memiliki kondisi yang unik seperti cahaya, luas, dan jenis tanah yang berbeda."
    },
    {
      icon: "⚠️",
      title: "Kesalahan Pemilihan",
      description: "Salah memiliki tanaman dapat membuat tanaman sulit tumbuh dan tidak bertahan lama."
    }
  ];

  const targetUsers = [
    {
      icon: "🏠",
      title: "Rumah",
      description: "Membuat halaman rumah menjadi lebih asri dan hijau."
    },
    {
      icon: "🏢",
      title: "Perkantoran",
      description: "Mewujudkan ruang kerja yang nyaman dan produktif."
    },
    {
      icon: "🏫",
      title: "Sekolah / Kampus",
      description: "Mewujudkan lingkungan belajar yang sehat dan sejuk."
    },
    {
      icon: "👥",
      title: "Ruang Publik",
      description: "Bersama-sama menghijaukan lingkungan sekitar."
    }
  ];

  return (
    /* Ditambahkan py-20 md:py-28 dan space-y-28 agar jarak antar section utama jauh lebih leluasa */
    <div className="bg-[#FAF8F5] min-h-screen py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
        
        {/* 1. Header / Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-6 pb-6">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Apa itu <span className="text-[#8BC34A]">Teduh Kota?</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Platform rekomendasi penghijauan yang membantu siapa saja menemukan solusi tanaman sesuai kondisi area mereka.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-[#FFE082] rounded-full p-10 w-80 h-40 flex items-center justify-center shadow-xs">
              <span className="text-7xl">💻🪴</span>
            </div>
          </div>
        </div>

        {/* 2. Tentang Teduh Kota Card */}
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10">
          <div className="w-36 h-36 bg-[#F1F8E9] rounded-full flex items-center justify-center text-6xl shrink-0">
            🪴
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Tentang <span className="text-[#8BC34A]">Teduh Kota</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Teduh Kota adalah website rekomendasi penghijauan yang dirancang untuk membantu masyarakat menentukan jenis tanaman yang paling sesuai berdasarkan kondisi area yang dimiliki, seperti pencahayaan, luas ruang, dan lokasi penanaman.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Melalui proses analisis yang sederhana, Teduh Kota memberikan rekomendasi tanaman beserta solusi penghijauan yang praktis tanpa harus memiliki pengetahuan khusus tentang tanaman.
            </p>
          </div>
        </div>

        {/* 3. Problem Section */}
        <div className="space-y-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Problem yang <span className="text-[#8BC34A]">diangkat</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 space-y-5 flex flex-col items-center hover:shadow-md transition">
                <div className="w-16 h-16 bg-[#FBE9E7] rounded-2xl flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Tujuan Section */}
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl font-bold text-gray-800">Tujuan</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Teduh Kota bertujuan membantu masyarakat menemukan solusi penghijauan yang sesuai dengan kondisi area mereka melalui rekomendasi yang mudah dipahami, sehingga lebih banyak ruang dapat dimanfaatkan menjadi lingkungan yang hijau dan nyaman.
            </p>
          </div>
          <div className="text-7xl p-6 bg-[#F1F8E9] rounded-3xl shrink-0">🌳</div>
        </div>

        {/* 5. Target Pengguna Section */}
        <div className="space-y-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Target <span className="text-[#8BC34A]">Pengguna</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {targetUsers.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-4 flex flex-col items-center hover:shadow-md transition">
                <div className="w-16 h-16 bg-[#FBE9E7] rounded-2xl flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-base">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Banner CTA (Siap Menghijaukan Area Kamu?) */}
        <div className="bg-[#FBE9E7] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm my-8">
          <div className="flex items-center gap-8">
            <div className="text-6xl bg-white p-5 rounded-2xl shadow-xs shrink-0">
              🪴
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Siap Menghijaukan Area Kamu?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Mulai analisis untuk menemukan solusi yang paling tepat.
              </p>
            </div>
          </div>
          <button className="bg-[#FF8A65] hover:bg-[#ff7043] text-white px-8 py-4 rounded-2xl font-medium text-base transition flex items-center gap-3 whitespace-nowrap shadow-sm shrink-0">
            Mulai Analisis <span>→</span>
          </button>
        </div>

      </div>
    </div>
  );
}