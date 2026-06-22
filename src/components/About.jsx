import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const About = () => {
    const ref = useRef(null);

    const isInView = useInView(ref, {
      margin: "-50% 0px -50% 0px",
      once: true
    });
  return (
    <div className='w-full h-screen bg-black'>
        <h3 className='text-9xl font-black pt-16 font-manrope text-white text-center '>ABOUT ME</h3>
        <motion.p ref={ref} initial={{transform: "translateY(25px)", opacity:0}} animate={isInView ? {transform: "translateY(0px)", opacity:1} : " "} className='text-white text-xl text-center pt-10 tracking-widest w-[60%] mx-auto'>Results-oriented B. Tech CSE'27 student experienced in <span className='text-[#E8602E] font-bold'>Full-Stack development and ML technologies.</span> Proficient in building <span className='text-[#E8602E] font-bold'>ML models</span> with hands-on experience in MERN Stack and <span className='text-[#E8602E] font-bold'>Data Analysis.</span> Experienced in leadership and collaboration in Hackathon. Winner in <span className='text-[#E8602E] font-bold'>CodeManthan Hackathon 2025</span>, Finalist In hackNchill Hackathon. Eager to deliver scalable solution that solve real-world application problems</motion.p>
    </div>
  )
}

export default About