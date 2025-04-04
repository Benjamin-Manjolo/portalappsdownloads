import React from "react";

const ImageCard = ({ src, alt, description }) => (
  <div className="relative">
    <img src={src} alt={alt} className="w-[250px] h-[250px] object-cover" />
    <div className="absolute inset-0 bg-black/50 flex items-end p-4">
      <h2 className="text-white text-[13px]">{description}</h2>
    </div>
  </div>
);

export default function ImageGallery() {
  const images = [
    {
      src: "/images/image.jpg",
      alt: "A graphic design example",
      description:
        "I'm a graphic designer who also dabbles in front-end development and amateur photography. I love using my phone to capture moments.",
    },
    {
      src: "/images/image.jpg",
      alt: "Another graphic design example",
      description:
        "I'm a graphic designer who also dabbles in front-end development and amateur photography. I love using my phone to capture moments.",
    },
    {
      src: "/images/image.jpg",
      alt: "Yet another graphic design example",
      description:
        "I'm a graphic designer who also dabbles in front-end development and amateur photography. I love using my phone to capture moments.",
    },
    {
      src: "/images/image.jpg",
      alt: "A different graphic design example",
      description:
        "I'm a graphic designer who also dabbles in front-end development and amateur photography. I love using my phone to capture moments.",
    },
    {
      src: "/images/image.jpg",
      alt: "Another different graphic design example",
      description:
        "I'm a graphic designer who also dabbles in front-end development and amateur photography. I love using my phone to capture moments.",
    },
    {
      src: "/images/image.jpg",
      alt: "Final graphic design example",
      description:
        "I'm a graphic designer who also dabbles in front-end development and amateur photography. I love using my phone to capture moments.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 justify-between">
      {images.map((image, index) => (
        <ImageCard key={index} {...image} />
      ))}
    </div>
  );
}
