import React from 'react';
import {
  Link,
} from "react-router-dom";
import './style.css';

const SliderGreeting = ({ greeting }) => (
  <div className={`slider-greeting-main ${greeting ? 'slider-greeting-appear' : ''}`}>
    <div className="slider-greeting-title">
      <p>Квалитет и традиција</p>
    </div>
    <div className="slider-greeting-text">
      <p>Добродошли на званични сајт пекаре Берег.
      </p>
    </div>
    <div className="slider-greeting-buttons-wrapper">
      <div className="standard-button greeting-button">
        <Link to='/aboutUs'>Сазнајте више</Link>
      </div>
    </div>
  </div>
);

export default SliderGreeting;