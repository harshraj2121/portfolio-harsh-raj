import React, { useEffect } from 'react'
import HomePage from './components/HomePage'
import Services from './components/Services'
import Lenis from "lenis";
import About from './components/About';
import { motion } from 'motion/react';


const App = () => {
    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
    }, []);


    // page to start form top when reloaded
    useEffect(() => {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }, []);

    


  return (
    <div className='relative select-none'>
      <motion.div animate={{transform: "translateY(-100%)"}} transition={{duration:2, delay:.5}} className='absolute z-50 bg-[#E8602E] h-screen w-full'>
        <h1 className='absolute text-9xl font-black text-white [-webkit-text-stroke:2px_#C72904] tracking-wider font-oxamium left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>harsh.</h1>
      </motion.div>
      <HomePage />
      <About />
      <Services />
    </div>
  )
}


// #E8602E primary
// #C72904 hover effect
export default App



