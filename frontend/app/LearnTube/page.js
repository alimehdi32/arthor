"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const Learntube = () => {
  const searchParams = useSearchParams();
  const [videoId, setVideoId] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    const idFromUrl = searchParams.get('videoId');
    const titleFromUrl = searchParams.get('title');
    if (idFromUrl && titleFromUrl) {
      setTitle(titleFromUrl);
      setVideoId(idFromUrl);
      console.log('Video from URL:', idFromUrl);
      console.log('Title from URL:', titleFromUrl);
    } else {
      console.log('No Video found in URL parameters.');
    }
  }, [searchParams]);

  if (!videoId) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 text-center animate-fade-in-up">
          <div className="text-6xl mb-6">📺</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            No Video Selected
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Please select a video from your learning roadmap to start watching. Head back to PromptVault to continue your learning journey.
          </p>
          <a
            href="/PromptVault"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 border border-blue-500/50 transform hover:-translate-y-1 group"
          >
            📚 Back to PromptVault
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10">
        {/* Video Title Header */}
        <div className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 p-6 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-gray-400">Learning in progress...</p>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
              title={title}
              className="w-full aspect-video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Controls & Info */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Information */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">About This Lesson</h2>
                <p className="text-gray-300 leading-relaxed">
                  This video is part of your personalized learning roadmap. Take notes, practice the concepts, and track your progress as you master new skills.
                </p>
              </div>
            </div>

            {/* Learning Tools */}
            <div className="space-y-4">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Learning Tools</h3>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 font-semibold rounded-xl border border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                    📝 Take Notes
                  </button>
                  <button className="w-full p-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 font-semibold rounded-xl border border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                    ✅ Mark Complete
                  </button>
                  <button className="w-full p-3 bg-green-600/20 hover:bg-green-600/30 text-green-400 font-semibold rounded-xl border border-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                    🔄 Practice Again
                  </button>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Progress</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Current Video</span>
                    <span className="text-blue-400">1 of 1</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-full"></div>
                  </div>
                  <p className="text-xs text-gray-500">Video completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learntube
