import { motion } from 'framer-motion';
import iconSolusi from '../assets/images/icon-solusi.svg';
import iconMudah from '../assets/images/icon-mudah.svg';
import iconDampak from '../assets/images/icon-dampak.svg';
import polkadotImg from '../assets/images/polkadot.svg';
import circleStarImg from '../assets/images/circle-star.svg';
import ilusStarImg from '../assets/images/ilus-star.svg';
import step1Img from '../assets/images/step1-jawab.svg';
import step2Img from '../assets/images/step2-analisis.svg';
import step3Img from '../assets/images/step3-rekomendasi.svg';

export default function Features() {
  const whyUsData = [
    {
      icon: iconSolusi,
      title: "Solusi Yang Tepat",
      description: "Rekomendasi disesuaikan dengan kondisi area berdasarkan analisis yang dilakukan untuk mendapatkan solusi yang tepat."
    },
    {
      icon: iconMudah,
      title: "Mudah Digunakan",
      description: "Analisis dilakukan melalui pertanyaan singkat dan interaktif untuk mendapatkan rekomendasi."
    },
    {
      icon: iconDampak,
      title: "Berdampak Positif",
      description: "Setiap rekomendasi membantu memaksimalkan ruang hijau untuk lingkungan yang lebih sehat."
    }
  ];

  const stepsData = [
    {
      step: "01",
      title: "Jawab Pertanyaan",
      description: "Isi beberapa pertanyaan singkat mengenai kondisi area yang kamu miliki.",
      image: step1Img
    },
    {
      step: "02",
      title: "Analisis Area",
      description: "Sistem akan menganalisa data yang kamu berikan untuk memahami kondisi area.",
      image: step2Img
    },
    {
      step: "03",
      title: "Dapatkan Rekomendasi",
      description: "Terima rekomendasi penghijauan yang paling sesuai dengan saran penempatan.",
      image: step3Img
    }
  ];

  return (
    <div className="bg-brand-bg dark:bg-mode-dark py-16 md:py-24 px-6 space-y-28 md:space-y-36 relative overflow-hidden transition-colors duration-300">
      {/* Polkadot Decoration Top Right Flush on Screen Right Edge */}
      <img 
        src={polkadotImg} 
        alt="Dekorasi Polkadot" 
        className="absolute top-12 right-0 translate-x-1/3 md:translate-x-1/4 w-28 md:w-36 opacity-90 pointer-events-none z-0" 
      />

      {/* SECTION 1: Mengapa Teduh Kota? */}
      <section className="max-w-7xl mx-auto text-center space-y-12 relative px-8 lg:px-16 z-10">

        <div className="space-y-3 relative z-10 max-w-xl mx-auto">
          {/* Top Left Star Accent */}
          <img 
            src={circleStarImg} 
            alt="Bintang Dekorasi" 
            className="absolute -top-6 -left-8 md:-left-12 w-8 md:w-10 pointer-events-none" 
          />
          
          {/* Bottom Right Star Accent */}
          <img 
            src={circleStarImg} 
            alt="Bintang Dekorasi" 
            className="absolute -bottom-4 -right-6 md:-right-10 w-8 md:w-10 pointer-events-none scale-x-[-1]" 
          />

          <h2 className="font-header text-3xl md:text-4xl font-normal text-brand-dark dark:text-white">
            Mengapa <span className="text-brand-green font-normal">Teduh Kota?</span>
          </h2>
          <p className="font-sans text-brand-text dark:text-gray-300 text-sm md:text-base">
            Teduh Kota hadir untuk membantu kamu menemukan solusi penghijauan yang tepat, cepat dan mudah.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {whyUsData.map((item, index) => (
            <div key={index} className="relative h-full">
              {/* Polkadot Decoration Bottom Left Flush on Screen Left Edge */}
              {index === 0 && (
                <img 
                  src={polkadotImg} 
                  alt="Dekorasi Polkadot" 
                  className="absolute -bottom-8 left-0 -translate-x-1/2 md:-translate-x-1/3 w-28 md:w-36 opacity-90 pointer-events-none z-0" 
                />
              )}

              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-card-dark-mode rounded-3xl p-8 shadow-card border border-gray-100 dark:border-line-dark flex flex-col items-center text-center space-y-4 hover:shadow-md transition duration-300 relative z-10 h-full"
              >
                <img src={item.icon} alt={item.title} className="w-20 h-20 object-contain" />
                <h3 className="font-sans text-lg font-extrabold text-brand-dark dark:text-white">{item.title}</h3>
                <p className="font-sans text-brand-text dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Cara Kerja Teduh Kota? */}
      <section className="max-w-7xl mx-auto text-center space-y-14 pt-6 md:pt-10 px-8 lg:px-16 z-10 relative">
        
        <div className="space-y-3 relative z-10 max-w-xl mx-auto">
          {/* Top Right Star Accent */}
          <img 
            src={circleStarImg} 
            alt="Bintang Dekorasi" 
            className="absolute -top-4 -right-4 md:-right-10 w-8 md:w-9 pointer-events-none" 
          />
          
          {/* Bottom Left Star Accent */}
          <img 
            src={circleStarImg} 
            alt="Bintang Dekorasi" 
            className="absolute -bottom-4 -left-4 md:-left-10 w-8 md:w-9 pointer-events-none scale-x-[-1]" 
          />

          <h2 className="font-header text-3xl md:text-4xl font-normal text-brand-dark dark:text-white">
            Cara Kerja <span className="text-brand-green font-normal">Teduh Kota?</span>
          </h2>
          <p className="font-sans text-brand-text dark:text-gray-300 text-sm md:text-base">
            Ikuti tiga langkah mudah untuk mendapatkan rekomendasi penghijauan yang sesuai dengan kebutuhanmu.
          </p>
        </div>

        {/* Steps Grid with Connector Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch">
          {stepsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center relative">

              {/* Main Step Card */}
              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-card-dark-mode rounded-3xl p-8 shadow-card border border-gray-100 dark:border-line-dark w-full flex flex-col items-center justify-between min-h-[460px] text-center hover:shadow-md transition duration-300"
              >

                <div className="flex flex-col items-center w-full">
                  {/* Step Number Badge */}
                  <span className="font-sans bg-brand-light-orange text-white font-extrabold text-lg px-6 py-2 rounded-xl mb-5 inline-block shadow-xs">
                    {item.step}
                  </span>

                  <h3 className="font-sans text-xl font-bold text-brand-dark dark:text-white mb-3">{item.title}</h3>
                  <p className="font-sans text-brand-text dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card Mockup Graphic Container */}
                <div className="w-full bg-brand-peach dark:bg-mode-dark/60 rounded-2xl p-4 flex items-center justify-center">
                  <img src={item.image} alt={item.title} className="w-full h-auto max-h-44 object-contain" />
                </div>

              </motion.div>

              {/* Arrow Connector for Desktop (Hidden on last item) */}
              {index < stepsData.length - 1 && (
                <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-brand-dark text-white rounded-full items-center justify-center shadow-md">
                  <span className="text-xl font-bold">&rarr;</span>
                </div>
              )}

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}