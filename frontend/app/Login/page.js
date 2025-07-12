"use client"

import React from 'react'
import { useState, useEffect } from 'react';

const Page = () => {
  const [clicked, setClicked] = useState(false);
   const email = 'am66578@gmail.com';
   const password  = 'alimehdi486';

    const handleLogin = async () => {
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
                console.log('Login successful:', data);
            } else {
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }
  useEffect(() => {
    if (clicked) {  
      handleLogin();
    } 
  }, [clicked]);

  return (
    <div>
      <button onClick={() => {setClicked(!clicked)}} className='bg-blue-500 text-white p-2 rounded'>Login</button>
    </div>
  )
}

export default Page
