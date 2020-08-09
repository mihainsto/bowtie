import React from "react";
import "./MainNav.scss";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "components/Navs/Menu/Menu";
import {useState} from "react";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
const MainNav = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    if (menuToggle === true){
      setMenuToggle(false)
    } else
    {
      setMenuToggle(true)
    }
  }
  return (
    <div>
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

          <span onClick={toggleMenu}>
            {!menuToggle? <MenuIcon className="icon"/>:<MenuOpenIcon className="icon" />}
          </span>
        </span>
        
      </nav>
        <div className={!menuToggle? "display-none": ""} >
        <Menu closeMenu={toggleMenu}/>
        </div>
    </div>
  );
};

export default MainNav;
