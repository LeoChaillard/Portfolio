import { FaCircle } from "react-icons/fa";
import { GiPlainArrow } from "react-icons/gi";

export const Joystick = () =>  {
    return (
      <div className="joystick">
        <div className="circle"/>
        <div id="left-directional" className="triangle triangle-left"/>
        <div id="top-directional" className="triangle triangle-top"/>        
        <div id="right-directional" className="triangle triangle-right"/>
        <div id="bottom-directional" className="triangle triangle-bottom"/>
      </div>
    );
}
