import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import polkadotImg from '../assets/images/polkadot.svg';
import circleStarImg from '../assets/images/circle-star.svg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Apakah rekomendasi yang diberikan selalu sama?",
      a: "Tidak. Rekomendasi disesuaikan dengan kondisi area, tingkat pencahayaan, dan kebutuhan ruang yang kamu masukkan saat analisis."
    },
    {
      q: "Bagaimana sistem menentukan rekomendasi?",
      a: "Sistem menguraikan input mengenai suhu, kelembapan, dan batasan area untuk mencocokkan jenis tanaman serta tipe solusi terbaik."
    },
    {
      q: "Apakah saya harus ahli tanaman?",
      a: "Sama sekali tidak! Teduh Kota dirancang khusus untuk pemula agar bisa merawat tanaman dengan praktis."
    },
    {
      q: "Bagaimana jika kondisi area saya berubah?",
      a: "Kamu bisa melakukan analisis ulang kapan saja untuk mendapatkan rekomendasi tanaman baru yang sesuai."
    },
    {
      q: "Apakah rekomendasi yang diberikan selalu sama?",
      a: "Setiap saran disesuaikan secara dinamis berdasar input terbaru yang kamu berikan di kuesioner."
    }
  ];

  return (
    <div className="w-full relative overflow-hidden py-16 md:py-20">

      {/* Polkadot Top Left - Full Screen Edge Cut in Half */}
      <img 
        src={polkadotImg} 
        alt="Dekorasi Polkadot" 
        className="absolute top-8 -left-14 md:-left-18 w-32 md:w-40 opacity-90 pointer-events-none z-0" 
      />

      {/* Polkadot Middle Right - Full Screen Edge Cut in Half */}
      <img 
        src={polkadotImg} 
        alt="Dekorasi Polkadot" 
        className="absolute top-1/2 -translate-y-1/2 -right-14 md:-right-18 w-32 md:w-40 opacity-90 pointer-events-none z-0" 
      />

      {/* Polkadot Bottom Left - Full Screen Edge Cut in Half */}
      <img 
        src={polkadotImg} 
        alt="Dekorasi Polkadot" 
        className="absolute -bottom-8 -left-14 md:-left-18 w-32 md:w-40 opacity-90 pointer-events-none z-0" 
      />

      <motion.section 
        className="px-8 lg:px-16 max-w-7xl mx-auto space-y-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="text-center space-y-4 relative z-10 max-w-xl mx-auto">
          {/* Top Left Star Accent */}
          <img 
            src={circleStarImg} 
            alt="Bintang Dekorasi" 
            className="absolute -top-6 -left-6 md:-left-12 w-8 md:w-9 pointer-events-none" 
          />
          
          {/* Bottom Right Star Accent */}
          <img 
            src={circleStarImg} 
            alt="Bintang Dekorasi" 
            className="absolute -bottom-2 -right-6 md:-right-12 w-8 md:w-9 pointer-events-none scale-x-[-1]" 
          />

          <h2 className="font-header text-3xl md:text-4xl font-normal text-brand-dark">
            Masih Ada <span className="text-brand-green font-normal">Pertanyaan?</span>
          </h2>
          <p className="font-sans text-brand-text text-base">Teduh Kota hadir untuk membantu kamu menemukan solusi yang tepat.</p>
        </div>

        <div className="space-y-5 relative z-10">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className={`rounded-3xl border transition-all duration-300 ${
                  isOpen ? 'bg-brand-green/10 border-brand-green/30' : 'bg-white border-gray-100 shadow-card hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center font-sans font-bold text-base md:text-lg text-brand-dark transition cursor-pointer"
                >
                  <div className="flex items-center gap-5 md:gap-6">
                    <span 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center font-sans font-extrabold text-lg md:text-xl bg-brand-green text-white shrink-0 shadow-xs"
                    >
                      0{index + 1}
                    </span>
                    <span className="font-sans font-bold text-brand-dark text-base md:text-lg">{faq.q}</span>
                  </div>
                  <motion.span 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-brand-green text-3xl font-bold ml-4 inline-block"
                  >
                    {isOpen ? '−' : '+'}
                  </motion.span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 font-sans text-sm md:text-base text-brand-text leading-relaxed pl-23 md:pl-28">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

    </div>
  );
}
