import { useState, useEffect, useRef } from "react";
import "./style.css"
import { projects } from "./projectsData.json";
import { projectsFR } from "./projectsDataFR.json";
import { Localization } from "./Localization";

export function ProjectsContentDisplay({localization, projectID, setProjectID}) {

  const seeMoreLocal = localization === Localization.EN ? "See more" : "Voir plus";
  const soonLocal = localization === Localization.EN ? "Soon" : "À venir";

  return (
    <div className="wrapper">
      <div className={localization === Localization.FR ? "card-container flip-card" : "card-container"}>

          {projects.map((project, idx) => {
            return (
              <div id="project" key={idx} className={projectID == idx ? "projects-content-display-container" : "projects-content-display-container-hidden"} style={projectID % 2 === 0 ? {top: "calc(65 * var(--viewport-height))"} : {top: "calc(-65 * var(--viewport-height))"}}>
                <div className="projects-content-display-title">
                  <h1>
                    {project.title}
                  </h1>
                </div>
                <div className="projects-content-display-description">
                  <p>
                    {project.description}
                  </p>
                  <button>{seeMoreLocal}</button> ({soonLocal})
                </div>
              </div>
            );
          })}

          {projectsFR.map((project, idx) => {
            return (
              <div id="project" key={idx} className={projectID == idx ? "projects-content-display-container flip-card" : "projects-content-display-container-hidden flip-card"} style={projectID % 2 === 0 ? {top: "calc(65 * var(--viewport-height))"} : {top: "calc(-65 * var(--viewport-height))"}}>
                <div className="projects-content-display-title">
                  <h1>
                    {project.title}
                  </h1>
                </div>
                <div className="projects-content-display-description">
                  <p>
                    {project.description}
                  </p>
                  <button>{seeMoreLocal}</button> ({soonLocal})
                </div>
              </div>
            );
          })}

      </div>
    </div>
  );

  /*<div className="projects-content-display-title">
    <h1>Temp Out (Demo)</h1>
  </div>
  <div className="projects-content-display-description">
    <p>A simple 2.5D game I've been developping to challenge myself to learn about
    the various elements that compose a video game (shaders, pathfinding, state machines, gameplay mechanics...).

    The player finds himself deep down a subway from which he has to escape to the top while going through rooms of enemies.
    Those rooms have the particularity to have random variations of the ambient temperature.
    It is possible to switch at any time between two characters who have their own strengths and weaknesses.
    </p>
    <button>See more</button>
  </div>*/
};
