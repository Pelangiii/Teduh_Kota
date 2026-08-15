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
    <section className="relative pt-6 sm:pt-10 md:pt-12 pb-8 overflow-hidden bg-brand-bg dark:bg-mode-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10 relative">
        
        {/* ILUSTRASI HERO (Di ATAS pada HP/Tablet <lg, di KANAN pada Desktop >=lg) */}
        <motion.div 
          className="w-full flex justify-center lg:justify-end order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img
            src={sebelumSesudahImg}
            alt="Sebelum dan Sesudah Ruang Hijau"
            className="w-full max-w-sm sm:max-w-md lg:max-w-xl object-contain"
          />
        </motion.div>

        {/* TEKS HERO (Di BAWAH pada HP/Tablet <lg, di KIRI pada Desktop >=lg) */}
        <motion.div 
          className="space-y-6 sm:space-y-8 text-center lg:text-left w-full order-last lg:order-first"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="font-header text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-dark dark:text-white leading-[1.18] tracking-tight">
            Temukan Solusi <br className="hidden sm:inline" />
            untuk&nbsp;<span className="text-brand-green font-normal">Ruang Hijau</span>
          </h1>
          
          <p className="font-sans text-brand-text dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Temukan rekomendasi penghijauan berdasarkan kondisi area di sekitarmu melalui sistem rekomendasi yang sederhana dan mudah digunakan.
          </p>
          
          {/* TOMBOL CTAs (Side-by-side / Sejejer di HP & Desktop) */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
            <Link 
              to="/cek-kondisi-form" 
              className="font-sans bg-brand-orange hover:bg-[#e87f2e] text-white px-4 py-3 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl font-medium text-xs sm:text-sm md:text-base transition shadow-xs flex items-center justify-center gap-1.5 shrink-0"
            >
              Mulai Analisis <span>&rarr;</span>
            </Link>
            
            <Link 
              to="/solusi-teduh" 
              className="font-sans bg-white dark:bg-card-dark-mode border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-4 py-3 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl font-medium text-xs sm:text-sm md:text-base transition text-center shrink-0"
            >
              Lihat lebih lanjut
            </Link>
          </div>
        </motion.div>

      </div>

      {/* ILUSTRASI LAPTOP BAWAH */}
      <motion.div 
        className="w-full mt-12 sm:mt-16 md:mt-24 relative left-0 right-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={laptop}
          alt="Ilustrasi Meja dan Laptop"
          className="w-full h-auto min-w-[105%] -ml-[5%] md:min-w-full md:ml-0 scale-105 transform translate-y-8 md:translate-y-16 object-cover"
        />
      </motion.div>
    </section>
  );
}