import { FaGithub } from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { GrTopCorner } from "react-icons/gr";
import ResumeFile from "./assets/Resume_Leo_Chaillard.pdf";

const useIcons = () => {
  const Email = () => {
    return (
      <a href="mailto:leochaillard@gmail.com"><SiGmail/></a>
    );
  };

  const Git = () => {
    return (
      <a href="https://github.com/LeoChaillard" target="_blank" rel="noreferrer"><FaGithub/></a>
    );
  };

  const Resume = () => {
    return (
      <a href={ResumeFile} target="_blank" rel="noopener noreferrer"><RiFileUserLine/></a>
    );
  };

  return {Email, Git, Resume};
};

export function Header() {
  const {Email, Git, Resume} = useIcons();
  return (
    <div className="header">
      <GrTopCorner className="top-left-frame"/>
      <div className="left">
        <h3>Leo Chaillard</h3>
      </div>
      <div className="right">
        <Email/>
        <Git/>
        <Resume/>
      </div>
    </div>
  );
}
