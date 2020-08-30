import React from "react";
import Checkboxs1 from "../../Checkboxes/Checkboxs1/Checkboxs1";
import "./Menu.scss";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CloseIcon from "@material-ui/icons/Close";
import { useState, useContext, useEffect } from "react";
import { OptionsContext } from "Context.js";

const BoardSettings = (props) => {
  const [options, setOptions] = useContext(OptionsContext);
  return (
    <div className="settings-menu">
      <div className="menu-title">
        <span>
          <ChevronLeftIcon
            className="icon"
            onClick={() => props.changeMenu(0)}
          />
        </span>
        <span className="menu-title-text">Board settings</span>
        <span onClick={props.closeMenu}>
          <CloseIcon className="close-icon" />
        </span>
      </div>
      <div className="menu-subsection">Cards:</div>
      <div
        className="menu-item"
        onClick={() => setOptions({ ...options, images: !options.images })}
      >
        <span>
          <Checkboxs1 size={18} checked={options.images} />
        </span>
        <span>Show images</span>
      </div>

      <div
        className="menu-item"
        onClick={() =>
          setOptions({
            ...options,
            release_date_released: !options.release_date_released,
          })
        }
      >
        <span>
          <Checkboxs1 size={18} checked={options.release_date_released} />
        </span>
        <span>Show release date for released games </span>
      </div>
      <div
        className="menu-item"
        onClick={() =>
          setOptions({
            ...options,
            release_date_unreleased: !options.release_date_unreleased,
          })
        }
      >
        <Checkboxs1 size={18} checked={options.release_date_unreleased} />
        <span>Show release date for unreleased games</span>
      </div>
    </div>
  );
};

const UserSettings = (props) => {
  return (
    <div>
      <div className="menu-title">
        <span>
          <ChevronLeftIcon
            className="icon"
            onClick={() => props.changeMenu(0)}
          />
        </span>
        <span className="menu-title-text">User settings</span>
        <span>
          <CloseIcon className="close-icon" />
        </span>
      </div>
      <div className="menu-item">Logout</div>
    </div>
  );
};

const DefaultMenu = (props) => {
  return (
    <div>
      <div className="menu-title">
        <span>Menu</span>
        <span onClick={props.closeMenu}>
          <CloseIcon className="close-icon" />
        </span>
      </div>
      <div
        className="menu-item user-settings-item"
        onClick={() => props.changeMenu(1)}
      >
        <span>User settings</span>
        <span >
          <ChevronRightIcon className="icon" />
        </span>
      </div>
      <div className="menu-item" onClick={() => props.changeMenu(2)}>
        <span>Board settings</span>
        <span>
          <ChevronRightIcon className="icon" />
        </span>
      </div>
    </div>
  );
};
const Menu = (props) => {
  const [activeMenu, setActiveMenu] = useState(0);

  if (activeMenu === 0) {
    return (
      <div className="menu">
        <DefaultMenu {...props} changeMenu={setActiveMenu} />
      </div>
    );
  }
  if (activeMenu === 1) {
    return (
      <div className="menu">
        <UserSettings {...props} changeMenu={setActiveMenu} />
      </div>
    );
  }
  if (activeMenu === 2) {
    return (
      <div className="menu">
        <BoardSettings {...props} changeMenu={setActiveMenu} />
      </div>
    );
  }
  return <div className="menu"></div>;
};

export default Menu;
