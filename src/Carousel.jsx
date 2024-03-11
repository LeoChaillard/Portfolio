import React, { useState, useEffect } from "react";

import { Controller } from "./Controller"
import { KeyInput } from "./KeyInput"

import "./Carousel.css";

export const Carousel = ({data}) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1)%data.length);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  const controller = new Controller();
  const inputControls = controller.getControls();
  const isLeftPressed = inputControls[KeyInput.LeftPress];
  const isRightPressed = inputControls[KeyInput.RightPress];
  const isLeftDirectionalPressed = inputControls[KeyInput.LeftDirectionalPress];
  const isRightDirectionalPressed = inputControls[KeyInput.RightDirectionalPress];
  useEffect(() => {
    if (isLeftPressed || isLeftDirectionalPressed) {
      prevSlide();
    }
  }, [isLeftPressed, isLeftDirectionalPressed]);
  useEffect(() => {
    if (isRightPressed || isRightDirectionalPressed) {
      nextSlide();
    }
  }, [isRightPressed, isRightDirectionalPressed]);

  return(
    <div className="carousel">
      {data.map((item, idx) => {
        return (
          <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
        );
      })}
      <span className="indicators">
        {data.map((_, idx) => {
            return (
              <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
            );
        })}
      </span>
    </div>
  );
}
