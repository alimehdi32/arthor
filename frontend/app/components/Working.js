import React from 'react'

const Working = () => {
    return (
        <div className='p-4 border border-white/55'>
            <h2 className='text-3xl text-gray-300 font-serif ml-[450px]'>🤖 Behind the Scenes: Your Smart Study System</h2>
            <div className='mt-4 text-gray-200 flex flex-wrap flex-col place-items-start gap-3.5'>
                <div className='pl-20'>
                    <h5 className='text-lg font-semibold'>1. Register Yourself</h5>
                    <p className='ml-5'>Create your account and step into the world of personalized learning.</p>
                </div>
                <div className='pl-20'>
                    <h5 className='text-lg font-semibold'>2. Head to PromptLab</h5>
                    <p className='ml-5'>Simply describe your learning goal in natural language—no technical jargon needed!</p>
                </div>
                <div className='pl-20'>
                    <h5 className='text-lg font-semibold'>3. AI-Powered Roadmap Generation</h5>
                    <p className='ml-5'>Get a tailored roadmap instantly inside PromptLab. Not happy? Ask follow-up questions until it feels just right.</p>
                </div>
                <div className='pl-20'>
                    <h5 className='text-lg font-semibold'>4. Commit with Confidence</h5>
                    <p className='ml-5'>Once you are satisfied, hit Commit to lock your roadmap into PromptVault.
                         <div className='font-bold'>Note:</div>

                        <div className='ml-5 mt-1.5'>Committed roadmaps are permanent and cannot be deleted.</div>

                        <div className='ml-5 mt-1.5'>Queries end once you commit.</div>

                        <div className='ml-5 mt-1.5'>The roadmap stays until your course is completed.</div>

                        <div className='ml-5 mt-1.5'>LearnTube will begin generating video lessons for each topic in your roadmap.</div>

                    </p>
                </div>
                <div className='pl-20'>
                    <h5 className='text-lg font-semibold'>5. Stock System</h5>
                    <p className='ml-5'>Each commit costs 3 stocks if you&#39;re on the free plan. <div></div>

                        Subscription plans offer more flexibility—see details below!</p>
                </div>
            </div>
        </div>
    )
}

export default Working
