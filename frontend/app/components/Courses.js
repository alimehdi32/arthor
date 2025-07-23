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
        <div>
            <div className='flex justify-items-start gap-10 items-center'>
                <button onClick={showRoadmap} className={open ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2' : 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'}></button>
                <div>{Courses.course}</div>
            </div>
            <div className={`border border-gray-300 p-6 mt-4 bg-gray-50 transition-all duration-300 ease-in-out ${open ? 'block' : 'hidden'}`}>
                <div>Duration of the Course: {Courses.duration}</div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {Courses.roadmap.map((week) => (
                        <Roadmap key={week._id} week={week} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Courses
