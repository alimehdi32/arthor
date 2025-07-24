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
    <button onClick={getVideo} className='p-4 bg-black/70 shadow-md hover:cursor-pointer hover:border hover:border-white/20 rounded-lg hover:bg-black/90 transition-all duration-300 ease-in-out'>
      <div className='flex flex-wrap justify-items-start pl-3.5 text-xl font-medium text-slate-500 items-center gap-10'>
        <div className='text-shadow-zinc-700 font-semibold'>Day {subtopics.day}</div>
        <div className='font-semibold'>{subtopics.topic}</div>
      </div>
      <div className='pl-8'>
        <div className='text-sm font-bold font-sans'>{subtopics.description}</div>
      </div>
    </button>
  )
}

export default SubTopics
