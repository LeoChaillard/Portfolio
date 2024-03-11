import { useState, useEffect, useRef } from "react";
import { DisplayController } from "./DisplayController";
import { Battery } from "./Battery";
import { Joystick } from "./Joystick";
import { Controller } from "./Controller";
import { ConsoleButtons } from "./ConsoleButtons";
import { MenuButton } from "./MenuButton";
import { BootButton } from "./BootButton";

import { useSound } from "use-sound";
import beepSound from "./assets/nintendo-game-boy-startup.mp3";

export function Console() {
  const [on, setOn] = useState(false);
  const [booting, setBooting] = useState(false);
  const lastBootAnimation = useRef(false);
  const controller = new Controller();
  const lastAnimation = false;
  const [playStartupSound] = useSound(beepSound, { volume: 0.1 });

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
              bootAnimation.removeEventListener("animationend", handleBootAnimation);
            }
            else {
              lastBootAnimation.current = true;
              playStartupSound();
            }
        };
        bootAnimation.addEventListener("animationend", handleBootAnimation);
      }
      else
      {
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
        <div className="console-shell">
          <h5 className="play-text">{on ? "Playing..." : "Console turned off..."}</h5>
          <MenuButton/>
          <Joystick on={on}/>
          <div className="console-screen-border">
            <div className={false ? "black-screen-hidden" : "black-screen"}>
              <div className={(on && booting) ? "boot-screen" : "boot-screen-hidden"}><p id="scrolling-brand" className="scrolling-brand">CHAILLARD<span className="registered">&#174;</span></p></div>
              <div id="console-menu" className={(on && !booting) ? "console-menu" : "console-menu-hidden"}>
                <Battery on={on} shutdown={bootConsole} duration={5}/>
                <DisplayController on={on} booting={booting}/>
              </div>
            </div>
            <h6 className="console-brand">CHAILLARD</h6>
          </div>
          <BootButton bootConsole={booting ? null : bootConsole} on={on}/>
          <ConsoleButtons/>
        </div>
      </div>
  );
}
