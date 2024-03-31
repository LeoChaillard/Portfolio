import { useEffect, useState } from "react"
import { welcomeData } from "./welcomeData.json";
import { welcomeDataFR } from "./welcomeDataFR.json";
import { Localization } from "./Localization";

export function WelcomeContent({localization}) {
  return (
    <div className="wrapper">
      <div className="veil"/>

      <div className={localization === Localization.FR ? "card-container flip-card" : "card-container"}>
          {welcomeData.map((welcome, idx) => {
              return (
                <div key={idx} className="page-welcome-container">
                  <div className="page-welcome-title">
                    <h2>{welcome.title}</h2>
                  </div>
                  <div className="page-welcome-description">
                    <p>{welcome.description}</p>
                  </div>
                </div>
              );
          })}

          {welcomeDataFR.map((welcome, idx) => {
              return (
                <div key={idx} className="page-welcome-container flip-card">
                  <div className="page-welcome-title">
                    <h2>{welcome.title}</h2>
                  </div>
                  <div className="page-welcome-description">
                    <p>{welcome.description}</p>
                  </div>
                </div>
              );
          })}
      </div>

  </div>
  );
};
