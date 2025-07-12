import React from 'react'

const Subscription = () => {
    return (
        <div className='max-w-full min-h-[400px] bg-black/75 border border-white/55'>
            <h1 className='text-3xl font-semibold text-center text-white p-4'>From Free to Pro — Pay As You Grow</h1>
            <h4 className='text-lg text-center text-white/80 p-2'>Subscription Plans — Pick a Plan That Works for You</h4>

            <div className='flex flex-wrap items-start justify-center gap-6 p-7'>
                {/* Free Plan */}
                <div className='bg-white/10 hover:scale-105 hover:duration-75 hover:transition-transform max-w-[400px] min-h-[480px] flex flex-col items-center p-6 rounded-2xl text-left w-full sm:w-[320px]'>
                    <h2 className='text-2xl font-bold text-white mb-4'>Free</h2>

                    <div className='flex flex-col gap-4'>
                        <div>
                            <h5 className='text-white font-semibold'>📦 Access up to 6 Learning Stocks</h5>
                            <p className='text-white/80 font-light font-serif'>Choose from a limited collection of curated roadmap topics to start your journey.</p>
                        </div>
                        <div>
                            <h5 className='text-white font-semibold'>🛤️ Generate Up to 5 Active Roadmaps</h5>
                            <p className='text-white/80 font-light font-serif'>You can explore and follow 5 roadmaps at a time. Complete any one to unlock space for a new one!</p>
                        </div>
                        <div>
                            <h5 className='text-white font-semibold'>🎥 Watch Videos for 2 Roadmaps Simultaneously</h5>
                            <p className='text-white/80 font-light font-serif'>Dive deep into the content of two roadmaps at a time. Complete one to explore more learning paths!</p>
                        </div>
                    </div>

                    <p className='text-2xl font-semibold text-white mt-auto pt-4'>$0/month</p>
                </div>

                {/* Advanced Plan */}
                <div className='bg-white/10 hover:scale-105 hover:duration-75 hover:transition-transform max-w-[400px] min-h-[480px] flex flex-col items-center p-6 rounded-2xl text-left w-full sm:w-[320px]'>
                    <h2 className='text-2xl font-bold text-white mb-4'>Advanced</h2>

                    <div className='flex flex-col gap-4'>
                        <div>
                            <h5 className='text-white font-semibold'>🔓 Unlimited Roadmap Generation</h5>
                            <p className='text-white/80 font-light font-serif'>Explore and create as many learning paths as you like — no limits, no barriers.</p>
                        </div>
                        <div>
                            <h5 className='text-white font-semibold'>🎥 Access Videos for Up to 5 Roadmaps at Once</h5>
                            <p className='text-white/80 font-light font-serif'>View video content for 5 roadmaps in parallel. Finish any one to unlock the next.</p>
                        </div>
                        <div>
                            <h5 className='text-white font-semibold'>🏆 Achievement Badge System</h5>
                            <p className='text-white/80 font-light font-serif'>Earn badges for completing milestones, staying consistent, and hitting learning goals.</p>
                        </div>
                        <div>
                            <h5 className='text-white font-semibold'>🎓 Certificate of Completion</h5>
                            <p className='text-white/80 font-light font-serif'>Receive a digital certificate when you successfully complete a roadmap — great for portfolios or resumes!</p>
                        </div>
                    </div>

                    <p className='text-2xl font-semibold text-white mt-auto pt-4'>$5/month</p>
                </div>

                {/* Premium Plan */}
                <div className='bg-white/10 hover:scale-105 hover:duration-75 hover:transition-transform max-w-[400px] min-h-[480px] flex flex-col items-center p-6 rounded-2xl text-left w-full sm:w-[320px]'>
                    <h2 className='text-2xl font-bold text-white mb-4'>Premium</h2>

                    <div className='flex flex-col gap-4'>
                        <div>
                            <h5 className='text-white font-semibold'>🎥 Unlimited Video Access Across All Roadmaps</h5>
                            <p className='text-white/80 font-light font-serif'>Watch content from all your roadmaps simultaneously — no limits, no waiting.</p>
                        </div>
                        <div>
                            <h5 className='text-white font-semibold'>🧪 Quick 2-Minute Topic Quizzes</h5>
                            <p className='text-white/80 font-light font-serif'>Test your understanding with short, multiple-choice quizzes after each topic. Instantly see what you’ve mastered — and what needs a quick revision.</p>
                        </div>
                        <div>
                            <h5 className='text-white font-semibold'>🛡️ Priority Support & Early Feature Access</h5>
                            <p className='text-white/80 font-light font-serif'>Get faster help and be the first to try out upcoming features before anyone else.</p>
                        </div>
                    </div>

                    <p className='text-2xl font-semibold text-white mt-auto pt-4'>$10/month</p>
                </div>
            </div>
        </div>

    )
}

export default Subscription
