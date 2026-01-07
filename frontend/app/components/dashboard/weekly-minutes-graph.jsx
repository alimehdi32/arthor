"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { TrendingUp, Clock } from "lucide-react";

const WeeklyMinutesGraph = ({ data = [] }) => {
  // Default data if none provided
  const defaultData = [
    { day: "Mon", minutes: 45 },
    { day: "Tue", minutes: 60 },
    { day: "Wed", minutes: 30 },
    { day: "Thu", minutes: 75 },
    { day: "Fri", minutes: 90 },
    { day: "Sat", minutes: 120 },
    { day: "Sun", minutes: 60 },
  ];

  const chartData = data.length > 0 ? data : defaultData;
  const totalMinutes = chartData.reduce((sum, item) => sum + item.minutes, 0);
  const averageMinutes = Math.round(totalMinutes / chartData.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[var(--accent)]" />
            Weekly Learning Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-[var(--secondary)] rounded-lg">
                <div className="text-2xl font-bold text-[var(--text)]">
                  {totalMinutes}m
                </div>
                <div className="text-sm text-[var(--muted)]">Total this week</div>
              </div>
              <div className="text-center p-3 bg-[var(--secondary)] rounded-lg">
                <div className="text-2xl font-bold text-[var(--text)]">
                  {averageMinutes}m
                </div>
                <div className="text-sm text-[var(--muted)]">Daily average</div>
              </div>
            </div>

            {/* Chart */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis 
                    dataKey="day" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "var(--muted)" }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "var(--muted)" }}
                  />
                  <Bar 
                    dataKey="minutes" 
                    fill="var(--accent)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Trend indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-green-600">
              <TrendingUp className="h-4 w-4" />
              <span>+12% from last week</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export { WeeklyMinutesGraph };
