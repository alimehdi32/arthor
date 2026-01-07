"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { PrimaryButton, SecondaryButton } from "@/app/components/ui/primary-button";
import { AnimatedCard } from "@/app/components/ui/animated-card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { RoadmapDayItem } from "@/app/components/roadmap/roadmap-day-item";
import { PromptComposer } from "@/app/components/roadmap/prompt-composer";
import { 
  Play, 
  Pause, 
  Settings, 
  Star, 
  Heart,
  BookOpen,
  Clock,
  CheckCircle2
} from "lucide-react";

const ComponentsPage = () => {
  const [progress, setProgress] = useState(65);
  const [isPlaying, setIsPlaying] = useState(false);

  const sampleDay = {
    title: "Learn React Hooks",
    durationMins: 60,
    resources: [
      { type: "video", title: "useState Tutorial", url: "#" },
      { type: "book", title: "React Docs", url: "#" },
      { type: "article", title: "Best Practices", url: "#" },
    ],
    notes: "Focus on understanding state management and side effects",
    completed: false,
  };

  const components = [
    {
      title: "Buttons",
      description: "Primary and secondary button variants with animations",
      component: (
        <div className="space-y-4">
          <div className="flex gap-4">
            <PrimaryButton>Primary Button</PrimaryButton>
            <SecondaryButton>Secondary Button</SecondaryButton>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
          <div className="flex gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      )
    },
    {
      title: "Cards",
      description: "Animated cards with hover effects",
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Regular Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--muted)]">This is a regular card component.</p>
            </CardContent>
          </Card>
          <AnimatedCard>
            <CardHeader>
              <CardTitle>Animated Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--muted)]">This card has hover animations!</p>
            </CardContent>
          </AnimatedCard>
        </div>
      )
    },
    {
      title: "Form Elements",
      description: "Input fields, textareas, and select components",
      component: (
        <div className="space-y-4 max-w-md">
          <div>
            <label className="text-sm font-medium mb-2 block">Input Field</label>
            <Input placeholder="Enter your text here" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Textarea</label>
            <Textarea placeholder="Enter your message here" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Select</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )
    },
    {
      title: "Badges & Progress",
      description: "Status indicators and progress bars",
      component: (
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge className="bg-green-100 text-green-800">Success</Badge>
            <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>
            <Badge className="bg-red-100 text-red-800">Error</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} />
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                -10%
              </Button>
              <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                +10%
              </Button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Roadmap Components",
      description: "Specialized components for learning roadmaps",
      component: (
        <div className="space-y-4">
          <RoadmapDayItem 
            day={sampleDay}
            isCompleted={false}
            onToggle={() => console.log("Toggle")}
            onPlay={() => console.log("Play")}
          />
          <div className="max-w-md">
            <PromptComposer 
              onSubmit={(prompt) => console.log("Submit:", prompt)}
              onRefine={(type, prompt) => console.log("Refine:", type, prompt)}
            />
          </div>
        </div>
      )
    },
    {
      title: "Interactive Elements",
      description: "Buttons with state and animations",
      component: (
        <div className="space-y-4">
          <div className="flex gap-4">
            <Button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isPlaying ? "Pause" : "Play"}
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Like
            </Button>
          </div>
          <div className="flex gap-4">
            <Button size="sm" className="flex items-center gap-2">
              <Star className="h-3 w-3" />
              Rate
            </Button>
            <Button size="sm" variant="outline" className="flex items-center gap-2">
              <BookOpen className="h-3 w-3" />
              Learn
            </Button>
            <Button size="sm" variant="outline" className="flex items-center gap-2">
              <Clock className="h-3 w-3" />
              Schedule
            </Button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-[var(--text)] mb-4">
            Component Library
          </h1>
          <p className="text-xl text-[var(--muted)]">
            Interactive preview of all UI components used in Arthor
          </p>
        </motion.div>

        <div className="space-y-12">
          {components.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                  <p className="text-[var(--muted)]">{section.description}</p>
                </CardHeader>
                <CardContent>
                  {section.component}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Accessibility Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Accessibility Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-blue-800">
                <li>• All interactive elements are keyboard accessible</li>
                <li>• Proper ARIA labels and roles implemented</li>
                <li>• Color contrast meets WCAG 2.1 AA standards</li>
                <li>• Focus indicators visible for keyboard navigation</li>
                <li>• Screen reader friendly component structure</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ComponentsPage;
