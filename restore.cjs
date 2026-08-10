const fs = require('fs');

const path = 'src/utils/recommendationEngine.js';
let content = fs.readFileSync(path, 'utf8');

// I need to strip the duplicated content that was added accidentally
// I will find the last occurrence of `    if (solutionId === 'rooftop_garden') {` 
// and then keep everything above the FIRST occurrence, but I'll do this by matching the exact `results.push` block.

const correctPushBlock = `
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

  // RANKING
  const eligible = results.filter(r => r.eligibility === 'ELIGIBLE' && r.score >= 55);
  const conditional = results.filter(r => r.eligibility === 'CONDITIONAL');
`;

const firstPart = content.split("    if (solutionId === 'flexible_pot') {\r\n      if (areaType === 'rooftop') {")[0];

const secondPartEnd = `  const SOLUTION_ORDER = [
    'flexible_pot',
    'vertical_trellis',
`;
const secondPartIndex = content.lastIndexOf(secondPartEnd);

const newContent = firstPart + correctPushBlock + content.slice(secondPartIndex);

fs.writeFileSync(path, newContent, 'utf8');
console.log("Restored engine file");
