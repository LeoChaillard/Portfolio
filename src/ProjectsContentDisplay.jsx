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
              <div id="project" key={idx} className={projectID == idx ? "projects-content-display-container" : "projects-content-display-container-hidden"} style={projectID % 2 === 0 ? {marginTop: "calc(120 * var(--viewport-height))"} : {marginTop: "calc(-120 * var(--viewport-height))"}}>
                <div className="projects-content-display-title">
                  <h2>
                    {project.title}
                  </h2>
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
              <div id="project" key={idx} className={projectID == idx ? "projects-content-display-container flip-card" : "projects-content-display-container-hidden flip-card"} style={projectID % 2 === 0 ? {marginTop: "calc(120 * var(--viewport-height))"} : {marginTop: "calc(-120 * var(--viewport-height))"}}>
                <div className="projects-content-display-title">
                  <h2>
                    {project.title}
                  </h2>
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
};
