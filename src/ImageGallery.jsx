import React, { useState } from "react";

export default function ImageGallery() {
  const images = [
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
    {
      src: "./images/image.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container flex flex-col items-center">
      <h1 className="text-green-400 font-light text-3xl mb-4">
        <i>EXPLORE</i>
      </h1>
      <div className="carousel relative w-64 h-40 overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={`Image ${currentIndex}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-500 text-white px-2 py-1 opacity-75 hover:opacity-100"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-500 text-white px-2 py-1 opacity-75 hover:opacity-100"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
