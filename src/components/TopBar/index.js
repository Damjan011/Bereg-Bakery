import React from 'react';
import './style.css';
import PinWhite from '../../assets/icons/white/pin-round.png';
import PhoneWhite from '../../assets/icons/white/call-phone.png';

const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar-inner">
      <div className="top-bar-field">
        <div className="top-bar-icon-wrapper">
          <img src={PinWhite} className="top-bar-icon" alt="Location" />
        </div>
        <div className="top-bar-text">
          <p>Иве Андрића 2 A, Соколац</p>
        </div>
      </div>
      <div className="top-bar-field">
        <div className="top-bar-icon-wrapper">
          <img src={PhoneWhite} className="top-bar-icon" alt="Phone" />
        </div>
        <div className="top-bar-text">
          <p>+387/65-573-727</p>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;