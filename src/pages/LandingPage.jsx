import React from 'react';

import Hero from '../components/Hero';
import WhyTeduh from '../components/WhyTeduh';
import Features from '../components/Features';
import Faq from '../components/Faq';
import ContactBanner from '../components/ContactBanner';

import ilustrasiRumputPanjang from '../assets/images/ilustrasi-rumput-panjang.svg';

export default function LandingPage() {
    return (
        <div className="min-h-screen text-brand-dark font-sans overflow-hidden pt-12">

            {/* 1. HERO SECTION */}
            <Hero />

            {/* 2. TENTANG TEDUH KOTA */}
            <WhyTeduh />

            {/* 3. MENGAPA & CARA KERJA TEDUH KOTA */}
            <Features />

            {/* 4. FAQ SECTION */}
            <Faq />

            {/* 5. BANNER KONTAK */}
            <ContactBanner />

            {/* BG RUMPUT DI BAWAH */}
            <div className="w-full relative -mt-44 z-0 pointer-events-none">
                <img src={ilustrasiRumputPanjang} alt="Rumput Dekorasi" className="w-full h-auto object-cover object-bottom" />
            </div>

        </div>
    );
}