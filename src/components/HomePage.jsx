import React from 'react'
import Navigation from '../pagecomponents/Navigation'
import { MdFileDownload } from 'react-icons/md'
import { motion } from 'motion/react'

const HomePage = () => {
  return (
    <div className="relative h-screen inset-0 overflow-hidden bg-black">
      {/* Center Orange Glow */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/30 blur-[180px]"/>

      {/* Secondary Glow */}
      <div className=" absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]"/>

      {/* Grid */}
      <div className=" absolute inset-0 opacity-[0.08] bg-size-[80px_80px] [background-image: linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px), linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)]"/>

      {/* Vertical Tech Lines */}
      <div className="absolute left-[15%] top-9 h-120 w-px bg-white/10 rotate-6" />
      <div className="absolute left-[85%] top-50 h-full w-px bg-white/10 -rotate-45" />

      {/* Diagonal Lines */}
      <div className="absolute left-[12%] top-[20%] h-px w-87.5 rotate-45 bg-white/10" />
      <div className="absolute right-[12%] top-[30%] h-px w-87.5 -rotate-45 bg-white/10" />

      <div className="absolute left-[10%] bottom-[45%] h-px w-125 -rotate-12 bg-white/10" />
      <div className="absolute right-[10%] bottom-[60%] h-px w-85 rotate-12 bg-white/10" />

      {/* Right Dot Matrix */}
      <div className="absolute right-[5%] top-[45%] opacity-30">
        <div className=" h-70 w-70 bg-[radial-gradient(rgba(249,115,22,0.9)_1px,transparent_1px)] bg-size-[18px_18px]"/>
      </div>

      {/* Decorative Orange Arc */}
      <div className=" absolute left-1/2 top-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/10"/>

      {/* Noise Overlay */}
      <div
        className=" absolute inset-0 opacity-[0.03] mix-blend-screen"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')"}}
      />





      {/* content Home page */}
      <Navigation />
      {/* Main content */}
      <div className='relative overflow-hidden h-[50%] w-1/2 mt-18 ml-52 flex flex-col items-start justify-center'>
        <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration: .4, delay: 1}} className='absolute h-full w-1 bg-white'></motion.div>
        <p className='ml-5 text-white font-bold text-xl'>PORTFOLIO · 2026 </p>
        <motion.h3 initial={{transform: "translateX(-500px)"}} animate={{transform: "translatex(0px)"}} transition={{duration: .5, delay:1.5}} className='ml-3 text-9xl text-white font-manrope tracking-wider font-black leading-[.8]'>HARSH</motion.h3>
        <motion.h3 initial={{transform: "translateX(-280px)"}} animate={{transform: "translatex(0px)"}} transition={{duration: .5, delay:1.5}} className='ml-3 text-9xl text-white font-manrope tracking-wider font-black leading-[.9]'>RAJ</motion.h3>
        <p className='ml-6 text-white font-semibold text-xl'>AI/ML Engineer · DATA ANALYST · MERN STACK</p>
        <button className='px-4 py-2 mt-4 font-semibold text-white cursor-pointer flex items-center hover:shadow-[0_0_45px_5px_#E8602E] transition-all duration-300 justify-center gap-1 bg-[#E8602E] ml-5 rounded-full'>Download CV <MdFileDownload  /></button>
      </div>
    </div>
  )
}

export default HomePage