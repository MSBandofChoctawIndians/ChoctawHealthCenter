"use client";
import { useState, useEffect } from 'react';

export default function Carousel() {
  const images = ['./slide01.jpg', './slide02.jpg', './slide03.jpg']; // replace with your images
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const goPrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(goNext, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(timer); // Clear the timer when the component is unmounted
    };
  }, [activeIndex]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
    {images.map((image, index) => (
      <img
        key={index}
        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
        src={image}
        alt=""
      />
    ))}
    <button className="absolute top-0 bottom-0 left-0 w-10 bg-black bg-opacity-50 text-white" onClick={goPrev}>Prev</button>
    <button className="absolute top-0 bottom-0 right-0 w-10 bg-black bg-opacity-50 text-white" onClick={goNext}>Next</button>
  </div>
  );
}