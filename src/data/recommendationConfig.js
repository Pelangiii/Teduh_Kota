import flexiblePotImg from '../assets/images/taman-pot.png';
import verticalTrellisImg from '../assets/images/vertikal-bertrellis.png';
import raisedBedImg from '../assets/images/bedeng-tanam-tinggi.png';
import directGardenImg from '../assets/images/taman-tanam-langsung.png';
import shadeTreeImg from '../assets/images/pohon-peneduh.png';
import rainGardenImg from '../assets/images/taman-resapan.png';
import rooftopGardenImg from '../assets/images/taman-atap.png';

export const WEIGHTS = {
  areaType: 25,
  areaSize: 10,
  surfaceType: 20,
  sunExposure: 5,
  waterAccess: 10,
  rainCondition: 10,
  maintenanceFrequency: 5,
  goals: 15
};

export const SOLUTIONS = {
  flexible_pot: {
    id: 'flexible_pot',
    title: 'Taman Pot Fleksibel',
    estimasiBiaya: 'Rendah-Sedang',
    kebutuhanCahaya: 'Fleksibel, menyesuaikan jenis tanaman',
    pemeliharaan: 'Sedang',
    image: flexiblePotImg,
    link: 'taman-pot-fleksibel'
  },
  vertical_trellis: {
    id: 'vertical_trellis',
    title: 'Taman Vertikal Bertrellis',
    estimasiBiaya: 'Sedang',
    kebutuhanCahaya: 'Fleksibel, menyesuaikan jenis tanaman',
    pemeliharaan: 'Sedang',
    image: verticalTrellisImg,
    link: 'taman-vertikal-bertrellis'
  },
  raised_bed: {
    id: 'raised_bed',
    title: 'Bedeng Tanam Tinggi / Raised Bed',
    estimasiBiaya: 'Sedang',
    kebutuhanCahaya: 'Sedang-Tinggi, menyesuaikan jenis tanaman',
    pemeliharaan: 'Sedang',
    image: raisedBedImg,
    link: 'bedeng-tanam-tinggi'
  },
  direct_garden: {
    id: 'direct_garden',
    title: 'Taman Tanam Langsung',
    estimasiBiaya: 'Rendah-Sedang',
    kebutuhanCahaya: 'Fleksibel, menyesuaikan jenis tanaman',
    pemeliharaan: 'Sedang',
    image: directGardenImg,
    link: 'taman-tanam-langsung'
  },
  shade_tree: {
    id: 'shade_tree',
    title: 'Pohon Peneduh',
    estimasiBiaya: 'Sedang',
    kebutuhanCahaya: 'Sedang-Tinggi, menyesuaikan jenis pohon',
    pemeliharaan: 'Rendah-Sedang',
    image: shadeTreeImg,
    link: 'pohon-peneduh'
  },
  rain_garden: {
    id: 'rain_garden',
    title: 'Taman Resapan / Rain Garden',
    estimasiBiaya: 'Sedang-Tinggi',
    kebutuhanCahaya: 'Fleksibel, menyesuaikan tanaman dan kondisi lokasi',
    pemeliharaan: 'Sedang',
    image: rainGardenImg,
    link: 'taman-resapan'
  },
  rooftop_garden: {
    id: 'rooftop_garden',
    title: 'Taman Atap / Rooftop Garden',
    estimasiBiaya: 'Tinggi',
    kebutuhanCahaya: 'Sedang-Tinggi, menyesuaikan kondisi atap dan jenis tanaman',
    pemeliharaan: 'Sedang-Tinggi',
    image: rooftopGardenImg,
    link: 'taman-atap'
  }
};

export const GLOBAL_METADATA = {
  costDisclaimer: "Estimasi biaya bersifat relatif dan dapat berbeda tergantung luas area, material, jenis tanaman, serta kebutuhan instalasi."
};

export const FIT_MATRIX = {
  areaType: {
    ground_area: { flexible_pot: 0.75, vertical_trellis: 0.25, raised_bed: 0.75, direct_garden: 1.00, shade_tree: 1.00, rain_garden: 1.00, rooftop_garden: 0.00 },
    terrace_balcony: { flexible_pot: 1.00, vertical_trellis: 0.50, raised_bed: 0.50, direct_garden: 0.00, shade_tree: 0.00, rain_garden: 0.00, rooftop_garden: 0.00 },
    wall_fence: { flexible_pot: 0.50, vertical_trellis: 1.00, raised_bed: 0.00, direct_garden: 0.00, shade_tree: 0.00, rain_garden: 0.00, rooftop_garden: 0.00 },
    concrete_paving: { flexible_pot: 1.00, vertical_trellis: 0.25, raised_bed: 1.00, direct_garden: 0.25, shade_tree: 0.50, rain_garden: 0.50, rooftop_garden: 0.00 },
    rooftop: { flexible_pot: 0.75, vertical_trellis: 0.25, raised_bed: 0.50, direct_garden: 0.00, shade_tree: 0.00, rain_garden: 0.00, rooftop_garden: 1.00 },
    other: { flexible_pot: 0.50, vertical_trellis: 0.00, raised_bed: 0.50, direct_garden: 0.50, shade_tree: 0.50, rain_garden: 0.50, rooftop_garden: 0.00 }
  },
  areaSize: {
    very_small: { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 0.25, direct_garden: 0.25, shade_tree: 0.00, rain_garden: 0.25, rooftop_garden: 0.75 },
    small: { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 0.75, direct_garden: 0.50, shade_tree: 0.00, rain_garden: 0.50, rooftop_garden: 1.00 },
    medium: { flexible_pot: 0.75, vertical_trellis: 0.75, raised_bed: 1.00, direct_garden: 1.00, shade_tree: 1.00, rain_garden: 1.00, rooftop_garden: 1.00 },
    large: { flexible_pot: 0.50, vertical_trellis: 0.75, raised_bed: 1.00, direct_garden: 1.00, shade_tree: 1.00, rain_garden: 1.00, rooftop_garden: 1.00 }
  },
  surfaceType: {
    soil: { flexible_pot: 0.75, vertical_trellis: 0.75, raised_bed: 0.75, direct_garden: 1.00, shade_tree: 1.00, rain_garden: 1.00, rooftop_garden: 0.25 },
    concrete: { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 1.00, direct_garden: 0.00, shade_tree: 0.25, rain_garden: 0.25, rooftop_garden: 1.00 },
    paving: { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 1.00, direct_garden: 0.25, shade_tree: 0.50, rain_garden: 0.50, rooftop_garden: 0.50 },
    floor: { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 0.75, direct_garden: 0.00, shade_tree: 0.00, rain_garden: 0.00, rooftop_garden: 0.75 },
    mixed: { flexible_pot: 0.75, vertical_trellis: 0.75, raised_bed: 1.00, direct_garden: 0.75, shade_tree: 0.75, rain_garden: 0.75, rooftop_garden: 0.25 }
  },
  sunExposure: {
    under_2: { flexible_pot: 0.75, vertical_trellis: 0.75, raised_bed: 0.50, direct_garden: 0.50, shade_tree: 0.50, rain_garden: 0.75, rooftop_garden: 0.50 },
    "2_4": { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 0.75, direct_garden: 0.75, shade_tree: 0.75, rain_garden: 1.00, rooftop_garden: 0.75 },
    "4_6": { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 1.00, direct_garden: 1.00, shade_tree: 1.00, rain_garden: 1.00, rooftop_garden: 1.00 },
    over_6: { flexible_pot: 0.75, vertical_trellis: 0.75, raised_bed: 1.00, direct_garden: 1.00, shade_tree: 1.00, rain_garden: 0.75, rooftop_garden: 0.75 }
  },
  waterAccess: {
    very_easy: { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 1.00, direct_garden: 1.00, shade_tree: 1.00, rain_garden: 1.00, rooftop_garden: 1.00 },
    easy: { flexible_pot: 0.75, vertical_trellis: 0.75, raised_bed: 0.75, direct_garden: 1.00, shade_tree: 1.00, rain_garden: 1.00, rooftop_garden: 0.75 },
    limited: { flexible_pot: 0.50, vertical_trellis: 0.50, raised_bed: 0.50, direct_garden: 0.75, shade_tree: 0.75, rain_garden: 0.75, rooftop_garden: 0.50 },
    none: { flexible_pot: 0.25, vertical_trellis: 0.25, raised_bed: 0.25, direct_garden: 0.50, shade_tree: 0.50, rain_garden: 0.50, rooftop_garden: 0.25 }
  },
  rainCondition: {
    drains_fast: { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 1.00, direct_garden: 1.00, shade_tree: 1.00, rain_garden: 0.50, rooftop_garden: 1.00 },
    temporary_puddle: { flexible_pot: 0.75, vertical_trellis: 0.75, raised_bed: 0.75, direct_garden: 0.75, shade_tree: 0.75, rain_garden: 0.75, rooftop_garden: 0.75 },
    frequent_puddle: { flexible_pot: 0.50, vertical_trellis: 0.75, raised_bed: 0.50, direct_garden: 0.50, shade_tree: 0.50, rain_garden: 1.00, rooftop_garden: 0.50 },
    long_puddle: { flexible_pot: 0.25, vertical_trellis: 0.50, raised_bed: 0.25, direct_garden: 0.25, shade_tree: 0.25, rain_garden: 1.00, rooftop_garden: 0.25 }
  },
  maintenanceFrequency: {
    daily: { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 1.00, direct_garden: 1.00, shade_tree: 1.00, rain_garden: 1.00, rooftop_garden: 1.00 },
    "2_3_week": { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 1.00, direct_garden: 1.00, shade_tree: 1.00, rain_garden: 1.00, rooftop_garden: 1.00 },
    weekly: { flexible_pot: 0.75, vertical_trellis: 0.75, raised_bed: 0.75, direct_garden: 0.75, shade_tree: 0.75, rain_garden: 0.75, rooftop_garden: 0.75 },
    occasionally: { flexible_pot: 0.50, vertical_trellis: 0.50, raised_bed: 0.50, direct_garden: 0.75, shade_tree: 0.75, rain_garden: 0.75, rooftop_garden: 0.50 },
    minimal: { flexible_pot: 0.50, vertical_trellis: 0.50, raised_bed: 0.50, direct_garden: 0.75, shade_tree: 0.75, rain_garden: 0.75, rooftop_garden: 0.50 }
  },
  goals: {
    cooler_area: { flexible_pot: 0.50, vertical_trellis: 0.75, raised_bed: 0.50, direct_garden: 0.75, shade_tree: 1.00, rain_garden: 0.50, rooftop_garden: 0.75 },
    more_green_space: { flexible_pot: 0.75, vertical_trellis: 1.00, raised_bed: 1.00, direct_garden: 1.00, shade_tree: 0.75, rain_garden: 0.75, rooftop_garden: 1.00 },
    more_shade: { flexible_pot: 0.25, vertical_trellis: 0.50, raised_bed: 0.25, direct_garden: 0.50, shade_tree: 1.00, rain_garden: 0.25, rooftop_garden: 0.50 },
    reduce_puddles: { flexible_pot: 0.25, vertical_trellis: 0.25, raised_bed: 0.25, direct_garden: 0.50, shade_tree: 0.50, rain_garden: 1.00, rooftop_garden: 0.75 },
    beautification: { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 1.00, direct_garden: 1.00, shade_tree: 0.75, rain_garden: 0.75, rooftop_garden: 0.75 },
    use_empty_space: { flexible_pot: 1.00, vertical_trellis: 1.00, raised_bed: 1.00, direct_garden: 0.75, shade_tree: 0.75, rain_garden: 0.75, rooftop_garden: 1.00 }
  }
};
