import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { calculateRecommendations } from '../utils/recommendationEngine';
import { GLOBAL_METADATA, SOLUTIONS } from '../data/recommendationConfig';

// Import Assets
import ilustrasiRumputPanjang from '../assets/images/ilustrasi-rumput-panjang.svg';
import rumahIcon from '../assets/images/rumah.svg';
import perkantoranIcon from '../assets/images/perkantoran.svg';
import sekolahIcon from '../assets/images/sekolah.svg';
import ruangPublikIcon from '../assets/images/ruang-publik.svg';
import checkJawabanIcon from '../assets/images/check-jawaban.svg';
import smileIcon from '../assets/images/smile.svg';
import tanamanIcon from '../assets/images/tanaman.svg';

// --- Variants Animasi ---
const pageTransition = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: 'easeIn' } }
};

const modalTransition = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15, ease: 'easeIn' } }
};

// --- Sub-Komponen Radio Option ---
const RadioOption = ({ icon, label, desc, selectedValue, onChange, value }) => {
  const isSelected = selectedValue === value;
  return (
    <motion.label
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-colors
        ${isSelected ? 'border-brand-green bg-[#F9FDF5]' : 'border-brand-gray/30 hover:border-brand-gray/60 bg-white'}`}
    >
      {icon && (
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          {icon}
        </div>
      )}
      <div className="flex flex-col grow">
        <span className="font-bold text-brand-dark text-base">{label}</span>
        {desc && <span className="text-brand-dark/60 text-xs font-medium">{desc}</span>}
      </div>
      <input
        type="radio"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="hidden"
      />
    </motion.label>
  );
};

// --- Sub-Komponen Checkbox Option ---
const CheckboxOption = ({ label, desc, selectedValues, onChange, value, maxAllowed }) => {
  const isSelected = selectedValues.includes(value);
  const isDisabled = !isSelected && selectedValues.length >= maxAllowed;

  const handleClick = (e) => {
    e.preventDefault();
    if (isDisabled) return;
    onChange(value);
  };

  return (
    <motion.div
      whileHover={!isDisabled ? { scale: 1.01 } : {}}
      whileTap={!isDisabled ? { scale: 0.99 } : {}}
      onClick={handleClick}
      className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-colors
        ${isSelected ? 'border-brand-green bg-[#F9FDF5]' : 'border-brand-gray/30 bg-white'}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-brand-gray/60'}`}
    >
      <div className="flex flex-col grow">
        <span className="font-bold text-brand-dark text-base">{label}</span>
        {desc && <span className="text-brand-dark/60 text-xs font-medium">{desc}</span>}
      </div>
    </motion.div>
  );
};

export default function CekKondisiFormPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  // State Sesi 1
  const [locationType, setLocationType] = useState('');
  const [locationName, setLocationName] = useState('');
  const [customLocationType, setCustomLocationType] = useState('');

  // State Sesi 2
  const [areaType, setAreaType] = useState('');
  const [customAreaType, setCustomAreaType] = useState('');
  const [areaSize, setAreaSize] = useState('');
  const [surfaceType, setSurfaceType] = useState('');
  const [sunExposure, setSunExposure] = useState('');
  const [waterAccess, setWaterAccess] = useState('');
  const [rainCondition, setRainCondition] = useState('');
  const [maintenanceFrequency, setMaintenanceFrequency] = useState('');

  // State Conditional
  const [wallSupport, setWallSupport] = useState(null);
  const [treeSpace, setTreeSpace] = useState(null);
  const [roofStructure, setRoofStructure] = useState(null);

  // State Sesi 3
  const [goals, setGoals] = useState([]);

  // State Sesi 4
  const [recommendationResult, setRecommendationResult] = useState(null);

  // Load saved state
  useEffect(() => {
    const savedResult = localStorage.getItem('teduhkota_saved_result');
    const savedForm = localStorage.getItem('teduhkota_saved_form');

    if (savedResult && savedForm) {
      try {
        const parsedForm = JSON.parse(savedForm);
        setLocationType(parsedForm.locationType || '');
        setLocationName(parsedForm.locationName || '');
        setCustomLocationType(parsedForm.customLocationType || '');
        setAreaType(parsedForm.areaType || '');
        setCustomAreaType(parsedForm.customAreaType || '');
        setAreaSize(parsedForm.areaSize || '');
        setSurfaceType(parsedForm.surfaceType || '');
        setSunExposure(parsedForm.sunExposure || '');
        setWaterAccess(parsedForm.waterAccess || '');
        setRainCondition(parsedForm.rainCondition || '');
        setMaintenanceFrequency(parsedForm.maintenanceFrequency || '');
        setWallSupport(parsedForm.wallSupport);
        setTreeSpace(parsedForm.treeSpace);
        setRoofStructure(parsedForm.roofStructure);
        setGoals(parsedForm.goals || []);

        setRecommendationResult(JSON.parse(savedResult));
        setCurrentStep(4);
      } catch (e) {
        console.error("Failed to parse saved form data", e);
      }
    }
  }, []);

  // Auto scroll to top instantly whenever step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const steps = [
    { num: 1, title: "Lokasi", desc: "Detail tentang lokasi" },
    { num: 2, title: "Kondisi Area", desc: "Detail tentang lahan" },
    { num: 3, title: "Tujuan Penghijauan", desc: "Gaya dan tanaman" },
    { num: 4, title: "Hasil Rekomendasi", desc: "Detail rekomendasi" },
  ];

  const handleNext = () => {
    if (currentStep === 3) {
      const formData = compileFormData();
      const result = calculateRecommendations(formData);
      setRecommendationResult(result);

      // Save to localStorage
      localStorage.setItem('teduhkota_saved_form', JSON.stringify(formData));
      localStorage.setItem('teduhkota_saved_result', JSON.stringify(result));

      setCurrentStep(4);
    } else if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setShowExitModal(true);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('teduhkota_saved_form');
    localStorage.removeItem('teduhkota_saved_result');

    setLocationType('');
    setLocationName('');
    setCustomLocationType('');
    setAreaType('');
    setCustomAreaType('');
    setAreaSize('');
    setSurfaceType('');
    setSunExposure('');
    setWaterAccess('');
    setRainCondition('');
    setMaintenanceFrequency('');
    setWallSupport(null);
    setTreeSpace(null);
    setRoofStructure(null);
    setGoals([]);
    setRecommendationResult(null);

    setShowResetModal(false);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleGoal = (val) => {
    setGoals(prev => {
      if (prev.includes(val)) return prev.filter(item => item !== val);
      if (prev.length < 3) return [...prev, val];
      return prev;
    });
  };

  const isPohonBerpotensi = (areaSize === 'medium' || areaSize === 'large') &&
    (surfaceType === 'soil' || surfaceType === 'mixed') &&
    areaType !== 'wall_fence' &&
    areaType !== 'terrace_balcony' &&
    areaType !== 'rooftop';

  // State Reset Effects
  useEffect(() => {
    if (locationType !== 'other') setCustomLocationType('');
  }, [locationType]);

  useEffect(() => {
    if (areaType !== 'other') setCustomAreaType('');
    if (areaType !== 'wall_fence') setWallSupport(null);
    if (areaType !== 'rooftop') setRoofStructure(null);
  }, [areaType]);

  useEffect(() => {
    if (!isPohonBerpotensi) setTreeSpace(null);
  }, [isPohonBerpotensi]);

  // Validation
  const isStep2Valid = () => {
    if (!areaType || !areaSize || !surfaceType || !sunExposure || !waterAccess || !rainCondition || !maintenanceFrequency) return false;
    if (areaType === 'other' && !customAreaType) return false;
    if (areaType === 'wall_fence' && !wallSupport) return false;
    if (areaType === 'rooftop' && !roofStructure) return false;
    if (isPohonBerpotensi && !treeSpace) return false;
    return true;
  };

  const isNextDisabled = () => {
    if (currentStep === 1) {
      if (!locationType) return true;
      if (locationType === 'other' && !customLocationType) return true;
      return false;
    }
    if (currentStep === 2) return !isStep2Valid();
    if (currentStep === 3) return goals.length === 0 || goals.length > 3;
    return false;
  };

  const compileFormData = () => {
    return {
      locationType,
      locationName,
      customLocationType,
      areaType,
      customAreaType,
      areaSize,
      surfaceType,
      sunExposure,
      waterAccess,
      rainCondition,
      maintenanceFrequency,
      wallSupport,
      treeSpace,
      roofStructure,
      goals
    };
  };

  return (
    <div className="bg-brand-bg min-h-screen relative overflow-hidden flex flex-col justify-start pt-8 pb-48 md:pb-64 font-sans">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col items-center">

        {/* Stepper Container */}
        <div className="w-full max-w-5xl bg-white rounded-[32px] p-8 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-4">
          {steps.map((step) => {
            const isActive = currentStep === step.num;
            const isPast = currentStep > step.num;
            return (
              <div key={step.num} className="flex items-start md:items-center gap-4 flex-1">
                <motion.div
                  animate={{ scale: isActive ? 1.05 : 1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0 transition-colors
                  ${isActive
                      ? 'bg-brand-green text-white'
                      : isPast
                        ? 'bg-brand-green/50 text-white'
                        : 'bg-brand-gray/40 text-white'}`}
                >
                  {step.num}
                </motion.div>
                <div className="flex flex-col flex-1 pb-2 relative">
                  <span className={`font-bold text-sm md:text-base ${isActive || isPast ? 'text-brand-dark' : 'text-brand-dark/50'}`}>
                    {step.title}
                  </span>
                  <span className="text-brand-dark/50 text-[11px] md:text-xs font-medium">{step.desc}</span>
                  <div className={`absolute bottom-0 left-0 w-full h-[3px] rounded-full transition-colors ${isActive ? 'bg-brand-green' : isPast ? 'bg-brand-green/50' : 'bg-brand-gray/30'}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 items-start">

          {/* Form Content */}
          <div className="w-full lg:w-2/3 bg-white rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col gap-8">

            <AnimatePresence mode="wait">

              {/* SESI 1 */}
              {currentStep === 1 && (
                <motion.div key="step1" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
                  <div className="inline-block bg-[#F2FBE9] text-brand-green font-bold text-xs px-4 py-2 rounded-full mb-6">
                    Pertanyaan 1
                  </div>
                  <h2 className="text-2xl md:text-3xl font-header text-brand-dark mb-8">
                    1. Di mana Lokasi area yang ingin kamu hijaukan?
                  </h2>

                  <div className="space-y-4">
                    <RadioOption icon={<img src={rumahIcon} className="w-8 h-8 object-contain" alt="Rumah" />} label="Rumah" desc="Halaman taman atau area sekitar rumah." value="home" selectedValue={locationType} onChange={setLocationType} />
                    <RadioOption icon={<img src={perkantoranIcon} className="w-8 h-8 object-contain" alt="Perkantoran" />} label="Perkantoran" desc="Area kantor atau gedung komersial." value="office" selectedValue={locationType} onChange={setLocationType} />
                    <RadioOption icon={<img src={sekolahIcon} className="w-8 h-8 object-contain" alt="Sekolah" />} label="Sekolah / Kampus" desc="Taman belajar atau lapangan sekolah." value="school" selectedValue={locationType} onChange={setLocationType} />
                    <RadioOption icon={<img src={ruangPublikIcon} className="w-8 h-8 object-contain" alt="Ruang Publik" />} label="Ruang Publik" desc="Taman, ruang terbuka dan lainnya." value="public_space" selectedValue={locationType} onChange={setLocationType} />

                    <label className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-colors ${locationType === 'other' ? 'border-brand-green bg-[#F9FDF5]' : 'border-brand-gray/30 hover:border-brand-gray/60 bg-white'}`}>
                      <input type="radio" name="locationType" value="other" checked={locationType === 'other'} onChange={() => setLocationType('other')} className="hidden" />
                      <div className="flex flex-col grow gap-2 w-full">
                        <span className="font-bold text-brand-dark text-base">Lainnya</span>
                        <input
                          type="text"
                          placeholder="Tuliskan di sini..."
                          value={customLocationType}
                          onChange={(e) => { setLocationType('other'); setCustomLocationType(e.target.value); }}
                          onClick={(e) => { e.stopPropagation(); setLocationType('other'); }}
                          className={`w-full bg-white border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 transition-colors ${locationType === 'other' ? 'border-brand-green focus:ring-brand-green' : 'border-brand-gray/40'}`}
                        />
                      </div>
                    </label>
                  </div>
                </motion.div>
              )}

              {/* SESI 2 */}
              {currentStep === 2 && (
                <motion.div key="step2" variants={pageTransition} initial="hidden" animate="visible" exit="exit" className="space-y-12">
                  {/* Q2 */}
                  <div>
                    <div className="inline-block bg-[#F2FBE9] text-brand-green font-bold text-xs px-4 py-2 rounded-full mb-4">Pertanyaan 2</div>
                    <h2 className="text-xl font-header text-brand-dark mb-2">Area yang Akan Dihijaukan</h2>
                    <p className="text-brand-dark/70 text-sm mb-4">Bagian mana yang ingin kamu hijaukan? Pilih area yang paling sesuai.</p>

                    <div className="space-y-3">
                      <RadioOption label="Halaman / Area Tanah" value="ground_area" selectedValue={areaType} onChange={setAreaType} />
                      <RadioOption label="Teras / Balkon" value="terrace_balcony" selectedValue={areaType} onChange={setAreaType} />
                      <RadioOption label="Dinding / Pagar" value="wall_fence" selectedValue={areaType} onChange={setAreaType} />
                      <RadioOption label="Area Beton / Paving" value="concrete_paving" selectedValue={areaType} onChange={setAreaType} />
                      <RadioOption label="Atap / Rooftop" value="rooftop" selectedValue={areaType} onChange={setAreaType} />

                      <label className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-colors ${areaType === 'other' ? 'border-brand-green bg-[#F9FDF5]' : 'border-brand-gray/30 hover:border-brand-gray/60 bg-white'}`}>
                        <input type="radio" name="areaType" value="other" checked={areaType === 'other'} onChange={() => setAreaType('other')} className="hidden" />
                        <div className="flex flex-col grow gap-2 w-full">
                          <span className="font-bold text-brand-dark text-base">Area Lainnya</span>
                          <input
                            type="text" placeholder="Tuliskan bagian yang ingin dihijaukan..."
                            value={customAreaType}
                            onChange={(e) => { setAreaType('other'); setCustomAreaType(e.target.value); }}
                            onClick={(e) => { e.stopPropagation(); setAreaType('other'); }}
                            className={`w-full bg-white border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 transition-colors ${areaType === 'other' ? 'border-brand-green focus:ring-brand-green' : 'border-brand-gray/40'}`}
                          />
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Conditional Q_Dinding */}
                  {areaType === 'wall_fence' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-brand-gray/10 p-6 rounded-2xl border border-brand-gray/20">
                      <h2 className="text-lg font-bold text-brand-dark mb-2">Pertanyaan Tambahan</h2>
                      <p className="text-brand-dark/70 text-sm mb-4">Apakah dinding atau pagar tersebut dapat digunakan sebagai penyangga tanaman?</p>
                      <div className="space-y-3">
                        <RadioOption label="Ya, dapat digunakan" value="yes" selectedValue={wallSupport} onChange={setWallSupport} />
                        <RadioOption label="Bisa, tetapi membutuhkan penyangga tambahan" value="needs_support" selectedValue={wallSupport} onChange={setWallSupport} />
                        <RadioOption label="Tidak memungkinkan" value="no" selectedValue={wallSupport} onChange={setWallSupport} />
                        <RadioOption label="Belum yakin" value="unsure" selectedValue={wallSupport} onChange={setWallSupport} />
                      </div>
                    </motion.div>
                  )}

                  {/* Conditional Q_Atap */}
                  {areaType === 'rooftop' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-brand-gray/10 p-6 rounded-2xl border border-brand-gray/20">
                      <h2 className="text-lg font-bold text-brand-dark mb-2">Pertanyaan Tambahan</h2>
                      <p className="text-brand-dark/70 text-sm mb-4">Apakah struktur atap sudah pernah diperiksa untuk menerima beban tambahan?</p>
                      <div className="space-y-3">
                        <RadioOption label="Ya, sudah diperiksa dan memungkinkan" value="yes" selectedValue={roofStructure} onChange={setRoofStructure} />
                        <RadioOption label="Sudah diperiksa, tetapi memiliki keterbatasan" value="limited" selectedValue={roofStructure} onChange={setRoofStructure} />
                        <RadioOption label="Belum pernah diperiksa" value="unchecked" selectedValue={roofStructure} onChange={setRoofStructure} />
                        <RadioOption label="Saya tidak tahu" value="unsure" selectedValue={roofStructure} onChange={setRoofStructure} />
                      </div>
                    </motion.div>
                  )}

                  {/* Q3 */}
                  <div>
                    <div className="inline-block bg-[#F2FBE9] text-brand-green font-bold text-xs px-4 py-2 rounded-full mb-4">Pertanyaan 3</div>
                    <h2 className="text-xl font-header text-brand-dark mb-2">Luas Area</h2>
                    <p className="text-brand-dark/70 text-sm mb-4">Kira-kira, seberapa luas area yang ingin kamu hijaukan? Pilih berdasarkan perkiraan ukuran area.</p>
                    <div className="space-y-3">
                      <RadioOption label="Sangat kecil (kurang dari 2 m²)" value="very_small" selectedValue={areaSize} onChange={setAreaSize} />
                      <RadioOption label="Kecil (2–5 m²)" value="small" selectedValue={areaSize} onChange={setAreaSize} />
                      <RadioOption label="Sedang (5–15 m²)" value="medium" selectedValue={areaSize} onChange={setAreaSize} />
                      <RadioOption label="Luas (lebih dari 15 m²)" value="large" selectedValue={areaSize} onChange={setAreaSize} />
                    </div>
                  </div>

                  {/* Q4 */}
                  <div>
                    <div className="inline-block bg-[#F2FBE9] text-brand-green font-bold text-xs px-4 py-2 rounded-full mb-4">Pertanyaan 4</div>
                    <h2 className="text-xl font-header text-brand-dark mb-2">Kondisi Permukaan</h2>
                    <p className="text-brand-dark/70 text-sm mb-4">Bagaimana kondisi permukaan area tersebut? Pilih kondisi yang paling sesuai.</p>
                    <div className="space-y-3">
                      <RadioOption label="Tanah langsung" value="soil" selectedValue={surfaceType} onChange={setSurfaceType} />
                      <RadioOption label="Beton / Semen" value="concrete" selectedValue={surfaceType} onChange={setSurfaceType} />
                      <RadioOption label="Paving block" value="paving" selectedValue={surfaceType} onChange={setSurfaceType} />
                      <RadioOption label="Keramik / Lantai" value="floor" selectedValue={surfaceType} onChange={setSurfaceType} />
                      <RadioOption label="Campuran tanah dan permukaan keras" value="mixed" selectedValue={surfaceType} onChange={setSurfaceType} />
                    </div>
                  </div>

                  {/* Conditional Q_Pohon */}
                  {isPohonBerpotensi && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-brand-gray/10 p-6 rounded-2xl border border-brand-gray/20">
                      <h2 className="text-lg font-bold text-brand-dark mb-2">Pertanyaan Tambahan</h2>
                      <p className="text-brand-dark/70 text-sm mb-4">Apakah tersedia ruang yang cukup untuk pertumbuhan pohon?</p>
                      <div className="space-y-3">
                        <RadioOption label="Ya, tersedia ruang yang cukup" value="yes" selectedValue={treeSpace} onChange={setTreeSpace} />
                        <RadioOption label="Ada ruang, tetapi terbatas" value="limited" selectedValue={treeSpace} onChange={setTreeSpace} />
                        <RadioOption label="Tidak tersedia ruang yang cukup" value="no" selectedValue={treeSpace} onChange={setTreeSpace} />
                        <RadioOption label="Belum yakin" value="unsure" selectedValue={treeSpace} onChange={setTreeSpace} />
                      </div>
                    </motion.div>
                  )}

                  {/* Q5 */}
                  <div>
                    <div className="inline-block bg-[#F2FBE9] text-brand-green font-bold text-xs px-4 py-2 rounded-full mb-4">Pertanyaan 5</div>
                    <h2 className="text-xl font-header text-brand-dark mb-2">Paparan Sinar Matahari</h2>
                    <p className="text-brand-dark/70 text-sm mb-4">Berapa lama area tersebut terkena sinar matahari langsung setiap hari?</p>
                    <div className="space-y-3">
                      <RadioOption label="Kurang dari 2 jam" value="under_2" selectedValue={sunExposure} onChange={setSunExposure} />
                      <RadioOption label="2–4 jam" value="2_4" selectedValue={sunExposure} onChange={setSunExposure} />
                      <RadioOption label="4–6 jam" value="4_6" selectedValue={sunExposure} onChange={setSunExposure} />
                      <RadioOption label="Lebih dari 6 jam" value="over_6" selectedValue={sunExposure} onChange={setSunExposure} />
                      <RadioOption label="Belum yakin" value="unsure" selectedValue={sunExposure} onChange={setSunExposure} />
                    </div>
                  </div>

                  {/* Q6 */}
                  <div>
                    <div className="inline-block bg-[#F2FBE9] text-brand-green font-bold text-xs px-4 py-2 rounded-full mb-4">Pertanyaan 6</div>
                    <h2 className="text-xl font-header text-brand-dark mb-2">Akses Air</h2>
                    <p className="text-brand-dark/70 text-sm mb-4">Seberapa mudah akses air untuk menyiram tanaman di area tersebut?</p>
                    <div className="space-y-3">
                      <RadioOption label="Sangat mudah" desc="Sumber air berada dekat dengan area." value="very_easy" selectedValue={waterAccess} onChange={setWaterAccess} />
                      <RadioOption label="Cukup mudah" desc="Air tersedia, tetapi perlu dibawa ke area." value="easy" selectedValue={waterAccess} onChange={setWaterAccess} />
                      <RadioOption label="Terbatas" desc="Sumber air cukup jauh atau sulit dijangkau." value="limited" selectedValue={waterAccess} onChange={setWaterAccess} />
                      <RadioOption label="Tidak tersedia akses air" value="none" selectedValue={waterAccess} onChange={setWaterAccess} />
                    </div>
                  </div>

                  {/* Q7 */}
                  <div>
                    <div className="inline-block bg-[#F2FBE9] text-brand-green font-bold text-xs px-4 py-2 rounded-full mb-4">Pertanyaan 7</div>
                    <h2 className="text-xl font-header text-brand-dark mb-2">Kondisi Setelah Hujan</h2>
                    <p className="text-brand-dark/70 text-sm mb-4">Apa yang biasanya terjadi di area tersebut setelah hujan deras?</p>
                    <div className="space-y-3">
                      <RadioOption label="Air cepat meresap atau mengalir" value="drains_fast" selectedValue={rainCondition} onChange={setRainCondition} />
                      <RadioOption label="Ada sedikit genangan, tetapi cepat surut" value="temporary_puddle" selectedValue={rainCondition} onChange={setRainCondition} />
                      <RadioOption label="Sering terjadi genangan" value="frequent_puddle" selectedValue={rainCondition} onChange={setRainCondition} />
                      <RadioOption label="Genangan bertahan cukup lama" value="long_puddle" selectedValue={rainCondition} onChange={setRainCondition} />
                      <RadioOption label="Belum tahu" value="unknown" selectedValue={rainCondition} onChange={setRainCondition} />
                    </div>
                  </div>

                  {/* Q8 */}
                  <div>
                    <div className="inline-block bg-[#F2FBE9] text-brand-green font-bold text-xs px-4 py-2 rounded-full mb-4">Pertanyaan 8</div>
                    <h2 className="text-xl font-header text-brand-dark mb-2">Kemampuan Perawatan</h2>
                    <p className="text-brand-dark/70 text-sm mb-4">Seberapa sering kamu dapat merawat area hijau tersebut?</p>
                    <div className="space-y-3">
                      <RadioOption label="Setiap hari" value="daily" selectedValue={maintenanceFrequency} onChange={setMaintenanceFrequency} />
                      <RadioOption label="2–3 kali seminggu" value="2_3_week" selectedValue={maintenanceFrequency} onChange={setMaintenanceFrequency} />
                      <RadioOption label="Sekitar sekali seminggu" value="weekly" selectedValue={maintenanceFrequency} onChange={setMaintenanceFrequency} />
                      <RadioOption label="Hanya sesekali" value="occasionally" selectedValue={maintenanceFrequency} onChange={setMaintenanceFrequency} />
                      <RadioOption label="Perawatan minimal" value="minimal" selectedValue={maintenanceFrequency} onChange={setMaintenanceFrequency} />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SESI 3 */}
              {currentStep === 3 && (
                <motion.div key="step3" variants={pageTransition} initial="hidden" animate="visible" exit="exit" className="space-y-8">
                  <div>
                    <div className="inline-block bg-[#F2FBE9] text-brand-green font-bold text-xs px-4 py-2 rounded-full mb-4">Pertanyaan Terakhir</div>
                    <h2 className="text-xl font-header text-brand-dark mb-2">Tujuan Penghijauan</h2>
                    <p className="text-brand-dark/70 text-sm mb-4">Apa tujuan utama kamu menghijaukan area ini? Pilih maksimal 3 tujuan yang paling penting bagimu.</p>

                    <div className="space-y-3">
                      <CheckboxOption label="Membuat area lebih sejuk" desc="Membantu mengurangi rasa panas di sekitar area." value="cooler_area" selectedValues={goals} onChange={toggleGoal} maxAllowed={3} />
                      <CheckboxOption label="Menambah ruang hijau" desc="Membuat lingkungan memiliki lebih banyak tanaman." value="more_green_space" selectedValues={goals} onChange={toggleGoal} maxAllowed={3} />
                      <CheckboxOption label="Menambah keteduhan" desc="Menciptakan area yang lebih teduh dari paparan matahari." value="more_shade" selectedValues={goals} onChange={toggleGoal} maxAllowed={3} />
                      <CheckboxOption label="Mengurangi genangan air" desc="Membantu meningkatkan penyerapan air hujan." value="reduce_puddles" selectedValues={goals} onChange={toggleGoal} maxAllowed={3} />
                      <CheckboxOption label="Mempercantik area" desc="Membuat lingkungan terlihat lebih hijau dan menarik." value="beautification" selectedValues={goals} onChange={toggleGoal} maxAllowed={3} />
                      <CheckboxOption label="Memanfaatkan area kosong" desc="Mengubah ruang yang belum dimanfaatkan menjadi area hijau." value="use_empty_space" selectedValues={goals} onChange={toggleGoal} maxAllowed={3} />
                    </div>

                    {goals.length === 3 && (
                      <p className="text-brand-orange font-bold text-xs mt-4">
                        Kamu telah memilih batas maksimal 3 tujuan.
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* SESI 4: HASIL REKOMENDASI */}
              {currentStep === 4 && recommendationResult && (
                <motion.div key="step4" variants={pageTransition} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                  <div className="flex items-center gap-3 bg-[#F2FBE9] text-brand-green p-4 rounded-2xl">
                    <img src={checkJawabanIcon} alt="Sukses" className="w-8 h-8" />
                    <div>
                      <h3 className="font-bold text-base">Rekomendasi Berhasil Dibuat!</h3>
                      <p className="text-xs text-brand-dark/70">Berdasarkan data kondisi lahan yang kamu masukkan.</p>
                    </div>
                  </div>

                  {recommendationResult.primary ? (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
                      <div className="md:col-span-7 space-y-6">
                        <div>
                          <div className="inline-block bg-gradient-to-r from-brand-green to-[#8BC34A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm mb-3">
                            {recommendationResult.isFallback ? "Solusi Potensial" : "Rekomendasi Utama"}
                          </div>
                          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">{recommendationResult.primary.title}</h2>
                        </div>

                        <div className="rounded-2xl overflow-hidden h-56 w-full shadow-inner relative">
                          <img
                            src={SOLUTIONS[recommendationResult.primary.solutionId]?.image || recommendationResult.primary.image}
                            alt="Rekomendasi"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                        </div>

                        <div className="mb-4">
                          <span className="text-sm font-semibold text-gray-600">Skor Kecocokan:</span>
                          <div className="flex items-center gap-3 mt-1">
                            <div className="grow h-3 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-brand-green rounded-full transition-all duration-1000"
                                style={{ width: `${recommendationResult.primary.score}%` }}
                              />
                            </div>
                            <div className="flex flex-col items-end gap-1 shrink-0">
                              <span className="text-brand-green font-bold text-lg leading-none">{recommendationResult.primary.score}/100</span>
                              <span className="text-[10px] text-gray-500 font-medium bg-gray-100 px-2 py-0.5 rounded-md uppercase">{recommendationResult.primary.category}</span>
                            </div>
                          </div>
                        </div>

                        {recommendationResult.primary.verificationMessage && (
                          <div className="bg-amber-50/80 border border-amber-200/60 text-amber-800 text-sm p-4 rounded-xl font-medium flex items-start gap-3 shadow-sm">
                            <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div>
                              <span className="font-bold block mb-1">Perlu Perhatian:</span>
                              <span className="text-amber-700 leading-relaxed">{recommendationResult.primary.verificationMessage}</span>
                            </div>
                          </div>
                        )}

                        <div className="space-y-3 pt-2">
                          <h3 className="font-bold text-gray-800 text-sm">Mengapa Direkomendasikan?</h3>
                          <ul className="list-disc list-inside text-xs text-gray-600 space-y-1.5 leading-relaxed">
                            {recommendationResult.primary.matchedReasons?.map((reason, i) => (
                              <li key={i}>{reason}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center gap-4 pt-4 flex-wrap">
                          <Link
                            to={`/solusi-teduh/${recommendationResult.primary.link}`}
                            className="bg-[#FF8A65] hover:bg-[#ff7043] text-white px-6 py-3 rounded-xl text-sm font-medium transition"
                          >
                            Lihat Solusi Ini →
                          </Link>
                        </div>
                      </div>

                      {/* Sidebar Info Detail */}
                      <div className="md:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl space-y-4 border border-gray-200/60">
                        <h4 className="font-bold text-gray-800 text-sm border-b pb-2 border-gray-200">Detail Estimasi</h4>
                        <div className="space-y-3 text-xs text-gray-600">
                          <div>
                            <span className="font-semibold block text-gray-800">Estimasi Biaya:</span>
                            <p>{recommendationResult.primary.estimasiBiaya}</p>
                          </div>
                          <div>
                            <span className="font-semibold block text-gray-800">Kebutuhan Cahaya:</span>
                            <p>{recommendationResult.primary.kebutuhanCahaya}</p>
                          </div>
                          <div>
                            <span className="font-semibold block text-gray-800">Pemeliharaan:</span>
                            <p>{recommendationResult.primary.pemeliharaan}</p>
                          </div>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-4 leading-tight italic">
                          {GLOBAL_METADATA.costDisclaimer}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm text-center">
                      <h2 className="text-xl font-bold text-gray-800 mb-4">Belum ditemukan solusi yang cukup sesuai berdasarkan kondisi area yang kamu masukkan.</h2>
                    </div>
                  )}

                  {/* Alternatif */}
                  {recommendationResult.alternatives?.length > 0 && (
                    <div className="pt-8">
                      <h3 className="text-xl font-bold text-brand-dark mb-4 px-2">
                        {recommendationResult.isFallback ? "Alternatif Potensial" : "Solusi Alternatif"}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {recommendationResult.alternatives.map((alt, idx) => (
                          <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                            <div>
                              <div className="flex justify-between items-start mb-3 gap-2">
                                <h4 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-brand-green transition-colors">{alt.title}</h4>
                                <span className="bg-[#F2FBE9] border border-brand-green/20 text-brand-green text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 shadow-sm whitespace-nowrap">Skor: {alt.score}/100</span>
                              </div>
                              <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{alt.matchedReasons?.[0]}</p>
                              {alt.verificationMessage && (
                                <div className="flex items-start gap-2 text-[11px] text-amber-700 bg-amber-50/80 border border-amber-100 p-2.5 rounded-lg mb-4">
                                  <svg className="w-4 h-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                  </svg>
                                  <span>{alt.verificationMessage}</span>
                                </div>
                              )}
                            </div>
                            <Link
                              to={`/solusi-teduh/${alt.link}`}
                              className="text-brand-orange text-sm font-bold hover:text-[#e87f2e] transition-colors flex items-center gap-1 group/link"
                            >
                              Lihat Detail <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Conditional Suggestions */}
                  {recommendationResult.conditionalSuggestions?.length > 0 && (
                    <div className="pt-8">
                      <h3 className="text-xl font-bold text-brand-dark mb-4 px-2">
                        Ide Menarik Lainnya (Perlu Pengecekan Lanjut)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {recommendationResult.conditionalSuggestions.map((sugg, idx) => (
                          <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 to-amber-500 opacity-50"></div>
                            <div>
                              <div className="flex justify-between items-start mb-3 gap-2">
                                <h4 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-amber-600 transition-colors">{sugg.title}</h4>
                                <span className="bg-amber-50 border border-amber-200/50 text-amber-600 text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 shadow-sm whitespace-nowrap">Skor: {sugg.score}/100</span>
                              </div>
                              <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{sugg.matchedReasons?.[0]}</p>
                              {sugg.verificationMessage && (
                                <div className="flex items-start gap-2 text-[11px] text-amber-700 bg-amber-50/80 border border-amber-100 p-2.5 rounded-lg mb-4">
                                  <svg className="w-4 h-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                  </svg>
                                  <span>{sugg.verificationMessage}</span>
                                </div>
                              )}
                            </div>
                            <Link
                              to={`/solusi-teduh/${sugg.link}`}
                              className="text-amber-600 text-sm font-bold hover:text-amber-700 transition-colors flex items-center gap-1 group/link"
                            >
                              Lihat Detail <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setShowResetModal(true)}
                    className="w-full py-3 text-sm font-bold text-brand-orange hover:underline transition-all"
                  >
                    Hitung Ulang / Mulai dari Awal
                  </button>
                </motion.div>
              )}

            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-brand-gray/20">
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-full text-brand-dark font-bold text-sm bg-brand-gray/20 hover:bg-brand-gray/30 transition-all"
              >
                {currentStep === 1 ? 'Batal' : 'Kembali'}
              </button>

              {currentStep < 4 && (
                <motion.button
                  whileHover={{ scale: isNextDisabled() ? 1 : 1.03 }}
                  whileTap={{ scale: isNextDisabled() ? 1 : 0.97 }}
                  onClick={handleNext}
                  disabled={isNextDisabled()}
                  className={`px-8 py-3 rounded-full font-bold text-sm transition-all
                    ${isNextDisabled()
                      ? 'bg-brand-gray/40 text-white cursor-not-allowed'
                      : 'bg-brand-green text-white hover:bg-brand-green/90 shadow-md'}`}
                >
                  {currentStep === 3 ? 'Lihat Hasil' : 'Lanjut'}
                </motion.button>
              )}
            </div>

          </div>

          {/* Right Column: Information Sidebar Panels */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">

            {/* Card 1: Tips Sebelum Menjawab */}
            <div className="bg-[#FFFBF5] rounded-[32px] p-7 shadow-sm border border-brand-gray/20 space-y-6">
              <h3 className="font-sans font-bold text-lg text-brand-dark">Tips Sebelum Menjawab</h3>

              <div className="space-y-5">
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <img src={tanamanIcon} alt="Jawab sesuai kondisi" className="w-9 h-9 shrink-0 object-contain mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-sm text-brand-dark">Jawab sesuai kondisi</h4>
                    <p className="font-sans text-brand-text text-xs leading-relaxed mt-0.5">
                      Berikan jawaban berdasarkan kondisi area saat ini.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <img src={smileIcon} alt="Tidak ada jawaban salah" className="w-9 h-9 shrink-0 object-contain mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-sm text-brand-dark">Tidak ada jawaban salah</h4>
                    <p className="font-sans text-brand-text text-xs leading-relaxed mt-0.5">
                      Semua jawaban akan membantu kami memberikan solusi terbaik.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <img src={checkJawabanIcon} alt="Periksa kembali jawaban" className="w-9 h-9 shrink-0 object-contain mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-sm text-brand-dark">Periksa kembali jawaban</h4>
                    <p className="font-sans text-brand-text text-xs leading-relaxed mt-0.5">
                      Pastikan untuk periksa kembali jawaban sebelum mengirim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Butuh Bantuan? */}
            <Link
              to="/kontak"
              className="bg-white rounded-[32px] p-7 shadow-sm border border-gray-100 flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-lg text-brand-dark">Butuh Bantuan?</h3>
                <p className="font-sans text-brand-text text-xs leading-relaxed">
                  Tim kami siap membantu kamu 24/7 untuk pertanyaan seputar booking
                </p>
              </div>
              <span className="text-brand-dark text-2xl font-bold shrink-0">
                &rsaquo;
              </span>
            </Link>

          </div>

        </div>

      </div>

      {/* Ilustrasi Rumput Bawah */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-48 pointer-events-none z-10"
        style={{
          backgroundImage: `url(${ilustrasiRumputPanjang})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          backgroundSize: 'auto 100%'
        }}
      ></div>

      {/* Exit Modal */}
      <AnimatePresence>
        {showExitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div variants={modalTransition} initial="hidden" animate="visible" exit="exit" className="bg-white rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-xl">
              <h3 className="font-header text-xl text-brand-dark">Keluar dari Pengisian?</h3>
              <p className="text-xs text-brand-dark/70">Progres pengisian formulir saat ini tidak akan tersimpan.</p>
              <div className="flex gap-3 justify-center pt-2">
                <button onClick={() => setShowExitModal(false)} className="flex-1 py-2.5 rounded-full border border-brand-gray/40 font-bold text-xs text-brand-dark">Batal</button>
                <button onClick={() => navigate('/solusi-teduh')} className="flex-1 py-2.5 rounded-full bg-brand-orange text-white font-bold text-xs">Ya, Keluar</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Reset Modal */}
      <AnimatePresence>
        {showResetModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div variants={modalTransition} initial="hidden" animate="visible" exit="exit" className="bg-white rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-xl">
              <h3 className="font-header text-xl text-brand-dark">Mulai Ulang Formulir?</h3>
              <p className="text-xs text-brand-dark/70">Seluruh data jawaban dan hasil rekomendasi saat ini akan dihapus.</p>
              <div className="flex gap-3 justify-center pt-2">
                <button onClick={() => setShowResetModal(false)} className="flex-1 py-2.5 rounded-full border border-brand-gray/40 font-bold text-xs text-brand-dark">Batal</button>
                <button onClick={handleReset} className="flex-1 py-2.5 rounded-full bg-brand-green text-white font-bold text-xs">Mulai Ulang</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}