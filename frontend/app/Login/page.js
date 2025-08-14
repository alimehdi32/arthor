"use client"

import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-hot-toast';

const Page = () => {
  
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
        window.location.href = '/';
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }, [email, password]);

  useEffect(() => {
    if (clicked) {
      handleLogin();
    }
  }, [clicked, handleLogin]);

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl shadow-2xl p-8 animate-fade-in-up">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🔐</div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Sign in to continue your learning journey</p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full p-4 bg-gray-800/80 text-white placeholder-gray-400 rounded-2xl border border-gray-700/50 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                disabled
                className="w-full p-4 bg-gray-800/80 text-white placeholder-gray-400 rounded-2xl border border-gray-700/50 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-50"
              />
            </div>

            <button 
              onClick={() => { setClicked(!clicked) }} 
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 border border-blue-500/50 transform hover:-translate-y-1 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:-translate-y-0"
              disabled={clicked}
            >
              {clicked ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                <>
                  🚀 Sign In
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{' '}
              <a href="/SignUp" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
