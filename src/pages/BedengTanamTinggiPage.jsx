import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import bedengTanamTinggiImg from '../assets/images/bedeng-tanam-tinggi.svg';
import polkadotImg from '../assets/images/polkadot.svg';
import ilusPot from '../assets/images/ilus-pot.png';
import ilusCheck from '../assets/images/ilus-check.png';
import ilusStar from '../assets/images/ilus-star.svg';
import ilusMenu from '../assets/images/ilus-menu.svg';
import perhatikanIcon from '../assets/images/perhatikan.svg';
import warnTamanBedengImg from '../assets/images/warn-taman-bedeng.svg';
import circleStarImg from '../assets/images/circle-star.svg';
import rumputPanjangImg from '../assets/images/ilustrasi-rumput-panjang.svg';

// --- animasi ---
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

export default function BedengTanamTinggiPage() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-brand-bg dark:bg-mode-dark font-sans transition-colors duration-300">


      <img src={polkadotImg} alt="" className="absolute top-48 -left-10 md:-left-14 w-20 md:w-28 opacity-80 pointer-events-none" />
      <img src={polkadotImg} alt="" className="absolute top-1/3 -right-10 md:-right-14 w-20 md:w-28 opacity-80 pointer-events-none" />
      <img src={polkadotImg} alt="" className="absolute bottom-1/3 -left-10 md:-left-14 w-20 md:w-28 opacity-80 pointer-events-none" />
      <img src={polkadotImg} alt="" className="absolute bottom-16 -right-10 md:-right-14 w-20 md:w-28 opacity-80 pointer-events-none" />

      <div className="pt-12 pb-48 md:pb-64 px-8 lg:px-16 max-w-7xl mx-auto relative">


        <Link
          to="/solusi-teduh"
          className="inline-flex items-center justify-center w-10 h-10 bg-brand-light-orange hover:bg-brand-orange text-white rounded-full shadow-sm hover:shadow-md transition-all mb-8 lg:mb-0 lg:absolute lg:left-8 lg:top-12 z-10" >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
        </Link>

        <div className="max-w-4xl mx-auto pt-2 lg:pt-0 relative z-10">


          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-header text-center mb-10">
            <span className="text-brand-dark dark:text-white">Bedeng Tanam</span> <span className="text-brand-green">Tinggi</span>
          </motion.h1>


          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full rounded-4xl overflow-hidden shadow-sm mb-16">
            <img
              src={bedengTanamTinggiImg}
              alt="Bedeng Tanam Tinggi"
              className="w-full h-auto object-cover"/>
          </motion.div>


          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}>

            {/* bagian apa itu? */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-card-dark-mode rounded-4xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(154,106,57,0.2)] hover:shadow-[0_8px_30px_-4px_rgba(154,106,57,0.3)] border border-transparent dark:border-line-dark transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <img src={ilusPot} alt="Apa itu?" className="w-28 md:w-36 h-auto" />
              </div>
              <div className="w-full">
                <h2 className="text-2xl md:text-3xl font-header mb-4">
                  <span className="text-brand-dark dark:text-white">Apa</span> <span className="text-brand-green">itu?</span>
                </h2>
                <p className="text-brand-dark/80 dark:text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                  Bedeng tanam tinggi merupakan area tanam yang dibuat lebih tinggi dari permukaan sekitarnya dan diisi dengan media tanam. Sistem ini memungkinkan pengguna mengatur kualitas media, drainase, serta susunan tanaman dengan lebih mudah. Raised bed telah digunakan untuk memperbaiki kondisi penanaman dan produktivitas taman.
                </p>
              </div>
            </motion.div>

            {/* cocok untuk */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-card-dark-mode rounded-4xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(154,106,57,0.2)] hover:shadow-[0_8px_30px_-4px_rgba(154,106,57,0.3)] border border-transparent dark:border-line-dark transition-all duration-300 flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="shrink-0">
                <img src={ilusCheck} alt="Cocok untuk" className="w-28 md:w-36 h-auto" />
              </div>
              <div className="w-full">
                <h2 className="text-2xl md:text-3xl font-header mb-4">
                  <span className="text-brand-dark dark:text-white">Cocok</span> <span className="text-brand-green">untuk</span>
                </h2>
                <ul className="list-disc pl-5 text-brand-dark/80 dark:text-gray-300 text-sm md:text-base space-y-2 font-medium">
                  <li>Halaman kecil hingga sedang.</li>
                  <li>Tanah yang padat atau kurang mendukung.</li>
                  <li>Area paving yang masih memungkinkan penempatan wadah besar.</li>
                  <li>Penanaman sayur, herbal, dan bunga.</li>
                </ul>
              </div>
            </motion.div>

            {/* manfaat utama */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-card-dark-mode rounded-4xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(154,106,57,0.2)] hover:shadow-[0_8px_30px_-4px_rgba(154,106,57,0.3)] border border-transparent dark:border-line-dark transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <img src={ilusStar} alt="Manfaat utama" className="w-28 md:w-36 h-auto" />
              </div>
              <div className="w-full">
                <h2 className="text-2xl md:text-3xl font-header mb-4">
                  <span className="text-brand-dark dark:text-white">Manfaat</span> <span className="text-brand-green">utama</span>
                </h2>
                <ul className="list-disc pl-5 text-brand-dark/80 dark:text-gray-300 text-sm md:text-base space-y-2 font-medium">
                  <li>Kondisi media tanam lebih mudah dikontrol.</li>
                  <li>Kapasitas tanam lebih besar daripada pot biasa.</li>
                  <li>Area tanam terlihat lebih rapi dan teratur.</li>
                </ul>
              </div>
            </motion.div>

            {/* cara menerapkan */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-card-dark-mode rounded-4xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(154,106,57,0.2)] hover:shadow-[0_8px_30px_-4px_rgba(154,106,57,0.3)] border border-transparent dark:border-line-dark transition-all duration-300 flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="shrink-0">
                <img src={ilusMenu} alt="Cara menerapkan" className="w-28 md:w-36 h-auto" />
              </div>
              <div className="w-full">
                <h2 className="text-2xl md:text-3xl font-header mb-4">
                  <span className="text-brand-dark dark:text-white">Cara</span> <span className="text-brand-green">menerapkan</span>
                </h2>
                <ol className="list-decimal pl-5 text-brand-dark/80 dark:text-gray-300 text-sm md:text-base space-y-2 font-medium">
                  <li>Tentukan ukuran dan posisi bedeng.</li>
                  <li>Gunakan bahan pembatas yang kuat dan aman.</li>
                  <li>Pastikan bagian bawah mempunyai drainase.</li>
                  <li>Isi dengan media tanam yang sesuai.</li>
                  <li>Atur jarak tanaman agar tidak terlalu padat.</li>
                </ol>
              </div>
            </motion.div>

            {/* perhatian */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-card-dark-mode rounded-4xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(154,106,57,0.2)] hover:shadow-[0_8px_30px_-4px_rgba(154,106,57,0.3)] border border-transparent dark:border-line-dark transition-all duration-300 flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <img src={perhatikanIcon} alt="Perhatikan" className="w-10 md:w-12 h-auto" />
                  <h3 className="text-xl md:text-2xl font-header font-normal text-brand-dark dark:text-white">
                    Perhatikan
                  </h3>
                </div>
                <p className="text-brand-dark/80 dark:text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                  Setelah terisi media dan air, bedeng akan cukup berat dan sulit dipindahkan. Pastikan lokasi telah ditentukan dengan baik.
                </p>
              </div>
              <div className="shrink-0 flex justify-center w-full md:w-auto">
                <img src={warnTamanBedengImg} alt="Peringatan Taman Bedeng" className="w-40 md:w-48 h-auto object-contain" />
              </div>
            </motion.div>
          </motion.div>

          {/* video */}
          <motion.div
            className="mt-20 md:mt-28 pb-8 relative z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-header text-center mb-12">
              <span className="text-brand-dark dark:text-white">Contoh Penerapan</span> <span className="text-brand-green">Bedeng Tanam Tinggi</span>
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <img
                src={circleStarImg}
                alt=""
                className="absolute -left-6 md:-left-10 -bottom-2 md:-bottom-4 w-6 md:w-8 z-20 pointer-events-none"/>
              <div className="relative z-10 w-full aspect-video rounded-4xl overflow-hidden shadow-lg border-4 border-white bg-brand-gray/20">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/M_ZWWfsuA78"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* rumput panjang */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-48 pointer-events-none z-10"
        style={{
          backgroundImage: `url(${rumputPanjangImg})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          backgroundSize: 'auto 100%'
        }}
      ></div>
    </div>
  );
}