"use client"
import React from 'react'
import { useCallback, useEffect, useState } from 'react';
import Roadmap from '../components/Roadmap';

const Courses = ({ Courses }) => {
    const [open, setOpen] = useState(false);

    const showRoadmap = () => {
        setOpen(!open);
    };

    return (
        <div className="group relative bg-gray-900/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/50 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-6">
                    <button 
                        onClick={showRoadmap} 
                        className={`w-12 h-12 rounded-2xl transition-all duration-300 flex items-center justify-center font-bold text-white border-2 ${
                            open 
                                ? 'bg-green-600 hover:bg-green-500 border-green-500/50 shadow-lg shadow-green-500/25' 
                                : 'bg-red-600 hover:bg-red-500 border-red-500/50 shadow-lg shadow-red-500/25'
                        } hover:scale-110 transform`}
                    >
                        {open ? '✓' : '▶'}
                    </button>
                    <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {Courses.course}
                    </div>
                </div>

                {/* Course Duration */}
                <div className="mb-6">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 font-semibold rounded-full border border-blue-500/30">
                        ⏱️ Duration: {Courses.duration}
                    </div>
                </div>

                {/* Roadmap Section */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="pt-6 border-t border-gray-800/50">
                        <div className="text-gray-400 mb-4">
                            {Courses.roadmap.map((topics) => (
                                <Roadmap key={topics._id} topics={topics} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Expand/Collapse Indicator */}
                <div className="text-center mt-4">
                    <div className={`inline-flex items-center text-sm text-gray-500 transition-all duration-300 ${
                        open ? 'opacity-0' : 'opacity-100'
                    }`}>
                        <span className="mr-2">Click to expand roadmap</span>
                        <svg className="w-4 h-4 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" style={{transitionDelay: '0.1s'}}></div>
        </div>
    )
}

export default Courses
