import React, { useEffect } from 'react'
import HomePage from './components/HomePage'
import Services from './components/Services'
import Lenis from "lenis";


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
  return (
    <div className='select-none'>
      <HomePage />
      <Services />
    </div>
  )
}


// #E8602E primary
// #C72904 hover effect
export default App



