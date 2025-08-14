import React from 'react'

const Subscription = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    From Free to Pro — Pay As You Grow
                </h1>
                <h4 className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Subscription Plans — Pick a Plan That Works for You
                </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Free Plan */}
                <div className="group relative animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    <div className="relative p-8 h-full bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-blue-500/50">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Plan Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-sm shadow-lg">
                            Free Plan
                        </div>

                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white mb-8">Free</h2>
                            <div className="text-4xl font-bold text-white mb-8">$0<span className="text-lg text-gray-400">/month</span></div>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-3">
                                    <div className="text-2xl text-blue-400 mt-1">📦</div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Access up to 6 Learning Stocks</h5>
                                        <p className="text-gray-400 text-sm">Choose from a limited collection of curated roadmap topics to start your journey.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="text-2xl text-purple-400 mt-1">🛤️</div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Generate Up to 5 Active Roadmaps</h5>
                                        <p className="text-gray-400 text-sm">You can explore and follow 5 roadmaps at a time. Complete any one to unlock space for a new one!</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="text-2xl text-cyan-400 mt-1">🎥</div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Watch Videos for 2 Roadmaps Simultaneously</h5>
                                        <p className="text-gray-400 text-sm">Dive deep into the content of two roadmaps at a time. Complete one to explore more learning paths!</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-700 hover:border-blue-500/50">
                                Get Started Free
                            </button>
                        </div>
                    </div>
                </div>

                {/* Advanced Plan */}
                <div className="group relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div className="relative p-8 h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border-2 border-purple-500/50 rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-sm shadow-lg">
                            Most Popular
                        </div>

                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white mb-8">Advanced</h2>
                            <div className="text-4xl font-bold text-white mb-8">$5<span className="text-lg text-gray-400">/month</span></div>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-3">
                                    <div className="text-2xl text-green-400 mt-1">🔓</div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Unlimited Roadmap Generation</h5>
                                        <p className="text-gray-400 text-sm">Explore and create as many learning paths as you like — no limits, no barriers.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="text-2xl text-blue-400 mt-1">🎥</div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Access Videos for Up to 5 Roadmaps at Once</h5>
                                        <p className="text-gray-400 text-sm">View video content for 5 roadmaps in parallel. Finish any one to unlock the next.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="text-2xl text-yellow-400 mt-1">🏆</div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Achievement Badge System</h5>
                                        <p className="text-gray-400 text-sm">Earn badges for completing milestones, staying consistent, and hitting learning goals.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="text-2xl text-purple-400 mt-1">🎓</div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Certificate of Completion</h5>
                                        <p className="text-gray-400 text-sm">Receive a digital certificate when you successfully complete a roadmap — great for portfolios or resumes!</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 border border-purple-500/50">
                                Choose Advanced
                            </button>
                        </div>
                    </div>
                </div>

                {/* Premium Plan */}
                <div className="group relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    <div className="relative p-8 h-full bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-cyan-500/50">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Premium Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full text-sm shadow-lg">
                            Premium
                        </div>

                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white mb-8">Premium</h2>
                            <div className="text-4xl font-bold text-white mb-8">$10<span className="text-lg text-gray-400">/month</span></div>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-3">
                                    <div className="text-2xl text-cyan-400 mt-1">🎥</div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Unlimited Video Access Across All Roadmaps</h5>
                                        <p className="text-gray-400 text-sm">Watch content from all your roadmaps simultaneously — no limits, no waiting.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="text-2xl text-green-400 mt-1">🧪</div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Quick 2-Minute Topic Quizzes</h5>
                                        <p className="text-gray-400 text-sm">Test your understanding with short, multiple-choice quizzes after each topic. Instantly see what you've mastered.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="text-2xl text-yellow-400 mt-1">🛡️</div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Priority Support & Early Feature Access</h5>
                                        <p className="text-gray-400 text-sm">Get faster help and be the first to try out upcoming features before anyone else.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 border border-cyan-500/50">
                                Choose Premium
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription
