"use client"

import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const Page = () => {
  const Router = useRouter();
  const [clicked, setClicked] = useState(false);
  const email = 'am66578@gmail.com';
  const password = 'alimehdi486';

  const handleLogin = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('Login successful!');
        console.log('Login successful:', data);
        Router.push('/')
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }, [email, password, Router]);

  useEffect(() => {
    if (clicked) {
      handleLogin();
    }
  }, [clicked, handleLogin]);

  return (
    <div>
      <button onClick={() => { setClicked(!clicked) }} className='bg-blue-500 text-white p-2 rounded'>Login</button>
    </div>
  )
}

export default Page
