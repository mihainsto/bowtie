import React from "react";
import "./LoginPage.scss";
import LogoNav from "../Navs/LogoNav/LogoNav";
const LoginPage = () => {
  return (
    <div className="loginpage">
      <LogoNav />
      <div className="form-container">
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
        </div>
    </div>
  );
};

export default LoginPage;
