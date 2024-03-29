import { useState, useEffect } from "react";
import React from "react";

import { useKeyPress } from "./useKeyPress"
import { useClickPress } from "./useClickPress"

export class Controller {
  constructor() {
    this.isControllerLocked = () => this.isLocked;
    this.setControllerLocked = (isLocked) => this.isLocked = isLocked;
    this.isLocked = true;
    if (Controller.exists)
    {
      return Controller.instance;
    }
    Controller.instance = this;
    Controller.exists = true;
    return this;
  }

  getControls() {
    const downPress = useKeyPress("ArrowDown");
    const upPress = useKeyPress("ArrowUp");
    const leftPress = useKeyPress("ArrowLeft");
    const rightPress = useKeyPress("ArrowRight");
    const enterPress = useKeyPress("Enter");
    const backspacePress = useKeyPress("Backspace");
    const bottomDirectionalPress = useClickPress("bottom-directional");
    const topDirectionalPress = useClickPress("top-directional");
    const leftDirectionalPress = useClickPress("left-directional");
    const rightDirectionalPress = useClickPress("right-directional");
    const confirmPress = useClickPress("confirm");
    const interactPress = useClickPress("interact");
    const menuPress = useClickPress("menu");

    const controls = [
      downPress,
      upPress,
      leftPress,
      rightPress,
      enterPress,
      backspacePress,
      bottomDirectionalPress,
      topDirectionalPress,
      leftDirectionalPress,
      rightDirectionalPress,
      confirmPress,
      interactPress,
      menuPress
    ];

    return controls;
  }
}
