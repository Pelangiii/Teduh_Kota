import React, { useState } from 'react';

export default function FooterSection() {
  // State untuk accordion FAQ (mengecek mana yang terbuka)
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      number: "01",
      question: "Apakah rekomendasi yang diberikan selalu sama?",
      answer: "Tidak, rekomendasi disesuaikan dengan variabel kondisi area yang kamu masukkan seperti tingkat pencahayaan, kelembapan, dan luas ruang."
    },
    {
      number: "02",
      question: "Bagaimana sistem menentukan rekomendasi?",
      answer: "Sistem menggunakan algoritma pencocokan berdasarkan preferensi tanaman terhadap kondisi lingkungan sekitar area kamu."
    },
    {
      number: "03",
      question: "Apakah saya harus ahli tanaman?",
      answer: "Sama sekali tidak! Teduh Kota dirancang khusus untuk pemula dengan petunjuk perawatan yang mudah dipahami."
    },
    {
      number: "04",
      question: "Bagaimana jika kondisi area saya berubah?",
      answer: "Kamu bisa melakukan analisis ulang kapan saja untuk mendapatkan pembaruan rekomendasi tanaman yang sesuai."
    },
    {
      number: "05",
      question: "Apakah aplikasi ini gratis digunakan?",
      answer: "Ya, kamu dapat menggunakan fitur analisis dan rekomendasi tanaman di Teduh Kota secara gratis."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] pt-12 space-y-20">
      
      {/* SECTION 1: FAQ (Masih Ada Pertanyaan?) */}
      <section className="max-w-4xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Masih Ada <span className="text-[#8BC34A]">Pertanyaan?</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Teduh Kota hadir untuk membantu kamu menemukan solusi penghijauan yang tepat, cepat dan mudah.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              onClick={() => toggleFaq(index)}
              className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 cursor-pointer transition duration-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="bg-[#8BC34A] text-white font-bold text-sm px-3 py-1.5 rounded-xl">
                    {item.number}
                  </span>
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">
                    {item.question}
                  </h3>
                </div>
                <span className="text-[#8BC34A] font-bold text-xl">
                  {openFaq === index ? "−" : "+"}
                </span>
              </div>

              {/* Jawaban yang muncul saat diklik */}
              {openFaq === index && (
                <p className="mt-4 pt-3 border-t border-gray-100 text-gray-600 text-xs md:text-sm pl-14">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: CTA Box (Masih belum menemukan jawaban?) */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-[#FBE9E7] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="text-5xl bg-white p-4 rounded-2xl shadow-xs">
              🪴
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Masih belum menemukan jawaban?
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Tim kami siap membantu kamu.
              </p>
            </div>
          </div>
          <button className="bg-[#FF8A65] hover:bg-[#ff7043] text-white px-6 py-3 rounded-xl font-medium transition flex items-center gap-2 whitespace-nowrap shadow-sm">
            Hubungi Kami <span>→</span>
          </button>
        </div>
      </section>

      {/* SECTION 3: Footer */}
      <footer className="bg-white border-t border-gray-100 pt-12 pb-6 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          
          {/* Col 1: Brand & Socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#7CB342] rounded-xl flex items-center justify-center text-white font-bold">
                TT
              </div>
              <span className="font-bold text-xl text-gray-800">Teduh Kota</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Teduh Kota membantu kamu menemukan solusi penghijauan yang tepat, cepat dan mudah berdasarkan kondisi area.
            </p>
            <div className="flex gap-3 pt-2">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs cursor-pointer hover:bg-[#8BC34A] hover:text-white transition">FB</span>
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs cursor-pointer hover:bg-[#8BC34A] hover:text-white transition">IG</span>
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs cursor-pointer hover:bg-[#8BC34A] hover:text-white transition">G</span>
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs cursor-pointer hover:bg-[#8BC34A] hover:text-white transition">F</span>
            </div>
          </div>

          {/* Col 2: Menu */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-800 text-sm">Menu</h4>
            <ul className="space-y-2 text-xs text-gray-500 font-medium">
              <li><a href="#home" className="hover:text-[#8BC34A] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#8BC34A] transition">About</a></li>
              <li><a href="#cek-kondisi" className="hover:text-[#8BC34A] transition">Cek Kondisi</a></li>
              <li><a href="#solusi" className="hover:text-[#8BC34A] transition">Solusi Teduh</a></li>
              <li><a href="#contact" className="hover:text-[#8BC34A] transition">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Informasi */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-800 text-sm">Informasi</h4>
            <ul className="space-y-2 text-xs text-gray-500 font-medium">
              <li><a href="#tentang" className="hover:text-[#8BC34A] transition">Tentang kami</a></li>
              <li><a href="#cara-kerja" className="hover:text-[#8BC34A] transition">Cara Kerja</a></li>
              <li><a href="#faq" className="hover:text-[#8BC34A] transition">FAQ</a></li>
              <li><a href="#privasi" className="hover:text-[#8BC34A] transition">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-800 text-sm">Dapatkan Update</h4>
            <p className="text-gray-500 text-xs">
              Butuh bantuan? hubungi kami jika ada yang ingin ditanyakan.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Masukkan email" 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#8BC34A]"
              />
              <button className="bg-[#FF8A65] hover:bg-[#ff7043] text-white px-4 py-2 rounded-xl text-xs font-bold transition">
                ➢
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 Teduh Kota. All Rights Reserved</p>
        </div>
      </footer>

    </div>
  );
}