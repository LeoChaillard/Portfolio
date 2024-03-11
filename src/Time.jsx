import { useState, useEffect } from "react";
import React from "react";

export const Time = () => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const interval_time = (60000 - (today.getSeconds()*1000));

      const myInterval = setInterval(
          () => setToday(new Date()),
          interval_time
      );

      return () => clearInterval(myInterval);
  }, []);

  const hours = today.getHours();
  const formatedHours = hours !==12 ? hours%12 : hours;
  const minutes = ((today.getMinutes() < 10) ? '0' : '') + today.getMinutes();
  const period = (hours !== 12) && (hours%12 === hours) ? "am" : "pm";
  const currentTime = `${formatedHours}:${minutes} ${period}`;

  return (
    <>
      <p className="current-date">{currentTime}</p>
    </>
  );
};
