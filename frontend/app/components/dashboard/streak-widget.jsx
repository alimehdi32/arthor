"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Flame, Target, Trophy, Calendar } from "lucide-react";

const StreakWidget = ({ streak = 7, longestStreak = 12, thisMonth = 18 }) => {
  const getStreakMessage = (days) => {
    if (days === 0) return "Start your learning streak today!";
    if (days < 3) return "Keep it up! You're building momentum.";
    if (days < 7) return "Great progress! You're on fire!";
    if (days < 14) return "Amazing! You're developing a strong habit.";
    if (days < 30) return "Incredible! You're a learning machine!";
    return "Legendary! You're unstoppable!";
  };

  const getStreakColor = (days) => {
    if (days === 0) return "text-[var(--muted)]";
    if (days < 3) return "text-orange-500";
    if (days < 7) return "text-red-500";
    if (days < 14) return "text-purple-500";
    return "text-yellow-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-600">
            <Flame className="h-5 w-5" />
            Learning Streak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Current Streak */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className={`text-4xl font-bold ${getStreakColor(streak)} mb-2`}
              >
                {streak}
              </motion.div>
              <div className="text-sm text-[var(--muted)]">
                {streak === 1 ? "day" : "days"} in a row
              </div>
              <div className="text-xs text-[var(--muted)] mt-1">
                {getStreakMessage(streak)}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-2 bg-white/50 rounded-lg">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Trophy className="h-3 w-3 text-yellow-500" />
                  <span className="text-xs text-[var(--muted)]">Best</span>
                </div>
                <div className="text-lg font-semibold text-[var(--text)]">
                  {longestStreak}
                </div>
              </div>
              <div className="text-center p-2 bg-white/50 rounded-lg">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Calendar className="h-3 w-3 text-[var(--accent)]" />
                  <span className="text-xs text-[var(--muted)]">This month</span>
                </div>
                <div className="text-lg font-semibold text-[var(--text)]">
                  {thisMonth}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-[var(--muted)]">
                <span>Next milestone</span>
                <span>{Math.ceil(streak / 7) * 7} days</span>
              </div>
              <div className="w-full bg-white/50 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(streak % 7) * 14.28}%` }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />
              </div>
            </div>

            {/* Motivational Message */}
            {streak > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-xs text-[var(--muted)] italic"
              >
                "Consistency is the key to mastery"
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export { StreakWidget };
