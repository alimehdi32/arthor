import React from 'react'
import SubTopics from './SubTopics'

const Roadmap = ({ topics }) => {
  return (
    <div className='p-4 bg-black/65 shadow-md rounded-lg mb-4'>
      <div className='bg-black/15 text-xl font-bold'>{topics.title}</div>
      <div>
        {topics.days.map((day) => (
           <SubTopics key={day._id} subtopics={day} />
        ))}
      </div>
    </div>
  )
}

export default Roadmap
