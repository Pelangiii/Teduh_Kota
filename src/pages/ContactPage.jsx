import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Terkirim:', formData);
    alert('Pesan kamu berhasil dikirim!');
  };

  return (
    /* Ditambahkan py-24 md:py-32 untuk memberi ruang bernapas lebih luas di bagian atas & bawah */
    <div className="bg-[#FAF8F5] min-h-screen py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-6">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Punya <span className="text-[#8BC34A]">Pertanyaan?</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Ada pertanyaan, saran, atau ingin bekerja sama? Tim Teduh Kota siap membantu.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-[#FFE082] rounded-full p-10 w-80 h-40 flex items-center justify-center shadow-xs">
              <span className="text-7xl">💻🪴</span>
            </div>
          </div>
        </div>

        {/* Main Form & Info Card */}
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Form Kirim Pesan */}
          <div className="md:col-span-7 space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
              Kirim Pesan
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama mu"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#8BC34A] focus:ring-1 focus:ring-[#8BC34A] transition"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email aktif mu"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#8BC34A] focus:ring-1 focus:ring-[#8BC34A] transition"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Pesan
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan yang ingin kamu sampaikan"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#8BC34A] focus:ring-1 focus:ring-[#8BC34A] transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#FF8A65] hover:bg-[#ff7043] text-white font-medium px-8 py-3.5 rounded-xl text-sm transition flex items-center gap-2 shadow-xs"
              >
                Kirim Pesan <span>➤</span>
              </button>
            </form>
          </div>

          {/* Info Kontak & Map Placeholder */}
          <div className="md:col-span-5 space-y-8 pt-2">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              Kami disini untuk <span className="text-[#8BC34A]">membantu!</span>
            </h3>

            <div className="space-y-5 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p>hai@teduhkota.id</p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Number</p>
                <p>0811-0018-3210</p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Lokasi</p>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>

            {/* Box Map Placeholder */}
            <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-700 font-bold text-sm border border-gray-300">
              Lokasi (map)
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}