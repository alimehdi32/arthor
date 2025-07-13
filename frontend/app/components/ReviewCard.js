import React from 'react'
import Image from 'next/image'

const ReviewCard = ({ dp, username, review }) => {
    return (
        <div className='bg-white/10 backdrop-blur-md border-2 border-white/20 p-4 rounded-3xl shadow-2xl min-h-[300px] max-w-sm w-full'>
            <div className='flex items-center gap-4 mb-4'>
                <Image src={dp} alt={`${username}'s profile`} width={10} height={10} className='w-6 h-6 rounded-full border border-amber-300' />
                <h2 className='text-xl font-semibold text-gray-200'>{username}</h2>
            </div>
            <div>
                {review.split('\n').map((line, index) => (
                    <p key={index} className='text-gray-300 mb-2'>{line}</p>
                ))}
            </div>
        </div>
    )
}

export default ReviewCard
