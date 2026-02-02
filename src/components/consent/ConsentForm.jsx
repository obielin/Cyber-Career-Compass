import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Shield, FileText, GraduationCap, AlertCircle, Loader2 } from 'lucide-react';

export default function ConsentForm({ onSubmit, isLoading }) {
  const [email, setEmail] = useState('');
  const [consentReport, setConsentReport] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [consentEducation, setConsentEducation] = useState(false);
  const [error, setError] = useState('');
  
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (!consentReport) {
      setError('Please confirm you agree to receive your personalised report');
      return;
    }
    
    onSubmit({
      email: email.trim(),
      consent_report: consentReport,
      consent_marketing: consentMarketing,
      consent_education: consentEducation
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Get Your Personalised Report
        </h2>
        <p className="text-slate-600">
          Enter your email to receive a detailed career report with your results and recommended learning pathway.
        </p>
      </div>
      
      <Card className="border-2 border-slate-200">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-slate-700 font-medium">
                Email Address <span className="text-rose-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="mt-2 h-12"
              />
            </div>
            
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <p className="text-sm font-medium text-slate-700">Your Preferences</p>
              
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <Checkbox
                  id="consent-report"
                  checked={consentReport}
                  onCheckedChange={setConsentReport}
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <Label 
                    htmlFor="consent-report" 
                    className="text-sm font-medium text-slate-700 cursor-pointer flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-cyan-600" />
                    I agree to receive my personalised report
                    <span className="text-rose-500">*</span>
                  </Label>
                  <p className="text-xs text-slate-500 mt-1">
                    Required to receive your career insights and course recommendations
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <Checkbox
                  id="consent-marketing"
                  checked={consentMarketing}
                  onCheckedChange={setConsentMarketing}
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <Label 
                    htmlFor="consent-marketing" 
                    className="text-sm font-medium text-slate-700 cursor-pointer flex items-center gap-2"
                  >
                    <Shield className="w-4 h-4 text-violet-600" />
                    Opt in to marketing communications from Sycom Academy
                  </Label>
                  <p className="text-xs text-slate-500 mt-1">
                    Receive news, updates, and special offers (optional)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <Checkbox
                  id="consent-education"
                  checked={consentEducation}
                  onCheckedChange={setConsentEducation}
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <Label 
                    htmlFor="consent-education" 
                    className="text-sm font-medium text-slate-700 cursor-pointer flex items-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    Opt in to additional education and training suggestions
                  </Label>
                  <p className="text-xs text-slate-500 mt-1">
                    Get notified about new courses and learning opportunities (optional)
                  </p>
                </div>
              </div>
            </div>
            
            {error && (
              <div className="flex items-center gap-2 p-3 bg-rose-50 text-rose-700 rounded-lg text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </div>
            )}
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700 text-white font-medium"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending Report...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5 mr-2" />
                  Send My Report
                </>
              )}
            </Button>
            
            <p className="text-xs text-center text-slate-500">
              Your data is protected in accordance with GDPR. We will never share your information with third parties.
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}