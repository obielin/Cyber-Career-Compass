import React from 'react';
import { motion } from 'framer-motion';

const traitLabels = {
  technical_comfort: 'Technical Aptitude',
  problem_solving: 'Problem Solving',
  investigative_curiosity: 'Investigative Curiosity',
  communication_orientation: 'Communication',
  ethical_risk_awareness: 'Ethics & Risk',
  resilience_persistence: 'Resilience',
  governance_policy_interest: 'Governance Interest',
  security_operations_interest: 'Security Ops'
};

const traitColors = {
  technical_comfort: 'from-cyan-400 to-cyan-500',
  problem_solving: 'from-violet-400 to-violet-500',
  investigative_curiosity: 'from-amber-400 to-amber-500',
  communication_orientation: 'from-emerald-400 to-emerald-500',
  ethical_risk_awareness: 'from-rose-400 to-rose-500',
  resilience_persistence: 'from-blue-400 to-blue-500',
  governance_policy_interest: 'from-indigo-400 to-indigo-500',
  security_operations_interest: 'from-orange-400 to-orange-500'
};

export default function TraitChart({ traitScores }) {
  const sortedTraits = Object.entries(traitScores)
    .sort((a, b) => b[1] - a[1]);
  
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 mb-6">Your Profile</h3>
      
      <div className="space-y-4">
        {sortedTraits.map(([trait, score], index) => (
          <div key={trait}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-slate-700">
                {traitLabels[trait]}
              </span>
              <span className="text-sm font-semibold text-slate-600">
                {score}%
              </span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${traitColors[trait]}`}
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}