import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import './style.css';
import ProductsHomeSection from '../../components/ProductsHomeSection';
import IconBoxesHomeSection from '../../components/IconBoxesHomeSection';
import StandardSection from '../../components/StandardSection';
import SliderGreeting from '../../components/SliderGreeting';

const Home = ({ closeResponsiveMenu }) => {
  const [greeting, setGreeting] = useState(false);
  useEffect(closeResponsiveMenu, []);
  useEffect(() => setGreeting(true), [])
  return (
    <div style={{ position: 'relative' }} onClick={closeResponsiveMenu}>
      <Slider />
      <SliderGreeting greeting={greeting} />
      <div className="home-main-container">
        <IconBoxesHomeSection />
        <StandardSection transparent={true} />
        <ProductsHomeSection />
        <StandardSection />
      </div>
    </div>
  )
};

export default Home;
