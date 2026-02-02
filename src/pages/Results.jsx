import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { apiClient } from '@/api/apiClient';
import { 
  RefreshCw, Loader2, CheckCircle, AlertCircle,
  ArrowRight, TrendingUp, Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

import PathwayCard from '@/components/results/PathwayCard';
import CourseCard from '@/components/results/CourseCard';
import TraitChart from '@/components/results/TraitChart';
import ConsentForm from '@/components/consent/ConsentForm';

import { 
  calculateTraitScores, 
  matchCareerPathways, 
  getRecommendedCourses,
  generatePathwayExplanation,
  analyzeStrengthsAndDevelopment
} from '@/components/quiz/scoringEngine';

export default function Results() {
  const [quizData, setQuizData] = useState(null);
  const [traitScores, setTraitScores] = useState(null);
  const [matchedPathways, setMatchedPathways] = useState([]);
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [strengths, setStrengths] = useState([]);
  const [developmentAreas, setDevelopmentAreas] = useState([]);
  const [expandedPathway, setExpandedPathway] = useState(null);
  
  const [showConsent, setShowConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const storedData = sessionStorage.getItem('quizData');
    
    if (!storedData) {
      window.location.href = createPageUrl('Home');
      return;
    }
    
    const data = JSON.parse(storedData);
    setQuizData(data);
    
    // Calculate results
    const scores = calculateTraitScores(data.answers);
    setTraitScores(scores);
    
    const pathways = matchCareerPathways(scores);
    setMatchedPathways(pathways);
    
    const courses = getRecommendedCourses(pathways);
    setRecommendedCourses(courses);
    
    const { strengths: s, developmentAreas: d } = analyzeStrengthsAndDevelopment(scores);
    setStrengths(s);
    setDevelopmentAreas(d);
    
    // Show consent after viewing results
    setTimeout(() => setShowConsent(true), 2000);
  }, []);
  
  const handleConsentSubmit = async (consentData) => {
    setIsSubmitting(true);
    setError('');
    
    // Save to database
    await apiClient.entities.QuizResponse.create({
      user_category: quizData.userCategory,
      experience_level: quizData.experienceLevel,
      answers: quizData.answers,
      trait_scores: traitScores,
      matched_pathways: matchedPathways.map(p => p.id),
      recommended_courses: recommendedCourses.map(c => c.id),
      email: consentData.email,
      consent_report: consentData.consent_report,
      consent_marketing: consentData.consent_marketing,
      consent_education: consentData.consent_education,
      completed_at: new Date().toISOString()
    });
    
    // Generate and send report via LLM
    const reportPrompt = `Generate a professional, encouraging cybersecurity career report email for someone who completed a career discovery quiz. 

Their Profile:
- Category: ${quizData.userCategory.replace(/_/g, ' ')}
- Experience: ${quizData.experienceLevel.replace(/_/g, ' ')}

Top Career Pathways Matched:
${matchedPathways.map((p, i) => `${i + 1}. ${p.name} - ${p.description}`).join('\n')}

Strengths:
${strengths.map(s => `- ${s.name}: ${s.score}%`).join('\n')}

Areas for Development:
${developmentAreas.map(d => `- ${d.name}: ${d.score}%`).join('\n')}

Recommended Sycom Academy Courses (in order):
${recommendedCourses.map((c, i) => `${i + 1}. ${c.name} (${c.level}) - ${c.description}`).join('\n')}

Write a warm, professional email that:
1. Congratulates them on taking this step
2. Summarizes their key strengths
3. Explains why the top pathway is a good fit
4. Presents the recommended course pathway with reasons
5. Includes next steps and encouragement
6. Mentions Sycom Academy can help them on their journey

Keep it concise but comprehensive. Use a friendly, supportive tone appropriate for beginners.`;

    const { email_content } = await apiClient.integrations.Core.InvokeLLM({
      prompt: reportPrompt,
      response_json_schema: {
        type: "object",
        properties: {
          email_content: { type: "string" }
        }
      }
    });
    
    // Send the email
    await apiClient.integrations.Core.SendEmail({
      to: consentData.email,
      subject: "Your Sycom Cyber Career Compass Results",
      body: email_content
    });
    
    setSubmitted(true);
    setIsSubmitting(false);
  };
  
  if (!traitScores) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-violet-50/30 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-cyan-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Analyzing your responses...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-violet-50/30">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-4">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Assessment Complete</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your Cybersecurity Career Profile
          </h1>
          
          <p className="text-slate-600 max-w-2xl mx-auto">
            Based on your responses, we've identified career pathways that align with your interests, 
            preferences, and strengths. Remember, these are starting points—not fixed destinations.
          </p>
        </motion.div>
        
        {/* Main Results Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left: Trait Chart */}
          <div className="lg:col-span-1">
            <TraitChart traitScores={traitScores} />
            
            {/* Strengths & Development */}
            <div className="mt-6 space-y-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <h4 className="font-semibold text-slate-800 flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                  Your Strengths
                </h4>
                <ul className="space-y-2">
                  {strengths.map((s, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <h4 className="font-semibold text-slate-800 flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-cyan-500" />
                  Areas to Develop
                </h4>
                <ul className="space-y-2">
                  {developmentAreas.map((d, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-500" />
                      {d.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right: Pathways */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Recommended Career Pathways
            </h2>
            
            <div className="space-y-4">
              {matchedPathways.map((pathway, idx) => (
                <PathwayCard
                  key={pathway.id}
                  pathway={pathway}
                  rank={idx}
                  explanation={generatePathwayExplanation(pathway, traitScores)}
                  isExpanded={expandedPathway === pathway.id}
                  onToggle={() => setExpandedPathway(
                    expandedPathway === pathway.id ? null : pathway.id
                  )}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Course Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Your Learning Pathway
            </h2>
            <p className="text-slate-600">
              Sycom Academy courses to help you start and grow in your chosen pathway
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {recommendedCourses.map((course, idx) => (
              <CourseCard
                key={course.id}
                course={course}
                index={idx}
                reason={
                  idx === 0 
                    ? "Perfect starting point for your cybersecurity journey" 
                    : idx === 1 
                    ? "Build essential networking foundations"
                    : "Advance your skills with hands-on security practice"
                }
              />
            ))}
          </div>
        </motion.div>
        
        {/* Consent Form */}
        {showConsent && !submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 mb-12"
          >
            <ConsentForm 
              onSubmit={handleConsentSubmit}
              isLoading={isSubmitting}
            />
          </motion.div>
        )}
        
        {/* Success Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center mb-12"
          >
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-emerald-800 mb-2">
              Report Sent Successfully!
            </h3>
            <p className="text-emerald-700 mb-4">
              Check your email for your detailed career report and next steps.
            </p>
            <p className="text-sm text-emerald-600">
              Welcome to your cybersecurity journey with Sycom Academy.
            </p>
          </motion.div>
        )}
        
        {/* Retake */}
        <div className="text-center">
          <Link to={createPageUrl('Home')}>
            <Button variant="outline" className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Take the Quiz Again
            </Button>
          </Link>
        </div>
        
        {/* Footer */}
        <div className="mt-16 text-center text-sm text-slate-500">
          <p>
            Aligned with the UK Cyber Security Council Career Framework
          </p>
          <p className="mt-1">
            © Sycom Academy. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}