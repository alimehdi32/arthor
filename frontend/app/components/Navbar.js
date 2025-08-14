"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const checkLoginStatus = async () => {
    try {
      const response = await fetch(`http://localhost:5000/user/me`, {
        method: 'GET',
        credentials: 'include', // <== important!
      });
      if (response.ok) {
        setLoggedIn(true);
        console.log('User is logged in:', response);
      } else {
        setLoggedIn(false);
        console.log('User is not logged in:', response);
      }
    } catch (error) {
      console.error('Error checking login status:', error);

    }
  }

  useEffect(() => {
    checkLoginStatus();
  });

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-950/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {loggedIn ? (
            <>
              <div className="flex items-center space-x-8">
                <Link 
                  href="/" 
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                >
                  Arthor
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                  <Link 
                    href="/About" 
                    className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link 
                    href="/PromptLab" 
                    className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group"
                  >
                    PromptLab
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link 
                    href="/PromptVault" 
                    className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group"
                  >
                    PromptVault
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link 
                    href="/LearnTube" 
                    className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group"
                  >
                    LearnTube
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center space-x-8">
                <Link 
                  href="/" 
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                >
                  Arthor
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                  <Link 
                    href="/About" 
                    className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link 
                    href="/Explore" 
                    className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group"
                  >
                    Explore
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link 
                    href="/Contact" 
                    className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-gray-700 hover:border-blue-500/50"
                >
                  Login
                </Link>
                <Link 
                  href="/SignUp" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 border border-blue-500/50"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
