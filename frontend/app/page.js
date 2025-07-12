import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Subscription from "./components/Subscription";

export default function Home() {
  const messages = [
    "What do you want to master today?",

    "Type a skill. Get a roadmap.",

    "Dream it. Learn it. Achieve it.",

    "Your learning journey starts here.",

    "Enter a topic. We’ll show you the way.",

    "Confused about where to begin? Just type it.",

    "From zero to hero — type your goal.",

    "AI-powered learning just a prompt away.",

    "Start with a word. End with a career.",

    "One prompt. Endless possibilities.",

    "Want to learn Python? Just ask.",

    "Type 'Web Dev' and get your roadmap.",

    "AI, Design, Coding — whatever you want!",

    "Explore UI/UX, Blockchain, or Anything!",

    "Type your interest — we handle the rest.",

    "New to tech? Start with a simple prompt.",

    "No clue? No problem. Just type a topic.",

    "Not sure where to start? Let AI guide you.",

    "Beginner-friendly paths. Start typing.",

    "Tell us what excites you. We'll build a roadmap.",
  ]
  return (
    <div>

      <div className='flex items-center justify-between w-full border border-b-gray-800 border-black p-4 text-white'>
        <div className="pl-4">
          <p className="ml-0 ">WelCome to Bravin</p>
          <p className="ml-0 ">Your intelligent guide to mastering any skill</p>
          <p className="ml-0 ">Stuck on what to learn next? We got you.</p>
          <p className="ml-0 ">AIVID helps you figure out what to learn and how to learn it — with AI-generated roadmaps made just for you. Not ready to dive in? No worries. Videos unlock only when you are. No pressure, just progress. Let’s make learning feel less overwhelming and way more doable.</p>
        </div>
      </div>
      <Features />
      <Subscription />
      <Reviews />
    </div>
  );
}
