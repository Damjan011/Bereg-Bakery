import React from 'react';
import './style.css';

const StandardSection = ({ transparent }) => {
  if (transparent) {
    return (
      <div className="standard-main">
        <div className="standard-inner">
          <div className="standard-image-wrapper">
            <img className="standard-image" src={require('../../assets/images/baker.jpg')} />
          </div>
          <div className="standard-content">
            <div className="standard-title-area">
              <div className="standard-title">
                <p>Title</p>
              </div>
              <div className="standard-divider"></div>
            </div>
            <div className="standard-text">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
          </p>
            </div>
            <div className="standard-button standard-button-section">
              <p>Saznaj vise</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="standard-main standard-white">
      <div className="standard-inner">
        <div className="standard-content">
          <div className="standard-title-area">
            <div className="standard-title">
              <p>Title</p>
            </div>
            <div className="standard-divider"></div>
          </div>
          <div className="standard-text">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
          </div>
          <div className="standard-button standard-button-section">
            <p>Saznaj vise</p>
          </div>
        </div>
        <div className="standard-image-wrapper">
          <img className="standard-image" src={require('../../assets/images/baker.jpg')} />
        </div>
      </div>
    </div>
  )
}

export default StandardSection;