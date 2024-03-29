import { useEffect } from "react";
import { Screens } from "./Screens"
import { AboutContentDisplay } from "./AboutContentDisplay";
import { ProjectsContentDisplay } from "./ProjectsContentDisplay";
import { WelcomeContent } from "./WelcomeContent";

let display = undefined;
const DisplayContent = ({localization, projectID, setProjectID, screen}) =>
{
  switch (screen)
  {
    case Screens.About:
      display = <AboutContentDisplay localization={localization}/>
    break;
    case Screens.Projects:
      display = <ProjectsContentDisplay localization={localization} projectID={projectID} setProjectID={setProjectID}/>
    break;
    default:
      if (display === undefined)
      {
        display = <WelcomeContent localization={localization}/>
      }
    break;
  }
  return display;
};

export function DisplayContentController({on, localization, projectID, setProjectID, currentScreen}) {
  useEffect(() => {
    if (!on)
    {
      display = undefined;
    }
  }, [on]);

  return (
    <DisplayContent localization={localization} projectID={projectID} setProjectID={setProjectID} screen={currentScreen}/>
  );
};
