import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// asset
import tamanTanamLangsungImg from '../assets/images/taman-tanam-langsung.svg';
import polkadotImg from '../assets/images/polkadot.svg';
import ilusPot from '../assets/images/ilus-pot.png';
import ilusCheck from '../assets/images/ilus-check.png';
import ilusStar from '../assets/images/ilus-star.svg';
import ilusMenu from '../assets/images/ilus-menu.svg';
import perhatikanIcon from '../assets/images/perhatikan.svg';
import warnTamanTanamImg from '../assets/images/warn-taman-tanam.svg';
import circleStarImg from '../assets/images/circle-star.svg';
import rumputPanjangImg from '../assets/images/ilustrasi-rumput-panjang.svg';

// --- animasi ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
  }
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const floatPolkadot = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  }
};

export default function TamanTanamLangsungPage() {
  return (
    <div className="relative overflow-hidden min-h-screen dark:bg-mode-dark font-sans transition-colors duration-300">

      <img src={polkadotImg}
        alt=""
        className="absolute top-48 -left-10 md:-left-14 w-20 md:w-28 opacity-80 pointer-events-none"/>
      <img src={polkadotImg}
        alt=""
        className="absolute top-1/3 -right-10 md:-right-14 w-20 md:w-28 opacity-80 pointer-events-none"/>
      <img src={polkadotImg}
        alt=""
        className="absolute bottom-1/3 -left-10 md:-left-14 w-20 md:w-28 opacity-80 pointer-events-none" />
      <img src={polkadotImg}
        alt=""
        className="absolute bottom-16 -right-10 md:-right-14 w-20 md:w-28 opacity-80 pointer-events-none"/>

      <div className="pt-12 pb-48 md:pb-64 px-8 lg:px-16 max-w-7xl mx-auto relative">
        {/* Tombol Back */}
        <Link
          to="/solusi-teduh"
          className="inline-flex items-center justify-center w-10 h-10 bg-brand-light-orange hover:bg-brand-orange text-white rounded-full shadow-sm hover:shadow-md transition-all mb-8 lg:mb-0 lg:absolute lg:left-8 lg:top-12 z-10">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
        </Link>

        <div className="max-w-4xl mx-auto pt-2 lg:pt-0 relative z-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-header text-center mb-10" >
            <span className="text-brand-dark dark:text-white">Taman Tanam</span> <span className="text-brand-green">Langsung</span>
          </motion.h1>


          <motion.div
            initial="hidden"
            animate="visible"
            variants={zoomIn}
            className="w-full rounded-4xl overflow-hidden shadow-sm mb-16">
            <img
              src={tamanTanamLangsungImg}
              alt="Taman Tanam Langsung"
              className="w-full h-auto object-cover"/>
          </motion.div>

          <div className="space-y-8">

            {/* apa itu ? */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideFromLeft}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-card-dark-mode rounded-4xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(154,106,57,0.2)] border border-transparent dark:border-line-dark transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <img src={ilusPot} alt="Apa itu?" className="w-28 md:w-36 h-auto" />
              </div>
              <div className="w-full">
                <h2 className="text-2xl md:text-3xl font-header mb-4">
                  <span className="text-brand-dark dark:text-white">Apa</span> <span className="text-brand-green">itu?</span>
                </h2>
                <p className="text-brand-dark/80 dark:text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                  Penghijauan dengan menanam tanaman langsung pada tanah asli. Bentuknya dapat berupa taman bunga, tanaman penutup tanah, semak, tanaman herbal, atau kombinasi beberapa lapisan vegetasi. Pemanfaatan kebun atau halaman yang ditanami tumbuhan termasuk bentuk ruang terbuka hijau privat.
                </p>
              </div>
            </motion.div>

            {/* cocok untuk */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideFromRight}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-card-dark-mode rounded-4xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(154,106,57,0.2)] border border-transparent dark:border-line-dark transition-all duration-300 flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="shrink-0">
                <img src={ilusCheck} alt="Cocok untuk" className="w-28 md:w-36 h-auto" />
              </div>
              <div className="w-full">
                <h2 className="text-2xl md:text-3xl font-header mb-4">
                  <span className="text-brand-dark dark:text-white">Cocok</span> <span className="text-brand-green">untuk</span>
                </h2>
                <ul className="list-disc pl-5 text-brand-dark/80 dark:text-gray-300 text-sm md:text-base space-y-2 font-medium">
                  <li>Halaman yang mempunyai tanah terbuka.</li>
                  <li>Area yang boleh diubah secara permanen.</li>
                  <li>Pengguna yang ingin menanam vegetasi beragam.</li>
                  <li>Area kecil, sedang, maupun luas.</li>
                </ul>
              </div>
            </motion.div>

            {/* manfaat */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideFromLeft}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-card-dark-mode rounded-4xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(154,106,57,0.2)] border border-transparent dark:border-line-dark transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <img src={ilusStar} alt="Manfaat utama" className="w-28 md:w-36 h-auto" />
              </div>
              <div className="w-full">
                <h2 className="text-2xl md:text-3xl font-header mb-4">
                  <span className="text-brand-dark dark:text-white">Manfaat</span> <span className="text-brand-green">utama</span>
                </h2>
                <ul className="list-disc pl-5 text-brand-dark/80 dark:text-gray-300 text-sm md:text-base space-y-2 font-medium">
                  <li>Pilihan jenis dan ukuran tanaman lebih beragam.</li>
                  <li>Tidak membutuhkan banyak wadah tambahan.</li>
                  <li>Dapat membantu mempertahankan permukaan yang lebih alami dan mudah meresapkan air.</li>
                </ul>
              </div>
            </motion.div>

            {/* cara menerapkan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideFromRight}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-card-dark-mode rounded-4xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(154,106,57,0.2)] border border-transparent dark:border-line-dark transition-all duration-300 flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="shrink-0">
                <img src={ilusMenu} alt="Cara menerapkan" className="w-28 md:w-36 h-auto" />
              </div>
              <div className="w-full">
                <h2 className="text-2xl md:text-3xl font-header mb-4">
                  <span className="text-brand-dark dark:text-white">Cara</span> <span className="text-brand-green">menerapkan</span>
                </h2>
                <ol className="list-decimal pl-5 text-brand-dark/80 dark:text-gray-300 text-sm md:text-base space-y-2 font-medium">
                  <li>Bersihkan area dari sampah dan gulma berlebihan.</li>
                  <li>Periksa kondisi tanah serta aliran air.</li>
                  <li>Tentukan susunan dan jarak tanaman.</li>
                  <li>Tanam sesuai kebutuhan cahaya dan ruang tumbuh.</li>
                  <li>Tambahkan mulsa dan lakukan perawatan berkala.</li>
                </ol>
              </div>
            </motion.div>

            {/* perhatian */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-card-dark-mode rounded-4xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(154,106,57,0.2)] border border-transparent dark:border-line-dark transition-all duration-300 flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <img src={perhatikanIcon} alt="Perhatikan" className="w-10 md:w-12 h-auto" />
                  <h3 className="text-xl md:text-2xl font-header font-normal text-brand-dark dark:text-white">
                    Perhatikan
                  </h3>
                </div>
                <p className="text-brand-dark/80 dark:text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                  Hindari memilih tanaman hanya berdasarkan tampilannya. Pertimbangkan kebutuhan cahaya, air, kondisi tanah, dan ukurannya ketika dewasa.
                </p>
              </div>
              <div className="shrink-0 flex justify-center w-full md:w-auto">
                <img src={warnTamanTanamImg} alt="Peringatan Taman Tanam Langsung" className="w-40 md:w-48 h-auto object-contain" />
              </div>
            </motion.div>

          </div>

          {/* video */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mt-20 md:mt-28 pb-8 relative z-20">
            <h2 className="text-3xl md:text-4xl font-header text-center mb-12">
              <span className="text-brand-dark dark:text-white">Contoh Penerapan</span> <span className="text-brand-green">Taman Tanam Langsung</span>
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <img src={circleStarImg}
                alt=""
                className="absolute -left-6 md:-left-10 -bottom-2 md:-bottom-4 w-6 md:w-8 z-20 pointer-events-none"/>
              <motion.div
                variants={zoomIn}
                className="relative z-10 w-full aspect-video rounded-4xl overflow-hidden shadow-lg border-4 border-white bg-brand-gray/20">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Q3tSTO5doJ4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </motion.div>
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