import React from "react";
import "./MainNav.scss";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
const MainNav = () => {
  return (
    <nav className="main-nav">
      <span className="logo">Bowtie</span>
      <span className="buttons-container">
        <span className="username-button">
          Username
          <ExpandMoreIcon className="icon" />
        </span>
        <span>
          <NotificationsNoneIcon className="icon" />
        </span>

        <span>
          <MenuIcon className="icon" />
        </span>
      </span>
    </nav>
  );
};

export default MainNav;
