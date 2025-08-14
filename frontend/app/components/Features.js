"use client"
import React, { useEffect, useState, useCallback } from 'react'
import Card from './Card'
import { useRouter } from "next/navigation";

const Features = () => {
    const Router = useRouter();
    const [click, setClick] = useState(false);

    const features = [{
        feature: 'AI-Powered Roadmap Generator',
        desc: 'Get a full learning path tailored to your input. Just type your goal, and BRAVIN builds a roadmap from scratch.'
    },
    {
        feature: 'YouTube Video Integration',
        desc: 'We fetch the most relevant and high-quality YouTube videos to support each roadmap step.'
    },
    {
        feature: 'Multi-Stage Roadmap Viewer',
        desc: 'View your path in clear stages — Beginner, Intermediate, and Advanced — with structured progression.'
    },
    {
        feature: 'Progress Tracking',
        desc: 'Keep track of your learning journey with built-in progress tracking. Celebrate your milestones!'
    },
    {
        feature: 'Weekly/Day-wise Breakdown',
        desc: 'Your roadmap is broken down into manageable chunks with estimated time and suggested completion days.'
    },
    {
        feature: 'No Ads, No Distractions',
        desc: 'Enjoy an uninterrupted, clean learning experience without any distractions.'
    }]

    const routeToFeatures = useCallback(async () => {
        Router.push('/features') 
    }, [Router]);

    useEffect(() => {
        if (click) {
            routeToFeatures();
        }
    }, [click, routeToFeatures]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Brains Meet AI — What Makes Arthor Easy & Fun
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Discover the power of AI-driven learning with our comprehensive feature set designed to make your educational journey seamless and enjoyable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {features.map((item, index) => (
                    <div 
                        key={index} 
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <Card index={index} feature={item.feature} desc={item.desc} />
                    </div>
                ))}
            </div>

            <div className="text-center">
                <button 
                    onClick={() => {setClick(!click)}} 
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 border border-blue-500/50 transform hover:-translate-y-1"
                >
                    Explore More Features
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
            </div>
        </div>
    )
}

export default Features
