import { PagesSharp } from '@material-ui/icons';
import React, { useEffect } from 'react';
import Gallerys from "../../components/gallery";
import PageHeader from '../../components/PageHeader';
import './index.css';

const Gallery = ({ closeResponsiveMenu }) => {
  useEffect(
    closeResponsiveMenu, []
  );
  return (
    <div onClick={closeResponsiveMenu} className="page-content">
      <PageHeader title="Галерија" className="galleryBanner"/>
      <Gallerys />
    </div>
  )
}

export default Gallery;
