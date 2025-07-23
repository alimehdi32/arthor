import React from 'react'

const SubTopics = ( { subtopics } ) => {
   
    

  return (
    <div>
      <div className='flex justify-center items-center gap-10 text-black'>
        <div className='text-black'>Day {subtopics.day}</div>
        <div>{subtopics.topic}</div>
      </div>
      <div className='pl-8'>
        <div>{subtopics.description}</div>
      </div>
    </div>
  )
}

export default SubTopics
