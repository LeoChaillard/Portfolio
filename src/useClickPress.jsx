import { useState, useEffect } from "react";
import React from "react";

export const useClickPress = function(clickedID) {
  const [clickPressed, setClickPressed] = useState(false);

  React.useEffect(() => {
    const onClickDown = () => {
      setClickPressed(true);
    }

    const onClickUp = () => {
      setClickPressed(false);
    }

    const clickedButton = document.getElementById(clickedID);
    if (clickedButton)
    {
      clickedButton.addEventListener("mousedown", onClickDown);
      clickedButton.addEventListener("mouseup", onClickUp);
    }

    return () => {
      if (clickedButton)
       {
         clickedButton.removeEventListener("mousedown", onClickDown);
         clickedButton.removeEventListener("mouseup", onClickUp);
       }
    };
  }, [clickedID]);

  return clickPressed;
};
