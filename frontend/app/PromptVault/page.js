"use client"
import React from 'react'
import { useCallback, useEffect, useState } from 'react';
import Courses from '../components/Courses';

const Promptvault = () => {
  const [userId, setUserId] = useState(null);
  const [courses, setCourses] = useState();


  const getCourses = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/course/get-roadmap', {
        method: 'GET',
        credentials: 'include', // Include cookies in the request
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Courses data:', data);
      setCourses(data.courses);
    } catch (error) {
      console.error('Error fetching courses:', error);

    }
  }, []);

  const getUser = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/user/get-user', {
        method: 'GET',
        credentials: 'include', // Include cookies in the request
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('User data:', data);
      setUserId(data.user.id)
    } catch (error) {
      console.error('Error fetching user:', error);

    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  useEffect(() => {
    if (userId) {
      getCourses();
    }
  }, [userId, getCourses]);

  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-4'>Prompt Vault</h1>
      <div className='flex justify-center items-center'>
        <div className='w-full max-w-4xl'>
          {courses && courses.length > 0 ? (
            courses.map((course) => (
              <Courses key={course._id} Courses={course} />
            ))
          ) : (
            <p className='text-center'>No courses available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Promptvault
