import { useState } from "react";
import "./slider.scss";

function Slider({ openModal }) {
  const imageUrls = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];

  const thumbnailUrls = [
    "images/image-product-1-thumbnail.jpg",
    "images/image-product-2-thumbnail.jpg",
    "images/image-product-3-thumbnail.jpg",
    "images/image-product-4-thumbnail.jpg",
  ];

  const [imgIndex, setImage] = useState(0);

  function showPrevImage() {
    setImage((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  function showNextImage() {
    setImage((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <>
      <div className="slider">
        <div className="imgDiv" onClick={openModal}>
          {imageUrls.map((url) => (
            <img
              key={url}
              src={url}
              alt={`image ${imgIndex}`}
              onClick={() => openModal(imgIndex)}
              style={{ translate: `${-100 * imgIndex}%` }}
            />
          ))}
        </div>
        <button onClick={showPrevImage} id="prevBtn">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3.5"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>

        <button onClick={showNextImage} id="nextBtn">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3.5"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>

        <div className="thumbnails">
          {thumbnailUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`thumbnail ${index}`}
              onClick={() => setImage(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
