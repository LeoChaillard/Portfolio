import React from "react";
import { useState, useEffect, useRef } from "react";

export const useTimer = function( {minutes = 0, seconds = 10, millis = 0, interval = 1000} ) {
  const [time, setTime] = useState({
    minutes,
    seconds,
    millis,
  });

  const originalTime = {
    minutes,
    seconds,
    millis,
  };

  let started = useRef(false);
  const intervalId = useRef(null);

  const countDown = () => {
    setTime(t => {
      let totalMillis =
        1000 *
          ( t.minutes * 60 +
            t.seconds) +
        t.millis -
        interval;
      return {
        minutes: Math.floor(
          (totalMillis % 3600000) / 60000
        ),
        seconds: Math.floor((totalMillis % 60000) / 1000),
        millis: totalMillis % 1000,
      };
    });
  };

  const onTimeout = (callback) => {
    callback();
  };

  const reset = () => {
    setTime({ ...originalTime });
  };

  const stop = () => {
    started.current = false;
    clearInterval(intervalId.current);
  };

  const start = () => {
    if (!started.current) {
      started.current = true;
      intervalId.current = setInterval(() => { if (started.current) countDown(); }, interval);
    }
  };

  return { started, time, start, stop, reset, onTimeout };
};
