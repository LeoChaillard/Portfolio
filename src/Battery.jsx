import { useState, useEffect } from "react";

import { PiBatteryHighFill } from "react-icons/pi";
import { PiBatteryMediumFill } from "react-icons/pi";
import { PiBatteryLowFill } from "react-icons/pi";
import { PiBatteryWarning } from "react-icons/pi";

import { useTimer } from "./useTimer";

const DisplayBatteryFill = ({currentTime, duration}) =>
{
  let display;
  switch(true)
  {
    case currentTime >= (duration * 0.7):
      display = <PiBatteryHighFill className="console-battery"/>
    break;
    case (duration * 0.3) <= currentTime && currentTime < (duration * 0.7):
      display = <PiBatteryMediumFill className="console-battery"/>
    break;
    case (duration * 0.1) <= currentTime && currentTime < (duration * 0.3):
      display = <PiBatteryLowFill className="console-battery"/>
    break;
    case 0 <= currentTime && currentTime < (duration * 0.1):
      display = <PiBatteryWarning className="console-battery-warning"/>
    break;
  }
  return display;
};

export function Battery({on, shutdown, duration}) {
  const [requestShutdown, setRequestShutdown] = useState(false);
  const { started, time, start, stop, reset, onTimeout } = useTimer({
    minutes: duration,
    seconds: 0,
    interval: 1000 * 60,
  });

  if (time.minutes < 0)
  {
    setRequestShutdown(true);
    stop();
    reset();
  }

  useEffect(() => {
    if (on) {
      start();
    }
    else {
      if (started.current)
      {
        stop();
        reset();
      }
    }
  }, [on]);

  useEffect(() => {
    if (requestShutdown)
    {
        shutdown();
        setRequestShutdown(false);
    }
  }, [requestShutdown]);

  return (
    <div>
      <DisplayBatteryFill currentTime={time.minutes} duration={duration}/>
    </div>
  );
}
