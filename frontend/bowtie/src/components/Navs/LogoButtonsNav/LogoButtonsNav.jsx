import React from "react";
import "./LogoButtonsNav.scss";

const LogoButtonsNav = () => {
  return (
    <nav className = "logobuttonsnav">
      <span className="logo">Bowtie</span>

      <div className="registerbtn">
        <div type="button" className="registerbtn-text">
          Register
        </div>
      </div>

      <div className="loginbtn">
        <div className="loginbtn-text">Log In</div>
      </div>
    </nav>

  );
};

export default LogoButtonsNav;
