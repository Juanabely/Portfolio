import React from 'react';
import { Carousel } from 'antd';
import Real from '../assets/real-estate.jpeg'

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Project = () => (
  <>
    <Carousel arrows dotPosition="left" infinite={false}>
      <div>
        <img src={Real} alt="" style={{
            objectFit:'cover',
            height:'500px'
        }} />
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </>
);
export default Project;