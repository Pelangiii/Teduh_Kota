import React from 'react';

import Hero from '../components/Hero';
import WhyTeduh from '../components/WhyTeduh';
import Features from '../components/Features';
import Faq from '../components/Faq';
import ContactBanner from '../components/ContactBanner';

import ilustrasiRumputPanjang from '../assets/images/ilustrasi-rumput-panjang.svg';

export default function LandingPage() {
    return (
        <div className="min-h-screen text-brand-dark dark:text-white bg-brand-bg dark:bg-mode-dark font-sans overflow-hidden pt-12 transition-colors duration-300">

            {/* 1. hero section */}
            <Hero />

            {/* 2. about teduh kota */}
            <WhyTeduh />

            {/* 3. mengapa serta cara kerja teduh kota */}
            <Features />

            {/* 4. FAQ section */}
            <Faq />

            {/* 5. kontak */}
            <ContactBanner />

            {/* rumput */}
            <div className="w-full relative -mt-44 z-0 pointer-events-none">
                <img src={ilustrasiRumputPanjang} alt="Rumput Dekorasi" className="w-full h-auto object-cover object-bottom" />
            </div>

        </div>
    );
}