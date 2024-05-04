import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import {motion} from 'framer-motion'
import './header.css'
import DNA from '../assets/dna1.png'



gsap.registerPlugin(TextPlugin);

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.to(headerRef.current, {
      duration: 4,
      text: "UI/UX Designer.",
      delay: 1,
      repeat: -1,
      yoyo: true,
      repeatDelay: 4,
      immediateRender: false
    });
  }, []);

  return (
    <>
<div className='dots'><span className='dot1'>.</span>
          <span className='dot2'>.</span>
          <span className='dot3'>.</span>
          <span className='dot2'>.</span>
          
          
          </div>
    <div className='anime'>
      
        <motion.div
        variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0}
        }}
        initial='hidden'
        animate='visible'
        transition={{duration:1,delay:0.35}}
        >
          <h1 className='name'>Hi i'm Abel i'm a 
          
          
          </h1>
  <h1 ref={headerRef} className='dev'>Full stack Developer.</h1> 
  </motion.div>
  

  <div>
        <p className='words'>
        Hello! I'm a passionate Full Stack Developer specializing in React and Flask, set to graduate from a comprehensive bootcamp next month. My journey in the tech industry has been exciting and rewarding, with a keen interest in UI/UX design. I believe in creating intuitive and engaging digital experiences that make a difference. I'm eager to bring my skills and passion to new challenges and opportunities.
        </p>
        <div className='dna'><img src={DNA} alt="dna" /></div>
    </div>
    </div>
    
    
  
  </>
  )
 
};

export default Header;
