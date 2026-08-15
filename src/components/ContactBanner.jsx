import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import tanamanTanyaImg from '../assets/images/tanaman-tanya.svg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ContactBanner() {
  return (
    <motion.section
      className="pt-12 md:pt-16 pb-52 px-8 lg:px-16 max-w-7xl mx-auto relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="bg-brand-peach rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-start gap-8 md:gap-12 relative overflow-hidden z-10">

        {/* Left Illustration */}
        <div className="w-36 md:w-44 shrink-0 flex justify-center relative z-10">
          <img
            src={tanamanTanyaImg}
            alt="Masih belum menemukan jawaban"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4 text-center md:text-left flex-1 relative z-10">
          <div className="space-y-1.5">
            <h3 className="font-header text-2xl md:text-3xl font-normal text-brand-dark leading-snug">
              Masih belum menemukan jawaban?
            </h3>
            <p className="font-sans text-sm md:text-base text-brand-text">
              Tim kami siap membantu kamu.
            </p>
          </div>

          <div>
            <Link to="/kontak" className="font-sans inline-block bg-brand-orange hover:bg-brand-accent text-white px-8 py-3.5 rounded-2xl font-medium text-base transition shadow-xs">
              Hubungi Kami &rarr;
            </Link>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
