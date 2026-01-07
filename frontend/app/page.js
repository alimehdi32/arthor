"use client";

import { motion } from "framer-motion";
import { TodaysTaskCard } from "@/app/components/dashboard/todays-task-card";
import { QuickActions } from "@/app/components/dashboard/quick-actions";
import { WeeklyMinutesGraph } from "@/app/components/dashboard/weekly-minutes-graph";
import { StreakWidget } from "@/app/components/dashboard/streak-widget";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { BookOpen, TrendingUp, Calendar, Target } from "lucide-react";

export default function Dashboard() {
  // Mock data - in real app, this would come from API/state management
  const todaysTask = {
    title: "Complete React Hooks Tutorial",
    description: "Learn about useState, useEffect, and custom hooks",
    progress: 65,
    estimatedTime: 45,
    completed: false,
    started: true,
  };

  const weeklyData = [
    { day: "Mon", minutes: 45 },
    { day: "Tue", minutes: 60 },
    { day: "Wed", minutes: 30 },
    { day: "Thu", minutes: 75 },
    { day: "Fri", minutes: 90 },
    { day: "Sat", minutes: 120 },
    { day: "Sun", minutes: 60 },
  ];

  const handleStartTask = () => {
    console.log("Starting task...");
  };

  const handleCompleteTask = () => {
    console.log("Completing task...");
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-[var(--text)] mb-2">
            Welcome back, John! 👋
          </h1>
          <p className="text-[var(--muted)]">
            Ready to continue your learning journey?
          </p>
        </motion.div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Today's Task - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <TodaysTaskCard
              task={todaysTask}
              onStart={handleStartTask}
              onComplete={handleCompleteTask}
            />
          </div>

          {/* Quick Actions */}
          <div>
            <QuickActions />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Weekly Minutes Graph */}
          <div className="lg:col-span-2">
            <WeeklyMinutesGraph data={weeklyData} />
          </div>

          {/* Streak Widget */}
          <div>
            <StreakWidget streak={7} longestStreak={12} thisMonth={18} />
          </div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[var(--accent)]" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    title: "Completed JavaScript Fundamentals",
                    time: "2 hours ago",
                    type: "completion",
                  },
                  {
                    id: 2,
                    title: "Started React Hooks Tutorial",
                    time: "Yesterday",
                    type: "start",
                  },
                  {
                    id: 3,
                    title: "Created Web Development Roadmap",
                    time: "3 days ago",
                    type: "creation",
                  },
                ].map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--secondary)] transition-colors"
                  >
                    <div className="flex-shrink-0">
                      {activity.type === "completion" && (
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <Target className="h-4 w-4 text-green-600" />
                        </div>
                      )}
                      {activity.type === "start" && (
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                        </div>
                      )}
                      {activity.type === "creation" && (
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <TrendingUp className="h-4 w-4 text-purple-600" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[var(--text)]">
                        {activity.title}
                      </p>
                      <p className="text-xs text-[var(--muted)]">
                        {activity.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
