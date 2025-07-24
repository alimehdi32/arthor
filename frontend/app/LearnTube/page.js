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

  return (
    <div>
      
    </div>
  )
}

export default Learntube
