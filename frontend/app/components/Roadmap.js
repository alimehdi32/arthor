import React from 'react'
import SubTopics from './SubTopics'

const Roadmap = ({ topics }) => {
  return (
    <div className="mb-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 group">
      <div className="p-6">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-xl border border-blue-500/30 mb-4">
          <div className="text-xl font-bold text-blue-400">{topics.title}</div>
        </div>
        <div className="space-y-3">
          {topics.days.map((day) => (
             <SubTopics key={day._id} subtopics={day} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Roadmap
