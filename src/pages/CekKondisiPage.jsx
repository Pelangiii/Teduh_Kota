import React, { useState } from 'react';

export default function CekKondisiPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);

  // State untuk menyimpan jawaban form
  const [formData, setFormData] = useState({
    location: '',
    problems: [],
    expectation: ''
  });

  // Opsi Pertanyaan 1: Lokasi
  const locations = [
    { id: 'rumah', label: 'Rumah', desc: 'Halaman/teras atau ruang rumah' },
    { id: 'perkantoran', label: 'Perkantoran', desc: 'Area kerja atau gedung perkantoran' },
    { id: 'sekolah', label: 'Sekolah / Kampus', desc: 'Area belajar atau kampus' },
    { id: 'publik', label: 'Ruang Publik', desc: 'Taman kota atau area umum' }
  ];

  // Opsi Pertanyaan 2: Masalah
  const problemsList = [
    { id: 'debu', label: 'Debu / Polusi' },
    { id: 'panas', label: 'Polusi udara / Suhu Panas' },
    { id: 'kurang_hijau', label: 'Kurang ruang hijau' },
    { id: 'kebisingan', label: 'Kebisingan' },
    { id: 'lainnya', label: 'Lainnya' }
  ];

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(prev => prev + 1);
    else if (currentStep === 3) setCurrentStep(4); // Lanjut ke Hasil Rekomendasi
  };

  const handleBackTrigger = () => {
    if (currentStep > 1 && currentStep < 4) {
      setShowModal(true);
    } else if (currentStep === 4) {
      setCurrentStep(1);
    }
  };

  const confirmBack = () => {
    setShowModal(false);
    setCurrentStep(prev => prev - 1);
  };

  const handleProblemChange = (id) => {
    setFormData(prev => {
      const exists = prev.problems.includes(id);
      return {
        ...prev,
        problems: exists 
          ? prev.problems.filter(item => item !== id)
          : [...prev.problems, id]
      };
    });
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16 md:py-24 px-6 relative">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header Hero (Tampil di Step 1-3) */}
        {currentStep < 4 && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
            <div className="space-y-4 max-w-lg">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                Jawab Pertanyaan, dan <br />
                <span className="text-[#8BC34A]">Dapatkan Solusi</span>
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Lingkungan sehat dan asri dimulai dari analisis awal.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-[#FFE082] rounded-full p-8 w-72 h-36 flex items-center justify-center shadow-xs">
                <span className="text-6xl">💻🪴</span>
              </div>
            </div>
          </div>
        )}

        {/* Indicator Steps (1 -> 2 -> 3) */}
        {currentStep < 4 && (
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 max-w-3xl mx-auto text-xs md:text-sm font-medium">
            <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-[#8BC34A] font-bold' : 'text-gray-400'}`}>
              <span className="w-6 h-6 rounded-full bg-current text-white flex items-center justify-center text-xs">1</span>
              Lokasi Area
            </div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-[#8BC34A] font-bold' : 'text-gray-400'}`}>
              <span className="w-6 h-6 rounded-full bg-current text-white flex items-center justify-center text-xs">2</span>
              Kondisi Area
            </div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-[#8BC34A] font-bold' : 'text-gray-400'}`}>
              <span className="w-6 h-6 rounded-full bg-current text-white flex items-center justify-center text-xs">3</span>
              Harapan
            </div>
          </div>
        )}

        {/* STEP 1: PILIH LOKASI */}
        {currentStep === 1 && (
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm max-w-3xl mx-auto space-y-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              1. Di mana Lokasi area yang ingin kamu hijaukan?
            </h2>
            <div className="space-y-4">
              {locations.map((loc) => (
                <label 
                  key={loc.id} 
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition ${formData.location === loc.id ? 'border-[#8BC34A] bg-[#F1F8E9]' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="space-y-1">
                    <p className="font-bold text-gray-800 text-sm">{loc.label}</p>
                    <p className="text-xs text-gray-500">{loc.desc}</p>
                  </div>
                  <input 
                    type="radio" 
                    name="location" 
                    checked={formData.location === loc.id} 
                    onChange={() => setFormData({ ...formData, location: loc.id })}
                    className="accent-[#8BC34A] w-5 h-5"
                  />
                </label>
              ))}
            </div>
            <div className="flex justify-end">
              <button 
                onClick={handleNext} 
                disabled={!formData.location}
                className="bg-[#FF8A65] disabled:opacity-50 hover:bg-[#ff7043] text-white px-8 py-3 rounded-xl font-medium transition"
              >
                Lanjut
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: MASALAH LINGKUNGAN */}
        {currentStep === 2 && (
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm max-w-3xl mx-auto space-y-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              2. Apa ada masalah lingkungan yang terjadi di area kamu?
            </h2>
            <div className="space-y-3">
              {problemsList.map((prob) => (
                <label 
                  key={prob.id}
                  className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition ${formData.problems.includes(prob.id) ? 'border-[#8BC34A] bg-[#F1F8E9]' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <input 
                    type="checkbox" 
                    checked={formData.problems.includes(prob.id)}
                    onChange={() => handleProblemChange(prob.id)}
                    className="accent-[#8BC34A] w-5 h-5"
                  />
                  <span className="text-sm font-semibold text-gray-700">{prob.label}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4">
              <button 
                onClick={handleBackTrigger}
                className="px-6 py-3 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 font-medium transition"
              >
                Kembali
              </button>
              <button 
                onClick={handleNext}
                className="bg-[#FF8A65] hover:bg-[#ff7043] text-white px-8 py-3 rounded-xl font-medium transition"
              >
                Lanjut
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: HARAPAN */}
        {currentStep === 3 && (
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm max-w-3xl mx-auto space-y-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              3. Apa harapan utama kamu setelah area ini di hijaukan?
            </h2>
            <textarea
              rows="5"
              value={formData.expectation}
              onChange={(e) => setFormData({ ...formData, expectation: e.target.value })}
              placeholder="Tuliskan harapanmu..."
              className="w-full p-4 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-[#8BC34A] transition resize-none"
            ></textarea>
            <div className="flex justify-between items-center">
              <button 
                onClick={handleBackTrigger}
                className="px-6 py-3 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 font-medium transition"
              >
                Kembali
              </button>
              <button 
                onClick={handleNext}
                className="bg-[#FF8A65] hover:bg-[#ff7043] text-white px-8 py-3 rounded-xl font-medium transition"
              >
                Selesai
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: HASIL REKOMENDASI */}
        {currentStep === 4 && (
          <div className="space-y-8 max-w-4xl mx-auto pt-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
              Hasil Rekomendasi Untukmu
            </h1>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-6">
                <div>
                  <p className="text-xs font-semibold text-[#8BC34A] uppercase tracking-wide">Rekomendasi Utama</p>
                  <h2 className="text-2xl font-extrabold text-gray-800">Taman Vertikal Bertrellis</h2>
                </div>

                <div className="rounded-2xl overflow-hidden h-52 w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&auto=format&fit=crop&q=80" 
                    alt="Rekomendasi" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-600">Tingkat Kesesuaian:</span>
                  <span className="text-2xl font-extrabold text-[#8BC34A]">95%</span>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="font-bold text-gray-800 text-sm">Mengapa Direkomendasikan?</h3>
                  <ul className="list-disc list-inside text-xs text-gray-600 space-y-1.5 leading-relaxed">
                    <li>Sangat cocok untuk area terbatas dan dinding vertical.</li>
                    <li>Membantu menyaring debu serta menurunkan suhu ruangan.</li>
                    <li>Perawatan tergolong mudah untuk pemula.</li>
                  </ul>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button 
                    onClick={() => setCurrentStep(1)} 
                    className="px-6 py-3 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 text-sm font-medium transition"
                  >
                    Cek Ulang
                  </button>
                  <button className="bg-[#FF8A65] hover:bg-[#ff7043] text-white px-6 py-3 rounded-xl text-sm font-medium transition">
                    Pilih Solusi Ini →
                  </button>
                </div>
              </div>

              {/* Sidebar Info Detail */}
              <div className="md:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl space-y-4 border border-gray-200/60">
                <h4 className="font-bold text-gray-800 text-sm border-b pb-2 border-gray-200">Detail Estimasi</h4>
                <div className="space-y-3 text-xs text-gray-600">
                  <div>
                    <span className="font-semibold block text-gray-800">Estimasi Biaya:</span>
                    <p>Rp 500.000 - Rp 1.200.000</p>
                  </div>
                  <div>
                    <span className="font-semibold block text-gray-800">Kebutuhan Cahaya:</span>
                    <p>Sedang - Tinggi (3-5 Jam/hari)</p>
                  </div>
                  <div>
                    <span className="font-semibold block text-gray-800">Pemeliharaan:</span>
                    <p>Penyiraman 1x sehari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* MODAL KONFIRMASI KEMBALI */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full text-center space-y-6 shadow-xl">
            <h3 className="text-lg font-bold text-gray-800">Yakin mau balik?</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Jawaban pada langkah ini mungkin perlu dipilih ulang jika kamu kembali ke langkah sebelumnya.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => setShowModal(false)}
                className="px-5 py-2.5 border border-gray-300 text-gray-600 text-xs font-semibold rounded-xl hover:bg-gray-50 transition"
              >
                Tidak
              </button>
              <button 
                onClick={confirmBack}
                className="px-5 py-2.5 bg-[#FF8A65] hover:bg-[#ff7043] text-white text-xs font-semibold rounded-xl transition"
              >
                Ya, Kembali
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}