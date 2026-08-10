export default function Hero() {
  return (
    <section className="bg-brand-bg pt-12 pb-20 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Temukan Solusi <br />
            untuk <span className="text-brand-green">Ruang Hijau</span>
          </h1>
          <p className="text-gray-600 max-w-lg leading-relaxed">
            Temukan rekomendasi penghijauan berdasarkan kondisi area di sekitarmu melalui sistem rekomendasi yang sederhana dan mudah digunakan.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-brand-orange hover:bg-brand-orange text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 shadow-sm transition">
              Mulai Analisis <span>→</span>
            </button>
            <button className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-6 py-3 rounded-xl font-medium transition">
              Lihat lebih lanjut
            </button>
          </div>
        </div>

        {/* Right Column: Visual Comparison */}
        <div className="relative flex justify-center items-center gap-4">
          {/* Card Sebelum */}
          <div className="relative w-1/2 rounded-2xl overflow-hidden border-4 border-white shadow-md">
            <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm text-brand-green text-xs font-semibold px-3 py-1 rounded-full">
              Sebelum
            </span>
            <img 
              src="https://via.placeholder.com/300x400?text=Sebelum" 
              alt="Sebelum" 
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Slider/Arrow Icon */}
          <div className="absolute z-10 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg font-bold">
            →
          </div>

          {/* Card Sesudah */}
          <div className="relative w-1/2 rounded-2xl overflow-hidden border-4 border-white shadow-md">
            <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-brand-green text-white text-xs font-semibold px-3 py-1 rounded-full">
              Sesudah
            </span>
            <img 
              src="https://via.placeholder.com/300x400?text=Sesudah" 
              alt="Sesudah" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}