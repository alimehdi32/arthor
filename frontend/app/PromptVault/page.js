"use client"
import React from 'react'
import { useCallback, useEffect, useState } from 'react';
import Courses from '../components/Courses';

const Promptvault = () => {
  const [userId, setUserId] = useState(null);
  const [courses, setCourses] = useState();

  const getCourses = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/course/get-roadmap', {
        method: 'GET',
        credentials: 'include', // Include cookies in the request
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Courses data:', data);
      setCourses(data.courses);
    } catch (error) {
      console.error('Error fetching courses:', error);

    }
  }, []);

  const getUser = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/user/get-user', {
        method: 'GET',
        credentials: 'include', // Include cookies in the request
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('User data:', data);
      setUserId(data.user.id)
    } catch (error) {
      console.error('Error fetching user:', error);

    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  useEffect(() => {
    if (userId) {
      getCourses();
    }
  }, [userId, getCourses]);

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            📚 Prompt Vault
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your personal collection of AI-generated learning roadmaps. Track progress, manage courses, and continue your learning journey.
          </p>
        </div>

        <div className="space-y-8">
          {courses && courses.length > 0 ? (
            courses.map((course, index) => (
              <div 
                key={course._id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Courses Courses={course} />
              </div>
            ))
          ) : (
            <div className="text-center py-20 animate-fade-in-up">
              <div className="text-6xl mb-6">📚</div>
              <h2 className="text-2xl font-bold text-white mb-4">No Courses Available</h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                You haven&apos;t created any learning roadmaps yet. Head to PromptLab to generate your first AI-powered learning path!
              </p>
              <a 
                href="/PromptLab" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 border border-blue-500/50 transform hover:-translate-y-1 group"
              >
                🚀 Create Your First Roadmap
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Promptvault
