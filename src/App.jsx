import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-gray-800 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <FooterSection />
      </main>
    </div>
  );
}