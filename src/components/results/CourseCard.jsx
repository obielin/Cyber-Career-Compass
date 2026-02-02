import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Clock, ChevronRight, BookOpen, Award } from 'lucide-react';
import { cn } from "@/lib/utils";

const levelColors = {
  'Foundation': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Practitioner': 'bg-blue-100 text-blue-700 border-blue-200',
  'Specialist': 'bg-violet-100 text-violet-700 border-violet-200'
};

export default function CourseCard({ course, index, reason }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white font-bold text-lg flex-shrink-0">
              {index + 1}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-semibold text-slate-800">{course.name}</h4>
                <Badge className={cn("text-xs", levelColors[course.level])}>
                  {course.level}
                </Badge>
              </div>
              
              <p className="text-slate-600 text-sm mb-3">
                {course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>{course.provider}</span>
                </div>
              </div>
              
              {reason && (
                <div className="mt-3 flex items-start gap-2 p-3 bg-cyan-50 rounded-lg">
                  <BookOpen className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-cyan-800">{reason}</p>
                </div>
              )}
              
              <div className="mt-4">
                <p className="text-xs text-slate-500 mb-2">Key topics:</p>
                <div className="flex flex-wrap gap-1.5">
                  {course.topics.slice(0, 4).map((topic, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs bg-white">
                      {topic}
                    </Badge>
                  ))}
                  {course.topics.length > 4 && (
                    <Badge variant="outline" className="text-xs bg-white">
                      +{course.topics.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}