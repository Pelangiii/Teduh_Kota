import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ilustrasiSolusiTeduh from '../assets/images/ilustrasi-solusi-teduh.svg';
import ilustrasiRumputPanjang from '../assets/images/ilustrasi-rumput-panjang.svg';

export default function SolusiPage() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      // Scroll by exactly the container width (2 cards)
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      // Scroll by exactly the container width (2 cards)
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const getBadgeStyle = (badgeText) => {
    switch (badgeText) {
      case "Mudah Diterapkan":
        return "bg-[#ECF7E4] text-[#689B2B]"; // Hijau Muda
      case "Perlu Pengecekan Lokasi":
        return "bg-[#FFF4E5] text-[#D97706]"; // Oranye Kekuningan
      case "Perlu Pemeriksaan Teknis":
        return "bg-[#FEE2E2] text-[#B91C1C]"; // Merah Muda
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Data disesuaikan persis dengan gambar referensi & permintaan
  const solutions = [
    {
      title: "Taman Pot Fleksibel",
      subtitle: "Container Garden",
      badge: "Mudah Diterapkan",
      description: "Solusi penghijauan menggunakan pot yang mudah disusun, dipindahkan, dan disesuaikan dengan ruang terbatas.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80",
      link: "/solusi-teduh/taman-pot-fleksibel"
    },
    {
      title: "Taman Vertikal Bertrellis",
      subtitle: "Trellis Vertical Garden",
      badge: "Mudah Diterapkan",
      description: "Penghijauan yang memanfaatkan dinding, pagar, atau rangka vertikal tanpa membutuhkan banyak ruang lantai.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&auto=format&fit=crop&q=80",
      link: "/solusi-teduh/taman-vertikal-bertrellis"
    },
    {
      title: "Bedeng Tanam Tinggi",
      subtitle: "Raised Bed Garden",
      badge: "Mudah Diterapkan",
      description: "Area tanam yang ditinggikan untuk memudahkan pengaturan media tanam serta cocok bagi tanaman hias maupun produktif.",
      image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&auto=format&fit=crop&q=80",
      link: "/solusi-teduh/bedeng-tanam-tinggi"
    },
    {
      title: "Taman Tanam Langsung",
      subtitle: "In-Ground Garden",
      badge: "Mudah Diterapkan",
      description: "Penghijauan dengan menanam langsung pada tanah terbuka untuk menciptakan area hijau yang lebih alami dan beragam.",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=80",
      link: "/solusi-teduh/taman-tanam-langsung"
    },
    {
      title: "Pohon Peneduh",
      subtitle: "Shade Tree",
      badge: "Perlu Pengecekan Lokasi",
      description: "Solusi penghijauan jangka panjang untuk menciptakan keteduhan dan mengurangi paparan panas pada area terbuka.",
      image: "https://images.unsplash.com/photo-1545241047-6083a36a1d18?w=600&auto=format&fit=crop&q=80",
      link: "/solusi-teduh/pohon-peneduh"
    },
    {
      title: "Taman Resapan",
      subtitle: "Rain Garden",
      badge: "Perlu Pengecekan Lokasi",
      description: "Taman cekung yang dirancang untuk menampung sementara dan membantu meresapkan limpasan air hujan ke dalam tanah.",
      image: "https://images.unsplash.com/photo-1598512752271-33f913a5af13?w=600&auto=format&fit=crop&q=80",
      link: "/solusi-teduh/taman-resapan"
    },
    {
      title: "Taman Atap",
      subtitle: "Rooftop Garden",
      badge: "Perlu Pemeriksaan Teknis",
      description: "Pemanfaatan area atap sebagai ruang hijau untuk menambah vegetasi pada kawasan dengan keterbatasan lahan.",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&auto=format&fit=crop&q=80",
      link: "/solusi-teduh/taman-atap"
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen relative overflow-hidden flex flex-col justify-start pt-20">

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">

        {/* Kiri: Teks Header */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-header text-brand-dark leading-[1.1] tracking-tight">
            Solusi <span className="text-brand-green block md:inline">Teduh Kota</span>
          </h1>
          <p className="text-brand-dark/70 font-sans font-medium text-sm lg:text-base leading-relaxed max-w-105 mx-auto md:mx-0">
            Temukan berbagai pilihan konsep penghijauan cerdas yang sudah disesuaikan dengan kebutuhan dan ukuran area kamu.
          </p>
        </div>

        {/* Kanan: Ilustrasi Header (Tanpa drop-shadow) */}
        <div className="relative flex justify-center lg:justify-end items-center mt-8 md:mt-0">
          <img
            src={ilustrasiSolusiTeduh}
            alt="Ilustrasi Solusi Teduh"
            className="w-full max-w-80 lg:max-w-112.5 object-contain z-10"
          />
        </div>
      </div>

      {/* Slider Cards Section (Geser 2-2) */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full relative z-10 pb-48 md:pb-72">
        <div className="relative px-12 md:px-20">

          {/* Tombol Kiri */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-brand-dark hover:bg-brand-orange text-white rounded-full flex items-center justify-center transition"
          >
            ❮
          </button>

          {/* Container Scroll */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              /* Hide scrollbar for Chrome, Safari and Opera */
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {solutions.map((item, idx) => (
              <div
                key={idx}
                className="w-full md:w-[calc(50%-0.75rem)] flex-none snap-start bg-white rounded-3xl p-4 shadow-[0_4px_20px_-4px_rgba(154,106,57,0.2)] border border-brand-gray/30 flex flex-col h-full"
              >
                {/* Image & Badge */}
                <div className="relative rounded-2xl overflow-hidden h-48 md:h-52 mb-5">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  {/* Badge Overlay */}
                  <div className={`absolute top-3 right-3 px-3 py-1.5 text-xs font-sans font-bold rounded-xl shadow-sm tracking-wide ${getBadgeStyle(item.badge)}`}>
                    {item.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col grow px-1 pb-1">
                  <div className="mb-3">
                    <h3 className="font-header text-2xl text-[#4A4A4A] bg-[#F2FBE9] inline-block px-2 py-0.5 mb-1 rounded-md">
                      {item.title}
                    </h3>
                    <p className="font-sans font-extrabold text-[#4A4A4A] text-[13px] md:text-sm tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-brand-dark/70 text-[13px] md:text-sm leading-relaxed mb-6 grow font-medium">
                    {item.description}
                  </p>

                  {/* Button */}
                  <Link
                    to={item.link}
                    className="w-full py-3 rounded-xl border border-brand-orange text-brand-orange bg-white font-sans font-bold text-sm hover:bg-brand-orange hover:text-white transition-all flex items-center justify-center gap-2 mt-auto"
                  >
                    Lihat Detail <span className="text-lg font-normal leading-none">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Kanan */}
          <button
            onClick={scrollRight}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-brand-dark hover:bg-brand-orange text-white rounded-full flex items-center justify-center transition"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Background Ilustrasi Rumput Bawah */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <img
          src={ilustrasiRumputPanjang}
          alt="Ilustrasi Rumput Panjang"
          className="w-full h-auto object-cover object-bottom transform scale-110 md:scale-125 origin-bottom"
        />
      </div>

    </div>
  );
}