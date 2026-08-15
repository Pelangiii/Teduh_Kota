import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import Aset Gambar Ilustrasi Utama
import heroMejaImg from '../assets/images/ilustrasi-meja-laptop.svg';
import tanamanLoveImg from '../assets/images/tanaman-love.svg';
import tanamanTanyaImg from '../assets/images/tanaman-tanya.svg';
import ilustrasiTujuan from '../assets/images/ilustrasi-tujuan.svg';
import ilustrasiSolusiTeduh from '../assets/images/ilustrasi-solusi-teduh.svg';
import ilustrasiRumputPanjang from '../assets/images/ilustrasi-rumput-panjang.svg';
import polkadotImg from '../assets/images/polkadot.svg';
import circleStarImg from '../assets/images/circle-star.svg';

// Import Icon Problem & Target Pengguna
import iconKacaPembesar from '../assets/images/icon-kaca-pembesar.svg';
import iconMatahari from '../assets/images/icon-matahari.svg';
import iconPeringatan from '../assets/images/icon-peringatan.svg';

import iconRumah from '../assets/images/icon-rumah.svg';
import iconGedung from '../assets/images/icon-gedung.svg';
import iconSekolah from '../assets/images/icon-sekolah.svg';
import iconPublik from '../assets/images/icon-publik.svg';

// Configuration Variasi Animasi
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleUpCard = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

// Animasi Floating Mengapung
const floatingAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

export default function AboutPage() {
  const problems = [
    {
      icon: iconKacaPembesar,
      title: "Kurangnya Informasi",
      description: "Banyak orang tidak tahu tanaman apa yang cocok untuk kondisi lingkungan di area mereka."
    },
    {
      icon: iconMatahari,
      title: "Kondisi Area Berbeda",
      description: "Setiap area memiliki kondisi yang unik seperti cahaya, luas, dan jenis tanah yang berbeda."
    },
    {
      icon: iconPeringatan,
      title: "Kesalahan Pemilihan",
      description: "Salah memilih tanaman dapat membuat tanaman sulit tumbuh dan tidak bertahan lama."
    }
  ];

  const targetUsers = [
    {
      icon: iconRumah,
      title: "Rumah",
      description: "Membuat halaman rumah menjadi lebih asri dan hijau."
    },
    {
      icon: iconGedung,
      title: "Perkantoran",
      description: "Mewujudkan ruang kerja yang nyaman dan produktif."
    },
    {
      icon: iconSekolah,
      title: "Sekolah / Kampus",
      description: "Mewujudkan lingkungan belajar yang sehat dan sejuk."
    },
    {
      icon: iconPublik,
      title: "Ruang Publik",
      description: "Bersama-sama menghijaukan lingkungan sekitar."
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen pt-24 md:pt-32 pb-0 relative overflow-hidden font-sans flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-36 md:space-y-48 relative z-10 w-full">

        {/* 1. HEADER / HERO SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-8 md:pt-12">
          <motion.div
            className="space-y-6 max-w-xl text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-header text-4xl md:text-5xl lg:text-6xl font-normal text-brand-dark leading-[1.15] tracking-tight">
              Apa itu <span className="text-brand-green">Teduh Kota?</span>
            </h1>
            <p className="font-sans color-brand-text text-base md:text-lg leading-relaxed">
              Platform rekomendasi penghijauan yang membantu siapa saja menemukan solusi tanaman sesuai kondisi area mereka.
            </p>
          </motion.div>

          <motion.div
            className="w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              src={ilustrasiSolusiTeduh}
              alt="Ilustrasi Solusi Teduh"
              className="w-full max-w-md lg:max-w-xl object-contain z-10"
            />
          </motion.div>
        </div>

        {/* 2. TENTANG TEDUH KOTA CARD */}
        <motion.div
          className="bg-white rounded-3xl p-10 md:p-14 border border-gray-100 shadow-card flex flex-col md:flex-row items-center gap-10 md:gap-14 hover:shadow-md transition duration-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div className="w-36 md:w-44 shrink-0 flex justify-center">
            <img
              src={tanamanLoveImg}
              alt="Tentang Teduh Kota"
              className="w-full h-auto object-contain"
            />
          </motion.div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-header text-2xl md:text-3xl font-normal text-brand-dark">
              Tentang <span className="text-brand-green">Teduh Kota</span>
            </h2>
            <p className="font-sans color-brand-text text-sm md:text-base leading-relaxed">
              Teduh Kota adalah website rekomendasi penghijauan yang dirancang untuk membantu masyarakat menentukan jenis tanaman yang paling sesuai berdasarkan kondisi area yang dimiliki, seperti pencahayaan, luas ruang, dan lokasi penanaman.
            </p>
            <p className="font-sans color-brand-text text-sm md:text-base leading-relaxed">
              Melalui proses analisis yang sederhana, Teduh Kota memberikan rekomendasi tanaman beserta solusi penghijauan yang praktis tanpa harus memiliki pengetahuan khusus tentang tanaman.
            </p>
          </div>
        </motion.div>

        {/* 3. PROBLEM SECTION */}
        <div className="space-y-12 text-center relative">
          {/* Polkadot Kanan Atas Section */}
          <img
            src={polkadotImg}
            alt=""
            className="absolute -top-12 -right-12 md:-right-20 w-24 md:w-32 opacity-80 pointer-events-none z-0"
          />

          <div className="relative inline-block">
            {/* Bintang / Star Sparkle di atas judul */}
            <img
              src={circleStarImg}
              alt=""
              className="absolute -top-8 -left-10 md:-left-12 w-8 h-auto pointer-events-none"
            />
            <motion.h2
              className="font-header text-3xl md:text-4xl font-normal text-brand-dark"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              Problem yang <span className="text-brand-green font-normal">Diangkat</span>
            </motion.h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleUpCard}

                className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition duration-200 relative z-10"
              >
                <img src={item.icon} alt={item.title} className="w-20 h-20 object-contain" />
                <h3 className="font-sans text-lg font-bold text-brand-dark pt-2">{item.title}</h3>
                <p className="font-sans color-brand-text text-sm md:text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 4. TUJUAN SECTION */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xs border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-md transition duration-200 relative z-10 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <h2 className="font-header text-3xl font-normal text-brand-dark">Tujuan</h2>
            <p className="font-sans color-brand-text text-sm md:text-base leading-relaxed">
              Teduh Kota bertujuan membantu masyarakat menemukan solusi penghijauan yang sesuai dengan kondisi area mereka melalui rekomendasi yang mudah dipahami, sehingga lebih banyak ruang dapat dimanfaatkan menjadi lingkungan yang hijau dan nyaman.
            </p>
          </div>
          <motion.div className="w-44 md:w-56 shrink-0 flex justify-center items-center relative" >
            {/* Bintang / Star Sparkle di dekat ilustrasi tanaman */}
            <img
              src={circleStarImg}
              alt=""
              className="absolute -top-6 -left-8 md:-left-10 w-7 h-auto pointer-events-none z-20"
            />
            <img
              src={ilustrasiTujuan}
              alt="Ilustrasi Tujuan Penghijauan"
              className="w-full h-auto object-contain relative z-10"
            />
          </motion.div>
        </motion.div>

        {/* 5. TARGET PENGGUNA SECTION */}
        <div className="space-y-12 text-center relative">
          {/* Polkadot Kiri Section */}
          <img
            src={polkadotImg}
            alt=""
            className="absolute top-1/2 -left-12 md:-left-20 -translate-y-1/2 w-24 md:w-32 opacity-80 pointer-events-none z-0"
          />

          <div className="relative inline-block">
            {/* Bintang / Star Sparkle di atas judul Target Pengguna */}
            <img
              src={circleStarImg}
              alt=""
              className="absolute -top-7 -right-10 md:-right-12 w-8 h-auto pointer-events-none"
            />
            <motion.h2
              className="font-header text-3xl md:text-4xl font-normal text-brand-dark"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              Target <span className="text-brand-green">Pengguna</span>
            </motion.h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {targetUsers.map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleUpCard}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition duration-200 relative z-10"
              >
                <img src={item.icon} alt={item.title} className="w-20 h-20 object-contain" />
                <h3 className="font-sans text-lg font-bold text-brand-dark pt-1">{item.title}</h3>
                <p className="font-sans color-brand-text text-sm md:text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 6. BANNER CTA */}
        <motion.div
          className="bg-[#FFEAD8] rounded-3xl p-8 md:p-12 border border-orange-100 flex flex-col md:flex-row items-center justify-start gap-8 md:gap-10 shadow-xs"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div className="w-32 md:w-40 shrink-0 flex justify-center">
            <img
              src={tanamanTanyaImg}
              alt="Siap Menghijaukan Area Kamu?"
              className="w-full h-auto object-contain"
            />
          </motion.div>
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="space-y-1">
              <h3 className="font-header text-2xl md:text-3xl font-normal text-brand-dark">
                Siap Menghijaukan Area Kamu?
              </h3>
              <p className="font-sans color-brand-text text-sm md:text-base">
                Mulai analisis untuk mencobanya langsung
              </p>
            </div>
            <div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link
                  to="/cek-kondisi-form"
                  className="font-sans inline-flex items-center gap-2 bg-brand-orange hover:bg-[#e87f2e] text-white px-8 py-3.5 rounded-2xl font-medium text-base transition shadow-xs"
                >
                  Mulai Analisis <span>&rarr;</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Rumput Panjang Bawah (Paling bawah sebelum footer - Full Screen Width) */}
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