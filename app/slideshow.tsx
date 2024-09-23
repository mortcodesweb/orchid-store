"use client";
// src/Slideshow.js
import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
  { src: 'https://via.placeholder.com/600x300?text=Image+1', label: 'Slide 1' },
  { src: 'https://via.placeholder.com/600x300?text=Image+2', label: 'Slide 2' },
  { src: 'https://via.placeholder.com/600x300?text=Image+3', label: 'Slide 3' },
  { src: 'https://via.placeholder.com/600x300?text=Image+4', label: 'Slide 4' },
  { src: 'https://via.placeholder.com/600x300?text=Image+5', label: 'Slide 5' },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 60);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setProgress(0);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {images.map((image, index) => {

          let position = (index - currentIndex + images.length) % images.length;
          let className = "slide";

          if (position === 0) {
            className += " current";
          } else if (position === 1) {
            className += " next";
          } else if (position === 2) {
            className += " next-next";
          } else if (position === 3) {
            className += " next-next-next";
          } else if (position === images.length - 1) {
            className += " previous";
          } else {
            className += " hidden";
          }

          return (
            <img
              key={index}
              src={image.src}
              alt={`Slide ${index}`}
              className={className}
            />
          );
        })}
      </div>
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
      <div className="dots">
        {images.map((image, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="tooltip">{image.label}</span>
          </div>
        ))}
      </div>
      <div className="progress-bar" style={{ '--progress': progress / 100 }}>
        <div className="fill"></div>
      </div>
    </div>
  );
};

export default Slideshow;
