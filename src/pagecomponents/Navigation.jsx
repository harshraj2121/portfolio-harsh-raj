import React from 'react'

const Navigation = () => {
  return (
    <div className='w-full h-25 flex items-center text-white justify-between px-16'>
        <div className='font-press tracking-tighter'>Logo Here</div>
        <div className='flex items-center justify-center gap-14 text-[16px] tracking-wider font-manrope px-8 py-4'>
            
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Projects</a>
        </div>
        <button>Start a Project</button>
    </div>
  )
}

export default Navigation