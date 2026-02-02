import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function QuestionCard({ question, onAnswer, currentAnswer }) {
  const isLikert = question.type === 'likert';
  const isMultiple = question.type === 'multiple';
  
  const likertOptions = [
    { value: 1, label: 'Strongly Disagree' },
    { value: 2, label: 'Disagree' },
    { value: 3, label: 'Neutral' },
    { value: 4, label: 'Agree' },
    { value: 5, label: 'Strongly Agree' }
  ];
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-8 leading-relaxed">
          {question.text}
        </h2>
        
        {isLikert ? (
          <div className="space-y-3">
            <div className="flex justify-between text-xs text-slate-500 px-2 mb-2">
              <span>Strongly Disagree</span>
              <span>Strongly Agree</span>
            </div>
            <div className="flex justify-center gap-3 md:gap-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <motion.button
                  key={value}
                  onClick={() => onAnswer(value)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-200",
                    currentAnswer === value
                      ? "bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-white border-2 border-slate-200 text-slate-600 hover:border-cyan-400 hover:text-cyan-600"
                  )}
                >
                  {value}
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-3">
            {question.options.map((option, idx) => (
              <motion.button
                key={idx}
                onClick={() => onAnswer(option.value || option)}
                whileHover={{ scale: 1.01, x: 4 }}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  "w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-200",
                  currentAnswer === (option.value || option)
                    ? "border-cyan-500 bg-cyan-50 text-cyan-900"
                    : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                    currentAnswer === (option.value || option)
                      ? "border-cyan-500 bg-cyan-500"
                      : "border-slate-300"
                  )}>
                    {currentAnswer === (option.value || option) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-white rounded-full"
                      />
                    )}
                  </div>
                  <span className="text-base md:text-lg">
                    {option.label || option}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}