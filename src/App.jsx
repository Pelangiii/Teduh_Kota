import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import komponen-komponen utama
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import FooterSection from './components/Footer';

// Import halaman
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SolusiPage from './pages/SolusiPage';
import CekKondisiPage from './pages/CekKondisiPage';
import CekKondisiFormPage from './pages/CekKondisiFormPage';
import TamanPotFleksibelPage from './pages/TamanPotFleksibelPage';
import TamanVertikalBertrellisPage from './pages/TamanVertikalBertrellisPage';
import BedengTanamTinggiPage from './pages/BedengTanamTinggiPage';
import TamanTanamLangsungPage from './pages/TamanTanamLangsungPage';
import PohonPeneduhPage from './pages/PohonPeneduhPage';
import TamanResapanPage from './pages/TamanResapanPage';
import TamanAtapPage from './pages/TamanAtapPage';
// Komponen gabungan khusus untuk Landing Page (Home)
function HomePage() {
  return (
    <>
      <Hero />
      <About />
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
            <Route path="/" element={<HomePage />} />
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