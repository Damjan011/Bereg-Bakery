import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import StandardSection from "../../components/StandardSection";
import './index.css';

const About = ({ closeResponsiveMenu }) => {
  useEffect(closeResponsiveMenu, []);
  return (
    <div onClick={closeResponsiveMenu} className="page-content">
      <PageHeader title='О нама' className="aboutUsBanner" />
      <StandardSection transparent={false} />
    </div>
  );
};

export default About;
