"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Progress } from "@/app/components/ui/progress";
import { Clock, Play, CheckCircle2, Target } from "lucide-react";
import { formatTime } from "@/lib/utils";

const TodaysTaskCard = ({ task, onStart, onComplete }) => {
  if (!task) {
    return (
      <Card className="bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 border-[var(--accent)]/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[var(--accent)]">
            <Target className="h-5 w-5" />
            Today's Task
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="text-[var(--muted)] mb-4">
              No active task for today
            </div>
            <Button className="bg-[var(--accent)] hover:bg-[var(--accent)]/90">
              Create New Roadmap
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const progress = task.completed ? 100 : (task.progress || 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 border-[var(--accent)]/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[var(--accent)]">
            <Target className="h-5 w-5" />
            Today's Task
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-[var(--text)] mb-2">
              {task.title}
            </h3>
            <p className="text-sm text-[var(--muted)] mb-4">
              {task.description}
            </p>
          </div>

          {/* Progress Section */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted)]">Progress</span>
              <span className="font-medium text-[var(--text)]">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Time Estimate */}
          <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
            <Clock className="h-4 w-4" />
            <span>Estimated time: {formatTime(task.estimatedTime)}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            {!task.completed ? (
              <>
                <Button
                  onClick={onStart}
                  className="flex-1 bg-[var(--accent)] hover:bg-[var(--accent)]/90"
                >
                  <Play className="h-4 w-4 mr-2" />
                  {task.started ? "Continue" : "Start"}
                </Button>
                <Button
                  onClick={onComplete}
                  variant="outline"
                  size="icon"
                  className="border-green-200 text-green-600 hover:bg-green-50"
                >
                  <CheckCircle2 className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-2 text-green-600 w-full justify-center py-2">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-medium">Completed!</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export { TodaysTaskCard };
