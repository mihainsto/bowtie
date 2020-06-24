import React from "react";
import "./LoginPage.scss";
import LogoNav from "../Navs/LogoNav/LogoNav";
import BlueButton from "../Buttons/BlueButton/BlueButton";
import Checkboxs1 from "../Checkboxes/Checkboxs1/Checkboxs1";

const LoginPage = () => {
  return (
    <div className="loginpage">
      <LogoNav />
      <div className="form-container">
        <div className="form-wrapper">
          <div className="buttons">
            <span className="login-btn">Log In</span>
            <span className="register-btn">Register</span>
          </div>

          <div>
            <input type="email" placeholder="Email"></input>
          </div>
          <div>
            <input type="password" placeholder="Password"></input>
          </div>

          <div className="remember-checkbox">
            <Checkboxs1 />
            <span>Remember me</span>
          </div>
          <div className="login-submit-btn">
            <BlueButton text="Log In" />
          </div>
          <div className="forgot-pass-text">
            Forgot password? <span className="reset-pass-btn"> Reset </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
