import { useState, useEffect } from "react";
import React from "react";

import { VscTriangleRight } from "react-icons/vsc";

import { Controller } from "./Controller"
import { Screens } from "./Screens"
import { KeyInput } from "./KeyInput"
import { Time } from "./Time"

import "./style.css";

const items = [
  { id: 1, name: "About" },
  { id: 2, name: "Projects" },
];

const MenuItem = ({ item, active, setSelected, setHovered }) => (
  <div
    className={`item ${active ? "active" : ""}`}
    onClick={() => setSelected(item)}
    onMouseEnter={() => setHovered(item)}
    onMouseLeave={() => setHovered(undefined)}
  >
    {item.name}
    <VscTriangleRight className={active ? "selector" : "selector-hidden"}/>
  </div>
);

export function Menu ({setScreen}) {
  const [selected, setSelected] = useState(undefined);
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  const controller = new Controller();
  const inputControls = controller.getControls();
  const isControllerLocked = controller.isControllerLocked();

  const isDownPressed = !isControllerLocked && inputControls[KeyInput.DownPress];
  const isUpPressed = !isControllerLocked && inputControls[KeyInput.UpPress];
  const isEnterPressed =  !isControllerLocked && inputControls[KeyInput.EnterPress];
  const isBottomDirectionalPressed = !isControllerLocked && inputControls[KeyInput.BottomDirectionalPress];
  const isTopDirectionalPressed = !isControllerLocked && inputControls[KeyInput.TopDirectionalPress];
  const isConfirmPressed = !isControllerLocked && inputControls[KeyInput.ConfirmPress];

  useEffect(() => {
    if (isControllerLocked)
    {
      setCursor(0);
    }
  }, [isControllerLocked]);
  useEffect(() => {
    if (items.length && (isDownPressed || isBottomDirectionalPressed)) {
      setCursor(prevState =>
        prevState < items.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [isDownPressed, isBottomDirectionalPressed]);
  useEffect(() => {
    if (items.length && (isUpPressed || isTopDirectionalPressed)) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [isUpPressed, isTopDirectionalPressed]);
  useEffect(() => {
    if (items.length && (isEnterPressed || isConfirmPressed)) {
      setSelected(items[cursor]);
    }
  }, [cursor, isEnterPressed, isConfirmPressed]);

  useEffect(() => {
    if (items.length && hovered) {
      setCursor(items.indexOf(hovered));
    }
  }, [hovered]);
  useEffect(() => {
    if (selected)
    {
      switch(cursor)
      {
        case 0:
          setScreen(Screens.About);
        break;
        case 1:
          setScreen(Screens.Projects);
        break;
      }
    }
  }, [selected]);

  return (
    <div className="menu">
      <Time/>
      {items.map((item, i) => (
        <MenuItem
          key={item.id}
          active={i === cursor}
          item={item}
          setSelected={setSelected}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};
