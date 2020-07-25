import React from "react";
import "./LoginPage.scss";
import LogoNav from "../Navs/LogoNav/LogoNav";
import BlueButton from "../Buttons/BlueButton/BlueButton";
import Checkboxs1 from "../Checkboxes/Checkboxs1/Checkboxs1";
import { useState } from "react";
import { Link, useHistory} from "react-router-dom";
import { api_login } from "../../Api/user";
import { writeStorage } from "@rehooks/local-storage";
import BeatLoader from "react-spinners/BeatLoader";
const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberCheck, setRememberCheck] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showIncorrectFalir, setShowIncorrectFlair] = useState(false)
  const inputFieldChanged = (value, setState) => {
    setState(value.target.value);
  };
  const loginClicked = async () => {
    setButtonDisabled(true);
    const response = await api_login(email, password);
    console.log(response["success"]);
    if (response["success"] === true) {
      console.log("Login Succes");
      //TODO: Insecure, to change in the future
      writeStorage("jwt", response["token"]);
      history.push("/board");

    } else {
      setButtonDisabled(false)
      setShowIncorrectFlair(true)
      console.log("Login failed");
    }
  };
  const checkboxClicked = (value, setState) => {
    if (rememberCheck === true) setState(false);
    else setState(true);
  };
  const resetpassClicked = () => {
    console.log("reset pass clicked");
  };
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
        loginClicked()
    }
  }
  const spinner = <BeatLoader size={30} color={"#eef7ff"} css={`margin-top: 5px;`}></BeatLoader>;
  return (
    <div className="loginpage">
      <LogoNav />
      <div className="form-container">
        <div className="form-wrapper">
          <div className="buttons">
            <span className="login-btn">Log In</span>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span className="register-btn">Register</span>
            </Link>
          </div>
          <div className={!showIncorrectFalir?"display-none":""}>
            <div className= "incorrect-flair" >
              Incorrect email or password. 
            </div>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(value) => inputFieldChanged(value, setEmail)}
              onKeyPress={handleKeyPress}
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(value) => inputFieldChanged(value, setPassword)}
              onKeyPress={handleKeyPress}
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
            <BlueButton
              text="Log In"
              onClick={loginClicked}
              spinner={spinner}
              disabled={buttonDisabled}
            />
          </div>
          <div className="forgot-pass-text">
            Forgot password?{" "}
            <span className="reset-pass-btn" onClick={resetpassClicked}>
              {" "}
              Reset{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
