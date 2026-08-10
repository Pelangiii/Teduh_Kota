import { calculateRecommendations } from './src/utils/recommendationEngine.js';

const testCases = {
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

const runTest = (name, data) => {
  const result = calculateRecommendations(data);
  console.log("\\n==================================================");
  console.log("TEST CASE " + name);
  console.log("==================================================");

  if (name === 'J') {
    console.log("PRIMARY:");
    if (result.primary) console.log("- " + result.primary.title + " — " + result.primary.score + " — " + result.primary.eligibility);
    
    console.log("\\nALTERNATIVES:");
    if (result.alternatives.length === 0) console.log("[]");
    result.alternatives.forEach(r => console.log("- " + r.title + " — " + r.score + " — " + r.eligibility));
    
    console.log("\\nCONDITIONAL SUGGESTIONS:");
    if (result.conditionalSuggestions.length === 0) console.log("[]");
    result.conditionalSuggestions.forEach(r => console.log("- " + r.title + " — " + r.score + " — " + r.eligibility));
  }
  
  if (name === 'K') {
    console.log("FINAL DETERMINISTIC RANKING:");
    const items = [...(result.primary ? [result.primary] : []), ...result.alternatives, ...result.conditionalSuggestions];
    items.forEach((r, idx) => {
      const gPoints = r.breakdown.goals?.points || 0;
      const aPoints = r.breakdown.areaType?.points || 0;
      console.log((idx + 1) + ". " + r.solutionId + " (Score: " + r.score + " | Tech: " + r.technicalScore.toFixed(4) + " | GoalScore: " + gPoints.toFixed(4) + " | AreaScore: " + aPoints.toFixed(4) + ")");
      if (r.isTied) console.log("   --> isTied: true");
    });
  }
};

runTest('J', testCases.J);
runTest('K', testCases.K);
