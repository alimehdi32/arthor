"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const PromptLab = () => {

  const [clicked, setClicked] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [roadmap, setRoadmap] = useState({});
  const [saved, setSaved] = useState(false);
  


  const saveRoadmap = async () => {
    try {
      const response = await fetch('http://localhost:5000/course/save-roadmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(roadmap),
        credentials: 'include', // <== important!
      })
      if (response.ok) {
        const data = await response.json();
        console.log('Roadmap saved successfully:', data);
        toast.success('Roadmap saved successfully!', {
          className: 'my-custom-toast',
          
        });
        setSaved(true);

      } else {
        console.error('Failed to save roadmap:', response.statusText);
      }

    } catch (error) {
      console.error('Error saving roadmap:', error);

    }
  }


  const generateRoadmap = async () => {

    try {
      const response = await fetch('http://localhost:5000/course/roadmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
        credentials: 'include', // <== important!
      })
      console.log('Response:', response.body)
      if (response.ok) {
        const data = await response.json();
        setRoadmap(JSON.parse(data));

        console.log('Roadmap generated:', JSON.parse(data));
        setPrompt('')
        setClicked(false);
        
        toast.success('Roadmap generated successfully!', {
          className: 'my-custom-toast',
        });
        // Handle the generated roadmap data as needed
      } else {
        // if(toast.isActive('my-custom-toast')) {
        //   console.log('Toast is already active');
        // }else {
        //   console.log('Showing toast');
        //   return ;
        // }
        switch (response.status) {
          case 400: toast.error('I am responsible for generating roadmaps for You. Answering to questions is outside of my scope.', {
            // className: 'my-custom-toast',
          }); console.log('error 400'); break;
          case 401: toast.error('I am responsible for generating roadmaps for You. This prompt is irrevelant for generating roadmaps.', {
            // className: 'my-custom-toast',
          }); console.log('error 401'); break;
          case 402: toast.error('This prompt is uncertain. Please specify clearly what type of course you want to learn', {
            // className: 'my-custom-toast',
          }); console.log('error 402'); break;
          case 403: toast.error('This prompt is not related to education, it is a general query regarding modern world. Please specify clearly what type of course you want to learn', {
            // className: 'my-custom-toast',
          }); console.log('error 403'); break;
          default: toast.error('Something went wrong. Could not generate Roadmap right now. Please try again later.', {
            // className: 'my-custom-toast',
          }); break;
        }
        setPrompt('')
        setClicked(false);
        
      }
    } catch (error) {
      console.error('Error generating roadmap:', error);

    }
  }

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      {roadmap.courseTitle ? (
        <div className="relative z-10">
          {!saved && (
            <button
              onClick={saveRoadmap}
              className="fixed top-24 right-8 z-50 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 border border-green-500/50 transform hover:-translate-y-1 group"
            >
              💾 Commit Roadmap
              <span className="ml-2 group-hover:scale-110 transition-transform duration-300">→</span>
            </button>
          )}

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
            <div className="animate-fade-in-up">
              <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800/50 p-8 rounded-3xl shadow-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {roadmap.courseTitle}
                </h1>
                <p className="text-2xl font-semibold text-gray-300 mb-8">{roadmap.duration}</p>

                {roadmap.weeks && roadmap.weeks.map((week, index) => (
                  <div key={index} className="mb-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-2xl border border-blue-500/30 mb-6">
                      <div className="text-3xl font-bold text-blue-400 mb-2">{week.title}</div>
                      <div className="text-xl text-gray-300">{week.estimatedTime}</div>
                    </div>

                    <div className="space-y-4">
                      {week.days.map((day) => (
                        <div key={day.day} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] group">
                          <div className="flex flex-wrap items-center gap-4 mb-3">
                            <div className="px-4 py-2 bg-blue-600/20 text-blue-400 font-bold rounded-full border border-blue-500/30">
                              Day {day.day}
                            </div>
                            <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                              {day.topic}
                            </div>
                          </div>
                          <div className="text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-600 group-hover:border-blue-500 transition-colors duration-300">
                            {day.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              🎓💬 Welcome to PromptLab
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Your ultimate AI-powered learning lab! Sick of scrolling through random tutorials and not knowing where to start? We've got you covered.
              Just type in what you want to learn – like "How to become a full-stack developer", "AI in 3 months", or even "Master Canva for freelancing" –
              and our AI will instantly build you a smart, step-by-step roadmap.
            </p>
            <p className="text-lg text-gray-400 mt-6 leading-relaxed max-w-3xl mx-auto">
              You'll get videos, beginner-to-advanced stages, daily or weekly breakdowns, and smart progress tracking — all in one place.
              Ask follow-up questions if you're stuck, explore more ideas, and when you're ready, commit your roadmap to your personal PromptVault.
            </p>
          </div>
        </div>
      )}

      {/* Input Section */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 sm:px-6 lg:px-8 z-50">
        <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-800/50 rounded-3xl shadow-2xl p-6">
          {saved ? (
            <div className="text-center">
              <div className="text-2xl mb-2">🎉</div>
              <p className="text-white text-lg font-semibold">Roadmap saved successfully! You can start your course in PromptVault</p>
            </div>
          ) : (
            <form className="flex items-center space-x-4">
              {clicked ? (
                <div className="flex-1 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <p className="text-white text-lg mt-2">Generating your roadmap...</p>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Enter your prompt here... (e.g., 'How to become a full-stack developer')"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="flex-1 p-4 bg-gray-800/80 text-white placeholder-gray-400 rounded-2xl border border-gray-700/50 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-lg"
                  />
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      generateRoadmap();
                      setClicked(true);
                    }}
                    disabled={!prompt.trim() || clicked}
                    className={`px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 border border-blue-500/50 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:-translate-y-0 group`}
                  >
                    🚀 Generate
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default PromptLab
