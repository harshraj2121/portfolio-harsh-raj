import React from 'react'
import Button from './Button'

const Navigation = () => {
  return (
    <div className='w-full h-25 flex items-center text-white justify-between px-16 relative'>
        <div className='font-press tracking-tighter cursor-pointer'>Logo Here</div>
        <div className='flex items-center jsutify-center gap-10 bg-[#0C0C0C] tracking-wide border border-t-0 border-zinc-600 rounded py-3 px-6'>
          <a href="" className='h-6 flex flex-col items-center gap-1.5 group overflow-hidden'>
            <span className='w-full text-center group-hover:-translate-y-8 transition-all duration-400'>Home</span>
            <span className='w-full text-center group-hover:-translate-y-8 transition-all duration-400 text-[#E8602E]'>Home</span>
          </a>
          <a href="" className='h-6 flex flex-col items-center gap-1.5 group overflow-hidden'>
            <span className='w-full text-center group-hover:-translate-y-8 transition-all duration-400'>About</span>
            <span className='w-full text-center group-hover:-translate-y-8 transition-all duration-400 text-[#E8602E]'>About</span>
          </a>
          <a href="" className='h-6 flex flex-col items-center gap-1.5 group overflow-hidden'>
            <span className='w-full text-center group-hover:-translate-y-8 transition-all duration-400'>Services Provided</span>
            <span className='w-full text-center group-hover:-translate-y-8 transition-all duration-400 text-[#E8602E]'>Services Provided</span>
          </a>
          <a href="" className='h-6 flex flex-col items-center gap-1.5 group overflow-hidden'>
            <span className='w-full text-center group-hover:-translate-y-8 transition-all duration-400'>Projects</span>
            <span className='w-full text-center group-hover:-translate-y-8 transition-all duration-400 text-[#E8602E]'>Projects</span>
          </a>
        </div>
        <Button />
    </div>
  )
}

export default Navigation