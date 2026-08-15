import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import tanamanLoveImg from '../assets/images/tanaman-love.svg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function About() {
  return (
    <motion.section 
      className="py-16 md:py-20 px-8 lg:px-16 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="bg-white dark:bg-card-dark-mode rounded-3xl p-10 md:p-14 border border-gray-100 dark:border-line-dark shadow-card flex flex-col md:flex-row items-center gap-10 md:gap-14 hover:shadow-md transition duration-300">
        <div className="w-48 md:w-56 shrink-0 flex justify-center">
          <img
            src={tanamanLoveImg}
            alt="Ilustrasi Tanaman Teduh Kota"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h2 className="font-header text-3xl md:text-4xl font-normal text-brand-dark dark:text-white">
            Tentang <span className="text-brand-green font-normal">Teduh Kota</span>
          </h2>
          <p className="font-sans text-brand-text dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Teduh Kota adalah website rekomendasi penghijauan yang dirancang untuk membantu masyarakat menentukan jenis tanaman yang paling sesuai berdasarkan kondisi area yang dimiliki, seperti pencahayaan, luas ruang, dan lokasi penanaman.
            <br /><br />
            Melalui proses analisis yang sederhana, Teduh Kota memberikan rekomendasi tanaman beserta solusi penghijauan yang praktis tanpa harus memiliki pengetahuan khusus tentang tanaman.
          </p>
          <div>
            <Link to="/tentang" className="font-sans inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-3.5 rounded-2xl font-medium text-base hover:bg-[#e87f2e] transition shadow-xs">
              Lihat lebih Detail <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}