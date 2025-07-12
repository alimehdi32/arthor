import React from 'react'

const Card = ({index, feature, desc}) => {
  
  return (
    <>
      { (index <= 2) ?
        <div className='bg-white/10 backdrop-blur-md max-w-[420px] h-[200px] hover:scale-105 hover:z-10 border border-white/20 p-4 rounded-lg shadow-md flex flex-col items-center justify-around m-2'>
          <h2 className='text-lg font-semibold text-white'>{feature}</h2>
          <p className='text-sm text-gray-300 mt-2'>{desc}</p>
        </div> :
        <div className='bg-white/10 backdrop-blur-md max-w-[420px] border h-[200px] hover:scale-105 hover:z-10 border-white/20 p-4 rounded-lg shadow-md row-start-2 flex flex-col items-center justify-around m-2'>
          <h2 className='text-lg font-semibold text-white'>{feature}</h2>
          <p className='text-sm text-gray-300 mt-2'>{desc}</p>
        </div>}
    </>
  )
}

export default Card
