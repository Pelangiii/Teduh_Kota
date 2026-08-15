import { useState } from 'react';
import { motion } from 'framer-motion';

// Import Gambar Header & Dekorasi
import headerIllustration from '../assets/images/ilustrasi-meja-laptop.svg';
import polkadotImg from '../assets/images/polkadot.svg';
import ilustrasiRumputPanjang from '../assets/images/ilustrasi-rumput-panjang.svg';

// Konfigurasi Variasi Animasi
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
  }
};

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
    <div className="bg-brand-bg min-h-screen pt-28 md:pt-36 pb-0 overflow-x-hidden font-sans relative flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-12 md:space-y-16 relative w-full">

        {/* Polkadot 1: Pojok Kanan Atas (Cut in half on edge) */}
        <img 
          src={polkadotImg} 
          alt="Dekorasi Polkadot Kanan Atas" 
          className="absolute -top-10 -right-12 md:-right-16 w-24 md:w-32 opacity-80 pointer-events-none z-0" 
        />

        {/* 1. HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-2 relative z-10">
          <motion.div
            className="space-y-3 max-w-lg text-center md:text-left z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-header text-4xl md:text-5xl font-normal text-brand-dark leading-tight">
              Punya <span className="text-brand-green">Pertanyaan?</span>
            </h1>
            <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed">
              Ada pertanyaan, saran, atau ingin bekerja sama? Tim Teduh Kota siap membantu.
            </p>
          </motion.div>

          {/* Ilustrasi Header */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              src={headerIllustration}
              alt="Ilustrasi Laptop dan Jendela"
              className="w-full max-w-lg md:max-w-xl h-auto object-contain drop-shadow-md"
            />
          </motion.div>
        </div>

        {/* 2. FORM CARD SECTION */}
        <div className="relative">
          {/* Polkadot 2: Kiri Tengah Card */}
          <img 
            src={polkadotImg} 
            alt="Dekorasi Polkadot Kiri" 
            className="absolute top-1/2 -left-12 md:-left-16 -translate-y-1/2 w-20 md:w-28 opacity-80 pointer-events-none z-0" 
          />

          {/* Polkadot 3: Kanan Bawah Card */}
          <img 
            src={polkadotImg} 
            alt="Dekorasi Polkadot Kanan Bawah" 
            className="absolute -bottom-6 -right-12 md:-right-16 w-20 md:w-28 opacity-80 pointer-events-none z-0" 
          />

          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-10 items-start relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            {/* Form Kirim Pesan */}
            <div className="md:col-span-7 space-y-6">
              <h2 className="font-header text-3xl md:text-4xl font-normal text-brand-dark">
                Kirim Pesan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700 font-sans">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition bg-white font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700 font-sans">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email aktif"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition bg-white font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700 font-sans">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan yang ingin kamu sampaikan"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition resize-none bg-white font-sans"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    type="submit"
                    className="bg-brand-orange hover:bg-[#e08316] text-white font-semibold px-8 py-3 rounded-2xl text-sm transition flex items-center gap-2 shadow-sm font-sans"
                  >
                    Kirim Pesan <span>➤</span>
                  </motion.button>
                </div>
              </form>
            </div>

            {/* Info Kontak & Embedded Google Maps */}
            <div className="md:col-span-5 md:border-l md:border-gray-100 md:pl-10 space-y-6">
              <h3 className="font-header text-xl md:text-2xl font-normal text-brand-dark leading-snug">
                Kami disini untuk
                <span className="text-brand-green"> membantu!</span>
              </h3>

              <div className="space-y-3 text-sm text-gray-600 font-sans">
                <div>
                  <p className="font-bold text-gray-800">Email</p>
                  <p className="text-gray-500">hai@teduhkota.id</p>
                </div>

                <div>
                  <p className="font-bold text-gray-800">Number</p>
                  <p className="text-gray-500">0811-0018-3210</p>
                </div>

                <div>
                  <p className="font-bold text-gray-800">Lokasi</p>
                  <p className="text-gray-500">Jakarta, Indonesia</p>
                </div>
              </div>

              {/* Container Embedded Google Maps */}
              <motion.div
                className="w-full h-48 md:h-52 rounded-2xl overflow-hidden border border-gray-100 shadow-xs"
              >
                <iframe
                  title="Peta Lokasi Teduh Kota"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.2825686007!2d106.75947800000001!3d-6.2297465!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e80d63d05d%3A0x2c2299c681ab8706!2sJakarta%2C%20Indonesia!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Rumput Panjang Bawah (Setelah Form - Full Screen Width) */}
      <div 
        className="w-full h-24 md:h-32 lg:h-44 pointer-events-none relative z-10"
        style={{ 
          backgroundImage: `url(${ilustrasiRumputPanjang})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          backgroundSize: 'auto 100%'
        }}
      />
    </div>
  );
}