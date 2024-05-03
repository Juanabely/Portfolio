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
      }, 3000);
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

            <div className='item'>
                <img src={Real} alt="image2" />
                <div className="content">
                    <div className="author">Personal</div>
                    <div className="title">Houzin</div>
                    <div className="topic">React</div>
                    <div className="des">
                        This is a real-estate project that lets users search through a number of house projects .with a background in construction i'm equiped with what  to showcase.
                    </div>
                    <div className="buttons">
                        <button><GithubOutlined width='50px' height='50px' /> Github</button>
                        <button>Visit <CloudOutlined /></button>
                    </div>
                </div>
            </div>


            <div className='item'>
                <img src={Chatter} alt="image3" />
                <div className="content">
                    <div className="author">Abel</div>
                    <div className="title">Chatterbox</div>
                    <div className="topic">React + Spline</div>
                    <div className="des">
                    Chatterbox is an amzing project with a 3d addition to the frontend.No back-end implimented but is a huge step on the ui/ux.Its about an app that lets you colaborate with teams have tons of other apps developed with the team of devs in chatterbox.Feel free to explore both github and web visit.  
                    </div>
                    <div className="buttons">
                        <button>
                            <a href="https://github.com/Juanabely/Spline-trial" target='blank'><GithubOutlined width='50px' height='50px' /> </a>
                            Github</button>
                        <button>Visit 
                            <a href="https://spline-trial-mu.vercel.app/" target='blank'><CloudOutlined /></a>
                            </button>
                    </div>
                </div>
            </div>

            <div className='item'>
                <img src={Haven} alt="image4" />
                <div className="content">
                    <div className="author">Group</div>
                    <div className="title">Nairobi Haven</div>
                    <div className="topic">React + Flask</div>
                    <div className="des">
                       Nairobi haven hunt is project based on house hunting in the big city.The website has  a handful of houses to be seen by users ,once the user is locked in there is also an option to contact the agency to plan a house tour,like a huuse and comments.Check it out on github
                    </div>
                    <div className="buttons">
                        <button>
                            <a href="https://github.com/Naomie-Jerutoe/Nairobi-Haven-Hunt" target='blank'><GithubOutlined width='50px' height='50px' /> </a>
                            Github</button>
                        <button>Visit <CloudOutlined /></button>
                    </div>
                </div>
            </div>

            <div className='item'>
                <img src={Crypt} alt="image5" />
                <div className="content">
                    <div className="author">Abel</div>
                    <div className="title">De-Crypto</div>
                    <div className="topic">HTML&&CSS</div>
                    <div className="des">
                       Crypt is a simple project to showcase my html ,css and java script skills ,i made crypt to help users see the crypto currencies available in the market at the moment and its values had a search input and fetched data from a public api.check it out on Github 
                    </div>
                    <div className="buttons">


                        <button> <a href="https://github.com/Juanabely/Final-Project-Phase1" target='blank'><GithubOutlined width='50%' height='50%' /></a>  Github</button>
                        <button>Visit <CloudOutlined /></button>
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

    <div className="item">
        <img src={Real} alt="image2" />
        <div className="content">
            <div className="title">Houzin</div>
            <div className="des">//</div>
        </div>
    </div>

    <div className="item">
        <img src={Chatter} alt="image3" />
        <div className="content">
            <div className="title">Chatterbox</div>
            <div className="des">///</div>
        </div>
    </div>

    <div className="item">
        <img src={Haven} alt="image4" />
        <div className="content">
            <div className="title">Nairobi haven</div>
            <div className="des">////</div>
        </div>
    </div>

    <div className="item">
        <img src={Crypt} alt="image 5" />
        <div className="content">
            <div className="title">De-crpto</div>
            <div className="des">/////</div>
        </div>
    </div>

</div>

{/*arrows */}
<div className="arrows">
    <button id='prev' className='btn1' onClick={() => showSlider('prev')}> <LeftOutlined/></button>
    <button id='next' className='btn2' onClick={() => showSlider('next')}> <RightOutlined/></button>
   
    
    
</div>

<div className="time"></div>
    </div>
    </>
  )
}

export default Projects