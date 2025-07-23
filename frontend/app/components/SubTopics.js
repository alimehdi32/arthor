import React from 'react'

const SubTopics = ( { subtopics } ) => {
   
    

  return (
    <div>
      <div className='flex flex-wrap justify-items-start pl-3.5 text-xl font-medium text-slate-500 items-center gap-10'>
        <div className='text-shadow-zinc-700 font-semibold'>Day {subtopics.day}</div>
        <div className='font-semibold'>{subtopics.topic}</div>
      </div>
      <div className='pl-8'>
        <div className='text-sm font-bold font-sans'>{subtopics.description}</div>
      </div>
    </div>
  )
}

export default SubTopics
