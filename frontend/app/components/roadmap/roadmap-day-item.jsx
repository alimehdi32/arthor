"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, BookOpen, Video, FileText, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatTime } from "@/lib/utils";

const RoadmapDayItem = ({ 
  day, 
  isCompleted, 
  onToggle, 
  onPlay,
  showProgress = true,
  compact = false 
}) => {
  const getResourceIcon = (type) => {
    switch (type) {
      case "video": return <Video className="h-4 w-4" />;
      case "book": return <BookOpen className="h-4 w-4" />;
      case "article": return <FileText className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    onToggle?.(day);
  };

  const handlePlay = (e) => {
    e.stopPropagation();
    onPlay?.(day);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative bg-[var(--card)] border border-[var(--border)] rounded-lg p-4 transition-all duration-200",
        isCompleted && "bg-green-50 border-green-200",
        "hover:shadow-md hover:border-[var(--accent)]/20"
      )}
    >
      <div className="flex items-start gap-3">
        {/* Progress Ring / Checkbox */}
        <div className="flex-shrink-0 mt-1">
          {showProgress ? (
            <div className="relative">
              <div className="w-6 h-6 rounded-full border-2 border-[var(--muted)] flex items-center justify-center">
                {isCompleted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </motion.div>
                )}
              </div>
              {isCompleted && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-green-600"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                />
              )}
            </div>
          ) : (
            <button
              onClick={handleToggle}
              className="p-1 rounded-full hover:bg-[var(--secondary)] transition-colors"
            >
              {isCompleted ? (
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              ) : (
                <Circle className="h-5 w-5 text-[var(--muted)]" />
              )}
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h4 className={cn(
              "font-medium text-[var(--text)]",
              compact ? "text-sm" : "text-base",
              isCompleted && "line-through text-[var(--muted)]"
            )}>
              {day.title}
            </h4>
            
            <div className="flex items-center gap-2 ml-2">
              <div className="flex items-center gap-1 text-xs text-[var(--muted)]">
                <Clock className="h-3 w-3" />
                {formatTime(day.durationMins)}
              </div>
              
              {onPlay && (
                <button
                  onClick={handlePlay}
                  className="p-1 rounded-full hover:bg-[var(--secondary)] transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Play className="h-4 w-4 text-[var(--accent)]" />
                </button>
              )}
            </div>
          </div>

          {/* Resources */}
          {day.resources && day.resources.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {day.resources.slice(0, compact ? 2 : 4).map((resource, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 px-2 py-1 bg-[var(--secondary)] rounded-md text-xs text-[var(--muted)]"
                >
                  {getResourceIcon(resource.type)}
                  <span className="truncate max-w-20">{resource.title}</span>
                </div>
              ))}
              {day.resources.length > (compact ? 2 : 4) && (
                <div className="px-2 py-1 bg-[var(--secondary)] rounded-md text-xs text-[var(--muted)]">
                  +{day.resources.length - (compact ? 2 : 4)} more
                </div>
              )}
            </div>
          )}

          {/* Notes */}
          {day.notes && !compact && (
            <p className="text-sm text-[var(--muted)] line-clamp-2">
              {day.notes}
            </p>
          )}
        </div>
      </div>

      {/* Completion Animation */}
      {isCompleted && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-green-500/10 rounded-lg" />
        </motion.div>
      )}
    </motion.div>
  );
};

export { RoadmapDayItem };
