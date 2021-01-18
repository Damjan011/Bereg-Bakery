import React from 'react';
import './style.css';

const ProductsHomeSection = () => (
  <div className="products-home-wrapper">
    <div className="title-area">
      <div className="main-title">
        Trending proizvodi
    </div>
      <div className="title-divider"></div>
      <div className="sub-title">
        Trenutno najprodavaniji proizvodi. Prateci vodece svetske standarde, nije nam strano isprobavanje i usavrsavanje novih proizvoda. Uz tradiciju porodicnog posla, domace proizvedenog brasna i naravno ljubavi, sigurni smo da nasi proizvodi nikog nece ostaviti ravnodusnim.
    </div>
    </div>
    <div className="light-boxes-container">
      <div className="light-icon-box">
        <div className="light-icon-box-content">
          <div className="light-icon-box-image-wrapper">
            <img src={require('../../assets/images/kiflice.jpg')} className="light-icon-box-image" alt="Alt" />
          </div>
          <div className="light-icon-box-label">
            <p>Jafa Kiflice</p>
          </div>
          <div className="light-icon-box-text">
            <p>Specijalitet pekare Bereg, jaja brasno susam</p>
          </div>
        </div>
        <div className="details-button">
          <div className="littleLogo" />
        </div>
      </div>
      <div className="light-icon-box">
        <div className="light-icon-box-content">
          <div className="light-icon-box-image-wrapper">
            <img src={require('../../assets/images/kiflice-maslina.jpg')} className="light-icon-box-image" alt="Alt" />
          </div>
          <div className="light-icon-box-label">
            <p>Kiflice Maslina</p>
          </div>
          <div className="light-icon-box-text">
            <p>Specijalitet pekare Bereg, jaja brasno susam</p>
          </div>
        </div>
        <div className="details-button">
          <div className="littleLogo" />
        </div>
      </div>
      <div className="light-icon-box">
        <div className="light-icon-box-content">
          <div className="light-icon-box-image-wrapper">
            <img src={require('../../assets/images/stapici.jpg')} className="light-icon-box-image" alt="Alt" />
          </div>
          <div className="light-icon-box-label">
            <p>Integralni Stapici</p>
          </div>
          <div className="light-icon-box-text">
            <p>Avokado</p>
          </div>
        </div>
        <div className="details-button">
          <div className="littleLogo" />
        </div>
      </div>
    </div>
  </div>
);

export default ProductsHomeSection;