import React from 'react';
import about from '../About/page';
import explore from '../Explore/page';
import contact from '../Contact/page';
import Link from 'next/link';

const Navbar = () => {
  return (
    
    <div className='flex items-center justify-between h-20 w-full border border-b-gray-800 border-black p-4 text-white'>
      <div className=''></div>
      <div className='flex items-center gap-10'>
        <Link href='/About' className='text-2xl font-bold shadow-orange-500'>About</Link>
        <Link href='/Explore' className='text-2xl font-bold'>Explore</Link>
        <Link href='/Contact' className='text-2xl font-bold'>Contact</Link>
      </div>
      <div className='flex pr-0 items-center gap-0'>
        <Link href='/Login' className='bg-[#232323] mask-r-from-neutral-100 text-white pr-8 pl-6 py-4 rounded-4xl transition duration-300'>Login</Link>
        <Link href='/Signup' className='bg-[#121212] mask-l-from-neutral-100  text-white pl-8 pr-6 py-4 rounded-4xl ml-0 transition duration-300'>SignUp</Link>
      </div>
    </div>
  )
}

export default Navbar
