import React from 'react'
import { motion } from "motion/react"
import { IoMdReturnRight } from "react-icons/io";


function Button({title = "Start a Project"}) {
  return (
    <motion.div 
    whileTap={{ scale: 0.95 }}
    initial={{opacity: 0, transform: "translateY(-40px)"}} animate={{opacity: 1, transform:"translateY(0px)"}} transition={{duration: .5, delay: .6}} 
    className='group link w-44 h-10 px-4 py-2 bg-[#E8602E] cursor-pointer rounded-md overflow-hidden flex items-center justify-between hover:shadow-[0_0_45px_5px_#E8602E] transition-all duration-300'>
        <div className='group-hover:-translate-y-3.75 flex flex-col gap-2 transition duration-500 linear translate-y-4.25'>         
            <span className='text-white'>{title}</span>
            <span className='text-white'>{title}</span>         
        </div>
        <div className='group-hover:-translate-y-6.25 flex flex-col gap-9 transition duration-1000 linear translate-y-6.25'>  
          <IoMdReturnRight className='text-white'/>
          <IoMdReturnRight className='text-white'/>
        </div>
    </motion.div>
  )
}

export default Button