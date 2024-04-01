import { useState, useEffect, useRef } from "react";
import { DisplayController } from "./DisplayController";
import { Battery } from "./Battery";
import { Joystick } from "./Joystick";
import { Controller } from "./Controller";
import { ConsoleButtons } from "./ConsoleButtons";
import { MenuButton } from "./MenuButton";
import { BootButton } from "./BootButton";
import { DisplayContentController } from "./DisplayContentController";
import { Screens } from "./Screens"
import { SoundPlayer } from "./SoundPlayer"
import { useInteraction } from "./useInteraction";

const Audio = ({playBeep, setPlayBeep}) =>
{
  const hasInteracted = useInteraction();
  let audio = undefined;
  if (hasInteracted)
  {
      audio = <SoundPlayer playBeep={playBeep} setPlayBeep={setPlayBeep}/>
  }

  return audio;
};

export function Console({localization}) {
  const [on, setOn] = useState(false);
  const [booting, setBooting] = useState(false);
  const lastBootAnimation = useRef(false);
  const controller = new Controller();
  const lastAnimation = false;
  const [currentScreen, setScreen] = useState(Screens.None);
  const [projectID, setProjectID] = useState(0);
  const [playBeep, setPlayBeep] = useState(false);

  const bootConsole = () => {
      if (!on)
      {
        controller.setControllerLocked(false);
        setOn(true);
        setBooting(true);

        const bootAnimation = document.getElementById("scrolling-brand");
        const handleBootAnimation = (event) => {
            if (lastBootAnimation.current) {
              lastBootAnimation.current = false;
              setBooting(false);
              setScreen(Screens.Menu);
              bootAnimation.removeEventListener("animationend", handleBootAnimation);
            }
            else {
              lastBootAnimation.current = true;
              setPlayBeep(true);
            }
        };
        bootAnimation.addEventListener("animationend", handleBootAnimation);
      }
      else
      {
        setScreen(Screens.None);
        const consoleMenu = document.getElementById("console-menu");
        consoleMenu.classList.toggle("off");

        const handleShutdownAnimation = (event) => {
            setOn(false);

            consoleMenu.removeEventListener("animationend", handleShutdownAnimation);
            controller.setControllerLocked(true);
        };
        consoleMenu.addEventListener("animationend", handleShutdownAnimation);
      }
  };

  return (
      <div className="console">
        <Audio playBeep={playBeep} setPlayBeep={setPlayBeep}/>
        <div className="console-shell-container">
          <div id="console" className="console-shell">
            <div className="console-shell-relative">
              <div className="console-screen-border">
                <div id="black-screen" className={false ? "black-screen-hidden" : "black-screen"}>
                  <div className={(on && booting) ? "boot-screen" : "boot-screen-hidden"}><p id="scrolling-brand" className="scrolling-brand">CHAILLARD{/*<span className="registered">&#174;</span>*/}</p></div>
                  <div id="console-menu" className={(on && !booting) ? "console-menu" : "console-menu-hidden"}>
                    <DisplayController on={on} localization={localization} projectID={projectID} setProjectID={setProjectID} currentScreen={currentScreen} setScreen={setScreen} on={on} booting={booting}/>
                    <Battery on={on} shutdown={bootConsole} duration={5}/>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <h6 className="console-brand">Chaillard <span>GAME BOX</span>{/*<span className="trademark">TM</span>*/}</h6>
                <Joystick on={on}/>
                <ConsoleButtons/>
                <MenuButton/>
                <BootButton bootConsole={booting ? null : bootConsole} on={on}/>
              </div>
            </div>
          </div>
        </div>

        <div className="console-content-display-container">
            <DisplayContentController localization={localization} projectID={projectID} setProjectID={setProjectID} currentScreen={currentScreen}/>
        </div>

      </div>
  );
}
