import React from 'react'
import Button from './Button'
import { motion } from 'motion/react'
import { animate } from 'motion'

const Navigation = () => {
  return (
    <div className='w-full h-25 flex items-center text-white justify-between px-16 relative'>
        <div className='font-press tracking-tighter cursor-pointer h-[50%] w-40 flex'>
          <div className='w-1/3 h-full flex items-center justify-center'>
            <img className='mr-1.5 scale-85' src="./Logo.png" alt="" />
          </div>
          <div className=' relative w-2/3 h-full text-[11px] flex flex-col justify-center overflow-hidden'>
            <div className='absolute h-[70%] w-0.5 bg-white'></div>  {/* horizontal bar */}
            <motion.span initial={{ transform: "translateX(-100px)"}} animate={{transform: "translateX(0px)", }} transition={{duration: .5}} className='pl-2'>Harsh Raj</motion.span>
            <motion.span initial={{ transform: "translateX(-100px)"}} animate={{transform: "translateX(0px)", }} transition={{duration: .5}} className='pl-2'>Developer</motion.span>
          </div>
        </div>
        <motion.div initial={{opacity: 0, transform: "translateY(-40px)"}} animate={{opacity: 1, transform:"translateY(0px)"}} transition={{duration: .5, delay: .5}} className='flex items-center jsutify-center gap-10 text-zinc-200 bg-[#0C0C0C] tracking-wide border border-t-0 border-zinc-600 rounded py-3 px-6'>
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
          <a href="https://github.com/harshraj2121" target='_blank' className='h-6 flex flex-col items-center gap-1.5 group overflow-hidden'>
            <span className='w-full text-center group-hover:-translate-y-8 transition-all duration-400'>GitHub</span>
            <span className='w-full text-center group-hover:-translate-y-8 transition-all duration-400 text-[#E8602E]'>GitHub</span>
          </a>
        </motion.div>
        <Button />
    </div>
  )
}

export default Navigation