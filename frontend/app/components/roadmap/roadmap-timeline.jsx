"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { CheckCircle2, Circle, Clock, BookOpen, Video, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatTime } from "@/lib/utils";

const RoadmapTimeline = ({ roadmap, view = "horizontal", onDayClick, onDayToggle }) => {
  if (!roadmap?.days) return null;

  const getResourceIcon = (type) => {
    switch (type) {
      case "video": return <Video className="h-3 w-3" />;
      case "book": return <BookOpen className="h-3 w-3" />;
      case "article": return <FileText className="h-3 w-3" />;
      default: return <BookOpen className="h-3 w-3" />;
    }
  };

  const DayItem = ({ day, index, isCompleted }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "relative flex items-start gap-3 p-3 rounded-lg transition-colors",
        isCompleted ? "bg-green-50 border-green-200" : "bg-[var(--card)] border-[var(--border)]",
        "hover:bg-[var(--secondary)] cursor-pointer"
      )}
      onClick={() => onDayClick?.(day, index)}
    >
      <div className="flex-shrink-0 mt-1">
        {isCompleted ? (
          <CheckCircle2 className="h-5 w-5 text-green-600" />
        ) : (
          <Circle className="h-5 w-5 text-[var(--muted)]" />
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-medium text-[var(--text)] truncate">
            {day.title}
          </h4>
          <div className="flex items-center gap-1 text-xs text-[var(--muted)]">
            <Clock className="h-3 w-3" />
            {formatTime(day.durationMins)}
          </div>
        </div>
        
        {day.resources && day.resources.length > 0 && (
          <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
            {day.resources.slice(0, 3).map((resource, idx) => (
              <div key={idx} className="flex items-center gap-1">
                {getResourceIcon(resource.type)}
                <span className="truncate max-w-20">{resource.title}</span>
              </div>
            ))}
            {day.resources.length > 3 && (
              <span>+{day.resources.length - 3} more</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );

  if (view === "horizontal") {
    return (
      <div className="overflow-x-auto">
        <div className="flex gap-4 min-w-max pb-4">
          {roadmap.days.map((day, index) => (
            <Card key={index} className="min-w-64 flex-shrink-0">
              <CardContent className="p-4">
                <DayItem 
                  day={day} 
                  index={index} 
                  isCompleted={day.completed}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {roadmap.days.map((day, index) => (
        <DayItem 
          key={index} 
          day={day} 
          index={index} 
          isCompleted={day.completed}
        />
      ))}
    </div>
  );
};

export { RoadmapTimeline };
