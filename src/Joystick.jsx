import { FaCircle } from "react-icons/fa";
import { GiPlainArrow } from "react-icons/gi";

export const Joystick = () =>  {
    return (
      <div className="joystick">
        <FaCircle className="circle"/>
        <GiPlainArrow id="left-directional" className="triangle triangle-left"/>
        <GiPlainArrow id="right-directional" className="triangle triangle-right"/>
        <GiPlainArrow id="top-directional" className="triangle triangle-top"/>
        <GiPlainArrow id="bottom-directional" className="triangle triangle-bottom"/>
      </div>
    );
}
