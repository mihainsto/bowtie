import React from "react";
import "./BlueButton.scss";


const BlueButton = (props) => {
    if (!props.disabled){
      return (
        <button className="bluebutton" onClick={props.onClick}>
        <div type="button" className="bluebutton-text">
          {props.text}
        </div>
      </button>
    )
    } else if(props.disabled && props.spinner){
      return (
        <button className="bluebutton" >
        <div type="button" className="bluebutton-text">
          {props.spinner}
        </div>
      </button>
      )
    }
    else {
      return (
      <button className="bluebutton" >
        <div type="button" className="bluebutton-text">
        </div>
      </button>
      )
    }

}

export default BlueButton