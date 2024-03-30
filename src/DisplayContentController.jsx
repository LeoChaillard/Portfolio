import { Screens } from "./Screens"
import { AboutContentDisplay } from "./AboutContentDisplay";
import { ProjectsContentDisplay } from "./ProjectsContentDisplay";
import { WelcomeContent } from "./WelcomeContent";

let display = undefined;
let lastScreen = undefined;
let lastLocalization = undefined;
const DisplayContent = ({localization, projectID, setProjectID, screen}) =>
{
  switch (screen)
  {
    case Screens.About:
      display = <AboutContentDisplay localization={localization}/>
      lastScreen = Screens.About;
    break;
    case Screens.Projects:
      display = <ProjectsContentDisplay localization={localization} projectID={projectID} setProjectID={setProjectID}/>
      lastScreen = Screens.Projects;
    break;
    case Screens.Menu:
      if (lastLocalization !== localization)
      {
        if (lastScreen === Screens.About)
        {
          display = <AboutContentDisplay localization={localization}/>
        }
        else if (lastScreen === Screens.About)
        {
          display = <ProjectsContentDisplay localization={localization} projectID={projectID} setProjectID={setProjectID}/>
        }
        else
        {
          display = <WelcomeContent localization={localization}/>
        }
      }
    break;
    case Screens.None:
      display = <WelcomeContent localization={localization}/>
    break;
  }

  lastLocalization = localization;

  return display;
};

export function DisplayContentController({localization, projectID, setProjectID, currentScreen}) {
  return (
    <DisplayContent localization={localization} projectID={projectID} setProjectID={setProjectID} screen={currentScreen}/>
  );
};
