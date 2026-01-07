"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Clock, 
  BookOpen, 
  TrendingUp,
  Heart,
  Share2,
  Download,
  Eye,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("trending");

  const categories = [
    { id: "all", label: "All", count: 156 },
    { id: "programming", label: "Programming", count: 45 },
    { id: "design", label: "Design", count: 32 },
    { id: "data-science", label: "Data Science", count: 28 },
    { id: "business", label: "Business", count: 24 },
    { id: "marketing", label: "Marketing", count: 18 },
    { id: "languages", label: "Languages", count: 9 },
  ];

  const featuredRoadmaps = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      description: "Master HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive course",
      author: "Sarah Johnson",
      authorAvatar: "/api/placeholder/40/40",
      category: "programming",
      difficulty: "beginner",
      duration: "16 weeks",
      rating: 4.9,
      students: 12500,
      price: "Free",
      thumbnail: "/api/placeholder/300/200",
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      isFeatured: true,
      createdAt: "2024-01-15",
      lastUpdated: "2 days ago",
    },
    {
      id: "2",
      title: "UI/UX Design Mastery",
      description: "Learn design principles, user research, prototyping, and modern design tools",
      author: "Mike Chen",
      authorAvatar: "/api/placeholder/40/40",
      category: "design",
      difficulty: "intermediate",
      duration: "12 weeks",
      rating: 4.8,
      students: 8900,
      price: "$99",
      thumbnail: "/api/placeholder/300/200",
      tags: ["Figma", "Sketch", "Adobe XD", "User Research"],
      isFeatured: true,
      createdAt: "2024-01-10",
      lastUpdated: "1 week ago",
    },
    {
      id: "3",
      title: "Machine Learning Fundamentals",
      description: "From basic concepts to building your first ML models with Python",
      author: "Dr. Emily Rodriguez",
      authorAvatar: "/api/placeholder/40/40",
      category: "data-science",
      difficulty: "intermediate",
      duration: "14 weeks",
      rating: 4.7,
      students: 6700,
      price: "$149",
      thumbnail: "/api/placeholder/300/200",
      tags: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      isFeatured: true,
      createdAt: "2024-01-05",
      lastUpdated: "3 days ago",
    },
  ];

  const popularRoadmaps = [
    {
      id: "4",
      title: "JavaScript ES6+ Complete Guide",
      description: "Modern JavaScript features and best practices",
      author: "Alex Thompson",
      authorAvatar: "/api/placeholder/40/40",
      category: "programming",
      difficulty: "intermediate",
      duration: "8 weeks",
      rating: 4.6,
      students: 15200,
      price: "Free",
      thumbnail: "/api/placeholder/300/200",
      tags: ["JavaScript", "ES6", "Async/Await", "Modules"],
      isFeatured: false,
      createdAt: "2024-01-20",
      lastUpdated: "1 day ago",
    },
    {
      id: "5",
      title: "Digital Marketing Strategy",
      description: "Complete guide to digital marketing and growth hacking",
      author: "Lisa Wang",
      authorAvatar: "/api/placeholder/40/40",
      category: "marketing",
      difficulty: "beginner",
      duration: "10 weeks",
      rating: 4.5,
      students: 9800,
      price: "$79",
      thumbnail: "/api/placeholder/300/200",
      tags: ["SEO", "Social Media", "Analytics", "Content Marketing"],
      isFeatured: false,
      createdAt: "2024-01-18",
      lastUpdated: "4 days ago",
    },
    {
      id: "6",
      title: "Python for Data Analysis",
      description: "Data manipulation and analysis with pandas and numpy",
      author: "David Kim",
      authorAvatar: "/api/placeholder/40/40",
      category: "data-science",
      difficulty: "beginner",
      duration: "6 weeks",
      rating: 4.8,
      students: 11200,
      price: "Free",
      thumbnail: "/api/placeholder/300/200",
      tags: ["Python", "Pandas", "NumPy", "Data Visualization"],
      isFeatured: false,
      createdAt: "2024-01-12",
      lastUpdated: "1 week ago",
    },
  ];

  const allRoadmaps = [...featuredRoadmaps, ...popularRoadmaps];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-800";
      case "intermediate": return "bg-yellow-100 text-yellow-800";
      case "advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const RoadmapCard = ({ roadmap, featured = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={cn(
        "h-full hover:shadow-lg transition-shadow duration-200",
        featured && "ring-2 ring-[var(--accent)]/20"
      )}>
        <div className="relative">
          <img
            src={roadmap.thumbnail}
            alt={roadmap.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {featured && (
            <Badge className="absolute top-2 left-2 bg-[var(--accent)] text-white">
              <TrendingUp className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
          <div className="absolute top-2 right-2 flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/90 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/90 hover:bg-white">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg mb-1 line-clamp-2">
                {roadmap.title}
              </CardTitle>
              <p className="text-sm text-[var(--muted)] line-clamp-2">
                {roadmap.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <img
              src={roadmap.authorAvatar}
              alt={roadmap.author}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm text-[var(--muted)]">{roadmap.author}</span>
            <Badge className={cn("text-xs", getDifficultyColor(roadmap.difficulty))}>
              {roadmap.difficulty}
            </Badge>
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

          <div className="flex items-center justify-between text-sm text-[var(--muted)]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3" />
                {roadmap.rating}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {roadmap.students.toLocaleString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {roadmap.duration}
              </div>
            </div>
            <div className="font-semibold text-[var(--accent)]">
              {roadmap.price}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex gap-2">
            <Button className="flex-1">
              <BookOpen className="h-4 w-4 mr-2" />
              Start Learning
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[var(--text)] mb-4">
              Explore Learning Paths
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Discover curated roadmaps created by experts and the community
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--muted)]" />
              <Input
                placeholder="Search roadmaps, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-[var(--border)] rounded-md bg-[var(--card)] text-[var(--text)]"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-[var(--border)] rounded-md bg-[var(--card)] text-[var(--text)]"
              >
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Featured Roadmaps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-[var(--accent)]" />
            Featured Roadmaps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRoadmaps.map((roadmap, index) => (
              <motion.div
                key={roadmap.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <RoadmapCard roadmap={roadmap} featured={true} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Roadmaps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-2">
            <Eye className="h-6 w-6 text-[var(--accent)]" />
            Popular This Week
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoadmaps.map((roadmap, index) => (
              <motion.div
                key={roadmap.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <RoadmapCard roadmap={roadmap} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Load More Roadmaps
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ExplorePage;