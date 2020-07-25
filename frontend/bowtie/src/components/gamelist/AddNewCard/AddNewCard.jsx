import React from "react"

import "./AddNewCard.scss"

// The button that sits in the right of the title
// The button purpose is to fire the modal on click
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