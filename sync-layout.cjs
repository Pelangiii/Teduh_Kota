const fs = require('fs');
const path = require('path');

const pages = [
  'TamanPotFleksibelPage.jsx',
  'TamanVertikalBertrellisPage.jsx',
  'BedengTanamTinggiPage.jsx',
  'TamanTanamLangsungPage.jsx',
  'PohonPeneduhPage.jsx',
  'TamanResapanPage.jsx',
  'TamanAtapPage.jsx'
];

pages.forEach(file => {
  let content = fs.readFileSync(path.join(__dirname, 'src', 'pages', file), 'utf-8');
  

  content = content.replace(
    /<h2 className="text-4xl md:text-5xl font-header text-center mb-12">/g,
    '<h2 className="text-3xl md:text-4xl font-header text-center mb-12">'
  );
  

  content = content.replace(
    /<img src=\{circleStarImg\} alt="" className="absolute[^"]+" \/>/g,
    '<img src={circleStarImg} alt="" className="absolute -left-2 md:-left-4 -bottom-2 md:-bottom-4 w-6 md:w-8 z-20 pointer-events-none" />'
  );
  

  content = content.replace(
    /className="relative z-10 w-full aspect-video rounded-\[32px\] overflow-hidden shadow-lg border-4 border-white bg-brand-gray\/20"/g,
    'className="relative z-10 w-full aspect-video rounded-4xl overflow-hidden shadow-lg border-4 border-white bg-brand-gray/20"'
  );
  
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', file), content, 'utf-8');
});

console.log('Applied user layout overrides to all 7 pages.');
