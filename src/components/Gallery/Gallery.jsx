import React, { useState, useEffect } from 'react';
import classes from './Gallery.module.css';
import img1 from '../../assets/gallery/img1.jpg';
import img2 from '../../assets/gallery/img2.jpg';
import img3 from '../../assets/gallery/img3.jpg';
import img4 from '../../assets/gallery/img4.jpg';
import img5 from '../../assets/gallery/img5.jpg';
import img6 from '../../assets/gallery/img6.jpg'; 
import img7 from '../../assets/gallery/img7.jpg';

const images = [
  { src: img1, alt: 'Gallery Image 1' },
  { src: img2, alt: 'Gallery Image 2' },
  { src: img3, alt: 'Gallery Image 3' },
  { src: img4, alt: 'Gallery Image 4' },
  { src: img5, alt: 'Gallery Image 5' },
  { src: img6, alt: 'Gallery Image 6' },
  { src: img7, alt: 'Gallery Image 7' },
];

// Preload images
const preloadImages = () => {
  images.forEach(image => {
    const img = new Image();
    img.src = image.src;
  });
};

// Call preloadImages immediately
preloadImages();

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    // Start loading the gallery container as soon as component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleInteraction = (index, event) => {
    if (event) {
      event.preventDefault();
      
      // Only handle click events on touch devices
      if (isTouchDevice && event.type !== 'click') {
        return;
      }
    }
    
    // Toggle the active state
    setActiveIndex(activeIndex === index ? null : index);
    
    // Auto-reset after 2 seconds
    if (isTouchDevice) {
      setTimeout(() => setActiveIndex(null), 2000);
    }
  };

  return (
    <section className={classes.gallery}>
      <div className={classes.galleryTitle}>
        <h1>Gallery</h1>
        <h2>Glimpse of I-Fest'23</h2>
      </div>
      <div className={`${classes.galleryContainer} ${isVisible ? classes.visible : ''}`}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`${classes.galleryItem} ${activeIndex === index ? classes.active : ''}`}
            style={{ '--i': index }}
            onClick={(e) => handleInteraction(index, e)}
            draggable="false"
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              draggable="false" 
              style={{ visibility: isVisible ? 'visible' : 'hidden' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
