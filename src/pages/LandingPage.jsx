import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import sebelumSesudahImg from '../assets/images/sebelum-sesudah.svg';
import ilustrasiRumputPanjang from '../assets/images/ilustrasi-rumput-panjang.svg';
import tanamanLoveImg from '../assets/images/tanaman-love.svg'; 
import iconSolusi from '../assets/images/icon-solusi.svg';
import iconMudah from '../assets/images/icon-mudah.svg';
import iconDampak from '../assets/images/icon-dampak.svg';
import step1Img from '../assets/images/step1-jawab.svg';
import step2Img from '../assets/images/step2-analisis.svg';
import step3Img from '../assets/images/step3-rekomendasi.svg';
import tanamanTanyaImg from '../assets/images/tanaman-tanya.svg'; 
import laptop from '../assets/images/laptop.svg';

// Variasi animasi reusable
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function LandingPage() {
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
        <div className="bg-brand-bg min-h-screen text-brand-dark font-sans overflow-hidden pt-12">

            {/* 1. HERO SECTION */}
            <section className="relative pt-12 pb-8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 relative">
                    <motion.div 
                        className="space-y-8"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1 className="font-header text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
                            Temukan Solusi <br />
                            untuk <span className="text-brand-green">Ruang Hijau</span>
                        </h1>
                        <p className="font-sans text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                            Temukan rekomendasi penghijauan berdasarkan kondisi area di sekitarmu melalui sistem rekomendasi yang sederhana dan mudah digunakan.
                        </p>
                        <div className="flex flex-wrap gap-5 pt-2">
                            <Link to="/cek-kondisi-form" className="font-sans bg-brand-orange hover:bg-[#e87f2e] text-white px-8 py-4 rounded-2xl font-medium text-base transition shadow-xs flex items-center gap-3">
                                Mulai Analisis <span>&rarr;</span>
                            </Link>
                            <Link to="/solusi-teduh" className="font-sans bg-white border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-4 rounded-2xl font-medium text-base transition">
                                Lihat lebih lanjut
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="relative flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src={sebelumSesudahImg}
                            alt="Sebelum dan Sesudah Ruang Hijau"
                            className="w-full max-w-lg lg:max-w-xl object-contain"
                        />
                    </motion.div>
                </div>

                <motion.div 
                    className="w-full mt-20 md:mt-24 relative left-0 right-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <img
                        src={laptop}
                        alt="Ilustrasi Meja dan Laptop"
                        className="w-full h-auto min-w-[105%] -ml-[5%] md:min-w-full md:ml-0 scale-105 transform translate-y-12 md:translate-y-16 object-cover"
                    />
                </motion.div>
            </section>

            {/* 2. TENTANG TEDUH KOTA */}
            <motion.section 
                className="py-20 px-8 max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div className="bg-white rounded-3xl p-10 md:p-14 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-10 md:gap-14">
                    <div className="w-48 md:w-56 shrink-0 flex justify-center">
                        <img
                            src={tanamanLoveImg}
                            alt="Ilustrasi Tanaman Teduh Kota"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="font-header text-3xl md:text-4xl font-extrabold text-brand-dark">
                            Tentang <span className="text-brand-green">Teduh Kota</span>
                        </h2>
                        <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed">
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

            {/* 3. MENGAPA TEDUH KOTA */}
            <section className="py-16 px-8 max-w-7xl mx-auto text-center relative">
                <motion.div 
                    className="mb-12 space-y-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp}
                >
                    <h2 className="font-header text-3xl md:text-4xl font-extrabold text-brand-dark">
                        Mengapa <span className="text-brand-green">Teduh Kota?</span>
                    </h2>
                    <p className="font-sans text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                        Teduh Kota hadir untuk membantu kamu menemukan solusi penghijauan yang tepat, cepat, dan mudah.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition">
                        <div className="w-24 h-24 rounded-2xl bg-[#FFE4D6] flex items-center justify-center p-3">
                            <img src={iconSolusi} alt="Solusi Yang Tepat" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="font-header text-xl font-bold text-gray-800 pt-2">Solusi Yang Tepat</h3>
                        <p className="font-sans text-gray-500 text-sm leading-relaxed">
                            Rekomendasi disesuaikan dengan kondisi area berdasarkan analisis yang dilakukan untuk mendapatkan solusi yang tepat
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition">
                        <div className="w-24 h-24 rounded-2xl bg-[#FFE4D6] flex items-center justify-center p-3">
                            <img src={iconMudah} alt="Mudah Digunakan" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="font-header text-xl font-bold text-gray-800 pt-2">Mudah Digunakan</h3>
                        <p className="font-sans text-gray-500 text-sm leading-relaxed">
                            Analisis dilakukan melalui pertanyaan singkat dan interaktif untuk mendapatkan rekomendasi
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition">
                        <div className="w-24 h-24 rounded-2xl bg-[#FFE4D6] flex items-center justify-center p-3">
                            <img src={iconDampak} alt="Berdampak Positif" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="font-header text-xl font-bold text-gray-800 pt-2">Berdampak Positif</h3>
                        <p className="font-sans text-gray-500 text-sm leading-relaxed">
                            Setiap rekomendasi membantu memaksimalkan ruang hijau untuk lingkungan yang lebih sehat
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* 4. CARA KERJA TEDUH KOTA */}
            <section className="py-20 px-8 max-w-7xl mx-auto text-center">
                <motion.div 
                    className="mb-14 space-y-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp}
                >
                    <h2 className="font-header text-3xl md:text-4xl font-extrabold text-brand-dark">
                        Cara Kerja <span className="text-brand-green">Teduh Kota?</span>
                    </h2>
                    <p className="font-sans text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                        Ikuti tiga langkah mudah untuk mendapatkan rekomendasi penghijauan yang sesuai dengan kebutuhanmu
                    </p>
                </motion.div>

                <motion.div 
                    className="flex flex-col md:flex-row items-center justify-center gap-6 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex-1 w-full flex flex-col items-center justify-between min-h-[460px] text-center">
                        <div className="flex flex-col items-center w-full">
                            <span className="font-sans bg-[#FFB03A] text-white font-extrabold text-lg px-6 py-2 rounded-xl mb-6 inline-block">
                                01
                            </span>
                            <h3 className="font-header text-xl font-bold text-gray-800 mb-3">Jawab Pertanyaan</h3>
                            <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6">
                                Isi beberapa pertanyaan singkat mengenai kondisi area yang kamu miliki
                            </p>
                        </div>
                        <div className="w-full bg-[#FFE4D6] rounded-2xl p-4 flex items-center justify-center">
                            <img src={step1Img} alt="Jawab Pertanyaan" className="w-full h-auto max-h-44 object-contain" />
                        </div>
                    </motion.div>

                    <div className="hidden md:flex shrink-0 z-10">
                        <div className="w-12 h-12 rounded-full bg-[#4A4A4A] text-white flex items-center justify-center shadow-md">
                            <span className="text-xl font-bold">&rarr;</span>
                        </div>
                    </div>

                    <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex-1 w-full flex flex-col items-center justify-between min-h-[460px] text-center">
                        <div className="flex flex-col items-center w-full">
                            <span className="font-sans bg-[#FFB03A] text-white font-extrabold text-lg px-6 py-2 rounded-xl mb-6 inline-block">
                                02
                            </span>
                            <h3 className="font-header text-xl font-bold text-gray-800 mb-3">Analisis Area</h3>
                            <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6">
                                Sistem akan menganalisa data yang kamu berikan untuk memahami kondisi area
                            </p>
                        </div>
                        <div className="w-full bg-[#FFE4D6] rounded-2xl p-4 flex items-center justify-center">
                            <img src={step2Img} alt="Analisis Area" className="w-full h-auto max-h-44 object-contain" />
                        </div>
                    </motion.div>

                    <div className="hidden md:flex shrink-0 z-10">
                        <div className="w-12 h-12 rounded-full bg-[#4A4A4A] text-white flex items-center justify-center shadow-md">
                            <span className="text-xl font-bold">&rarr;</span>
                        </div>
                    </div>

                    <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex-1 w-full flex flex-col items-center justify-between min-h-[460px] text-center">
                        <div className="flex flex-col items-center w-full">
                            <span className="font-sans bg-[#FFB03A] text-white font-extrabold text-lg px-6 py-2 rounded-xl mb-6 inline-block">
                                03
                            </span>
                            <h3 className="font-header text-xl font-bold text-gray-800 mb-3">Dapatkan Rekomendasi</h3>
                            <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6">
                                Terima rekomendasi penghijauan yang paling sesuai dengan saran penempatan
                            </p>
                        </div>
                        <div className="w-full bg-[#FFE4D6] rounded-2xl p-4 flex items-center justify-center">
                            <img src={step3Img} alt="Dapatkan Rekomendasi" className="w-full h-auto max-h-44 object-contain" />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* 5. FAQ SECTION */}
            <motion.section 
                className="py-24 px-8 max-w-5xl mx-auto space-y-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <div className="text-center space-y-4">
                    <h2 className="font-header text-3xl md:text-4xl font-extrabold">
                        Masih Ada <span className="text-brand-green">Pertanyaan?</span>
                    </h2>
                    <p className="font-sans text-gray-500 text-base">Teduh Kota hadir untuk membantu kamu menemukan solusi yang tepat.</p>
                </div>

                <div className="space-y-5">
                    {faqs.map((faq, index) => {
                        const isOpen = openFaq === index;
                        return (
                            <div 
                                key={index} 
                                className={`rounded-3xl border border-gray-100 overflow-hidden shadow-xs transition-colors duration-200 ${
                                    isOpen ? 'bg-[#F2F8E9]' : 'bg-white'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left p-6 md:p-8 flex justify-between items-center font-sans font-bold text-base md:text-lg text-gray-800 transition"
                                >
                                    <div className="flex items-center gap-4 md:gap-5">
                                        <span 
                                            className={`text-sm w-9 h-9 md:w-10 md:h-10 rounded-2xl flex items-center justify-center font-bold transition-colors ${
                                                isOpen 
                                                    ? 'bg-brand-green text-white' 
                                                    : 'bg-[#EAF2D7] text-brand-green'
                                            }`}
                                        >
                                            0{index + 1}
                                        </span>
                                        <span>{faq.q}</span>
                                    </div>
                                    <span className="text-brand-green text-2xl font-extrabold ml-4">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>
                                
                                {isOpen && (
                                    <div className="px-6 md:px-8 pb-8 pt-0 font-sans text-sm md:text-base text-gray-600 leading-relaxed pl-19 md:pl-23">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </motion.section>

            {/* 6. BANNER KONTAK */}
            <motion.section 
                className="pt-12 pb-52 px-8 max-w-5xl mx-auto relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div className="bg-[#FFE0B2]/50 border border-[#FFE0B2] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-start gap-8 md:gap-10">
                    <div className="w-32 md:w-40 shrink-0 flex justify-center">
                        <img 
                            src={tanamanTanyaImg} 
                            alt="Masih belum menemukan jawaban" 
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="space-y-4 text-center md:text-left flex-1">
                        <div className="space-y-1">
                            <h3 className="font-header text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Masih belum menemukan <br className="hidden md:block" /> jawaban?
                            </h3>
                            <p className="font-sans text-sm md:text-base text-gray-600">
                                Tim kami siap membantu kamu.
                            </p>
                        </div>

                        <div>
                            <Link to="/kontak" className="font-sans inline-block bg-brand-orange hover:bg-[#e87f2e] text-white px-8 py-3.5 rounded-2xl font-medium text-base transition shadow-xs">
                                Hubungi Kami &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* BG RUMPUT DI BAWAH */}
            <div className="w-full relative -mt-44 z-0 pointer-events-none">
                <img src={ilustrasiRumputPanjang} alt="Rumput Dekorasi" className="w-full h-auto object-cover object-bottom" />
            </div>

        </div>
    );
}