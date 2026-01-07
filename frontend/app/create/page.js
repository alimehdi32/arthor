"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PromptComposer } from "@/app/components/roadmap/prompt-composer";
import { RoadmapTimeline } from "@/app/components/roadmap/roadmap-timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Label } from "@/app/components/ui/label";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Clock, 
  Target, 
  BookOpen, 
  Video, 
  FileText,
  Sparkles,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

const CreateRoadmapPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    topic: "",
    goalType: "",
    timeAvailable: "",
    deadline: "",
    experience: "",
    intensity: "medium",
    resourcePreferences: {
      books: true,
      courses: true,
      videos: true,
      projects: true,
    },
  });
  const [generatedRoadmap, setGeneratedRoadmap] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [saved, setSaved] = useState(false);

  const steps = [
    { id: 1, title: "Clarify Goals", description: "Tell us what you want to learn" },
    { id: 2, title: "Preview Timeline", description: "Adjust the learning intensity" },
    { id: 3, title: "Resource Preferences", description: "Choose your learning materials" },
  ];

  const goalTypes = [
    { value: "learn-basic", label: "Learn Basic Concepts" },
    { value: "build-project", label: "Build a Project" },
    { value: "get-job", label: "Get a Job" },
  ];

  const experienceLevels = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  const intensityLevels = [
    { value: "light", label: "Light (30 min/day)", weeks: 12 },
    { value: "medium", label: "Medium (1 hour/day)", weeks: 8 },
    { value: "intensive", label: "Intensive (2+ hours/day)", weeks: 4 },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleResourceToggle = (resource) => {
    setFormData(prev => ({
      ...prev,
      resourcePreferences: {
        ...prev.resourcePreferences,
        [resource]: !prev.resourcePreferences[resource]
      }
    }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);

    try {
      const response = await fetch('http://localhost:5000/course/roadmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
        credentials: 'include', // <== important!
      })
      console.log('Response:', response.body)
      if (response.ok) {
        const data = await response.json();
        // setRoadmap(JSON.parse(data));
        setGeneratedRoadmap(JSON.parse(data));
        setIsGenerating(false);
        console.log('Roadmap generated:', JSON.parse(data));
        
        
        // toast.success('Roadmap generated successfully!', {
        //   className: 'my-custom-toast',
        // });
        // Handle the generated roadmap data as needed
      } else {
        console.error('Error generating roadmap:', response.statusText);
      }
    } catch (error) {
      console.error('Error generating roadmap:', error);
    }
    // Simulate API call
    // await new Promise(resolve => setTimeout(resolve, 2000));
    
    // // Mock generated roadmap
    // const mockRoadmap = {
    //   id: "roadmap-1",
    //   title: `${formData.topic} Learning Path`,
    //   description: `A comprehensive ${formData.goalType.replace('-', ' ')} roadmap for ${formData.topic}`,
    //   days: Array.from({ length: intensityLevels.find(i => i.value === formData.intensity)?.weeks * 7 || 56 }, (_, i) => ({
    //     date: new Date(Date.now() + i * 24 * 60 * 60 * 1000),
    //     title: `Day ${i + 1}: ${formData.topic} Fundamentals`,
    //     durationMins: formData.intensity === 'light' ? 30 : formData.intensity === 'medium' ? 60 : 120,
    //     resources: [
    //       { type: "video", title: "Introduction Video", url: "#" },
    //       { type: "book", title: "Chapter 1", url: "#" },
    //       { type: "article", title: "Best Practices", url: "#" },
    //     ],
    //     notes: `Focus on core concepts and practical applications`,
    //     completed: false,
    //   }))
    // };
    
    // setGeneratedRoadmap(mockRoadmap);
    // setIsGenerating(false);
  };


  const saveRoadmap = async () => {
  try {
    if (!generatedRoadmap || !generatedRoadmap.title || !Array.isArray(generatedRoadmap.days) || generatedRoadmap.days.length === 0) {
      toast.error('Invalid roadmap data. Please generate the roadmap first.');
      return;
    }

    const payload = {
      id: generatedRoadmap.id || `roadmap-${Date.now()}`,
      title: generatedRoadmap.title,
      description: generatedRoadmap.description || `A comprehensive learning roadmap for ${generatedRoadmap.title}`,
      duration: generatedRoadmap.duration || `${Math.ceil((generatedRoadmap.days.length || 56) / 7)} weeks`,
      difficulty: generatedRoadmap.difficulty || 'beginner',
      tags: generatedRoadmap.tags || [],
      days: generatedRoadmap.days.map(day => ({
        date: day.date || new Date().toISOString(),
        title: day.title,
        durationMins: day.durationMins || 60,
        resources: day.resources?.map(r => ({
          type: r.type,
          title: r.title,
          url: r.url || '#'
        })) || [],
        notes: day.notes || 'Focus on understanding the core concepts and applying them.',
        completed: day.completed || false
      }))
    };

    const response = await fetch('http://localhost:5000/course/save-roadmap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    });

    if (!response.ok) {
      const errMsg = await response.text();
      console.error('Failed to save roadmap:', errMsg);
      toast.error('Failed to save roadmap. Please try again.');
      return;
    }

    const data = await response.json();
    console.log('✅ Roadmap saved successfully:', data);

    toast.success('Roadmap saved successfully!', {
      className: 'my-custom-toast',
    });

    setSaved(true);
  } catch (error) {
    console.error('❌ Error saving roadmap:', error);
    toast.error('An unexpected error occurred while saving the roadmap.');
  }
};


  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData.topic && formData.goalType && formData.timeAvailable && formData.deadline && formData.experience;
      case 2:
        return true;
      case 3:
        return Object.values(formData.resourcePreferences).some(Boolean);
      default:
        return false;
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="flex items-center">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
              currentStep >= step.id 
                ? "bg-[var(--accent)] text-white" 
                : "bg-[var(--secondary)] text-[var(--muted)]"
            )}>
              {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
            </div>
            <div className="ml-2 hidden sm:block">
              <div className="text-sm font-medium text-[var(--text)]">{step.title}</div>
              <div className="text-xs text-[var(--muted)]">{step.description}</div>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className={cn(
              "w-8 h-0.5 mx-4",
              currentStep > step.id ? "bg-[var(--accent)]" : "bg-[var(--border)]"
            )} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[var(--text)] mb-2">
                Create Your Learning Roadmap
              </h1>
              <p className="text-[var(--muted)]">
                Let AI generate a personalized learning path just for you
              </p>
            </div>

            <StepIndicator />

            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-[var(--accent)]" />
                        What do you want to learn?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="topic">Topic or Skill</Label>
                          <Input
                            id="topic"
                            placeholder="e.g., React, Machine Learning, Design"
                            value={formData.topic}
                            onChange={(e) => handleInputChange("topic", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="goalType">Goal Type</Label>
                          <Select value={formData.goalType} onValueChange={(value) => handleInputChange("goalType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your goal" />
                            </SelectTrigger>
                            <SelectContent>
                              {goalTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="timeAvailable">Time Available</Label>
                          <Input
                            id="timeAvailable"
                            type="number"
                            placeholder="60"
                            value={formData.timeAvailable}
                            onChange={(e) => handleInputChange("timeAvailable", e.target.value)}
                          />
                          <p className="text-xs text-[var(--muted)]">Minutes per day</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="deadline">Deadline</Label>
                          <Input
                            id="deadline"
                            type="date"
                            value={formData.deadline}
                            onChange={(e) => handleInputChange("deadline", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience">Experience Level</Label>
                          <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              {experienceLevels.map((level) => (
                                <SelectItem key={level.value} value={level.value}>
                                  {level.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-[var(--accent)]" />
                        Adjust Learning Intensity
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {intensityLevels.map((level) => (
                          <div
                            key={level.value}
                            className={cn(
                              "p-4 border rounded-lg cursor-pointer transition-all",
                              formData.intensity === level.value
                                ? "border-[var(--accent)] bg-[var(--accent)]/5"
                                : "border-[var(--border)] hover:border-[var(--accent)]/50"
                            )}
                            onClick={() => handleInputChange("intensity", level.value)}
                          >
                            <div className="text-center">
                              <div className="font-medium text-[var(--text)] mb-1">
                                {level.label}
                              </div>
                              <div className="text-sm text-[var(--muted)]">
                                {level.weeks} weeks
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {formData.intensity && (
                        <div className="p-4 bg-[var(--secondary)] rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-[var(--accent)]" />
                            <span className="font-medium">Timeline Preview</span>
                          </div>
                          <p className="text-sm text-[var(--muted)]">
                            Your roadmap will span {intensityLevels.find(i => i.value === formData.intensity)?.weeks} weeks with {formData.timeAvailable} minutes of daily learning.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-[var(--accent)]" />
                        Resource Preferences
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { key: "books", label: "Books", icon: BookOpen },
                          { key: "courses", label: "Courses", icon: Video },
                          { key: "videos", label: "Videos", icon: Video },
                          { key: "projects", label: "Projects", icon: FileText },
                        ].map((resource) => {
                          const Icon = resource.icon;
                          return (
                            <div
                              key={resource.key}
                              className={cn(
                                "p-4 border rounded-lg cursor-pointer transition-all text-center",
                                formData.resourcePreferences[resource.key]
                                  ? "border-[var(--accent)] bg-[var(--accent)]/5"
                                  : "border-[var(--border)] hover:border-[var(--accent)]/50"
                              )}
                              onClick={() => handleResourceToggle(resource.key)}
                            >
                              <Icon className="h-6 w-6 mx-auto mb-2 text-[var(--accent)]" />
                              <div className="text-sm font-medium">{resource.label}</div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="p-4 bg-[var(--secondary)] rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                          <span className="font-medium">Ready to Generate</span>
                        </div>
                        <p className="text-sm text-[var(--muted)]">
                          Your personalized roadmap will include resources based on your preferences.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>

              {currentStep < 3 ? (
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid(currentStep)}
                  className="flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleGenerate}
                  disabled={!isStepValid(3) || isGenerating}
                  className="flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent)]/90"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate Roadmap
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Generated Roadmap Preview */}
            {generatedRoadmap && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Generated Roadmap Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RoadmapTimeline roadmap={generatedRoadmap} view="horizontal" />
                    <div className="flex gap-4 mt-6">
                      <Button onClick={saveRoadmap} variant="outline" disabled={saved} className="bg-[var(--accent)] hover:bg-[var(--accent)]/90">
                        Save to PromptVault
                      </Button>
                      <Button variant="outline">
                        Edit Roadmap
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateRoadmapPage;
