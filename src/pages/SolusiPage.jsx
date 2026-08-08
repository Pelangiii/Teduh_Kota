import React from 'react';

export default function SolusiPage() {
  const solutions = [
    {
      title: "Taman Pot Fleksibel",
      subtitle: "Container Garden",
      badge: "Perlu Pengecekan Lokasi",
      description: "Solusi penghijauan menggunakan pot yang mudah disusun, dipindahkan, dan disesuaikan dengan ruang terbatas.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "Taman Vertikal Bertrellis",
      subtitle: "Trellis Vertical Garden",
      badge: "Perlu Pengecekan Lokasi",
      description: "Penghijauan yang memanfaatkan dinding, pagar, atau rangka vertikal tanpa membutuhkan banyak ruang lantai.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-6">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Solusi <span className="text-[#8BC34A]">Teduh Kota</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Beberapa solusi yang sudah Teduh kota siapkan untuk kamu.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-[#FFE082] rounded-full p-10 w-80 h-40 flex items-center justify-center shadow-xs">
              <span className="text-7xl">🪴💻</span>
            </div>
          </div>
        </div>

        {/* Carousel & Cards Section */}
        <div className="relative flex items-center justify-center px-4 md:px-12">
          
          {/* Tombol Arrow Kiri */}
          <button className="absolute -left-2 md:left-0 z-10 w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-md transition transform -translate-y-1/2 top-1/2">
            ❮
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl">
            {solutions.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-5 hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Gambar & Badge */}
                  <div className="relative rounded-2xl overflow-hidden h-48 md:h-56">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-[#F1F8E9] text-[#7CB34A] font-semibold text-xs px-3 py-1.5 rounded-full border border-[#8BC34A]/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    <p className="text-xs font-semibold text-gray-500">{item.subtitle}</p>
                    <p className="text-gray-600 text-xs leading-relaxed pt-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Button Action */}
                <button className="w-full border border-[#FF8A65] text-[#FF8A65] hover:bg-[#FF8A65] hover:text-white font-medium py-3 rounded-2xl text-sm transition flex items-center justify-center gap-2 mt-4">
                  Lihat Detail <span>→</span>
                </button>
              </div>
            ))}
          </div>

          {/* Tombol Arrow Kanan */}
          <button className="absolute -right-2 md:right-0 z-10 w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-md transition transform -translate-y-1/2 top-1/2">
            ❯
          </button>

        </div>

      </div>
    </div>
  );
}