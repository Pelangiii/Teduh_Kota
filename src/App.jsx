import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import FooterSection from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingUpButton from './components/FloatingUpButton';
import LandingPage from './pages/LandingPage';
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

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen dark:bg-mode-dark dark:text-gray-100 font-sans flex flex-col justify-between transition-colors duration-300">
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Navigate to="/beranda" replace />} />
            <Route path="/beranda" element={<LandingPage />} />
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

        <FooterSection />
        <FloatingUpButton />
      </div>
    </Router>
  );
}