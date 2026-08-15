import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoTeduhKota from '../assets/images/logo-teduhkota.svg';
import ilustrasiFooter from '../assets/images/ilustrasi-footer.svg';
import btnSendImg from '../assets/images/btn-send.svg';

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Validasi jika email kosong / hanya spasi
    if (!email.trim()) {
      setError('Email tidak boleh kosong!');
      return;
    }

    setError('');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEmail('');
  };

  return (
    <footer className="bg-white pt-12 pb-0 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 px-6 relative z-10">

        {/* Col 1: Brand & Socials */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logoTeduhKota} alt="Logo Teduh Kota" className="w-9 h-9" />
            <span className="font-header text-xl text-brand-dark">Teduh Kota</span>
          </div>
          <p className="font-sans text-brand-dark font-medium text-xs leading-relaxed">
            Teduh Kota membantu kamu menemukan solusi penghijauan yang tepat, cepat dan mudah berdasarkan kondisi area.
          </p>
          <div className="flex gap-3 pt-2">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-brand-gray/20 flex items-center justify-center cursor-pointer hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-brand-gray/20 flex items-center justify-center cursor-pointer hover:bg-[#E4405F] text-[#E4405F] hover:text-white transition"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            {/* Twitter / X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full bg-brand-gray/20 flex items-center justify-center cursor-pointer hover:bg-[#1DA1F2] text-[#1DA1F2] hover:text-white transition"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-brand-gray/20 flex items-center justify-center cursor-pointer hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white transition"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>

        {/* Col 2: Menu */}
        <div className="space-y-3">
          <h4 className="font-header font-medium text-brand-dark text-sm">Menu</h4>
          <ul className="space-y-2 text-xs text-brand-dark font-medium">
            <li><a href="#beranda" className="hover:text-brand-green transition">Beranda</a></li>
            <li><a href="#tentang" className="hover:text-brand-green transition">Tentang</a></li>
            <li><a href="#cek-kondisi" className="hover:text-brand-green transition">Cek Kondisi</a></li>
            <li><a href="#solusi" className="hover:text-brand-green transition">Solusi Teduh</a></li>
            <li><a href="#contact" className="hover:text-brand-green transition">Kontak</a></li>
          </ul>
        </div>

        {/* Col 3: Informasi */}
        <div className="space-y-3">
          <h4 className="font-header font-medium text-brand-dark text-sm">Informasi</h4>
          <ul className="space-y-2 text-xs text-brand-dark font-medium">
            <li><a href="#tentang" className="hover:text-brand-green transition">Tentang kami</a></li>
            <li><a href="#cara-kerja" className="hover:text-brand-green transition">Cara Kerja</a></li>
            <li><a href="#faq" className="hover:text-brand-green transition">FAQ</a></li>
            <li><a href="#privasi" className="hover:text-brand-green transition">Kebijakan Privasi</a></li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div className="space-y-3">
          <h4 className="font-header font-medium text-brand-dark text-sm">Dapatkan Update</h4>
          <p className="text-brand-dark font-medium text-xs">
            Butuh bantuan? hubungi kami jika ada yang ingin ditanyakan.
          </p>

          <form onSubmit={handleSubscribe} noValidate className="space-y-1">
            <div className="flex gap-2 items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Masukkan email"
                className={`w-full bg-white border ${
                  error ? 'border-red-500' : 'border-brand-orange'
                } rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 ${
                  error ? 'focus:ring-red-500' : 'focus:ring-brand-orange'
                } text-brand-dark font-medium transition`}
              />
              <button
                type="submit"
                className="bg-brand-orange hover:bg-brand-orange/90 active:scale-95 transition-all w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer shrink-0"
              >
                <img
                  src={btnSendImg}
                  alt="Kirim Email"
                  className="w-4 h-4 object-contain block mx-auto"
                />
              </button>
            </div>

            {/* Peringatan Error Custom */}
            {error && (
              <p className="text-[11px] text-red-500 font-semibold pt-0.5 flex items-center gap-1">
                 {error}
              </p>
            )}
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto border-t border-brand-gray/50 pt-6 pb-6 px-6 flex justify-between items-end text-xs text-brand-dark font-bold relative z-10">
        <p>© 2026 Teduh Kota. All Rights Reserved</p>

        {/* Ilustrasi Footer */}
        <img
          src={ilustrasiFooter}
          alt="Ilustrasi Footer"
          className="absolute right-0 md:right-8 bottom-0 h-10 md:h-14 object-contain pointer-events-none"
        />
      </div>

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

            {/* Kartu Pop-Up */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[28px] p-8 max-w-md w-full text-center shadow-xl relative z-10 space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                Email Berhasil Terkirim!
              </h3>

              <p className="text-sm text-gray-500 font-medium">
                Terima kasih telah mendaftar dengan email <span className="font-semibold text-gray-700">{email}</span>. Kami akan mengirimkan update terbaru untukmu.
              </p>

              {/* Tombol Aksi */}
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
    </footer>
  );
}