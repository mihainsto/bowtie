import React from "react";
import "./RegisterPage.scss";
import LogoNav from "../Navs/LogoNav/LogoNav";
import BlueButton from "../Buttons/BlueButton/BlueButton";
import Checkboxs1 from "../Checkboxes/Checkboxs1/Checkboxs1";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberCheck, setRememberCheck] = useState(false);
  const inputFieldChanged = (value, setState) => {
    setState(value.target.value);
  };
  const registerClicked = (value) => {
    console.log("register clicked");
  };

  return (
    <div className="registerpage">
      <LogoNav />
      <div className="form-container">
        <div className="form-wrapper">
          <div className="buttons">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="login-btn">Log In</span>
            </Link>
            <span className="register-btn">Register</span>
          </div>

          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(value) => inputFieldChanged(value, setUsername)}
            ></input>
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

          <div className="register-submit-btn">
            <BlueButton text="Register" onClick={registerClicked} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
