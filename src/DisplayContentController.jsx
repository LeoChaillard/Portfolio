import { Screens } from "./Screens"
import { AboutContentDisplay } from "./AboutContentDisplay";
import { ProjectsContentDisplay } from "./ProjectsContentDisplay";
import { WelcomeContent } from "./WelcomeContent";

let lastScreen = undefined;
const DisplayContent = ({localization, projectID, setProjectID, screen}) =>
{
  let display = undefined;
  if (screen != Screens.Menu)
  {
    lastScreen = screen;
  }

  switch (lastScreen)
  {
    case Screens.About:
      display = <AboutContentDisplay localization={localization}/>
    break;
    case Screens.Projects:
      display = <ProjectsContentDisplay localization={localization} projectID={projectID} setProjectID={setProjectID}/>
    break;
    case Screens.None:
      display = <WelcomeContent localization={localization}/>
    break;
  }

  return display;
};

export function DisplayContentController({localization, projectID, setProjectID, currentScreen}) {
  return (
    <DisplayContent localization={localization} projectID={projectID} setProjectID={setProjectID} screen={currentScreen}/>
  );
};
