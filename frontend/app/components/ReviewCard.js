import React from 'react'
import Image from 'next/image'

const ReviewCard = ({ dp, username, review }) => {
    return (
        <div className="group relative h-full bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-blue-500/50">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                        <Image 
                            src={dp} 
                            alt={`${username}'s profile`} 
                            width={48} 
                            height={48} 
                            className="w-12 h-12 rounded-full border-2 border-blue-400/50 group-hover:border-blue-400 transition-all duration-300 shadow-lg" 
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-950"></div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {username}
                        </h2>
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Review Text */}
                <div className="flex-1">
                    {review.split('\n').map((line, index) => (
                        <p key={index} className="text-gray-300 mb-3 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                            {line}
                        </p>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-800/50">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">Verified User</div>
                        <div className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                            ⭐ Premium Review
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" style={{transitionDelay: '0.1s'}}></div>
        </div>
    )
}

export default ReviewCard
