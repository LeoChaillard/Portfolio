import { about } from "./aboutData.json";
import { aboutFR } from "./aboutDataFR.json";
import { Localization } from "./Localization";

export function AboutContentDisplay({localization}) {

  const aboutLocal = localization === Localization.EN ? about : aboutFR;
  return (
    <div className="wrapper">
      {aboutLocal.map((about, idx) => {
        return (
          <div key={idx} className="about-content-display-container">
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
  );
};
