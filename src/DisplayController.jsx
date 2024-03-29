import { useState, useEffect } from "react";
import { Menu } from "./Menu";
import { About } from "./About";
import { Projects } from "./Projects"

import { Controller } from "./Controller"
import { Screens } from "./Screens"
import { KeyInput } from "./KeyInput"

import { useTimer } from "./useTimer";

const DisplayScreen = ({localization, projectID, setProjectID, screen, setScreen}) =>
{
  let display;
  switch (screen)
  {
    case Screens.Menu:
      display = <Menu localization={localization} setScreen={setScreen}/>
    break;
    case Screens.About:
      display = <About localization={localization} setScreen={setScreen}/>
    break;
    case Screens.Projects:
      display = <Projects localization={localization} projectID={projectID} setProjectID={setProjectID} setScreen={setScreen}/>
    break;
  }
  return display;
};

const showMenuButton = () =>
{
  const menu = document.getElementById("menu");
  const handleMenuAnimation = (event) => {
    menu.classList.remove("highlighted");
    menu.removeEventListener("animationend", handleMenuAnimation);
  };

  menu.addEventListener("animationend", handleMenuAnimation);
  menu.classList.add("highlighted");
}

const showMenuKeys = () =>
{
  const topTriangle = document.getElementById("top-directional");
  const bottomTriangle = document.getElementById("bottom-directional");
  const confirm = document.getElementById("confirm");

  const handleTopAnimation = (event) => {
    topTriangle.classList.remove("highlighted");
    topTriangle.removeEventListener("animationend", handleTopAnimation);
  };

  const handleBottomAnimation = (event) => {
    bottomTriangle.classList.remove("highlighted");
    bottomTriangle.removeEventListener("animationend", handleBottomAnimation);
  };

  const handleConfirmAnimation = (event) => {
    confirm.classList.remove("highlighted");
    confirm.removeEventListener("animationend", handleConfirmAnimation);
  };

  topTriangle.addEventListener("animationend", handleTopAnimation);
  bottomTriangle.addEventListener("animationend", handleBottomAnimation);
  confirm.addEventListener("animationend", handleConfirmAnimation);

  topTriangle.classList.add("highlighted");
  bottomTriangle.classList.add("highlighted");
  confirm.classList.add("highlighted");
}

const showAboutkeys = () =>
{
  showMenuButton();
}

const showProjectskeys = () =>
{
  showMenuButton();

  const leftTriangle = document.getElementById("left-directional");
  const rightTriangle = document.getElementById("right-directional");
  const handleAnimation = (event) => {
    leftTriangle.classList.remove("highlighted");
    rightTriangle.classList.remove("highlighted");
    leftTriangle.removeEventListener("animationend", handleAnimation);
    rightTriangle.removeEventListener("animationend", handleAnimation);
  };

  leftTriangle.addEventListener("animationend", handleAnimation);
  rightTriangle.addEventListener("animationend", handleAnimation);
  leftTriangle.classList.add("highlighted");
  rightTriangle.classList.add("highlighted");
}

export function DisplayController ({localization, projectID, setProjectID, currentScreen, setScreen, on, booting}) {

  const controller = new Controller();
  const inputControls = controller.getControls();
  const isControllerLocked = controller.isControllerLocked();

  const isBackspacePressed = inputControls[KeyInput.BackspacePress];
  const isMenuPressed = !isControllerLocked && inputControls[KeyInput.MenuPress];
  useEffect(() => {
    if (currentScreen != Screens.Menu)
    {
      if (!on || isBackspacePressed || isMenuPressed) {
        setScreen(Screens.Menu);
      }
    }
  }, [on, isBackspacePressed, isMenuPressed]);

  useEffect(() => {
    if (on && !booting)
    {
      start();
    }
    if (!on)
    {
      stop();
      reset();
    }
  }, [on, booting]);

  useEffect(() => {
    reset();
  }, [currentScreen]);


  const { started, time, start, stop, reset, onTimeout } = useTimer({
    minutes: 0,
    seconds: 15,
    interval: 1000,
  });

  if (time.seconds <= 0)
  {
    reset();

    if (on && !booting && currentScreen == Screens.Menu)
    {
      showMenuKeys();
    }

    if (on && !booting && currentScreen == Screens.About)
    {
      showAboutkeys();
    }

    if (on && !booting && currentScreen == Screens.Projects)
    {
      showProjectskeys();
    }
  }

  return (
    <DisplayScreen localization={localization} projectID={projectID} setProjectID={setProjectID} screen={currentScreen} setScreen={setScreen}/>
  );
}
