"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Sparkles, Wand2, Clock, Target, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const PromptComposer = ({ 
  onSubmit, 
  isLoading = false, 
  templates = [],
  onRefine,
  className 
}) => {
  const [prompt, setPrompt] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const defaultTemplates = [
    {
      id: "web-dev",
      name: "Web Development",
      prompt: "I want to learn web development from scratch. I'm a complete beginner and want to build modern websites and web applications.",
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      id: "data-science",
      name: "Data Science",
      prompt: "I want to become a data scientist. I have some programming experience but no background in statistics or machine learning.",
      icon: <Target className="h-4 w-4" />
    },
    {
      id: "mobile-dev",
      name: "Mobile Development",
      prompt: "I want to learn mobile app development. I'm interested in both iOS and Android development.",
      icon: <Clock className="h-4 w-4" />
    }
  ];

  const refineOptions = [
    {
      id: "project-based",
      label: "Make it more project-based",
      description: "Focus on hands-on projects and building real applications"
    },
    {
      id: "shorter",
      label: "Shorten the timeline",
      description: "Compress the roadmap to fit a tighter schedule"
    },
    {
      id: "more-videos",
      label: "Add more video resources",
      description: "Include more video tutorials and courses"
    }
  ];

  const handleTemplateSelect = (templateId) => {
    const template = [...defaultTemplates, ...templates].find(t => t.id === templateId);
    if (template) {
      setPrompt(template.prompt);
      setSelectedTemplate(templateId);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt.trim());
    }
  };

  const handleRefine = (refineId) => {
    onRefine?.(refineId, prompt);
  };

  return (
    <Card className={cn("w-full max-w-2xl mx-auto", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-[var(--accent)]" />
          Create Your Learning Roadmap
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Template Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--text)]">
              Choose a template (optional)
            </label>
            <Select value={selectedTemplate} onValueChange={handleTemplateSelect}>
              <SelectTrigger>
                <SelectValue placeholder="Select a learning path template" />
              </SelectTrigger>
              <SelectContent>
                {[...defaultTemplates, ...templates].map((template) => (
                  <SelectItem key={template.id} value={template.id}>
                    <div className="flex items-center gap-2">
                      {template.icon}
                      {template.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Prompt Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--text)]">
              Describe what you want to learn
            </label>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="I want to learn [skill/topic] because [reason]. I have [experience level] experience and want to [goal] in [timeframe]."
              className="min-h-32 resize-none"
              disabled={isLoading}
            />
          </div>

          {/* Refine Options */}
          {prompt && !isLoading && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-2"
            >
              <label className="text-sm font-medium text-[var(--text)]">
                Quick refinements
              </label>
              <div className="flex flex-wrap gap-2">
                {refineOptions.map((option) => (
                  <Button
                    key={option.id}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleRefine(option.id)}
                    className="text-xs"
                  >
                    <Wand2 className="h-3 w-3 mr-1" />
                    {option.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={!prompt.trim() || isLoading}
              className="bg-[var(--accent)] hover:bg-[var(--accent)]/90"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Generating roadmap...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Generate Roadmap
                </div>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export { PromptComposer };
