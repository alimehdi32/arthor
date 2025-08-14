import React from 'react'
import { useRouter } from 'next/navigation';

const SubTopics = ( { subtopics } ) => {
  const Router = useRouter();

  const searchVideos = async (topic) => {
    try {
      const response = await fetch(`http://localhost:5000/course/search-videos?query=${topic.replaceAll(' ', '%20')}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.success) {
        console.log('Videos searched successfully:', data);
        return data;
      } else {
        console.error('Failed to search videos:', data.error);
      }
    } catch (error) {
      console.error('Error searching video:', error);
      
    }
  }
   
  const getVideo = async () => {
    try{
      const response = await fetch(`http://localhost:5000/course/get-course-videos?video=${subtopics.topic}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.success) {
        console.log('Videos fetched successfully:', data.videos);
        Router.push(`/LearnTube?videoId=${data.videos.videoId}&title=${data.videos.title}`)
      } else {
        const videoData = await searchVideos(subtopics.topic);
        console.log('Fetched videos:', videoData);
        Router.push(`/LearnTube?videoId=${videoData.videos.videoId}&title=${videoData.videos.title}`)
      }

    }catch(error) {
      console.error('Error searching video:', error);
    }
  }
    

  return (
    <button 
      onClick={getVideo} 
      className="w-full p-6 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/25 hover:border-blue-500/50 hover:bg-gray-700/70 transition-all duration-300 hover:scale-[1.02] group text-left"
    >
      <div className="flex flex-wrap items-center gap-4 mb-3">
        <div className="px-3 py-1 bg-blue-600/20 text-blue-400 font-bold text-sm rounded-full border border-blue-500/30 group-hover:bg-blue-600/30 transition-colors duration-300">
          Day {subtopics.day}
        </div>
        <div className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
          {subtopics.topic}
        </div>
      </div>
      <div className="pl-4 border-l-2 border-gray-600 group-hover:border-blue-500 transition-colors duration-300">
        <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
          {subtopics.description}
        </div>
      </div>
      
      {/* Hover Indicator */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>
    </button>
  )
}

export default SubTopics
