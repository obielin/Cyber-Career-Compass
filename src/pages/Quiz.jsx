import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

import ProgressBar from '@/components/quiz/ProgressBar';
import QuestionCard from '@/components/quiz/QuestionCard';
import { quizQuestions } from '@/components/quiz/quizQuestions';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [userCategory, setUserCategory] = useState('exploring');
  const [experienceLevel, setExperienceLevel] = useState('beginner');
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const level = params.get('level');
    
    if (category) setUserCategory(category);
    if (level) setExperienceLevel(level);
    
    // Redirect if no params
    if (!category || !level) {
      window.location.href = createPageUrl('Home');
    }
  }, []);
  
  const question = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  
  const handleAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [question.id]: value
    }));
    
    // Auto-advance after short delay
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(prev => prev + 1);
      }
    }, 300);
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };
  
  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };
  
  const handleComplete = () => {
    // Store data and navigate to results
    const quizData = {
      userCategory,
      experienceLevel,
      answers
    };
    
    sessionStorage.setItem('quizData', JSON.stringify(quizData));
    window.location.href = createPageUrl('Results');
  };
  
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const canProceed = answers[question?.id] !== undefined;
  const allAnswered = quizQuestions.every(q => answers[q.id] !== undefined);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-violet-50/30">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link 
              to={createPageUrl('Home')}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Back to Start</span>
            </Link>
            
            <div className="text-sm text-slate-500">
              ~{Math.ceil((totalQuestions - currentQuestion) * 0.4)} min remaining
            </div>
          </div>
          
          <ProgressBar 
            current={currentQuestion + 1} 
            total={totalQuestions} 
            section={question?.section}
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-10">
          <div className="mb-2 text-sm font-medium text-cyan-600">
            Section: {question?.section}
          </div>
          
          <QuestionCard
            question={question}
            onAnswer={handleAnswer}
            currentAnswer={answers[question?.id]}
          />
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          {isLastQuestion ? (
            <Button
              onClick={handleComplete}
              disabled={!allAnswered}
              className="gap-2 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700"
            >
              View Results
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
        
        {/* Skip indicator */}
        {!canProceed && (
          <p className="text-center text-sm text-slate-500 mt-4">
            Please select an answer to continue
          </p>
        )}
      </div>
    </div>
  );
}