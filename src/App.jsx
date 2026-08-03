export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-header text-4xl font-extrabold text-brand-green mb-4">
        Temukan Solusi untuk Ruang Hijau 🌱
      </h1>
      <p className="text-gray-600 max-w-md mb-6">
        Jika teks ini muncul dengan font rapi dan tombol di bawah berwarna oranye, artinya custom warna kamu BERHASIL!
      </p>
      <button className="bg-brand-orange hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl shadow-md transition">
        Mulai Analisis →
      </button>
    </div>
  );
}