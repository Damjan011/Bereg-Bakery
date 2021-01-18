import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './style.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const Slider = () => {
  return (
    <AwesomeSlider>
      <div className="slider-overlay"><div className="slider-overlay first-slide"></div></div>
      <div className="slider-overlay"><div className="slider-overlay second-slide"></div></div>
      <div className="slider-overlay"><div className="slider-overlay third-slide"></div></div>
      <div className="slider-overlay"><div className="slider-overlay fourth-slide"></div></div>
    </AwesomeSlider>
  )
};

export default Slider;