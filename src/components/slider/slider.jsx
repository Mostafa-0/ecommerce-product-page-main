import { useState } from "react";
import "./slider.scss";
import img1 from "/images/image-product-1.jpg";
import img2 from "/images/image-product-2.jpg";
import img3 from "/images/image-product-3.jpg";
import img4 from "/images/image-product-4.jpg";
import thumb1 from "/images/image-product-1-thumbnail.jpg";
import thumb2 from "/images/image-product-2-thumbnail.jpg";
import thumb3 from "/images/image-product-3-thumbnail.jpg";
import thumb4 from "/images/image-product-4-thumbnail.jpg";

function Slider({ openModal }) {
  const imageUrls = [img1, img2, img3, img4];

  const thumbnailUrls = [thumb1, thumb2, thumb3, thumb4];

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

  const cursorStyle = openModal ? { cursor: "pointer" } : null;
  return (
    <>
      <div className="slider">
        <div className="imgDiv" onClick={openModal} style={cursorStyle}>
          {imageUrls.map((url) => (
            <img
              key={url}
              src={url}
              alt={`image ${imgIndex}`}
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
            className="thumbnail"
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
