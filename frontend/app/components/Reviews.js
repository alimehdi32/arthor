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
      review: 'Bravin has made learning so much easier for me. The AI-generated road  maps are tailored to my needs, and the YouTube video integration is seamless. \n\nI love how I can track my progress and see how far I\'ve come. \n\nThe no-ads experience is a breath of fresh air. I can focus on learning without any distractions. Highly recommend Bravin to anyone looking to enhance their learning journey!'
    },
    ]
    useEffect(() => {
        if (clicked) {
            Router.push('/reviews'); // Navigate to the reviews page when clicked
        }}, [clicked, Router]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Learning Made Easy – Just Ask Them
        </h1>
        <h3 className="text-xl text-gray-400 max-w-2xl mx-auto">
          Because learning should feel personal and inspiring.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {reviews.map((review, index) => (
          <div 
            key={index} 
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ReviewCard dp={review.dp} username={review.username} review={review.review} />
          </div>
        ))}
      </div>

      <div className="text-center">
        <button 
          onClick={() => {setClicked(!clicked)}} 
          className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 border border-blue-500/50 transform hover:-translate-y-1"
        >
          Not Satisfied? Read More Reviews
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
    </div>
  )
}

export default Reviews
