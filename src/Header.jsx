import { FaGithub } from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { GrTopCorner } from "react-icons/gr";
import ResumeFileEN from "./assets/CV_Léo_Chaillard.pdf";
import ResumeFileFR from "./assets/CV_Léo_Chaillard_FR.pdf";
import Logo from "./assets/logo.png";
import { Localization } from "./Localization"
import Fr from "./assets/Fr.png";
import En from "./assets/En.png";

const useIcons = () => {
  const Email = ({showPopup, hidePopup}) => {
    return (
      <a onMouseEnter={() => showPopup("email-popup")} onMouseLeave={() => hidePopup("email-popup")} href="mailto:leochaillard@gmail.com">
        <SiGmail className="scale-icon"/>
      </a>
    );
  };

  const Git = ({showPopup, hidePopup}) => {
    return (
      <a onMouseEnter={() => showPopup("git-popup")} onMouseLeave={() => hidePopup("git-popup")} href="https://github.com/LeoChaillard" target="_blank" rel="noreferrer">
        <FaGithub className="scale-icon"/>
      </a>
    );
  };

  const Resume = ({resume, showPopup, hidePopup}) => {
    return (
      <a onMouseEnter={() => showPopup("resume-popup")} onMouseLeave={() => hidePopup("resume-popup")} href={resume} target="_blank" rel="noopener noreferrer">
        <RiFileUserLine className="scale-icon"/>
      </a>
    );
  };

  return {Email, Git, Resume};
};

export function Header({localization, setLocalization}) {
  const {Email, Git, Resume} = useIcons();

  const resume = localization === Localization.EN ? ResumeFileEN : ResumeFileFR;
  const emailText = localization == Localization.EN ? "My E-mail: leochaillard@gmail.com" : "Mon E-mail : leochaillard@gmail.com";
  const gitText = localization == Localization.EN ? "My GitHub Page" : "Ma Page GitHub";
  const resumeText = localization == Localization.EN ? "My Resume" : "Mon CV";

  const showPopup = (popupID) => {
      const popup = document.getElementById(popupID);

      popup.classList.remove("popup-hidden");
      popup.classList.add("popup-visible");

      const width = document.getElementById(popupID).offsetWidth;
      popup.style.marginLeft = (-width/2) + "px";
  };

  const hidePopup = (popupID) => {
    const popup = document.getElementById(popupID);
    popup.classList.add("popup-hidden");
    popup.classList.remove("popup-visible");
  };

  const switchLanguage = () => {
    if (localization === Localization.EN)
    {
      setLocalization(Localization.FR);
    }
    else
    {
      setLocalization(Localization.EN);
    }
    /*location.reload();*/
  };

  return (
    <div className="header">
      <GrTopCorner className="top-left-frame"/>
      <div className="left">
        {/*}<img src={Logo} className="logo"/>*/}
        {/*<h3>Leo Chaillard</h3>*/}
      </div>
      <div className="right">

        <div className="icon">
          <Email showPopup={showPopup} hidePopup={hidePopup}/>
          <div id="email-popup" className="popup-hidden">{emailText}</div>
        </div>
        <div className="icon">
          <Git showPopup={showPopup} hidePopup={hidePopup}/>
          <div id="git-popup" className="popup-hidden">{gitText}</div>
        </div>
        <div className="icon">
          <Resume resume={resume} showPopup={showPopup} hidePopup={hidePopup}/>
          <div id="resume-popup" className="popup-hidden">{resumeText}</div>
        </div>

        <div>
          <img onClick={() => switchLanguage()} src={localization === Localization.EN ? Fr : En} className="logo"/>
        </div>

      </div>
    </div>
  );
}
