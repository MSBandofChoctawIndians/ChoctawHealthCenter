"use client";
import React, { useState } from 'react';

const Carousel = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          className={`absolute top-0 left-0 w-full h-full object-cover ${index === current ? 'block' : 'hidden'}`}
          src={image}
          alt=""
        />
      ))}
      <button className="absolute top-0 bottom-0 left-0 w-10 bg-black bg-opacity-50 text-white" onClick={prevSlide}>Prev</button>
      <button className="absolute top-0 bottom-0 right-0 w-10 bg-black bg-opacity-50 text-white" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;