import React from 'react';
import './style.css';
import ShadowIconBox from '../ShadowIconBox';

const iconBoxData = [
  { title: 'Hlebovi', description: 'This is demo textThis is demo texThis is demo texttThis is demo textThis is demo text', icon: '360@3x.png' },
  { title: 'Kifle', description: 'This is demo textThis is demo texThis is demo texttThis is demo textThis is demo text', icon: 'call-calling@3x.png' },
  { title: 'Peciva', description: 'This is demo textThis is demo texThis is demo texttThis is demo textThis is demo text', icon: 'pin@3x.png' },
  { title: 'Tradicija', description: 'This is demo textThis is demo texThis is demo texttThis is demo textThis is demo text', icon: 'pin-round@3x.png' },
  { title: 'Sigurnost', description: 'This is demo textThis is demo texThis is demo texttThis is demo textThis is demo text', icon: 'call-calling@3x.png' },
  { title: 'Porodica', description: 'This is demo textThis is demo texThis is demo texttThis is demo textThis is demo text', icon: 'mail@3x.png' },
];

const IconBoxesHomeSection = () => (
  <div className="shadow-icon-boxes">
    <div className="section-title">
      <p>Добродошли</p>
    </div>
    <div className="title-divider"></div>
    <div className="section-subtitle">
      <p>Porodicna tradicija, kvalitet, porudzbine,
        uvek na raspolaganjuPorodicna tradicija, kvalitet, porudzbine, uvek na raspolaganjuPorodicna tradicija, kvalitet,
        porudzbine
      </p>
    </div>
    <div className="shadow-icon-boxes-wrapper">
      {
        iconBoxData.map((el, index) => (
          <>
            <ShadowIconBox title={el.title} description={el.description} icon={el.icon} />
            {
              index === 2 ? <div className="flex-break"></div> : <></>
            }
          </>
        ))
      }
    </div>
  </div>
);

export default IconBoxesHomeSection;