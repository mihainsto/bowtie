import React from "react";
import "./LoginPage.scss";
import LogoNav from "../Navs/LogoNav/LogoNav";
import BlueButton from "../Buttons/BlueButton/BlueButton";
import Checkboxs1 from "../Checkboxes/Checkboxs1/Checkboxs1";
import { useState } from "react";
import {Link} from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberCheck, setRememberCheck] = useState(false);
  const inputFieldChanged = (value, setState) => {
    setState(value.target.value);
  };
  const loginClicked = (value) => {
    console.log("login clicked")
  };
  const checkboxClicked = (value, setState) => {
    if (rememberCheck === true)
      setState(false)
    else
      setState(true)
  };
  const resetpassClicked = () => {
    console.log("reset pass clicked")
  }
  return (
    <div className="loginpage">
      <LogoNav />
      <div className="form-container">
        <div className="form-wrapper">
          <div className="buttons">
            <span className="login-btn">Log In</span>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <span className="register-btn">Register</span>
            </Link>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(value) => inputFieldChanged(value, setEmail)}
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(value) => inputFieldChanged(value, setPassword)}
            ></input>
          </div>

          <div className="remember-checkbox">
            <Checkboxs1
              checked={rememberCheck}
              onClick={(value) => checkboxClicked(value, setRememberCheck)}
            />
            <span>Remember me</span>
          </div>
          <div className="login-submit-btn">
            <BlueButton text="Log In" onClick={loginClicked} />
          </div>
          <div className="forgot-pass-text">
            Forgot password? <span className="reset-pass-btn" onClick={resetpassClicked}> Reset </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
