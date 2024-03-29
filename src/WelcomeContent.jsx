import { welcomeData } from "./welcomeData.json";
import { welcomeDataFR } from "./welcomeDataFR.json";
import { Localization } from "./Localization";

export function WelcomeContent({localization}) {

  const welcomeLocal = localization === Localization.EN ? welcomeData : welcomeDataFR;

  return (
    <div className="wrapper">
      <div className="veil"/>
        {welcomeLocal.map((welcome, idx) => {
        return (
          <div key={idx} className="page-welcome-container">
            <div className="page-welcome-title">
              <h1>{welcome.title}</h1>
            </div>
            <div className="page-welcome-description">
              <p>{welcome.description}</p>
            </div>
          </div>
        );
      })}
  </div>
  );
};
