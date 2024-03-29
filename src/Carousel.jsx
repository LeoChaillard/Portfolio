import React, { useState, useEffect } from "react";

import { Controller } from "./Controller"
import { KeyInput } from "./KeyInput"

import "./Carousel.css";

export const Carousel = ({projectID, setProjectID, slides, projects}) => {

  const nextProject = () => {
    setProjectID((projectID + 1)%slides.length);
  };

  const prevProject = () => {
    setProjectID(projectID === 0 ? slides.length - 1 : projectID - 1);
  };

  const controller = new Controller();
  const inputControls = controller.getControls();
  const isLeftPressed = inputControls[KeyInput.LeftPress];
  const isRightPressed = inputControls[KeyInput.RightPress];
  const isLeftDirectionalPressed = inputControls[KeyInput.LeftDirectionalPress];
  const isRightDirectionalPressed = inputControls[KeyInput.RightDirectionalPress];
  useEffect(() => {
    if (isLeftPressed || isLeftDirectionalPressed) {
      prevProject();
    }
  }, [isLeftPressed, isLeftDirectionalPressed]);
  useEffect(() => {
    if (isRightPressed || isRightDirectionalPressed) {
      nextProject();
    }
  }, [isRightPressed, isRightDirectionalPressed]);

  return(
    <div className="carousel">
      {slides.map((item, idx) => {
        return (
          <div key={idx}></div>
          /*<img src={item.src} alt={item.alt} key={idx} className={projectID === idx ? "slide" : "slide slide-hidden"}/>*/
        );
      })}
      <div>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className={projectID == idx ? "project-name" : "project-name-hidden"}>
                {project.title}
              </div>
              <div className={projectID == idx ? "project-description" : "project-description-hidden"}>
                {project.description}
              </div>
            </div>
          );
        })}
      </div>
      <span className="indicators">
        {slides.map((_, idx) => {
            return (
              <button key={idx} onClick={() => setProjectID(idx)} className={projectID === idx ? "indicator" : "indicator indicator-inactive"}></button>
            );
        })}
      </span>
    </div>
  );
}
