import { calculateRecommendations } from './src/utils/recommendationEngine.js';

const testCases = {
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
  console.log("TEST CASE " + name + " (VERIFICATION)");
  console.log("==================================================");

  console.log("PRIMARY:");
  if (result.primary) console.log("- " + result.primary.solutionId + " — Score: " + result.primary.score + " — " + result.primary.eligibility);
  
  console.log("\\nALTERNATIVES:");
  if (result.alternatives.length === 0) console.log("[]");
  result.alternatives.forEach(r => console.log("- " + r.solutionId + " — Score: " + r.score + " — " + r.eligibility));
  
  console.log("\\nCONDITIONAL SUGGESTIONS:");
  if (result.conditionalSuggestions.length === 0) console.log("[]");
  result.conditionalSuggestions.forEach(r => console.log("- " + r.solutionId + " — Score: " + r.score + " — " + r.eligibility));
};

runTest('K', testCases.K);
