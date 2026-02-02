import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Shield, ChevronRight, GraduationCap, Briefcase, Compass,
  Sparkles, Target, BookOpen, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Home() {
  const [userCategory, setUserCategory] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [step, setStep] = useState(1);
  
  const categories = [
    { 
      value: 'high_school_student', 
      label: 'High School Student (16+)', 
      icon: GraduationCap,
      description: 'Exploring future career options'
    },
    { 
      value: 'career_changer', 
      label: 'Career Changer', 
      icon: Briefcase,
      description: 'Looking to transition into cybersecurity'
    },
    { 
      value: 'exploring', 
      label: 'Exploring Cybersecurity', 
      icon: Compass,
      description: 'Curious about the field'
    }
  ];
  
  const levels = [
    { 
      value: 'beginner', 
      label: 'Beginner',
      description: 'New to cybersecurity'
    },
    { 
      value: 'some_experience', 
      label: 'Some Experience',
      description: 'Some exposure or self-learning'
    },
    { 
      value: 'experienced', 
      label: 'Experienced',
      description: 'Working in IT or related field'
    }
  ];
  
  const handleStartQuiz = () => {
    if (userCategory && experienceLevel) {
      const params = new URLSearchParams({
        category: userCategory,
        level: experienceLevel
      });
      window.location.href = createPageUrl('Quiz') + '?' + params.toString();
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-violet-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 mb-6">
              <Shield className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-medium text-slate-700">Sycom Academy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Cyber Career
              <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent"> Compass</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-4">
              Discover your ideal cybersecurity career pathway with our interactive assessment, 
              aligned to the UK Cyber Security Council Career Framework.
            </p>
            
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              This tool helps you explore cybersecurity careers. It does not lock you into a single path—it's a starting point for your journey.
            </p>
          </motion.div>
          
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { icon: Target, label: '30 Questions', sublabel: '12-15 minutes' },
              { icon: Sparkles, label: 'Personalised', sublabel: 'Career matching' },
              { icon: BookOpen, label: 'Course Pathway', sublabel: 'Sycom Academy' },
              { icon: Users, label: 'All Levels', sublabel: 'Beginner friendly' }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{feature.label}</p>
                  <p className="text-xs text-slate-500">{feature.sublabel}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Onboarding Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="max-w-2xl mx-auto border-2 border-slate-200 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                {step === 1 ? (
                  <>
                    <h2 className="text-xl font-semibold text-slate-800 mb-6">
                      Tell us about yourself
                    </h2>
                    
                    <div className="space-y-4">
                      {categories.map((cat) => (
                        <motion.button
                          key={cat.value}
                          onClick={() => setUserCategory(cat.value)}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                            userCategory === cat.value 
                              ? 'border-cyan-500 bg-cyan-50' 
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            userCategory === cat.value 
                              ? 'bg-cyan-500 text-white' 
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            <cat.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">{cat.label}</p>
                            <p className="text-sm text-slate-500">{cat.description}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!userCategory}
                      className="w-full mt-6 h-12 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700"
                    >
                      Continue
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => setStep(1)}
                      className="text-sm text-slate-500 hover:text-slate-700 mb-4"
                    >
                      ← Back
                    </button>
                    
                    <h2 className="text-xl font-semibold text-slate-800 mb-6">
                      What's your experience level?
                    </h2>
                    
                    <div className="space-y-4">
                      {levels.map((level) => (
                        <motion.button
                          key={level.value}
                          onClick={() => setExperienceLevel(level.value)}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                            experienceLevel === level.value 
                              ? 'border-violet-500 bg-violet-50' 
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            experienceLevel === level.value 
                              ? 'border-violet-500 bg-violet-500' 
                              : 'border-slate-300'
                          }`}>
                            {experienceLevel === level.value && (
                              <div className="w-2 h-2 bg-white rounded-full" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">{level.label}</p>
                            <p className="text-sm text-slate-500">{level.description}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    
                    <Button
                      onClick={handleStartQuiz}
                      disabled={!experienceLevel}
                      className="w-full mt-6 h-12 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700"
                    >
                      Start Your Discovery
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="py-8 text-center">
        <p className="text-sm text-slate-500">
          Aligned with the <span className="font-medium">UK Cyber Security Council Career Framework</span>
        </p>
        <p className="text-xs text-slate-400 mt-2">
          © Sycom Academy. All rights reserved.
        </p>
      </div>
    </div>
  );
}