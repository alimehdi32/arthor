"use client"
import React, { use } from 'react'
import ReviewCard from './ReviewCard'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Reviews = () => {
   const [clicked, setClicked] = useState(false);
   const Router = useRouter();
  const reviews =[
    {
      dp: '/profile-pic.jpg',
      username: 'John Doe',
      review: 'Bravin has transformed my learning experience! The AI-generated roadmaps are spot on, and the YouTube integration is a game changer. Highly recommend! \n\nThe progress tracking feature keeps me motivated, and the weekly breakdowns make it easy to stay on track. I love how personalized everything feels. \n\nPlus, the no-ads policy means I can focus entirely on learning without distractions. This is the future of education!'
    },  
    {
      dp: '/profile-pic2.jpg',
      username: 'Jane Smith',
      review: 'I was skeptical at first, but Bravin exceeded my expectations. The AI roadmap is incredibly intuitive, and the video lessons are top-notch. \n\nI appreciate the structured approach to learning, and the progress tracking keeps me accountable. \n\nThe community support is also fantastic. I feel like I have a personal tutor guiding me through my learning journey.'
    },
    {
      dp: '/profile-pic3.jpg',
      username: 'Alice Johnson',
      review: 'Bravin has made learning so much easier for me. The AI-generated road  maps are tailored to my needs, and the YouTube video integration is seamless. \n\nI love how I can track my progress and see how far I’ve come. \n\nThe no-ads experience is a breath of fresh air. I can focus on learning without any distractions. Highly recommend Bravin to anyone looking to enhance their learning journey!'
    },
    ]
    useEffect(() => {
        if (clicked) {
            Router.push('/reviews'); // Navigate to the reviews page when clicked
        }}, [clicked, Router]);
  return (
    <div className='max-w-full min-h-[400px] bg-gray-950 border border-white/25 p-4'>
      <h1 className='text-3xl font-semibold text-center text-gray-800'>Learning Made Easy – Just Ask Them</h1>
      <h3 className='text-lg text-center text-gray-600 mt-2'>Because learning should feel personal.</h3>
      <div className='p-10 overflow-x-auto flex flex-wrap items-center justify-center gap-6'>
        {reviews.map((review, index) => (
          <ReviewCard key={index} dp={review.dp} username={review.username} review={review.review} />
        ))}
      </div>
      <button onClick={() => {setClicked(!clicked)}} className='bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 mt-4'>
        Not Satisfied?  Read More Reviews
      </button>
    </div>
  )
}

export default Reviews
