import React, { useEffect, useRef, useState } from 'react'

import './project.css'
import {RightOutlined,LeftOutlined} from '@ant-design/icons'
import Ecommerce from '../assets/e-commerce.jpeg'
import Real from '../assets/real-estate.jpeg'
import Chatter from '../assets/Chatterbox.png'



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
                    <div className="author">Abel</div>
                    <div className="title">Design</div>
                    <div className="topic">Code</div>
                    <div className="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam deserunt accusantium aperiam consequatur, architecto optio incidunt nemo nulla inventore culpa rerum adipisci similique vel nihil laboriosam. Vero, numquam expedita.
                    </div>
                    <div className="buttons">
                        <button>See more</button>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='item'>
                <img src={Real} alt="image2" />
                <div className="content">
                    <div className="author">Abel</div>
                    <div className="title">Design</div>
                    <div className="topic">Code</div>
                    <div className="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam deserunt accusantium aperiam consequatur, architecto optio incidunt nemo nulla inventore culpa rerum adipisci similique vel nihil laboriosam. Vero, numquam expedita.
                    </div>
                    <div className="buttons">
                        <button>See more</button>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>


            <div className='item'>
                <img src={Chatter} alt="image3" />
                <div className="content">
                    <div className="author">Abel</div>
                    <div className="title">Design</div>
                    <div className="topic">Code</div>
                    <div className="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam deserunt accusantium aperiam consequatur, architecto optio incidunt nemo nulla inventore culpa rerum adipisci similique vel nihil laboriosam. Vero, numquam expedita.
                    </div>
                    <div className="buttons">
                        <button>See more</button>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='item'>
                <img src="https://th.bing.com/th/id/OIG4.x7Drq2CWdMNeCv8hf.eI?pid=ImgGn" alt="image4" />
                <div className="content">
                    <div className="author">Abel</div>
                    <div className="title">Design</div>
                    <div className="topic">Code</div>
                    <div className="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam deserunt accusantium aperiam consequatur, architecto optio incidunt nemo nulla inventore culpa rerum adipisci similique vel nihil laboriosam. Vero, numquam expedita.
                    </div>
                    <div className="buttons">
                        <button>See more</button>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='item'>
                <img src="https://th.bing.com/th/id/OIG2.MAoPplEnUBxY_5grOMDg?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="image5" />
                <div className="content">
                    <div className="author">Abel</div>
                    <div className="title">Design</div>
                    <div className="topic">Code</div>
                    <div className="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam deserunt accusantium aperiam consequatur, architecto optio incidunt nemo nulla inventore culpa rerum adipisci similique vel nihil laboriosam. Vero, numquam expedita.
                    </div>
                    <div className="buttons">
                        <button>See more</button>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
{/* //thumbnail */}
        <div className="thumbnail" ref={thumbnailRef}>
    <div className="item">
        <img src={Ecommerce} alt="image1" />
        <div className="content">
            <div className="title">Name slider</div>
            <div className="des">Description</div>
        </div>
    </div>

    <div className="item">
        <img src={Real} alt="image2" />
        <div className="content">
            <div className="title">Name slider</div>
            <div className="des">Description</div>
        </div>
    </div>

    <div className="item">
        <img src={Chatter} alt="image3" />
        <div className="content">
            <div className="title">Name slider</div>
            <div className="des">Description</div>
        </div>
    </div>

    <div className="item">
        <img src="https://th.bing.com/th/id/OIG4.x7Drq2CWdMNeCv8hf.eI?pid=ImgGn" alt="image4" />
        <div className="content">
            <div className="title">Name slider</div>
            <div className="des">Description</div>
        </div>
    </div>

    <div className="item">
        <img src="https://th.bing.com/th/id/OIG2.MAoPplEnUBxY_5grOMDg?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="image 5" />
        <div className="content">
            <div className="title">Name slider</div>
            <div className="des">Description</div>
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