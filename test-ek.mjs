import { calculateRecommendations } from './src/utils/recommendationEngine.js';

const testCases = {
  E: {
    areaType: 'concrete_paving', areaSize: 'medium', surfaceType: 'concrete',
    sunExposure: '4_6', waterAccess: 'easy', rainCondition: 'frequent_puddle',
    maintenanceFrequency: '2_3_week', goals: ['reduce_puddles', 'more_green_space'],
    wallSupport: null, treeSpace: null, roofStructure: null
  },
  F: {
    areaType: 'ground_area', areaSize: 'large', surfaceType: 'soil',
    sunExposure: 'over_6', waterAccess: 'very_easy', rainCondition: 'drains_fast',
    maintenanceFrequency: 'weekly', goals: ['more_shade', 'cooler_area'],
    treeSpace: 'no', wallSupport: null, roofStructure: null
  },
  G: {
    areaType: 'wall_fence', areaSize: 'small', surfaceType: 'concrete',
    sunExposure: '4_6', waterAccess: 'very_easy', rainCondition: 'drains_fast',
    maintenanceFrequency: '2_3_week', goals: ['more_green_space', 'beautification'],
    wallSupport: 'no', treeSpace: null, roofStructure: null
  },
  H: {
    areaType: 'rooftop', areaSize: 'medium', surfaceType: 'concrete',
    sunExposure: 'over_6', waterAccess: 'none', rainCondition: 'drains_fast',
    maintenanceFrequency: 'minimal', goals: ['more_green_space', 'use_empty_space'],
    roofStructure: 'yes', wallSupport: null, treeSpace: null
  },
  I: {
    areaType: 'ground_area', areaSize: 'very_small', surfaceType: 'soil',
    sunExposure: 'over_6', waterAccess: 'easy', rainCondition: 'drains_fast',
    maintenanceFrequency: 'weekly', goals: ['more_shade', 'cooler_area'],
    wallSupport: null, treeSpace: null, roofStructure: null
  },
  J: {
    areaType: 'terrace_balcony', areaSize: 'small', surfaceType: 'floor',
    sunExposure: 'unsure', waterAccess: 'easy', rainCondition: 'unknown',
    maintenanceFrequency: 'weekly', goals: ['beautification', 'more_green_space'],
    wallSupport: null, treeSpace: null, roofStructure: null
  },
  K: {
    areaType: 'ground_area', areaSize: 'medium', surfaceType: 'soil',
    sunExposure: '4_6', waterAccess: 'very_easy', rainCondition: 'long_puddle',
    maintenanceFrequency: '2_3_week', goals: ['reduce_puddles'],
    treeSpace: 'yes', wallSupport: null, roofStructure: null
  }
};

for (const [name, data] of Object.entries(testCases)) {
  const result = calculateRecommendations(data);
  console.log("\\n==================================================");
  console.log("TEST CASE " + name);
  console.log("==================================================");
  console.log("Confidence: " + result.allResults[0].confidence);
  
  console.log("\\nELIGIBILITY & SCORES (All Solutions):");
  result.allResults.forEach(r => {
    console.log("- " + r.solutionId + ": " + r.eligibility + " | Score: " + r.score + " (Raw: " + r.rawScore.toFixed(4) + ") | Tech: " + r.technicalScore.toFixed(4) + " | Cat: " + r.category);
    if (r.verificationMessage) console.log("  Msg: " + r.verificationMessage);
  });

  console.log("\\nFINAL RANKING:");
  if (result.primary) {
    console.log("1. [MAIN] " + result.primary.title + " (" + result.primary.eligibility + ")");
  } else {
    console.log("1. [MAIN] None (Fallback mode)");
  }
  
  result.alternatives.forEach((alt, idx) => {
    console.log((idx + 2) + ". [ALT] " + alt.title + " (" + alt.eligibility + ")");
  });

  console.log("\\nCONDITIONAL SUGGESTIONS:");
  result.conditionalSuggestions.forEach((r, idx) => {
    console.log((idx + 1) + ". " + r.title + " - " + r.score);
  });
}
