import React from 'react';
import './style.css';

const ShadowIconBox = ({ icon, description, title }) => (
  <div className="shadow-icon-box">
    <div className="shadow-icon-wrapper">
      <img src={require(`../../assets/icons/${icon}`)} className="shadow-icon" alt="Icon" />
    </div>
    <div className="shadow-content-wrapper">
      <div className="shadow-label">
        <p>{title}</p>
      </div>
      <div className="shadow-text">
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default ShadowIconBox;