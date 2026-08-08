import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import komponen-komponen utama
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import FooterSection from './components/FooterSection';

// Import halaman
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SolusiPage from './pages/SolusiPage';

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
      <div className="min-h-screen bg-[#FAF8F5] text-gray-800 font-sans flex flex-col justify-between">
        {/* Navbar tampil di semua halaman */}
        <Navbar />

        {/* Bagian utama yang berubah tergantung URL */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/solusi-teduh" element={<SolusiPage />} />
          </Routes>
        </main>

        {/* FooterSection tampil di semua halaman */}
        <FooterSection />
      </div>
    </Router>
  );
}