import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import './style.css';

const images = [
    {
      src: require('../../assets/images/bake.jpg'),
      width: 0.3,
      height: 0.2
    },
    {
      src: require('../../assets/images/baker.jpg'),
      width: 0.3,
      height: 0.2
    },
    {
      src: require('../../assets/images/bake.jpg'),
      width: 0.3,
      height: 0.2
    },
    {
      src: require('../../assets/images/baker.jpg'),
      width: 0.3,
      height: 0.2
    },
    {
      src: require('../../assets/images/bake.jpg'),
      width: 0.3,
      height: 0.2
    },
    {
      src: require('../../assets/images/baker.jpg'),
      width: 0.3,
      height: 0.2
    },
    {
      src: require('../../assets/images/bake.jpg'),
      width: 0.3,
      height: 0.2
    },
    {
      src: require('../../assets/images/Banner_Bakery_Bread.jpg'),
      width: 0.3,
      height: 0.2
    }
  ];


function GalleryComponent() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="galerryWrapper">
      <Gallery photos={images} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal
            onClose={closeLightbox}
          >
            <Carousel
              currentIndex={currentImage}
              views={images}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default GalleryComponent;