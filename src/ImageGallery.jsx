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

  return (
    <div>
      {images.map((im, index) => (
        <img key={index} src={im.src} alt={`Image ${index}`} />
      ))}
    </div>
  );
}
