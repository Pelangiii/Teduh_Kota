import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import sebelumSesudahImg from '../assets/images/sebelum-sesudah.svg';
import laptop from '../assets/images/laptop.svg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Hero() {
  return (
    <section className="relative pt-12 pb-8 overflow-hidden bg-brand-bg dark:bg-mode-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 relative">
        <motion.div 
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="font-header text-4xl md:text-5xl lg:text-6xl font-normal text-brand-dark dark:text-white leading-[1.15] tracking-tight">
            Temukan Solusi <br />
            untuk <span className="text-brand-green font-normal">Ruang Hijau</span>
          </h1>
          <p className="font-sans text-brand-text dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
            Temukan rekomendasi penghijauan berdasarkan kondisi area di sekitarmu melalui sistem rekomendasi yang sederhana dan mudah digunakan.
          </p>
          <div className="flex flex-wrap gap-5 pt-2">
            <Link to="/cek-kondisi-form" className="font-sans bg-brand-orange hover:bg-[#e87f2e] text-white px-8 py-4 rounded-2xl font-medium text-base transition shadow-xs flex items-center gap-3">
              Mulai Analisis <span>&rarr;</span>
            </Link>
            <Link to="/solusi-teduh" className="font-sans bg-white dark:bg-card-dark-mode border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-4 rounded-2xl font-medium text-base transition">
              Lihat lebih lanjut
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={sebelumSesudahImg}
            alt="Sebelum dan Sesudah Ruang Hijau"
            className="w-full max-w-lg lg:max-w-xl object-contain"
          />
        </motion.div>
      </div>

      <motion.div 
        className="w-full mt-20 md:mt-24 relative left-0 right-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img
          src={laptop}
          alt="Ilustrasi Meja dan Laptop"
          className="w-full h-auto min-w-[105%] -ml-[5%] md:min-w-full md:ml-0 scale-105 transform translate-y-12 md:translate-y-16 object-cover"
        />
      </motion.div>
    </section>
  );
}