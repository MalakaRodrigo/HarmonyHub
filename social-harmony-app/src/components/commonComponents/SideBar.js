import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import {
  faCoffee,
  faMusic,
  faCode,
  faBook,
  faFilm,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons"; // Import different icons
import logo from "../../assets/images/logo.png";
import logoOnly from "../../assets/images/logoOnly.png";
import SideBarLogo from "./SideBarLogo";

const Sidebar = ({ getSideBarStatus }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    getSideBarStatus(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    getSideBarStatus(false);
  };

  const menuItems = [
    { label: "Resource Hub", icon: faCoffee },
    { label: "Forums", icon: faMusic },
    { label: "Surveys", icon: faCode },
    { label: "Interactions", icon: faBook },
    { label: "Settings", icon: faBook },
  ];

  return (
    <div
      className={`sidebar ${isHovered ? "active" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        <SideBarLogo logo={isHovered ? logo : logoOnly} logoWidth={isHovered ? 200 : 50}/>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
           {isHovered && <span className="padded-icons-left">
              <FontAwesomeIcon icon={menuItem.icon} />
            </span>}
            {menuItem.label}
            {!isHovered && <span className="padded-icons-right">
              <FontAwesomeIcon icon={menuItem.icon} />
            </span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
