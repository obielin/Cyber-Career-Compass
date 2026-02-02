// Scoring Engine for Cyber Career Compass
// Calculates trait scores and matches career pathways

import { quizQuestions } from './quizQuestions';
import { careerPathways, sycomCourses } from './careerPathways';

// Initialize trait scores
const initializeTraitScores = () => ({
  technical_comfort: 0,
  problem_solving: 0,
  investigative_curiosity: 0,
  communication_orientation: 0,
  ethical_risk_awareness: 0,
  resilience_persistence: 0,
  governance_policy_interest: 0,
  security_operations_interest: 0
});

// Maximum possible score per trait (for normalization)
const calculateMaxScores = () => {
  const maxScores = initializeTraitScores();
  
  quizQuestions.forEach(question => {
    if (question.type === 'likert') {
      // Max likert value is 5
      Object.entries(question.traits).forEach(([trait, weight]) => {
        maxScores[trait] += weight * 5;
      });
    } else {
      // For multiple choice, find max trait contribution
      Object.values(question.traits).forEach(traitContribution => {
        Object.entries(traitContribution).forEach(([trait, weight]) => {
          maxScores[trait] += weight;
        });
      });
    }
  });
  
  return maxScores;
};

// Calculate trait scores from answers
export const calculateTraitScores = (answers) => {
  const scores = initializeTraitScores();
  
  quizQuestions.forEach(question => {
    const answer = answers[question.id];
    if (answer === undefined || answer === null) return;
    
    if (question.type === 'likert') {
      // Likert: multiply weight by answer value (1-5)
      Object.entries(question.traits).forEach(([trait, weight]) => {
        scores[trait] += weight * answer;
      });
    } else {
      // Multiple choice: add trait contributions for selected option
      const traitContribution = question.traits[answer];
      if (traitContribution) {
        Object.entries(traitContribution).forEach(([trait, weight]) => {
          scores[trait] += weight;
        });
      }
    }
  });
  
  // Normalize scores to 0-100
  const maxScores = calculateMaxScores();
  const normalizedScores = {};
  
  Object.keys(scores).forEach(trait => {
    const maxScore = maxScores[trait] || 1;
    normalizedScores[trait] = Math.round((scores[trait] / maxScore) * 100);
  });
  
  return normalizedScores;
};

// Match career pathways based on trait scores
export const matchCareerPathways = (traitScores) => {
  const pathwayScores = careerPathways.map(pathway => {
    let score = 0;
    let explanation = [];
    
    // Calculate weighted similarity score
    Object.entries(pathway.traits).forEach(([trait, weight]) => {
      const traitScore = traitScores[trait] || 0;
      const contribution = traitScore * weight;
      score += contribution;
      
      // Track significant trait contributions for explanation
      if (traitScore >= 60 && weight >= 0.2) {
        explanation.push(formatTraitName(trait));
      }
    });
    
    return {
      ...pathway,
      matchScore: Math.round(score),
      matchExplanation: explanation
    };
  });
  
  // Sort by match score and return top 3
  return pathwayScores
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
};

// Get recommended courses for matched pathways
export const getRecommendedCourses = (matchedPathways) => {
  const pathwayIds = matchedPathways.map(p => p.id);
  
  // Score courses based on pathway alignment
  const courseScores = sycomCourses.map(course => {
    const relevantPathways = course.pathways.filter(p => pathwayIds.includes(p));
    const relevanceScore = relevantPathways.length;
    const levelScore = course.level === 'Foundation' ? 100 : 
                       course.level === 'Practitioner' ? 50 : 25;
    
    return {
      ...course,
      relevanceScore,
      orderScore: levelScore + (relevanceScore * 10)
    };
  });
  
  // Sort by order (foundations first, then relevance)
  return courseScores
    .filter(c => c.relevanceScore > 0)
    .sort((a, b) => b.orderScore - a.orderScore);
};

// Generate personalized explanation for pathway match
export const generatePathwayExplanation = (pathway, traitScores) => {
  const strongTraits = [];
  
  Object.entries(pathway.traits).forEach(([trait, weight]) => {
    const score = traitScores[trait] || 0;
    if (score >= 60 && weight >= 0.15) {
      strongTraits.push({
        name: formatTraitName(trait),
        score
      });
    }
  });
  
  // Sort by score
  strongTraits.sort((a, b) => b.score - a.score);
  
  if (strongTraits.length === 0) {
    return `This pathway aligns with your overall profile and interests.`;
  }
  
  if (strongTraits.length === 1) {
    return `Based on your strong ${strongTraits[0].name.toLowerCase()}.`;
  }
  
  const traitNames = strongTraits.slice(0, 3).map(t => t.name.toLowerCase());
  const lastTrait = traitNames.pop();
  return `Based on your ${traitNames.join(', ')} and ${lastTrait}.`;
};

// Format trait name for display
const formatTraitName = (trait) => {
  const names = {
    technical_comfort: 'Technical Aptitude',
    problem_solving: 'Problem-Solving Skills',
    investigative_curiosity: 'Investigative Curiosity',
    communication_orientation: 'Communication Skills',
    ethical_risk_awareness: 'Ethics & Risk Awareness',
    resilience_persistence: 'Resilience & Persistence',
    governance_policy_interest: 'Governance Interest',
    security_operations_interest: 'Security Operations Interest'
  };
  return names[trait] || trait;
};

// Generate strength and development areas
export const analyzeStrengthsAndDevelopment = (traitScores) => {
  const sortedTraits = Object.entries(traitScores)
    .map(([trait, score]) => ({ trait, score, name: formatTraitName(trait) }))
    .sort((a, b) => b.score - a.score);
  
  const strengths = sortedTraits.slice(0, 3).filter(t => t.score >= 50);
  const developmentAreas = sortedTraits.slice(-3).filter(t => t.score < 70);
  
  return { strengths, developmentAreas };
};

export default {
  calculateTraitScores,
  matchCareerPathways,
  getRecommendedCourses,
  generatePathwayExplanation,
  analyzeStrengthsAndDevelopment
};