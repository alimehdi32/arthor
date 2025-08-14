import React from 'react'

const Card = ({index, feature, desc}) => {
  
  return (
    <div className="group relative overflow-hidden">
      <div className="relative p-8 h-full bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-blue-500/50">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center text-center">
          {/* Icon based on index */}
          <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
            {index === 0 && "🧠"}
            {index === 1 && "📺"}
            {index === 2 && "🗺️"}
            {index === 3 && "📊"}
            {index === 4 && "📅"}
            {index === 5 && "🚫"}
          </div>
          
          <h2 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
            {feature}
          </h2>
          
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {desc}
          </p>
        </div>

        {/* Hover Border Animation */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-500"></div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" style={{transitionDelay: '0.1s'}}></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" style={{transitionDelay: '0.2s'}}></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" style={{transitionDelay: '0.3s'}}></div>
      </div>
    </div>
  )
}

export default Card
