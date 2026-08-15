import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import komponen-komponen utama (punya temenmu)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyTeduh from './components/WhyTeduh';
import Features from './components/Features';
import FooterSection from './components/Footer';

// Import halaman
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SolusiPage from './pages/SolusiPage';
import CekKondisiPage from './pages/CekKondisiPage';
import CekKondisiFormPage from './pages/CekKondisiFormPage';

// Import Halaman Detail Solusi (punya temenmu)
import TamanPotFleksibelPage from './pages/TamanPotFleksibelPage';
import TamanVertikalBertrellisPage from './pages/TamanVertikalBertrellisPage';
import BedengTanamTinggiPage from './pages/BedengTanamTinggiPage';
import TamanTanamLangsungPage from './pages/TamanTanamLangsungPage';
import PohonPeneduhPage from './pages/PohonPeneduhPage';
import TamanResapanPage from './pages/TamanResapanPage';
import TamanAtapPage from './pages/TamanAtapPage';

// --- LANDING PAGE PUNYAMU ---
import LandingPage from './pages/LandingPage'; 

// Komponen gabungan khusus untuk Landing Page versi lama (Punya temenmu)
function HomePage() {
  return (
    <>
      <Hero />
      <WhyTeduh />
      <Features />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-bg text-gray-800 font-sans flex flex-col justify-between">
        {/* Navbar tampil di semua halaman */}
        <Navbar />

        {/* Bagian utama yang berubah tergantung URL */}
        <main className="grow">
          <Routes>
            {/* 1. KETIKA BUKA http://localhost:5173/ OTO-MATIS REDIRECT KE /beranda */}
            <Route path="/" element={<Navigate to="/beranda" replace />} />

            {/* 2. ROUTE UTAMA LANDING PAGE */}
            <Route path="/beranda" element={<LandingPage />} /> 

            {/* Optional: Jika halaman lama temanmu masih ingin diakses melalui /home */}
            <Route path="/home" element={<HomePage />} /> 

            {/* Route Halaman Lainnya */}
            <Route path="/tentang" element={<AboutPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/solusi-teduh" element={<SolusiPage />} />
            <Route path="/cek-kondisi" element={<CekKondisiPage />} />
            <Route path="/cek-kondisi-form" element={<CekKondisiFormPage />} />
            <Route path="/solusi-teduh/taman-pot-fleksibel" element={<TamanPotFleksibelPage />} />
            <Route path="/solusi-teduh/taman-vertikal-bertrellis" element={<TamanVertikalBertrellisPage />} />
            <Route path="/solusi-teduh/bedeng-tanam-tinggi" element={<BedengTanamTinggiPage />} />
            <Route path="/solusi-teduh/taman-tanam-langsung" element={<TamanTanamLangsungPage />} />
            <Route path="/solusi-teduh/pohon-peneduh" element={<PohonPeneduhPage />} />
            <Route path="/solusi-teduh/taman-resapan" element={<TamanResapanPage />} />
            <Route path="/solusi-teduh/taman-atap" element={<TamanAtapPage />} />
          </Routes>
        </main>

        {/* FooterSection tampil di semua halaman */}
        <FooterSection />
      </div>
    </Router>
  );
}