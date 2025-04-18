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
    <div className="grid grid-cols-2 gap-2 sm:w-[520px] md:grid-cols-3">
      {images.map((im, index) => (
        <img key={index} src={im.src} alt={`Image ${index}`} />
      ))}
    </div>
  );
}
