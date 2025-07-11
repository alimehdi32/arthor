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
        <div className='h-[600px] bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center justify-around text-center p-4  shadow-lg'>
            <h1 className='font-semibold text-3xl from-neutral-800 font-sans'>Brains Meet AI — What makes Bravin Easy&Fun</h1>
            <div className='grid grid-rows-2 p-0'>
                { features.map((item, index) => {
                    return (
                        <Card key={index} index={index} feature={item.feature} desc={item.desc} />
                    )
                })}
            </div>
            <button onClick={() => {setClick(!click)}} className='bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg shadow-md hover:bg-white/20 transition-colors duration-300 text-white'>
                Explore more features
            </button>
        </div>
    )
}

export default Features
