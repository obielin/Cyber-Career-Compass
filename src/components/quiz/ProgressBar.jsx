import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressBar({ current, total, section }) {
  const percentage = (current / total) * 100;
  
  const sections = [
    { name: 'Interest & Motivation', questions: 8 },
    { name: 'Problem Solving', questions: 8 },
    { name: 'Security & Risk', questions: 7 },
    { name: 'Career Preferences', questions: 7 }
  ];
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-600">
          Question {current} of {total}
        </span>
        <span className="text-sm text-cyan-600 font-medium">
          {section}
        </span>
      </div>
      
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
      
      <div className="flex justify-between mt-3">
        {sections.map((s, idx) => {
          const sectionStart = sections.slice(0, idx).reduce((acc, sec) => acc + sec.questions, 0) + 1;
          const sectionEnd = sectionStart + s.questions - 1;
          const isActive = current >= sectionStart && current <= sectionEnd;
          const isComplete = current > sectionEnd;
          
          return (
            <div key={s.name} className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isComplete ? 'bg-cyan-500' : isActive ? 'bg-violet-500' : 'bg-slate-200'
              }`} />
              <span className={`text-xs mt-1 hidden sm:block ${
                isActive ? 'text-violet-600 font-medium' : 'text-slate-400'
              }`}>
                {s.name.split(' ')[0]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}