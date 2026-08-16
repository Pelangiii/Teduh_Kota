import { SOLUTIONS, WEIGHTS, FIT_MATRIX } from '../data/recommendationConfig.js';

export const calculateRecommendations = (formData) => {
  const { areaType, areaSize, surfaceType, sunExposure, waterAccess, rainCondition, maintenanceFrequency, wallSupport, treeSpace, roofStructure, goals } = formData;

  const results = [];

  // data
  let confidence = 100;
  if (sunExposure === 'unsure') confidence -= 5;
  if (rainCondition === 'unknown') confidence -= 10;

  Object.keys(SOLUTIONS).forEach(solutionId => {
    const solution = SOLUTIONS[solutionId];
    let eligibility = 'INELIGIBLE';
    let verificationMessage = null;

    // rules eligible
    if (solutionId === 'flexible_pot') {
      if (areaType === 'rooftop') {
        if (roofStructure === 'yes') eligibility = 'ELIGIBLE';
        else if (roofStructure === 'limited' || roofStructure === 'unchecked' || roofStructure === 'unsure') eligibility = 'CONDITIONAL';
      } else {
        eligibility = 'ELIGIBLE';
      }
    }
    else if (solutionId === 'vertical_trellis') {
      if (areaType === 'wall_fence') {
        if (wallSupport === 'yes') eligibility = 'ELIGIBLE';
        else if (wallSupport === 'needs_support') {
          eligibility = 'CONDITIONAL';
          verificationMessage = "Diperlukan sistem penyangga tambahan sebelum taman vertikal diterapkan.";
        }
        else if (wallSupport === 'no') eligibility = 'INELIGIBLE';
        else if (wallSupport === 'unsure') {
          eligibility = 'CONDITIONAL';
          verificationMessage = "Kondisi dinding atau pagar perlu diperiksa sebelum pemasangan sistem tanaman.";
        }
      }
    }
    else if (solutionId === 'raised_bed') {
      if (areaType === 'wall_fence') eligibility = 'INELIGIBLE';
      else if (areaType === 'ground_area' || areaType === 'concrete_paving') eligibility = 'ELIGIBLE';
      else if (areaType === 'terrace_balcony') eligibility = 'CONDITIONAL';
      else if (areaType === 'rooftop') {
        if (roofStructure === 'yes') eligibility = 'ELIGIBLE';
        else if (roofStructure === 'limited' || roofStructure === 'unchecked' || roofStructure === 'unsure') eligibility = 'CONDITIONAL';
      }
      else if (areaType === 'other') eligibility = 'CONDITIONAL';
    }
    else if (solutionId === 'direct_garden') {
      if (areaType === 'ground_area' && (surfaceType === 'soil' || surfaceType === 'mixed')) eligibility = 'ELIGIBLE';
      else if (areaType === 'other' && (surfaceType === 'soil' || surfaceType === 'mixed')) eligibility = 'CONDITIONAL';
      else eligibility = 'INELIGIBLE';
    }
    else if (solutionId === 'shade_tree') {
      const isPotensiActive = (areaSize === 'medium' || areaSize === 'large') &&
        (surfaceType === 'soil' || surfaceType === 'mixed') &&
        areaType !== 'wall_fence' &&
        areaType !== 'terrace_balcony' &&
        areaType !== 'rooftop';
      if (!isPotensiActive) {
        eligibility = 'INELIGIBLE';
      } else {
        if (treeSpace === 'yes') eligibility = 'ELIGIBLE';
        else if (treeSpace === 'limited') {
          eligibility = 'CONDITIONAL';
          verificationMessage = "Ruang pertumbuhan pohon terbatas sehingga jenis dan ukuran pohon perlu disesuaikan.";
        }
        else if (treeSpace === 'no') eligibility = 'INELIGIBLE';
        else if (treeSpace === 'unsure') {
          eligibility = 'CONDITIONAL';
          verificationMessage = "Ketersediaan ruang pertumbuhan pohon perlu diverifikasi terlebih dahulu.";
        }
      }
    }
    else if (solutionId === 'rain_garden') {
      if (areaType === 'wall_fence' || areaType === 'terrace_balcony' || areaType === 'rooftop') eligibility = 'INELIGIBLE';
      else if (surfaceType !== 'soil' && surfaceType !== 'mixed') eligibility = 'INELIGIBLE';
      else if (areaType === 'ground_area' && (surfaceType === 'soil' || surfaceType === 'mixed')) {
        if (rainCondition === 'long_puddle') {
          eligibility = 'CONDITIONAL';
          verificationMessage = "Perlu pemeriksaan kemampuan infiltrasi dan kondisi drainase tanah terlebih dahulu.";
        } else {
          eligibility = 'ELIGIBLE';
        }
      } else if ((areaType === 'concrete_paving' || areaType === 'other') && surfaceType === 'mixed') {
        eligibility = 'CONDITIONAL';
        verificationMessage = "Perlu pemeriksaan kemampuan infiltrasi dan kondisi drainase tanah terlebih dahulu.";
      }
    }
    else if (solutionId === 'rooftop_garden') {
      if (areaType !== 'rooftop') eligibility = 'INELIGIBLE';
      else {
        if (roofStructure === 'yes') eligibility = 'ELIGIBLE';
        else if (roofStructure === 'limited') {
          eligibility = 'CONDITIONAL';
          verificationMessage = "Struktur atap memiliki keterbatasan dan memerlukan penyesuaian desain.";
        } else if (roofStructure === 'unchecked') {
          eligibility = 'CONDITIONAL';
          verificationMessage = "Struktur atap perlu diperiksa sebelum penerapan taman atap.";
        } else if (roofStructure === 'unsure') {
          eligibility = 'CONDITIONAL';
          verificationMessage = "Kapasitas struktur atap perlu diverifikasi terlebih dahulu.";
        }
      }
    }

    // spesifikasi rooftop
    if (areaType === 'rooftop') {
      if (solutionId === 'flexible_pot') {
        if (roofStructure === 'limited') verificationMessage = "Struktur atap memiliki keterbatasan dan perlu dipastikan aman untuk penempatan sistem pot.";
        else if (roofStructure === 'unchecked' || roofStructure === 'unsure') verificationMessage = "Kapasitas struktur atap perlu diperiksa sebelum menempatkan sistem pot dan media tanam di area rooftop.";
      } else if (solutionId === 'raised_bed') {
        if (roofStructure === 'limited') verificationMessage = "Struktur atap memiliki keterbatasan dan perlu dipastikan aman untuk penempatan bedeng tanam.";
        else if (roofStructure === 'unchecked' || roofStructure === 'unsure') verificationMessage = "Kapasitas struktur atap perlu diperiksa sebelum menempatkan bedeng tanam, media tanam, dan beban tambahan di area rooftop.";
      }
    }


    // scoring
    let weightedSum = 0;
    let knownWeight = 0;
    let techSum = 0;
    let techWeight = 0;

    const breakdown = {};

    // helper
    const addScore = (criterion, weight, value, isTech = false) => {
      let fit = FIT_MATRIX[criterion][value]?.[solutionId] || 0;
      if (criterion === 'goals') {
        fit = goals.reduce((acc, g) => acc + (FIT_MATRIX.goals[g]?.[solutionId] || 0), 0) / goals.length;
      }

      const points = fit * weight;
      weightedSum += points;
      knownWeight += weight;
      breakdown[criterion] = { weight, fit, points };

      if (isTech) {
        techSum += points;
        techWeight += weight;
      }
    };

    // kalkulasi
    addScore('areaType', WEIGHTS.areaType, areaType, true);
    addScore('areaSize', WEIGHTS.areaSize, areaSize, true);
    addScore('surfaceType', WEIGHTS.surfaceType, surfaceType, true);

    if (sunExposure !== 'unsure') {
      addScore('sunExposure', WEIGHTS.sunExposure, sunExposure, false);
    }

    addScore('waterAccess', WEIGHTS.waterAccess, waterAccess, false);

    if (rainCondition !== 'unknown') {
      addScore('rainCondition', WEIGHTS.rainCondition, rainCondition, true);
    }

    addScore('maintenanceFrequency', WEIGHTS.maintenanceFrequency, maintenanceFrequency, false);

    if (goals && goals.length > 0) {
      addScore('goals', WEIGHTS.goals, null, false);
    }

    const rawScore = (weightedSum / knownWeight) * 100;
    const score = Math.round(rawScore);
    const technicalScore = techWeight > 0 ? (techSum / techWeight) * 100 : 0;

    // kategori
    let category = "Tidak Cocok";
    if (eligibility === 'ELIGIBLE') {
      if (score >= 85) category = "Sangat Cocok";
      else if (score >= 70) category = "Cocok";
      else if (score >= 55) category = "Cukup Cocok / Perlu Penyesuaian";
    } else if (eligibility === 'CONDITIONAL') {
      category = "Potensial — Perlu Verifikasi";
    }

    // matched
    const matchedReasons = [];
    if (solutionId === 'vertical_trellis') {
      if (areaType === 'wall_fence') matchedReasons.push("Area berupa dinding atau pagar sehingga bidang vertikal dapat dimanfaatkan sebagai ruang tanam.");
      if (wallSupport === 'yes') matchedReasons.push("Dinding atau pagar dapat digunakan sebagai penyangga tanaman.");
      if (areaSize === 'very_small' || areaSize === 'small') matchedReasons.push("Pemanfaatan ruang vertikal cocok untuk area dengan ruang horizontal terbatas.");
      if (goals.includes('more_green_space')) matchedReasons.push("Solusi ini sesuai dengan tujuan menambah ruang hijau tanpa membutuhkan lahan tanah yang luas.");
    }
    if (solutionId === 'flexible_pot') {
      if (areaType === 'terrace_balcony' || areaType === 'concrete_paving') matchedReasons.push("Pot fleksibel memungkinkan penghijauan tanpa membutuhkan tanah langsung.");
      if (areaSize === 'very_small' || areaSize === 'small') matchedReasons.push("Ukuran area mendukung penggunaan pot yang dapat diatur dan dipindahkan.");
    }
    if (solutionId === 'raised_bed') {
      if (surfaceType === 'concrete' || surfaceType === 'paving') matchedReasons.push("Bedeng tanam memungkinkan media tanam ditempatkan di atas permukaan keras.");
      if (areaSize === 'medium' || areaSize === 'large') matchedReasons.push("Ruang yang tersedia cukup untuk menempatkan area tanam yang terstruktur.");
    }
    if (solutionId === 'direct_garden') {
      if (surfaceType === 'soil') matchedReasons.push("Tersedia tanah langsung yang mendukung penanaman langsung pada area.");
      if (surfaceType === 'mixed') matchedReasons.push("Sebagian area memiliki tanah yang dapat dimanfaatkan untuk penanaman langsung.");
    }
    if (solutionId === 'shade_tree') {
      if (treeSpace === 'yes') matchedReasons.push("Tersedia ruang yang cukup untuk mendukung pertumbuhan pohon.");
      if (goals.includes('more_shade')) matchedReasons.push("Pohon peneduh sangat sesuai dengan tujuan menciptakan keteduhan.");
      if (goals.includes('cooler_area')) matchedReasons.push("Pohon dapat membantu menciptakan area yang terasa lebih sejuk.");
    }
    if (solutionId === 'rain_garden') {
      if (rainCondition === 'frequent_puddle') matchedReasons.push("Area sering mengalami genangan sehingga pengelolaan limpasan air menjadi kebutuhan penting.");
      if (goals.includes('reduce_puddles')) matchedReasons.push("Taman resapan sesuai dengan tujuan membantu mengurangi genangan air.");
      if (surfaceType === 'soil') matchedReasons.push("Permukaan tanah memungkinkan air hujan dikelola melalui area resapan.");
    }
    if (solutionId === 'rooftop_garden') {
      if (roofStructure === 'yes') matchedReasons.push("Struktur atap telah diperiksa dan dinyatakan memungkinkan menerima beban tambahan.");
      if (areaType === 'rooftop') matchedReasons.push("Area atap dapat dimanfaatkan sebagai ruang hijau tambahan.");
      if (goals.includes('use_empty_space')) matchedReasons.push("Solusi ini sesuai dengan tujuan memanfaatkan area atap yang belum digunakan.");
    }

    results.push({
      solutionId,
      title: solution.title,
      estimasiBiaya: solution.estimasiBiaya,
      kebutuhanCahaya: solution.kebutuhanCahaya,
      pemeliharaan: solution.pemeliharaan,
      image: solution.image,
      link: solution.link,
      eligibility,
      score,
      rawScore,
      technicalScore,
      confidence,
      category,
      breakdown,
      matchedReasons: matchedReasons.slice(0, 4),
      verificationMessage
    });
  });

  // rank
  const eligible = results.filter(r => r.eligibility === 'ELIGIBLE' && r.score >= 55);
  const conditional = results.filter(r => r.eligibility === 'CONDITIONAL');

  const SOLUTION_ORDER = [
    'flexible_pot',
    'vertical_trellis',
    'raised_bed',
    'direct_garden',
    'shade_tree',
    'rain_garden',
    'rooftop_garden'
  ];

  const sortFn = (a, b) => {
    if (b.rawScore !== a.rawScore) return b.rawScore - a.rawScore;
    if (b.technicalScore !== a.technicalScore) return b.technicalScore - a.technicalScore;

    const bGoalPoints = b.breakdown.goals?.points || 0;
    const aGoalPoints = a.breakdown.goals?.points || 0;
    if (bGoalPoints !== aGoalPoints) return bGoalPoints - aGoalPoints;

    const bAreaPoints = b.breakdown.areaType?.points || 0;
    const aAreaPoints = a.breakdown.areaType?.points || 0;
    if (bAreaPoints !== aAreaPoints) return bAreaPoints - aAreaPoints;

    // complete
    a.isTied = true;
    b.isTied = true;

    const aIndex = SOLUTION_ORDER.indexOf(a.solutionId);
    const bIndex = SOLUTION_ORDER.indexOf(b.solutionId);
    return aIndex - bIndex;
  };

  eligible.sort(sortFn);
  conditional.sort(sortFn);

  // balik
  let primary = null;
  let alternatives = [];
  let conditionalSuggestions = [];
  const isFallback = eligible.length === 0 && conditional.length > 0;

  if (eligible.length > 0) {
    primary = eligible[0];
    alternatives = eligible.slice(1, 3);
    conditionalSuggestions = conditional;
  } else if (conditional.length > 0) {
    primary = conditional[0];
    alternatives = conditional.slice(1, 3);
    conditionalSuggestions = conditional.slice(3);
  }

  return {
    primary,
    alternatives,
    conditionalSuggestions,
    allResults: results,
    isFallback
  };
};