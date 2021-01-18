import React from 'react';
import './style.css';

const SliderGreeting = ({ greeting }) => (
  <div className={`slider-greeting-main ${greeting ? 'slider-greeting-appear' : ''}`}>
    <div className="slider-greeting-title">
      <p>Dobrodosli</p>
    </div>
    <div className="slider-greeting-text">
      <p>Dobrodosli na zvanicni sajt pekare Bereg. Ovde mozete videti nas asortiman proizvoda, saznati vise o nama ili nas kontaktirati. Uvek smo Vam na raspolaganju.
      </p>
    </div>
    <div className="slider-greeting-buttons-wrapper">
      <div className="standard-button greeting-button">
        <p>O nama</p>
      </div>
      <div className="standard-button greeting-button">
        <p>Kontakt</p>
      </div>
    </div>
  </div>
);

export default SliderGreeting;