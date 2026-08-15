import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Import Gambar Header (Versi Light & Dark Terpisah)
import headerIllustration from '../assets/images/ilustrasi-meja-laptop.svg';
import headerIllustrationDark from '../assets/images/ilustrasi-meja-laptop-dark.svg';

// Import Dekorasi Polkadot & Rumput
import polkadotImg from '../assets/images/polkadot.svg';
import ilustrasiRumputPanjang from '../assets/images/ilustrasi-rumput-panjang.svg';

// Import Icon Tombol Kirim
import btnSendImg from '../assets/images/btn-send.svg';

// Konfigurasi Variasi Animasi
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error saat user mengetik
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi input wajib isi
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi!';
    if (!formData.email.trim()) newErrors.email = 'Email wajib diisi!';
    if (!formData.message.trim()) newErrors.message = 'Pesan tidak boleh kosong!';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-brand-bg dark:bg-mode-dark min-h-screen pt-28 md:pt-36 pb-0 overflow-x-hidden font-sans relative flex flex-col justify-between transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-12 md:space-y-16 relative w-full">

        {/* Polkadot 1: Pojok Kanan Atas */}
        <img
          src={polkadotImg}
          alt="Dekorasi Polkadot Kanan Atas"
          className="hidden md:block absolute -top-10 -right-12 md:-right-16 w-24 md:w-32 opacity-80 pointer-events-none z-0"
        />

        {/* 1. HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-2 relative z-10">
          {/* GAMBAR HEADER (Di ATAS pada HP/Tablet <md) */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end z-10 order-first md:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Gambar Versi Light (Hilang pas Dark Mode) */}
            <motion.img
              src={headerIllustration}
              alt="Ilustrasi Laptop Light"
              className="w-full max-w-lg md:max-w-xl h-auto object-contain dark:hidden"
            />

            {/* Gambar Versi Dark (Tampil HANYA pas Dark Mode) */}
            <motion.img
              src={headerIllustrationDark}
              alt="Ilustrasi Laptop Dark"
              className="w-full max-w-lg md:max-w-xl h-auto object-contain hidden dark:block"
            />
          </motion.div>

          {/* TEKS HEADER (Di BAWAH pada HP/Tablet <md) */}
          <motion.div
            className="space-y-3 max-w-lg text-center md:text-left z-10 order-last md:order-first w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-header text-4xl md:text-5xl font-normal text-brand-dark dark:text-white leading-tight">
              Punya <span className="text-brand-green">Pertanyaan?</span>
            </h1>
            <p className="font-sans text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
              Ada pertanyaan, saran, atau ingin bekerja sama? Tim Teduh Kota siap membantu.
            </p>
          </motion.div>

          {/* 2. SWITCHER GAMBAR HEADER (LIGHT VS DARK) */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              src={headerIllustration}
              alt="Ilustrasi Laptop Light"
              className="w-full max-w-lg md:max-w-xl h-auto object-contain drop-shadow-md dark:hidden"
            />
            <motion.img
              src={headerIllustrationDark}
              alt="Ilustrasi Laptop Dark"
              className="w-full max-w-lg md:max-w-xl h-auto object-contain drop-shadow-md hidden dark:block"
            />
          </motion.div>
        </div>

        {/* 3. FORM CARD SECTION */}
        <div className="relative">

          {/* Polkadot 2 & 3 */}
          <img
            src={polkadotImg}
            alt="Dekorasi Polkadot Kiri"
            className="hidden md:block absolute top-1/2 -left-12 md:-left-16 -translate-y-1/2 w-20 md:w-28 opacity-80 pointer-events-none z-0"
          />
          <img
            src={polkadotImg}
            alt="Dekorasi Polkadot Kanan Bawah"
            className="hidden md:block absolute -bottom-6 -right-12 md:-right-16 w-20 md:w-28 opacity-80 pointer-events-none z-0"
          />

          {/* Card Utama */}
          <motion.div
            className="bg-white dark:bg-card-dark-mode rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-card-dark-mode grid grid-cols-1 md:grid-cols-12 gap-10 items-start relative z-10 transition-colors duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            {/* Form Kirim Pesan */}
            <div className="md:col-span-7 space-y-6">
              <h2 className="font-header text-3xl md:text-4xl font-normal text-brand-dark dark:text-white">
                Kirim Pesan
              </h2>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Input Nama */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 font-sans">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama mu"
                    className={`w-full px-4 py-3 rounded-2xl border ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-line-dark focus:border-brand-green focus:ring-brand-green'
                    } text-sm focus:outline-none focus:ring-1 transition bg-white dark:bg-card-dark-mode text-gray-900 dark:text-line-dark placeholder-gray-400 dark:placeholder-gray-500 font-sans`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 font-semibold pt-0.5">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Input Email */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 font-sans">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email aktif mu"
                    className={`w-full px-4 py-3 rounded-2xl border ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-line-dark focus:border-brand-green focus:ring-brand-green'
                    } text-sm focus:outline-none focus:ring-1 transition bg-white dark:bg-card-dark-mode text-gray-900 dark:text-line-dark placeholder-gray-400 dark:placeholder-gray-500 font-sans`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 font-semibold pt-0.5">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Input Pesan */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 font-sans">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan yang ingin kamu sampaikan"
                    className={`w-full px-4 py-3 rounded-2xl border ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-line-dark focus:border-brand-green focus:ring-brand-green'
                    } text-sm focus:outline-none focus:ring-1 transition resize-none bg-white dark:bg-card-dark-mode text-gray-900 dark:text-line-dark placeholder-gray-400 dark:placeholder-gray-500 font-sans`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] text-red-500 font-semibold pt-0.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Tombol Kirim Pesan dengan Ikon Gambar */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    type="submit"
                    className="bg-brand-orange hover:bg-[#e08316] text-white font-semibold px-8 py-3 rounded-2xl text-sm transition flex items-center justify-center gap-2 shadow-sm font-sans cursor-pointer"
                  >
                    <span>Kirim Pesan</span>
                    <img 
                      src={btnSendImg} 
                      alt="Kirim Icon" 
                      className="w-4 h-4 object-contain inline-block"
                    />
                  </motion.button>
                </div>
              </form>
            </div>

            {/* Info Kontak & Embedded Google Maps */}
            <div className="md:col-span-5 md:border-l md:border-gray-100 dark:md:border-line-dark md:pl-10 space-y-6">
              <h3 className="font-header text-xl md:text-2xl font-normal text-brand-dark dark:text-white leading-snug">
                Kami disini untuk
                <span className="text-brand-green"> membantu!</span>
              </h3>

              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 font-sans">
                <div>
                  <p className="font-bold text-gray-800 dark:text-gray-200">Email</p>
                  <p className="text-gray-500 dark:text-gray-300">hai@teduhkota.id</p>
                </div>

                <div>
                  <p className="font-bold text-gray-800 dark:text-gray-200">Number</p>
                  <p className="text-gray-500 dark:text-gray-300">0811-0018-3210</p>
                </div>

                <div>
                  <p className="font-bold text-gray-800 dark:text-gray-200">Lokasi</p>
                  <p className="text-gray-500 dark:text-gray-300">Jakarta, Indonesia</p>
                </div>
              </div>

              {/* Embedded Google Maps */}
              <motion.div
                className="w-full h-48 md:h-52 rounded-2xl overflow-hidden border border-gray-100 dark:border-line-dark shadow-xs bg-white dark:bg-mode-dark"
              >
                <iframe
                  title="Peta Lokasi Teduh Kota"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.2825686007!2d106.75947800000001!3d-6.2297465!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e80d63d05d%3A0x2c2299c681ab8706!2sJakarta%2C%20Indonesia!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Rumput Panjang Bawah */}
      <div
        className="w-full h-24 md:h-32 lg:h-44 pointer-events-none relative z-10"
        style={{
          backgroundImage: `url(${ilustrasiRumputPanjang})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          backgroundSize: 'auto 100%'
        }}
      />

      {/* MODAL POP-UP CUSTOM */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[28px] p-8 max-w-md w-full text-center shadow-xl relative z-10 space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                Pesan Berhasil Terkirim!
              </h3>

              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Terima kasih <span className="font-semibold text-gray-700">{formData.name}</span>, pesan kamu sudah kami terima. Tim Teduh Kota akan segera membalas via email.
              </p>

              <div className="flex gap-4 pt-2 justify-center">
                <button
                  onClick={handleCloseModal}
                  className="w-full py-3 px-6 rounded-2xl border-2 border-brand-orange text-brand-orange font-bold hover:bg-orange-50 transition"
                >
                  Tutup
                </button>
                <button
                  onClick={handleCloseModal}
                  className="w-full py-3 px-6 rounded-2xl bg-brand-orange text-white font-bold hover:bg-opacity-90 transition shadow-md"
                >
                  Oke
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}