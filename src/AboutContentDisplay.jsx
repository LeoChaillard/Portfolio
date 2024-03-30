import { about } from "./aboutData.json";
import { aboutFR } from "./aboutDataFR.json";
import { Localization } from "./Localization";

export function AboutContentDisplay({localization}) {
  return (
    <div className="wrapper">
       <div className={localization === Localization.FR ? "card-container flip-card" : "card-container"}>

          {about.map((about, idx) => {
            return (
              <div key={idx} className={localization === Localization.EN ?"about-content-display-container rotate-anim-front" : "about-content-display-container"}>
                <div className="about-content-display-title">
                  <h1>{about.title}</h1>
                </div>
                <div className="about-content-display-description">
                  <p>{about.description}</p>
                </div>
              </div>
            );
          })}

          {aboutFR.map((about, idx) => {
            return (
              <div key={idx} className={localization === Localization.FR ?"about-content-display-container flip-card rotate-anim-back" : "about-content-display-container flip-card"}>
                <div className="about-content-display-title">
                  <h1>{about.title}</h1>
                </div>
                <div className="about-content-display-description">
                  <p>{about.description}</p>
                </div>
              </div>
            );
          })}

        </div>
    </div>
  );
};
