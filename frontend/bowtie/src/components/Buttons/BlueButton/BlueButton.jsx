import React from "react";
import "./BlueButton.scss";


const BlueButton = (props) => {
    return (
        <div className="registerbtn">
        <div type="button" className="registerbtn-text">
          {props.text}
        </div>
      </div>
    )
}

export default BlueButton