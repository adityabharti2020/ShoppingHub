import React from "react";
import { useState } from "react";
import "./carousel.css";
const CarouselCmp = (props) => {
  const newSlideImages = props.image;
  const [activeImage, setActiveImage] = useState(0);
  const [transition, setTransition] = useState(0);

  const SlidechangeHandlerLeft = () => {
    if (activeImage === 0) {
      return setActiveImage(6);
    }
    setActiveImage(activeImage - 1);
  };
  const SlidechangeHandlerRight = () => {
    if (activeImage >= newSlideImages.length - 1) {
      return setActiveImage(0);
    }
    setActiveImage(activeImage + 1);
  };
  return (
    <div className="carousel-container">
      <div className="arrow-button" onClick={SlidechangeHandlerLeft
      }>
        <img src="https://icons.veryicon.com/png/o/internet--web/industrial-icon/down-arrow.png" />
      </div>
      {newSlideImages.map((img, id) => {

        // console.log(`${img.id} == ${id+1}`);

        return activeImage === id ? (
          <div className="carousal-item" id={activeImage === id && 'active'}>
            <img src={img.url} key={id} />
          </div>
        ) : (
          <></>
        );
      })}

      <div className="arrow-button-back" onClick={SlidechangeHandlerRight}>
        <img src="https://icons.veryicon.com/png/o/internet--web/industrial-icon/down-arrow.png" />
      </div>
    </div>
  );
};

export default CarouselCmp;
