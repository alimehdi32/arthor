import React from 'react'

const Working = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    🤖 Behind the Scenes: Your Smart Study System
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Discover how our AI-powered platform transforms your learning goals into structured, achievable roadmaps
                </p>
            </div>

            <div className="relative">
                {/* Connection Line */}
                <div className="absolute left-8 md:left-20 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

                <div className="space-y-12">
                    {/* Step 1 */}
                    <div className="relative flex items-start animate-fade-in-left" style={{animationDelay: '0.1s'}}>
                        <div className="absolute left-6 md:left-16 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-950 shadow-lg z-10"></div>
                        <div className="ml-16 md:ml-24 p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 hover:border-blue-500/50 group">
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-4">👤</div>
                                <h5 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                    1. Register Yourself
                                </h5>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed ml-16">
                                Create your account and step into the world of personalized learning with AI-driven roadmaps.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-start animate-fade-in-right" style={{animationDelay: '0.2s'}}>
                        <div className="absolute left-6 md:left-16 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-950 shadow-lg z-10"></div>
                        <div className="ml-16 md:ml-24 p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 group">
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-4">🧪</div>
                                <h5 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                                    2. Head to PromptLab
                                </h5>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed ml-16">
                                Simply describe your learning goal in natural language—no technical jargon needed! Our AI understands your intent.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-start animate-fade-in-left" style={{animationDelay: '0.3s'}}>
                        <div className="absolute left-6 md:left-16 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full border-4 border-gray-950 shadow-lg z-10"></div>
                        <div className="ml-16 md:ml-24 p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 hover:scale-105 hover:border-pink-500/50 group">
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-4">🧠</div>
                                <h5 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                                    3. AI-Powered Roadmap Generation
                                </h5>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed ml-16">
                                Get a tailored roadmap instantly inside PromptLab. Not happy? Ask follow-up questions until it feels just right.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-start animate-fade-in-right" style={{animationDelay: '0.4s'}}>
                        <div className="absolute left-6 md:left-16 w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full border-4 border-gray-950 shadow-lg z-10"></div>
                        <div className="ml-16 md:ml-24 p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 hover:scale-105 hover:border-red-500/50 group">
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-4">✅</div>
                                <h5 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                                    4. Commit with Confidence
                                </h5>
                            </div>
                            <div className="text-gray-300 text-lg leading-relaxed ml-16 space-y-3">
                                <p>Once you are satisfied, hit Commit to lock your roadmap into PromptVault.</p>
                                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                                    <div className="font-bold text-orange-400 mb-2">Important Notes:</div>
                                    <ul className="space-y-2 text-sm">
                                        <li>• Committed roadmaps are permanent and cannot be deleted</li>
                                        <li>• Queries end once you commit</li>
                                        <li>• The roadmap stays until your course is completed</li>
                                        <li>• LearnTube will begin generating video lessons for each topic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-start animate-fade-in-left" style={{animationDelay: '0.5s'}}>
                        <div className="absolute left-6 md:left-16 w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full border-4 border-gray-950 shadow-lg z-10"></div>
                        <div className="ml-16 md:ml-24 p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 hover:border-orange-500/50 group">
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-4">💎</div>
                                <h5 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                                    5. Stock System
                                </h5>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed ml-16">
                                Each commit costs 3 stocks if you're on the free plan. Subscription plans offer more flexibility—see details below!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Working
