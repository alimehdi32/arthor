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
      if (response.ok) {
        const data = await response.json();
        setRoadmap(JSON.parse(data));

        console.log('Roadmap generated:', JSON.parse(data));
        setPrompt('')
        setClicked(false);

        // Handle the generated roadmap data as needed
      } else {
        console.error('Failed to generate roadmap:', response.statusText);
      }
    } catch (error) {
      console.error('Error generating roadmap:', error);

    }
  }
  return (
    <div className="flex flex-col items-center relative w-full justify-center bg-neutral-900 text-white pb-[100px]">
      {roadmap.courseTitle ?
        <div>
          {!saved && <button onClick={saveRoadmap} className='h-12 w-24 hover:bg-white/5 rounded-2xl text-xl font-medium fixed right-[50px] bg-white/20 transition duration-200 border border-gray-800'>Commit</button>}

          <div className='flex flex-col items-center justify-center mt-20'>
            <div className='bg-neutral-800 p-6 rounded-lg shadow-lg w-[800px]'>
              <h1 className='text-2xl font-extrabold font-mono mb-4'>{roadmap.courseTitle}</h1>
              <p className='text-xl font-bold mb-4'>{roadmap.duration}</p>

              {roadmap.weeks && roadmap.weeks.map((week, index) => (
                <div key={index} className='mt-4'>
                  <div className='text-3xl '>{week.title}</div>
                  <div className='text-xl'>{week.estimatedTime}</div>
                  {/* You can also loop over week.days if needed */}
                  {week.days.map((day) => {
                    return (

                      <div key={day.day} className='my-1.5'>
                        <div className='flex flex-wrap justify-items-start items-center gap-6'>
                          <div className='font-bold'>Day {day.day}</div>
                          <div className='font-bold'>{day.topic}</div>
                        </div>
                        <div className='font-normal pl-14'># {day.description}</div>
                      </div>
                    )
                  })}
                </div>
              ))}


            </div>
          </div>
        </div>
        :
        <div className='flex flex-col absolute top-[100px] flex-wrap items-center my-0 p-0 gap-0 justify-center'>
          <h1 className='text-xl font-bold m-0 mb-2'>🎓💬 Welcome to PromptLab – your ultimate AI-powered learning lab!</h1>
          <p className='text-lg font-sans mb-0 ml-9 max-w-[700px]'>Sick of scrolling through random tutorials and not knowing where to start? We got you. Just type in what you wanna learn – like “How to become a full-stack developer”, “AI in 3 months”, or even “Master Canva for freelancing” – and our AI will instantly build you a smart, step-by-step roadmap 🧠➡️📈.
            You’ll get videos 🎥, beginner-to-advanced stages 🎯, daily or weekly breakdowns 🗓️, and smart progress tracking ✅ — all in one chill place. Ask follow-up questions if you're stuck, explore more ideas, and when you're ready, commit your roadmap to your personal PromptVault 🔐.
            No more confusion, no boring PDFs, just pure, guided learning — built around you. 💪🌟
            Start exploring, start growing, and let your next skill journey begin right here! 🚀🔥</p>
        </div>}
      <div className='min-h-[80px] w-[800px] rounded-3xl fixed bottom-[10px] flex items-center justify-center bg-neutral-600 border border-white/50'>
        {saved ?
          <p className='text-white text-lg'>Roadmap saved successfully! You can start your course in PromptVault</p>
          : <form>
            <div className='flex items-center justify-between w-full px-4'>
              {clicked ?
                <p className='text-white w-[650px] text-lg'>Generating your roadmap...</p>
                :
                <input
                  type="text"
                  placeholder="Enter your prompt here..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="flex-1 p-2 rounded-lg bg-neutral-800 w-[650px] text-white border border-gray-700 focus:outline-none focus:border-gray-400 transition duration-200"
                />
              }

              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  generateRoadmap();
                  setClicked(true);
                }}
                disabled={!prompt.trim() || clicked}
                className={`ml-4 px-6 py-2 bg-lime-800 text-white  text-sm rounded-lg hover:bg-lime-600 transition duration-200 ${clicked ? 'cursor-not-allowed opacity-50' : ''}`}
              >
                Generate
              </button>
            </div>
          </form>}

      </div>
    </div>
  )
}

export default PromptLab
