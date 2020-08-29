import React from "react";
import FloatingMenu from "../../Layout/FloatingMenu/FloatingMenu";
import "./MainNav.scss";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "components/Navs/Menu/Menu";
import { useState, useRef, useEffect } from "react";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import useWindowSize from "Hooks/useWindowSize";
import logo from "logo.svg";

const MainNav = () => {
  const size = useWindowSize();
  const [menuToggle, setMenuToggle] = useState(false);
  const [notificationsMenuToggle, setNotificationsMenuToggle] = useState(false);
  const [usernameMenuToggle, setUsernameMenuToggle] = useState(false);
  const [usernameRect, setUsernameRect] = useState(false);
  const [notificationsRect, setNotificationsRect] = useState(false);
  const usernameButtonRef = useRef(null);
  const notificationsRef = useRef(null);

  useEffect(() => {
    setUsernameRect(usernameButtonRef.current.getBoundingClientRect());
    setNotificationsRect(notificationsRef.current.getBoundingClientRect());
  }, [size]);

  return (
    <div>
      <nav className="main-nav">
        <img src={logo} className="logo"/>
        <span className="buttons-container">
          <span
            className="username-button"
            ref={usernameButtonRef}
            onClick={() => setUsernameMenuToggle(!usernameMenuToggle)}
          >
            Username
            {!usernameMenuToggle ? (
              <ExpandMoreIcon className="icon" />
            ) : (
              <ExpandLessIcon className="icon" />
            )}
          </span>

          <span
            ref={notificationsRef}
            onClick={() => setNotificationsMenuToggle(!notificationsMenuToggle)}
          >
            <NotificationsNoneIcon className="icon" />
          </span>

          <span onClick={() => setMenuToggle(!menuToggle)}>
            {!menuToggle ? (
              <MenuIcon className="icon" />
            ) : (
              <MenuOpenIcon className="icon" />
            )}
          </span>
        </span>
        <FloatingMenu
          open={usernameMenuToggle}
          closeMenu={() => setUsernameMenuToggle(!usernameMenuToggle)}
          x={usernameRect ? usernameRect.x - 15 : 0}
          y={usernameRect ? usernameRect.y + 25 : 0}
          width={100}
        >
          <div>Logout</div>
        </FloatingMenu>

        <FloatingMenu
          open={notificationsMenuToggle}
          closeMenu={() => setNotificationsMenuToggle(!notificationsMenuToggle)}
          x={notificationsRect ? notificationsRect.x - 20 : 0}
          y={notificationsRect ? notificationsRect.y + 25 : 0}
        />
      </nav>
      <div className={!menuToggle ? "display-none" : ""}>
        <Menu closeMenu={() => setMenuToggle(!menuToggle)} />
      </div>
    </div>
  );
};

export default MainNav;
