import React from "react";
import "./LogoButtonsNav.scss";
import BlueButton from "../../Buttons/BlueButton/BlueButton";
const LogoButtonsNav = () => {
  return (
    <nav className="logo-buttons-nav">
      <span className="logo">Bowtie</span>

      <div className="register-btn">
        <BlueButton text={"Register"} />
      </div>

      <div className="login-btn">
        <div className="login-btn-text">Log In</div>
      </div>
    </nav>
  );
};

export default LogoButtonsNav;
