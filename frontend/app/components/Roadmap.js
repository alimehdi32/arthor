import React from 'react'
import SubTopics from './SubTopics'

const Roadmap = ({ topics }) => {
  return (
    <div>
      <div className='bg-black/15'>{topics.title}</div>
      <div>
        {topics.days.map((day) => (
           <SubTopics key={day._id} subtopics={day} />
        ))}
      </div>
    </div>
  )
}

export default Roadmap
