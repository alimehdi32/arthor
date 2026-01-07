"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Progress } from "@/app/components/ui/progress";
import { Badge } from "@/app/components/ui/badge";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Settings, 
  Maximize, 
  SkipBack, 
  SkipForward,
  BookOpen,
  FileText,
  Download,
  Star,
  Clock,
  CheckCircle2,
  List,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const LearnTubePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [completedChapters, setCompletedChapters] = useState(new Set());
  const videoRef = useRef(null);

  // Mock video data
  const videoData = {
    id: "1",
    title: "React Hooks Deep Dive",
    description: "Learn about useState, useEffect, and custom hooks in React",
    duration: 1847, // 30:47 in seconds
    thumbnail: "/api/placeholder/800/450",
    chapters: [
      { id: 1, title: "Introduction to Hooks", startTime: 0, duration: 180 },
      { id: 2, title: "useState Hook", startTime: 180, duration: 300 },
      { id: 3, title: "useEffect Hook", startTime: 480, duration: 420 },
      { id: 4, title: "Custom Hooks", startTime: 900, duration: 360 },
      { id: 5, title: "useContext and useReducer", startTime: 1260, duration: 400 },
      { id: 6, title: "Best Practices", startTime: 1660, duration: 187 },
    ],
    transcript: [
      { time: 0, text: "Welcome to this comprehensive guide on React Hooks." },
      { time: 30, text: "Today we'll explore the most important hooks in React." },
      { time: 60, text: "Let's start with the useState hook, which is fundamental to React." },
      { time: 90, text: "The useState hook allows you to add state to functional components." },
      { time: 120, text: "Here's a simple example of how to use useState." },
      { time: 150, text: "As you can see, useState returns an array with two elements." },
      { time: 180, text: "Now let's move on to the useEffect hook." },
      { time: 210, text: "useEffect is used for side effects in functional components." },
      { time: 240, text: "It's similar to componentDidMount and componentDidUpdate combined." },
      { time: 270, text: "Let's look at some practical examples of useEffect." },
    ],
    flashcards: [
      { id: 1, question: "What does useState return?", answer: "An array with the current state value and a setter function" },
      { id: 2, question: "When does useEffect run?", answer: "After every render by default" },
      { id: 3, question: "How do you create a custom hook?", answer: "By creating a function that starts with 'use' and calls other hooks" },
    ],
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (newVolume) => {
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handlePlaybackRateChange = (rate) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
    }
  };

  const handleChapterClick = (chapter) => {
    handleSeek(chapter.startTime);
    setCurrentChapter(chapter.id - 1);
  };

  const handleTranscriptClick = (time) => {
    handleSeek(time);
  };

  const handleExtractFlashcards = () => {
    // Mock flashcard extraction
    console.log("Extracting flashcards...");
  };

  const handleTakeQuiz = () => {
    // Mock quiz functionality
    console.log("Starting quiz...");
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-video bg-black">
                  {/* Video Element */}
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster={videoData.thumbnail}
                    onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime || 0)}
                    onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/api/placeholder/video" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <div className="absolute bottom-4 left-4 right-4">
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <Progress 
                          value={progress} 
                          className="h-1 cursor-pointer"
                          onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const clickX = e.clientX - rect.left;
                            const newTime = (clickX / rect.width) * duration;
                            handleSeek(newTime);
                          }}
                        />
                      </div>

                      {/* Control Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handlePlayPause}
                            className="text-white hover:bg-white/20"
                          >
                            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                          </Button>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleSeek(Math.max(0, currentTime - 10))}
                            className="text-white hover:bg-white/20"
                          >
                            <SkipBack className="h-4 w-4" />
                          </Button>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleSeek(Math.min(duration, currentTime + 10))}
                            className="text-white hover:bg-white/20"
                          >
                            <SkipForward className="h-4 w-4" />
                          </Button>

                          <div className="text-white text-sm">
                            {formatTime(currentTime)} / {formatTime(duration)}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleMute}
                            className="text-white hover:bg-white/20"
                          >
                            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                          </Button>

                          <select
                            value={playbackRate}
                            onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}
                            className="bg-black/50 text-white text-sm rounded px-2 py-1"
                          >
                            <option value={0.5}>0.5x</option>
                            <option value={0.75}>0.75x</option>
                            <option value={1}>1x</option>
                            <option value={1.25}>1.25x</option>
                            <option value={1.5}>1.5x</option>
                            <option value={2}>2x</option>
                          </select>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/20"
                          >
                            <Maximize className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h1 className="text-2xl font-bold text-[var(--text)] mb-2">
                    {videoData.title}
                  </h1>
                  <p className="text-[var(--muted)] mb-4">
                    {videoData.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatTime(duration)}
                    </Badge>
                    <Badge variant="secondary">
                      <Star className="h-3 w-3 mr-1" />
                      4.8
                    </Badge>
                    <Badge variant="secondary">
                      <BookOpen className="h-3 w-3 mr-1" />
                      Intermediate
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleExtractFlashcards} className="flex-1">
                      <FileText className="h-4 w-4 mr-2" />
                      Extract Flashcards
                    </Button>
                    <Button onClick={handleTakeQuiz} variant="outline" className="flex-1">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Take Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Chapters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <List className="h-5 w-5 text-[var(--accent)]" />
                  Chapters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {videoData.chapters.map((chapter, index) => (
                    <motion.div
                      key={chapter.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div
                        className={cn(
                          "p-3 rounded-lg cursor-pointer transition-colors",
                          currentChapter === index
                            ? "bg-[var(--accent)]/10 border border-[var(--accent)]/20"
                            : "hover:bg-[var(--secondary)]"
                        )}
                        onClick={() => handleChapterClick(chapter)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-[var(--text)] truncate">
                              {chapter.title}
                            </div>
                            <div className="text-xs text-[var(--muted)]">
                              {formatTime(chapter.startTime)} - {formatTime(chapter.startTime + chapter.duration)}
                            </div>
                          </div>
                          {completedChapters.has(chapter.id) && (
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transcript */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[var(--accent)]" />
                    Transcript
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowTranscript(!showTranscript)}
                  >
                    {showTranscript ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {showTranscript && (
                <CardContent>
                  <div className="max-h-64 overflow-y-auto space-y-2">
                    {videoData.transcript.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                          "p-2 rounded cursor-pointer transition-colors text-sm",
                          Math.floor(currentTime) === item.time
                            ? "bg-[var(--accent)]/10 border-l-2 border-[var(--accent)]"
                            : "hover:bg-[var(--secondary)]"
                        )}
                        onClick={() => handleTranscriptClick(item.time)}
                      >
                        <div className="text-xs text-[var(--muted)] mb-1">
                          {formatTime(item.time)}
                        </div>
                        <div className="text-[var(--text)]">
                          {item.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnTubePage;