import { useState, useEffect } from "react";
import React from "react";

import { Carousel } from "./Carousel";
import { Screens } from "./Screens"
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Localization } from "./Localization";

import { slides } from "./carouselData.json";
import { projects } from "./projectsData.json";
import { projectsFR } from "./projectsDataFR.json";
import "./style.css"

export function Projects ({localization, projectID, setProjectID, setScreen}) {

  const projectsLocal = localization === Localization.EN ? projects : projectsFR;

  return (
    <div className="projects">
      <Carousel projectID={projectID} setProjectID={setProjectID} slides={slides} projects={projectsLocal}/>
      <FaLongArrowAltLeft onClick={() => {setScreen(Screens.Menu)}} className="exit-arrow"/>
      {/*<h2 className="project-name">Project Name</h2>
      <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
      <button className="see-details">See details</button>*/}
    </div>
  );
}
