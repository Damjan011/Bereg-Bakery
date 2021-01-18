import React, { useEffect } from 'react';
import './style.css';
import PinIcon from '../../assets/icons/pin-round@3x.png';
import MailIcon from '../../assets/icons/mail@3x.png';
import PhoneIcon from '../../assets/icons/call-phone@3x.png';
import PageHeader from '../../components/PageHeader';

const Contact = ({ closeResponsiveMenu }) => {
  useEffect(
    closeResponsiveMenu, []
  );
  return (
    <div onClick={closeResponsiveMenu} className="page-content">
      <PageHeader title='Контакт' />
      <div className="contact-container">
        <div className="contact-content">
          <div className="map-container">
            <iframe className="map-styles" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1708.173662900336!2d18.797041219251057!3d43.94293226230712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758e760fdb38ef9%3A0xd8afa6f6db2de123!2sPekara%20Bereg!5e0!3m2!1sen!2srs!4v1610565218908!5m2!1sen!2srs" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div className="contact-icon-boxes-container">
            <div className="contact-title">
              <p>Контактирајте нас</p>
            </div>
            <div className="contact-icon-box">
              <div className="contact-icon-wrapper">
                <img src={PinIcon} alt="Map pin" className="contact-icon" />
              </div>
              <div className="contact-icon-box-text">
                <p>Иве Андрића 2 A, Соколац</p>
              </div>
            </div>
            <div className="contact-icon-box">
              <div className="contact-icon-wrapper">
                <img src={PhoneIcon} alt="Phone" className="contact-icon" />
              </div>
              <div className="contact-icon-box-text">
                <p>+387/65-573-727</p>
              </div>
            </div>
            <div className="contact-icon-box">
              <div className="contact-icon-wrapper">
                <img src={MailIcon} alt="Mail" className="contact-icon" />
              </div>
              <div className="contact-icon-box-text">
                <p>pekarabereg@business.rs</p>
              </div>
            </div>
            <div className="contact-more-info">
              <span className="contact-more-info-text">ЈИБ:</span> 4507656870003, <span className="contact-more-info-text">Шифра дјелатности:</span> 1071
            </div>
            <div className="contact-more-info">
              <span className="contact-more-info-text">Радно вријеме:</span> 08h - 20h
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
