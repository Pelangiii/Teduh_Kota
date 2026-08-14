import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { calculateRecommendations } from '../utils/recommendationEngine';

// Import Assets
import ilustrasiRumputPanjang from '../assets/images/ilustrasi-rumput-panjang.svg';
import rumahIcon from '../assets/images/rumah.svg';
import perkantoranIcon from '../assets/images/perkantoran.svg';
import sekolahIcon from '../assets/images/sekolah.svg';
import ruangPublikIcon from '../assets/images/ruang-publik.svg';
import checkJawabanIcon from '../assets/images/check-jawaban.svg';

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
        <div className="w-12 h-12 bg-[#F2FBE9] rounded-xl flex items-center justify-center shrink-0 text-xl font-bold text-brand-green">
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    <div className="mb-6">
                      <label className="block font-bold text-brand-dark text-base mb-2">Nama Tempat (Opsional)</label>
                      <input 
                        type="text" 
                        placeholder="Misal: Halaman Belakang Rumah, Taman Sekolah" 
                        value={locationName}
                        onChange={(e) => setLocationName(e.target.value)}
                        className="w-full bg-white border border-brand-gray/40 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                      />
                    </div>

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
                      <RadioOption label="Sangat kecil — kurang dari 2 m²" value="very_small" selectedValue={areaSize} onChange={setAreaSize} />
                      <RadioOption label="Kecil — 2–5 m²" value="small" selectedValue={areaSize} onChange={setAreaSize} />
                      <RadioOption label="Sedang — 5–15 m²" value="medium" selectedValue={areaSize} onChange={setAreaSize} />
                      <RadioOption label="Luas — lebih dari 15 m²" value="large" selectedValue={areaSize} onChange={setAreaSize} />
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

                  <div className="border border-brand-gray/30 rounded-2xl p-6 bg-white space-y-4">
                    <h3 className="text-xl font-header text-brand-dark">Solusi Utama Terpilih:</h3>
                    
                    {recommendationResult.primarySolutions?.map((sol, index) => (
                      <div key={index} className="p-4 bg-brand-bg rounded-xl border border-brand-green/30">
                        <h4 className="font-bold text-brand-green text-lg">{sol.title || sol.name}</h4>
                        <p className="text-xs text-brand-dark/70 mt-1">{sol.description}</p>
                      </div>
                    ))}

                    {recommendationResult.secondarySolutions?.length > 0 && (
                      <div className="pt-4">
                        <h4 className="font-bold text-brand-dark text-sm mb-2">Alternatif Solusi Lainnya:</h4>
                        <ul className="list-disc pl-5 text-xs text-brand-dark/70 space-y-1">
                          {recommendationResult.secondarySolutions.map((sol, index) => (
                            <li key={index}>{sol.title || sol.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

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

          {/* Right Column: Information Panel */}
          <div className="w-full lg:w-1/3 bg-white rounded-[32px] p-8 shadow-sm flex flex-col gap-4">
            <h3 className="font-header text-xl text-brand-dark">Mengapa Informasi Ini Penting?</h3>
            <p className="text-brand-dark/70 text-xs md:text-sm leading-relaxed">
              Setiap lokasi memiliki mikroiklim, jenis tanah, serta akses air yang berbeda. Jawabanmu membantu sistem merekomendasikan jenis tanaman dan solusi penghijauan yang paling bertahan lama dan efisien.
            </p>
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