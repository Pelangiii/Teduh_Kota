import { useState } from 'react';
import { motion } from 'framer-motion';

// Import Gambar Header & Ilustrasi
import headerIllustration from '../assets/images/ilustrasi-meja-laptop.svg';
import mapImg from '../assets/images/map-lokasi.svg'; 

// Konfigurasi Variasi Animasi
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
  }
};

const floatingAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
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
    <div className="bg-brand-bg min-h-screen pt-28 md:pt-36 pb-20 overflow-x-hidden font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12 md:space-y-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-2">
          <motion.div 
            className="space-y-3 max-w-lg text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-header text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Punya <span className="text-brand-green">Pertanyaan?</span>
            </h1>
            <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed">
              Ada pertanyaan, saran, atau ingin bekerja sama? Tim Teduh Kota siap membantu.
            </p>
          </motion.div>
          
          {/* Ilustrasi Header (Laptop + Jendela) */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img 
              animate={floatingAnimation}
              src={headerIllustration} 
              alt="Ilustrasi Laptop dan Jendela" 
              className="w-full max-w-md h-auto object-contain drop-shadow-md"
            />
          </motion.div>
        </div>

        {/* Form Card Section */}
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-10 items-start hover:shadow-xl transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          
          {/* Form Kirim Pesan (Kiri) */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="font-header text-2xl md:text-3xl font-extrabold text-gray-900">
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
                  placeholder="Masukkan nama mu"
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
                  placeholder="Masukkan email aktif mu"
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

          {/* Info Kontak & Map Gambar (Kanan) */}
          <div className="md:col-span-5 md:border-l md:border-gray-100 md:pl-10 space-y-6">
            <h3 className="font-header text-xl md:text-2xl font-extrabold text-gray-900 leading-snug">
              Kami disini untuk <br className="hidden md:block" />
              <span className="text-brand-green">membantu!</span>
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

            {/* Container Gambar Peta Lokasi */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-full h-40 rounded-2xl overflow-hidden border border-gray-100 shadow-xs cursor-pointer"
            >
              <img 
                src={mapImg} 
                alt="Peta Lokasi Teduh Kota" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </motion.div>

      </div>
    </div>
  );
}