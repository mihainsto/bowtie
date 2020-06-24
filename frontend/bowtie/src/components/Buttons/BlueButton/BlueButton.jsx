import React from "react";
import "./BlueButton.scss";


const BlueButton = (props) => {
    return (
        <button className="bluebutton" onClick={props.onClick}>
        <div type="button" className="bluebutton-text">
          {props.text}
        </div>
      </button>
    )
}

export default BlueButton