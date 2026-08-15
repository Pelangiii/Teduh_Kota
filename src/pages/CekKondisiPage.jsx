import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import cekKondisiImg from '../assets/images/cek-kondisi.svg';
import ilustrasiRumputPanjang from '../assets/images/ilustrasi-rumput-panjang.svg';

// Variants Animasi
const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

export default function CekKondisiPage() {
  return (
    <div className="bg-brand-bg min-h-screen relative overflow-hidden flex flex-col justify-center pt-20 font-sans">

      {/* Konten Utama */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-40 md:pb-56">

        {/* Kolom Kiri: Teks Konten (Stagger Animation) */}
        <motion.div
          className="space-y-6 text-left"
          initial="hidden"
          animate="visible"
          variants={contentContainerVariants}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-header leading-[1.15] tracking-tight"
          >
            <span className="text-brand-dark block mb-2">Jawab Pertanyaan, dan</span>
            <span className="text-brand-green block">Dapatkan Solusi</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-brand-text font-sans text-base md:text-lg leading-relaxed max-w-xl"
          >
            Lengkapkan informasi mengenai area yang kamu ingin hijaukan, jawabanmu akan membantu kami untuk memberikan hasil yang sesuai.
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-2 flex">
            <Link
              to="/cek-kondisi-form"
              className="font-sans inline-flex items-center gap-2 bg-brand-orange hover:bg-[#e87f2e] text-white px-8 py-4 rounded-2xl font-medium text-base transition shadow-xs cursor-pointer"
            >
              Mulai Analisis <span>&rarr;</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Foto Cek Kondisi (Hero & Floating Animation) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="relative flex justify-center lg:justify-end items-center mt-8 md:mt-0">
          <img
            src={cekKondisiImg}
            alt="Cek Kondisi"
            className="w-full max-w-md lg:max-w-xl object-contain z-10" />
        </motion.div>

      </div>

      {/* Background Rumput / Ilustrasi */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-full z-0">
        <img
          src={ilustrasiRumputPanjang}
          alt="Ilustrasi Rumput"
          className="w-full h-auto object-cover object-bottom pointer-events-none"
        />
      </motion.div>

    </div>
  );
}