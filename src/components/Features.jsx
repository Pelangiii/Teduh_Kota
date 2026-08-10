export default function Features() {
  const whyUsData = [
    {
      icon: "🪴",
      title: "Solusi Yang Tepat",
      description: "Rekomendasi disesuaikan dengan kondisi area berdasarkan analisis yang dilakukan untuk mendapatkan solusi yang tepat."
    },
    {
      icon: "📋",
      title: "Mudah Digunakan",
      description: "Analisis dilakukan melalui pertanyaan singkat dan interaktif untuk mendapatkan rekomendasi."
    },
    {
      icon: "🌍",
      title: "Berdampak Positif",
      description: "Setiap rekomendasi membantu memaksimalkan ruang hijau untuk lingkungan yang lebih sehat."
    }
  ];

  const stepsData = [
    {
      step: "01",
      title: "Jawab Pertanyaan",
      description: "Isi beberapa pertanyaan singkat mengenai kondisi area yang kamu miliki.",
      mockupText: "Jenis area apa yang ingin kamu hijaukan?"
    },
    {
      step: "02",
      title: "Analisis Area",
      description: "Sistem akan menganalisa data yang kamu berikan untuk memahami kondisi area.",
      mockupText: "Menganalisa Data Area..."
    },
    {
      step: "03",
      title: "Dapatkan Rekomendasi",
      description: "Terima rekomendasi penghijauan yang paling sesuai dengan saran penempatan.",
      mockupText: "Vertical Garden"
    }
  ];

  return (
    <div className="bg-brand-bg py-16 px-6 space-y-24">
      
      {/* SECTION 1: Mengapa Teduh Kota? */}
      <section className="max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Mengapa <span className="text-brand-green">Teduh Kota?</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Teduh Kota hadir untuk membantu kamu menemukan solusi penghijauan yang tepat, cepat dan mudah.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUsData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition duration-300"
            >
              <div className="w-16 h-16 bg-brand-card rounded-2xl flex items-center justify-center text-3xl">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Cara Kerja Teduh Kota? */}
      <section className="max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Cara Kerja <span className="text-brand-green">Teduh Kota?</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Ikuti tiga langkah mudah untuk mendapatkan rekomendasi penghijauan yang sesuai dengan kebutuhanmu.
          </p>
        </div>

        {/* Steps Grid with Connector Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch">
          {stepsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center relative">
              
              {/* Main Step Card */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 w-full flex flex-col items-center text-center space-y-4 flex-1">
                
                {/* Step Number Badge */}
                <div className="bg-brand-accent text-white font-bold text-sm px-4 py-1.5 rounded-xl shadow-xs">
                  {item.step}
                </div>

                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed min-h-[40px]">
                  {item.description}
                </p>

                {/* Card Mockup Graphic Container */}
                <div className="w-full bg-brand-card rounded-2xl p-4 mt-2 flex items-center justify-center min-h-[140px]">
                  <div className="bg-white rounded-xl p-3 w-full shadow-xs text-xs text-gray-600 text-left space-y-2">
                    <span className="font-semibold block text-gray-800 text-[11px]">{item.mockupText}</span>
                    <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                  </div>
                </div>

              </div>

              {/* Arrow Connector for Desktop (Hidden on last item) */}
              {index < stepsData.length - 1 && (
                <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-800 text-white rounded-full items-center justify-center shadow-md font-bold text-sm">
                  →
                </div>
              )}

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}