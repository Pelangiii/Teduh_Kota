import { calculateRecommendations } from './src/utils/recommendationEngine.js';

const testCases = {
  D: {
    areaType: 'rooftop',
    roofStructure: 'unchecked',
    areaSize: 'medium',
    surfaceType: 'concrete',
    sunExposure: '4_6',
    waterAccess: 'easy',
    rainCondition: 'drains_fast',
    maintenanceFrequency: 'weekly',
    goals: ['more_green_space', 'use_empty_space'],
    wallSupport: null,
    treeSpace: null
  }
};

const runTestD = () => {
  const result = calculateRecommendations(testCases.D);
  
  console.log("==================================================");
  console.log("TEST CASE D - REPORT");
  console.log("==================================================\\n");
  
  ['rooftop_garden', 'flexible_pot', 'raised_bed'].forEach(id => {
    const item = result.allResults.find(r => r.solutionId === id);
    console.log(item.title.toUpperCase());
    console.log("- eligibility: " + item.eligibility);
    console.log("- rawScore: " + item.rawScore.toFixed(4));
    console.log("- score: " + item.score);
    console.log("- technicalScore: " + item.technicalScore.toFixed(4));
    console.log("- verificationMessage: " + (item.verificationMessage || 'null') + "\\n");
  });

  console.log("==================================================");
  console.log("FULL CONDITIONAL INTERNAL RANKING");
  console.log("==================================================");
  result.conditionalSuggestions.forEach((r, idx) => {
    console.log((idx + 1) + ". " + r.title + " - " + r.score);
  });

  console.log("\\n==================================================");
  console.log("RESULT UI DISPLAYED RANKING (Max 3 shown)");
  console.log("==================================================");
  if (result.primary) {
    console.log("1. [MAIN] " + result.primary.title);
  }
  result.alternatives.forEach((alt, idx) => {
    console.log((idx + 2) + ". [ALT] " + alt.title);
  });

};

runTestD();
