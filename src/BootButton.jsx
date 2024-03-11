import { useEffect } from "react";
import { GiPowerButton } from "react-icons/gi";

import { useTimer } from "./useTimer";

const showBootButton = () =>
{
  const bootButton = document.getElementById("on-off-button");
  const handleAnimation = (event) => {
    bootButton.classList.remove("highlighted");
    bootButton.removeEventListener("animationend", handleAnimation);
  };

  bootButton.addEventListener("animationend", handleAnimation);
  bootButton.classList.add("highlighted");
}

export function BootButton({bootConsole, on}) {
  const { started, time, start, stop, reset, onTimeout } = useTimer({
    minutes: 0,
    seconds: 10,
    interval: 1000,
  });

  if (time.seconds <= 0)
  {
    reset();
    showBootButton();
  }

  useEffect(() => {
    if (!on)
    {
      start();
    }

    if (on)
    {
      stop();
    }
  }, [on]);

  return (
    <div>
      <GiPowerButton id="on-off-button" onClick={bootConsole} className="on-off-button"/>
      <p className="on-off-text">ON/OFF</p>
    </div>
  );
}
