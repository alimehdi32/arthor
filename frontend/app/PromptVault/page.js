"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Plus, 
  Edit, 
  Share2, 
  Copy,
  Calendar,
  Clock,
  BookOpen,
  Star,
  MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

const PromptVaultPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Mock data for roadmaps
  const roadmaps = [
    {
      id: "1",
      title: "React Development Mastery",
      description: "Complete roadmap from beginner to advanced React developer",
      tags: ["React", "JavaScript", "Frontend"],
      difficulty: "intermediate",
      duration: "8 weeks",
      progress: 65,
      createdAt: "2024-01-15",
      version: "v2.1",
      isPublic: true,
      rating: 4.8,
      author: "John Doe",
      lastModified: "2 days ago",
    },
    {
      id: "2",
      title: "Machine Learning Fundamentals",
      description: "Learn ML concepts, algorithms, and practical applications",
      tags: ["ML", "Python", "Data Science"],
      difficulty: "advanced",
      duration: "12 weeks",
      progress: 30,
      createdAt: "2024-01-10",
      version: "v1.3",
      isPublic: false,
      rating: 4.6,
      author: "Jane Smith",
      lastModified: "1 week ago",
    },
    {
      id: "3",
      title: "UI/UX Design Principles",
      description: "Master design thinking and user experience",
      tags: ["Design", "UX", "Figma"],
      difficulty: "beginner",
      duration: "6 weeks",
      progress: 100,
      createdAt: "2024-01-05",
      version: "v1.0",
      isPublic: true,
      rating: 4.9,
      author: "Mike Johnson",
      lastModified: "3 days ago",
    },
    {
      id: "4",
      title: "Full-Stack Web Development",
      description: "Complete web development with modern technologies",
      tags: ["Full-Stack", "Node.js", "React", "Database"],
      difficulty: "intermediate",
      duration: "16 weeks",
      progress: 0,
      createdAt: "2024-01-20",
      version: "v1.0",
      isPublic: true,
      rating: 4.7,
      author: "Sarah Wilson",
      lastModified: "1 day ago",
    },
  ];

  const filters = [
    { value: "all", label: "All Roadmaps" },
    { value: "my", label: "My Roadmaps" },
    { value: "public", label: "Public" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  const filteredRoadmaps = roadmaps.filter(roadmap => {
    const matchesSearch = roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         roadmap.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         roadmap.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = selectedFilter === "all" || 
                         (selectedFilter === "my" && roadmap.author === "John Doe") ||
                         (selectedFilter === "public" && roadmap.isPublic) ||
                         roadmap.difficulty === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-800";
      case "intermediate": return "bg-yellow-100 text-yellow-800";
      case "advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const RoadmapCard = ({ roadmap }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg mb-2 line-clamp-2">
                {roadmap.title}
              </CardTitle>
              <p className="text-sm text-[var(--muted)] line-clamp-2 mb-3">
                {roadmap.description}
              </p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {roadmap.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {roadmap.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{roadmap.tags.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {roadmap.duration}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {roadmap.lastModified}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              {roadmap.rating}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Progress Bar */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted)]">Progress</span>
              <span className="font-medium">{roadmap.progress}%</span>
            </div>
            <div className="w-full bg-[var(--secondary)] rounded-full h-2">
              <div 
                className="bg-[var(--accent)] h-2 rounded-full transition-all duration-300"
                style={{ width: `${roadmap.progress}%` }}
              />
            </div>
          </div>

          {/* Difficulty Badge */}
          <div className="flex items-center justify-between mb-4">
            <Badge className={cn("text-xs", getDifficultyColor(roadmap.difficulty))}>
              {roadmap.difficulty}
            </Badge>
            <div className="text-xs text-[var(--muted)]">
              by {roadmap.author}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button size="sm" className="flex-1">
              <BookOpen className="h-3 w-3 mr-1" />
              {roadmap.progress > 0 ? "Continue" : "Start"}
            </Button>
            <Button variant="outline" size="sm">
              <Edit className="h-3 w-3" />
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[var(--text)] mb-2">
                PromptVault
          </h1>
              <p className="text-[var(--muted)]">
                Your collection of AI-generated learning roadmaps
          </p>
            </div>
            <Button className="bg-[var(--accent)] hover:bg-[var(--accent)]/90">
              <Plus className="h-4 w-4 mr-2" />
              Create New
            </Button>
        </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--muted)]" />
              <Input
                placeholder="Search roadmaps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {filters.map((filter) => (
                    <SelectItem key={filter.value} value={filter.value}>
                      {filter.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex border border-[var(--border)] rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Roadmaps Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredRoadmaps.length > 0 ? (
            <div className={cn(
              "grid gap-6",
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            )}>
              {filteredRoadmaps.map((roadmap, index) => (
                <motion.div
                  key={roadmap.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <RoadmapCard roadmap={roadmap} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-[var(--muted)] mb-4">
                {searchQuery ? "No roadmaps found matching your search" : "No roadmaps yet"}
              </div>
              <Button className="bg-[var(--accent)] hover:bg-[var(--accent)]/90">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Roadmap
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PromptVaultPage;