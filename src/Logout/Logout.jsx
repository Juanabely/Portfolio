import React from 'react'
import pdf from '../assets/Abel Kipkorir CV.pdf'
import './logout.css'
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import {motion} from 'framer-motion'
import DNA from '../assets/dna1.png'

gsap.registerPlugin(TextPlugin);

function Logout() {
  return (
    <>
    <motion.div
        variants={{
            hidden:{opacity:0,y:0},
            visible:{opacity:1,y:0}
        }}
        initial='hidden'
        animate='visible'
        transition={{duration:3,delay:0.65}}
        >
    <div id='log'>
        <h1>
            
            Thanks for visiting my <span style={{color:'orange'}}>portfolio ,</span> <span style={{color:'blue'}}>download</span>  my cv down below or check it out live 
            <span style={
                {color:'black'}
            }>online</span>
        </h1>
       
    </div>
    <div className='cv'>
        <a href={pdf} download ><button id='cv'>Download CV</button></a>
    </div>
    <div className='din'><img src={DNA} alt="dna" /></div> 
    </motion.div>
    </>
        
  )
}

export default Logout