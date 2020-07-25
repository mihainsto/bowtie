import React from "react";
import "./RegisterPage.scss";
import LogoNav from "../Navs/LogoNav/LogoNav";
import BlueButton from "../Buttons/BlueButton/BlueButton";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {api_register} from "../../Api/user"
import BeatLoader from "react-spinners/BeatLoader";

const RegisterPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showIncorrectFalir, setShowIncorrectFlair] = useState(false)
  const [incorrectFlairText, setIncorrectFlairText] = useState("")
  const [showSuccessFalir, setShowSuccessFalir] = useState(false)
  const inputFieldChanged = (value, setState) => {
    setState(value.target.value);
  };
  const registerClicked = async (value) => {
    setButtonDisabled(true);
    const response = await api_register(username, email, password);
    console.log(response);
    if (response["success"] === true) {
      console.log("Register Succes");
      setShowIncorrectFlair(false)
      setShowSuccessFalir(true)
      setTimeout(() =>{
        history.push("/login");
    }, 1500);

    } else {
      setIncorrectFlairText(response.response.data)
      setButtonDisabled(false)
      setShowIncorrectFlair(true)
      // console.log("Register failed");
    }
  };
  const spinner = <BeatLoader size={30} color={"#eef7ff"} css={`margin-top: 5px;`}></BeatLoader>;
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
          <div className={!showIncorrectFalir?"display-none":""}>
            <div className= "incorrect-flair" >
              {incorrectFlairText}
            </div>
          </div>
          <div className={!showSuccessFalir?"display-none":""}>
            <div className = "success-text">
                Successfully registered, now please log in.
            </div>
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
              type="text"
              placeholder="Username"
              value={username}
              onChange={(value) => inputFieldChanged(value, setUsername)}
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
            <BlueButton text="Register" onClick={registerClicked} spinner={spinner}
              disabled={buttonDisabled}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
