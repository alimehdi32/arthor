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
        <div className='p-6 bg-black/80 shadow-md rounded-lg'>
            <div className='flex justify-items-start gap-10 items-center'>
                <button onClick={showRoadmap} className={open ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2' : 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2'}></button>
                <div className='text-2xl font-semibold font-mono'>{Courses.course}</div>
            </div>
            <div className={`p-6 mt-4 bg-black/75 transition-all duration-300 ease-in-out ${open ? 'block' : 'hidden'}`}>
                <div className='text-black'>Duration of the Course: {Courses.duration}</div>
                <div className='text-zinc-400 gap-4'>
                    {Courses.roadmap.map((topics) => (
                        <Roadmap key={topics._id} topics={topics} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Courses
