"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const Learntube = () => {
  const searchParams = useSearchParams();
  const [videoId, setVideoId] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    const idFromUrl = searchParams.get('videoId');
    const titleFromUrl = searchParams.get('title');
    if (idFromUrl && titleFromUrl) {
      setTitle(titleFromUrl);
      setVideoId(idFromUrl);
      console.log('Video from URL:', idFromUrl);
      console.log('Title from URL:', titleFromUrl);
    } else {
      console.log('No Video found in URL parameters.');
    }
  }, [searchParams]);

  if (!videoId) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-2xl font-bold'>No Video Selected</h1>
      </div>
    );
  }

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
        title={title}
        className='w-full h-screen'
        frameBorder="0"
        // Allow attributes for autoplay, fullscreen, etc.
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default Learntube
