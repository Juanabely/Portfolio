import React, { useEffect, useRef, useState } from 'react'

import './project.css'
import {RightOutlined,LeftOutlined,GithubOutlined,CloudOutlined  } from '@ant-design/icons'
import Ecommerce from '../assets/e-commerce.jpeg'
import Real from '../assets/real-estate.jpeg'
import Chatter from '../assets/Chatterbox.png'
import Haven from '../assets/haven1.jpeg'
import Crypt from '../assets/crypt.jpeg'



function Projects() {

    
    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const thumbnailRef = useRef(null);
    let runTimeout;
  
    const showSlider = (type) => {
      let itemSlider = listRef.current.querySelectorAll('.item');
      let itemThumbnail = thumbnailRef.current.querySelectorAll('.item');
      let positionLastItem = itemSlider.length - 1;
      if (type === 'next') {
        listRef.current.appendChild(itemSlider[0]);
        thumbnailRef.current.appendChild(itemThumbnail[0]);
        carouselRef.current.classList.add('next');
      }
       else {
        listRef.current.prepend(itemSlider[positionLastItem]);
        thumbnailRef.current.prepend(itemThumbnail[positionLastItem]);
        carouselRef.current.classList.add('prev');
      }
      clearTimeout(runTimeout);
      runTimeout = setTimeout(() => {
        carouselRef.current.classList.remove('next');
        carouselRef.current.classList.remove('prev')
      }, 2000);
    };
  return (
    <>
    <div className='carousel' ref={carouselRef}>
        <div className='list'  ref={listRef}>

            <div className='item'>
                <img src={Ecommerce} alt="image1" />
                <div className="content">
                    <div className="author">Group</div>
                    <div className="title">Corks-crew</div>
                    <div className="topic">React</div>
                    <div className="des">
                        This was a group project about an e-ccomerce react app for selling wines.
                        Had no back-end implimantation.Dive in to see what we came up with.Github only
                    </div>
                    <div className="buttons">
                        <button>
                            <a href="https://github.com/Juanabely/phase2-project-corkscrew-connoisseur" target='blank'><GithubOutlined width='50px' height='50px'/> </a>
                            Github</button>
                        <button>Visit <CloudOutlined clas/></button>
                    </div>
                </div>
            </div>

            

        </div>
{/* //thumbnail */}
        <div className="thumbnail" ref={thumbnailRef}>
    <div className="item">
        <img src={Ecommerce} alt="image1" />
        <div className="content">
            <div className="title">Corkscrew</div>
            <div className="des">/</div>
        </div>
    </div>

   

</div>

{/*arrows */}
<div className="arrows">
    <button id='prev' className='btn1' onClick={() => showSlider('prev')}> <LeftOutlined/></button>
    <button id='next' className='btn2' onClick={() => showSlider('next')}> <RightOutlined/></button>
   
    
    
</div>

{/* <div className="time"></div> */}
    </div>
    </>
  )
}

export default Projects