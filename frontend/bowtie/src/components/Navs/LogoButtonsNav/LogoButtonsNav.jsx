import React from "react";
import "./LogoButtonsNav.scss";
import BlueButton from "../../Buttons/BlueButton/BlueButton";
const LogoButtonsNav = () => {
  return (
    <nav className="logobuttonsnav">
      <span className="logo">Bowtie</span>

      <div className="register-btn">
        <BlueButton text={"Register"} />
      </div>

      <div className="loginbtn">
        <div className="loginbtn-text">Log In</div>
      </div>
    </nav>
  );
};

export default LogoButtonsNav;
