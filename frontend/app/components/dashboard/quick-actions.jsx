"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { PrimaryButton, SecondaryButton } from "@/app/components/ui/primary-button";
import { Plus, Play, BookOpen, Target, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

const QuickActions = () => {
  const actions = [
    {
      id: "create-roadmap",
      title: "Create Roadmap",
      description: "Generate a new learning path with AI",
      icon: <Plus className="h-5 w-5" />,
      href: "/create",
      primary: true,
    },
    {
      id: "resume-learning",
      title: "Resume Learning",
      description: "Continue your current roadmap",
      icon: <Play className="h-5 w-5" />,
      href: "/roadmap/current",
      primary: false,
    },
    {
      id: "explore-topics",
      title: "Explore Topics",
      description: "Discover new skills to learn",
      icon: <BookOpen className="h-5 w-5" />,
      href: "/explore",
      primary: false,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-[var(--accent)]" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {actions.map((action, index) => (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={action.href}>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border)] hover:border-[var(--accent)]/50 hover:bg-[var(--secondary)] transition-all duration-200 group">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)]/20 transition-colors">
                    {action.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {action.title}
                    </h4>
                    <p className="text-sm text-[var(--muted)]">
                      {action.description}
                    </p>
                  </div>
                  {action.primary && (
                    <div className="flex-shrink-0">
                      <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { QuickActions };
