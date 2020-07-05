import React from "react"

import "./AddNewCard.scss"

const AddNewCard = (props) => {

  const divStyle = {
    height: props.height.toString() + 'px',
    lineHeight: props.height.toString() + 'px'
  };

    return (
      <div className="addnewcard-card" style={divStyle} onClick={props.onClick}>
        <div className="addnewcard-text">
          {props.cardText}
        </div>
      </div>
    )
  }

export default AddNewCard