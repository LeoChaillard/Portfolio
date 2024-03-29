import React from "react";
import { useState, useEffect } from "react";
import { about } from "./aboutData.json";
import { aboutFR } from "./aboutDataFR.json";
import { Localization } from "./Localization";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { Screens } from "./Screens"
import { Controller } from "./Controller"
import { KeyInput } from "./KeyInput"

import "./style.css"

export function About({localization, setScreen}) {

  const aboutLocal = localization === Localization.EN ? about : aboutFR;

  return (
    <div id="about" className="about">
      <FaLongArrowAltLeft onClick={() => setScreen(Screens.Menu)} className="exit-arrow"/>
        {aboutLocal.map((about, idx) => {
          return (
            <p key={idx} className="about-content">{about.description}</p>
            );
          })}
    </div>
  );
}
