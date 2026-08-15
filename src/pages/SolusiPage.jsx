import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import Assets
import ilustrasiSolusiTeduh from '../assets/images/ilustrasi-solusi-teduh.svg';
import headerIllustrationDark from '../assets/images/ilustrasi-meja-laptop-dark.svg';
import ilustrasiRumputPanjang from '../assets/images/ilustrasi-rumput-panjang.svg';
import tamanPotImg from '../assets/images/taman-pot.png';
import vertikalBertrellisImg from '../assets/images/vertikal-bertrellis.svg';
import bedengTanamTinggiImg from '../assets/images/bedeng-tanam-tinggi.png';
import tamanTanamLangsungImg from '../assets/images/taman-tanam-langsung.png';
import pohonPeneduhImg from '../assets/images/pohon-peneduh.png';
import tamanResapanImg from '../assets/images/taman-resapan.png';
import tamanAtapImg from '../assets/images/taman-atap.png';

// --- Variants Animasi Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function SolusiPage() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const slider = sliderRef.current;
    
    const savedIndex = sessionStorage.getItem('last_viewed_solusi_index');
    if (savedIndex !== null && slider) {
      const idx = parseInt(savedIndex, 10);
      const timer = setTimeout(() => {
        if (sliderRef.current) {
          const cards = sliderRef.current.querySelectorAll('.snap-start');
          if (cards[idx]) {
            const cardLeft = cards[idx].offsetLeft;
            sliderRef.current.scrollTo({ left: cardLeft, behavior: 'smooth' });
          }
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      checkScrollPosition();
      slider.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      return () => {
        slider.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const getBadgeStyle = (badgeText) => {
    switch (badgeText) {
      case "Mudah Diterapkan":
        return "bg-[#ECF7E4] text-[#689B2B]"; // Hijau Muda
      case "Perlu Pengecekan Lokasi":
        return "bg-[#FFF4E5] text-[#D97706]"; // Oranye Kekuningan
      case "Perlu Pemeriksaan Teknis":
        return "bg-[#FEE2E2] text-[#B91C1C]"; // Merah Muda
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const solutions = [
    {
      title: "Taman Pot Fleksibel",
      subtitle: "Container Garden",
      badge: "Mudah Diterapkan",
      description: "Solusi penghijauan menggunakan pot yang mudah disusun, dipindahkan, dan disesuaikan dengan ruang terbatas.",
      image: tamanPotImg,
      link: "/solusi-teduh/taman-pot-fleksibel"
    },
    {
      title: "Taman Vertikal Bertrellis",
      subtitle: "Trellis Vertical Garden",
      badge: "Mudah Diterapkan",
      description: "Penghijauan yang memanfaatkan dinding, pagar, atau rangka vertikal tanpa membutuhkan banyak ruang lantai.",
      image: vertikalBertrellisImg,
      link: "/solusi-teduh/taman-vertikal-bertrellis"
    },
    {
      title: "Bedeng Tanam Tinggi",
      subtitle: "Raised Bed Garden",
      badge: "Mudah Diterapkan",
      description: "Area tanam yang ditinggikan untuk memudahkan pengaturan media tanam serta cocok bagi tanaman hias maupun produktif.",
      image: bedengTanamTinggiImg,
      link: "/solusi-teduh/bedeng-tanam-tinggi"
    },
    {
      title: "Taman Tanam Langsung",
      subtitle: "In-Ground Garden",
      badge: "Mudah Diterapkan",
      description: "Penghijauan dengan menanam langsung pada tanah terbuka untuk menciptakan area hijau yang lebih alami dan beragam.",
      image: tamanTanamLangsungImg,
      link: "/solusi-teduh/taman-tanam-langsung"
    },
    {
      title: "Pohon Peneduh",
      subtitle: "Shade Tree",
      badge: "Perlu Pengecekan Lokasi",
      description: "Solusi penghijauan jangka panjang untuk menciptakan keteduhan dan mengurangi paparan panas pada area terbuka.",
      image: pohonPeneduhImg,
      link: "/solusi-teduh/pohon-peneduh"
    },
    {
      title: "Taman Resapan",
      subtitle: "Rain Garden",
      badge: "Perlu Pengecekan Lokasi",
      description: "Taman cekung yang dirancang untuk menampung sementara dan membantu meresapkan limpasan air hujan ke dalam tanah.",
      image: tamanResapanImg,
      link: "/solusi-teduh/taman-resapan"
    },
    {
      title: "Taman Atap",
      subtitle: "Rooftop Garden",
      badge: "Perlu Pemeriksaan Teknis",
      description: "Pemanfaatan area atap sebagai ruang hijau untuk menambah vegetasi pada kawasan dengan keterbatasan lahan.",
      image: tamanAtapImg,
      link: "/solusi-teduh/taman-atap"
    }
  ];

  return (
    <div className="bg-brand-bg dark:bg-mode-dark min-h-screen pt-28 md:pt-36 pb-0 relative overflow-x-hidden font-sans flex flex-col justify-between transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 space-y-16 md:space-y-24 relative z-10 w-full pb-48 md:pb-72">

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center pt-2 md:pt-4"
        >
          {/* Kanan: Ilustrasi Header (Di ATAS pada HP/Tablet <md) */}
          <div className="w-full flex justify-center lg:justify-end items-center order-first md:order-last">
            <img
              src={ilustrasiSolusiTeduh}
              alt="Ilustrasi Solusi Teduh Light"
              className="w-full max-w-md lg:max-w-xl object-contain z-10 dark:hidden"
            />
            <img
              src={headerIllustrationDark}
              alt="Ilustrasi Solusi Teduh Dark"
              className="w-full max-w-md lg:max-w-xl object-contain z-10 hidden dark:block"
            />
          </div>

          {/* Kiri: Teks Header (Di BAWAH pada HP/Tablet <md) */}
          <div className="space-y-6 text-center md:text-left order-last md:order-first w-full">
            <h1 className="font-header text-4xl md:text-5xl lg:text-6xl font-normal text-brand-dark dark:text-white leading-[1.15] tracking-tight">
              Solusi <span className="text-brand-green">Teduh Kota</span>
            </h1>
            
            <p className="text-brand-text dark:text-gray-300 font-sans text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Temukan berbagai pilihan konsep penghijauan cerdas yang sudah disesuaikan dengan kebutuhan dan ukuran area kamu.
            </p>
          </div>
        </motion.div>

        {/* Slider Cards Section (Geser 2-2) */}
        <div className="relative px-10 sm:px-14 md:px-16">

          {/* Tombol Kiri */}
          <motion.button
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            whileTap={canScrollLeft ? { scale: 0.9 } : {}}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 md:left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border border-gray-200 dark:border-line-dark ${
              canScrollLeft
                ? 'bg-white dark:bg-card-dark-mode text-brand-dark dark:text-white hover:bg-brand-orange dark:hover:bg-brand-orange hover:text-white cursor-pointer opacity-100'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 opacity-40 pointer-events-none cursor-not-allowed'
            }`}
            aria-label="Scroll Left"
          >
            ❮
          </motion.button>

          {/* Container Scroll */}
          <div
            ref={sliderRef}
            className="flex items-stretch overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              /* Hide scrollbar for Chrome, Safari and Opera */
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {solutions.map((item, idx) => (
              <div
                key={idx}
                className="w-full md:w-[calc(50%-0.75rem)] flex-none snap-start bg-white dark:bg-card-dark-mode rounded-3xl p-5 shadow-[0_4px_20px_-4px_rgba(154,106,57,0.2)] border border-brand-gray/30 dark:border-line-dark flex flex-col justify-between transition-colors duration-300"
              >
                {/* Image & Badge */}
                <div className="relative rounded-2xl overflow-hidden h-44 mb-4 shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  {/* Badge Overlay */}
                  <div className={`absolute top-3 right-3 px-3 py-1.5 text-xs font-sans font-bold rounded-xl shadow-sm tracking-wide ${getBadgeStyle(item.badge)}`}>
                    {item.badge}
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col grow justify-between px-1 pb-1">
                  {/* Title & Subtitle Area */}
                  <div className="mb-2.5">
                    <h3 className="font-header text-xl md:text-2xl text-[#4A4A4A] dark:text-white bg-[#F2FBE9] dark:bg-transparent inline-block px-2 py-0.5 dark:p-0 mb-1 rounded-md self-start">
                      {item.title}
                    </h3>
                    <p className="font-sans font-extrabold text-[#4A4A4A] dark:text-gray-300 text-xs md:text-sm tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description Area */}
                  <p className="font-sans text-brand-dark/70 dark:text-gray-300 text-sm leading-relaxed mb-5 grow font-medium">
                    {item.description}
                  </p>

                  {/* Button (Always aligned at bottom) */}
                  <Link
                    to={item.link}
                    onClick={() => sessionStorage.setItem('last_viewed_solusi_index', idx)}
                    className="w-full mt-auto"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl border border-brand-orange text-brand-orange bg-white dark:bg-card-dark-mode font-sans font-bold text-sm hover:bg-brand-orange hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Lihat Detail <span className="text-lg font-normal leading-none">&rarr;</span>
                    </motion.div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Kanan */}
          <motion.button
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            whileTap={canScrollRight ? { scale: 0.9 } : {}}
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 md:right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border border-gray-200 dark:border-line-dark ${
              canScrollRight
                ? 'bg-white dark:bg-card-dark-mode text-brand-dark dark:text-white hover:bg-brand-orange dark:hover:bg-brand-orange hover:text-white cursor-pointer opacity-100'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 opacity-40 pointer-events-none cursor-not-allowed'
            }`}
            aria-label="Scroll Right"
          >
            ❯
          </motion.button>
        </div>

      </div>

      {/* Background Ilustrasi Rumput Bawah */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full z-0 pointer-events-none"
      >
        <img
          src={ilustrasiRumputPanjang}
          alt="Ilustrasi Rumput Panjang"
          className="w-full h-auto object-cover object-bottom transform scale-110 md:scale-125 origin-bottom"
        />
      </motion.div>

    </div>
  );
}