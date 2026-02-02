import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, Search, AlertTriangle, FileCheck, ClipboardCheck, 
  Layers, Lock, Compass, ChevronDown, ChevronUp, Check 
} from 'lucide-react';
import { cn } from "@/lib/utils";

const iconMap = {
  Shield, Search, AlertTriangle, FileCheck, ClipboardCheck, 
  Layers, Lock, Compass
};

const colorClasses = {
  cyan: 'from-cyan-500 to-cyan-600 bg-cyan-50 text-cyan-700 border-cyan-200',
  violet: 'from-violet-500 to-violet-600 bg-violet-50 text-violet-700 border-violet-200',
  orange: 'from-orange-500 to-orange-600 bg-orange-50 text-orange-700 border-orange-200',
  emerald: 'from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-700 border-emerald-200',
  blue: 'from-blue-500 to-blue-600 bg-blue-50 text-blue-700 border-blue-200',
  indigo: 'from-indigo-500 to-indigo-600 bg-indigo-50 text-indigo-700 border-indigo-200',
  rose: 'from-rose-500 to-rose-600 bg-rose-50 text-rose-700 border-rose-200',
  amber: 'from-amber-500 to-amber-600 bg-amber-50 text-amber-700 border-amber-200'
};

export default function PathwayCard({ pathway, rank, explanation, isExpanded, onToggle }) {
  const Icon = iconMap[pathway.icon] || Shield;
  const colors = colorClasses[pathway.color] || colorClasses.cyan;
  const [gradientFrom, gradientTo, bgColor, textColor, borderColor] = colors.split(' ');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: rank * 0.1 }}
    >
      <Card className={cn(
        "border-2 overflow-hidden transition-all duration-300",
        rank === 0 ? `${borderColor} shadow-lg` : 'border-slate-200'
      )}>
        {rank === 0 && (
          <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} px-4 py-2`}>
            <span className="text-white text-sm font-medium">Best Match</span>
          </div>
        )}
        
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0",
              bgColor
            )}>
              <Icon className={cn("w-7 h-7", textColor)} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold text-slate-800">
                  {pathway.name}
                </h3>
                <Badge variant="outline" className={cn("text-xs", textColor, borderColor)}>
                  #{rank + 1} Match
                </Badge>
              </div>
              
              <p className="text-slate-600 text-sm mb-3">
                {pathway.description}
              </p>
              
              <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm", bgColor)}>
                <span className={cn("font-medium", textColor)}>Why this fits you:</span>
                <span className="text-slate-700">{explanation}</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={onToggle}
            className="flex items-center gap-2 mt-4 text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {isExpanded ? 'Show less' : 'View responsibilities & requirements'}
          </button>
          
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-slate-100"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-slate-800 mb-3">Typical Responsibilities</h4>
                  <ul className="space-y-2">
                    {pathway.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className={cn("w-4 h-4 mt-0.5 flex-shrink-0", textColor)} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-slate-800 mb-3">Entry-Level Expectations</h4>
                  <ul className="space-y-2">
                    {pathway.entryExpectations.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className={cn("w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0", `bg-${pathway.color}-500`)} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}