import { calculateRecommendations } from './src/utils/recommendationEngine.js';

const testCases = {
  A: {
    areaType: 'wall_fence',
    wallSupport: 'yes',
    areaSize: 'small',
    surfaceType: 'concrete',
    sunExposure: '4_6',
    waterAccess: 'very_easy',
    rainCondition: 'drains_fast',
    maintenanceFrequency: '2_3_week',
    goals: ['more_green_space', 'beautification'],
    treeSpace: null,
    roofStructure: null
  },
  B: {
    areaType: 'ground_area',
    areaSize: 'large',
    surfaceType: 'soil',
    sunExposure: 'over_6',
    waterAccess: 'very_easy',
    rainCondition: 'frequent_puddle',
    maintenanceFrequency: '2_3_week',
    treeSpace: 'yes',
    goals: ['cooler_area', 'more_shade', 'reduce_puddles'],
    wallSupport: null,
    roofStructure: null
  },
  C: {
    areaType: 'rooftop',
    roofStructure: 'yes',
    areaSize: 'medium',
    surfaceType: 'concrete',
    sunExposure: '4_6',
    waterAccess: 'easy',
    rainCondition: 'drains_fast',
    maintenanceFrequency: 'weekly',
    goals: ['more_green_space', 'use_empty_space'],
    wallSupport: null,
    treeSpace: null
  },
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

const runTests = () => {
  for (const [name, data] of Object.entries(testCases)) {
    console.log("\\n==================================================");
    console.log("TEST CASE " + name);
    console.log("==================================================");
    const result = calculateRecommendations(data);
    
    console.log("ELIGIBILITY:");
    result.allResults.forEach(r => {
      console.log("- " + r.solutionId + ": " + r.eligibility + " (Score: " + r.score + "% | Tech: " + r.technicalScore.toFixed(2) + ")");
    });

    console.log("\\nRANKING (Top 3):");
    if (result.primary) {
      console.log("1. [MAIN] " + result.primary.title);
      console.log("   Score: " + result.primary.score + " (Raw: " + result.primary.rawScore.toFixed(2) + ") | Tech: " + result.primary.technicalScore.toFixed(2) + " | " + result.primary.category);
      if (result.primary.verificationMessage) console.log("   Msg: " + result.primary.verificationMessage);
    } else {
      console.log("1. [MAIN] None (Fallback mode)");
    }

    result.alternatives.forEach((alt, idx) => {
      console.log((idx + 2) + ". [ALT] " + alt.title);
      console.log("   Score: " + alt.score + " (Raw: " + alt.rawScore.toFixed(2) + ") | Tech: " + alt.technicalScore.toFixed(2) + " | " + alt.category);
      if (alt.verificationMessage) console.log("   Msg: " + alt.verificationMessage);
    });
  }
};

runTests();
