import { useState, useEffect } from "react";
import React from "react";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { Screens } from "./Screens"

import "./style.css"

export function About({setScreen}) {
  return (
    <div className="about">
      <FaLongArrowAltLeft onClick={() => setScreen(Screens.Menu)} className="exit-arrow"/>
      <p className="about-content">Hello! I'm a french engineering student currently in my final year.
        I am studying computer science and I have specialized in UX and UI targeted to applications
        in virtual reality. I would like to professionally move towards the video game industry, and I am terefore
        looking for a 6-month internship in this field. I am also passionate about language learning, martial arts
        and endurance sports.</p>
    </div>
  );
}
