import React from "react"

import "./AddNewCard.scss"

const AddNewCard = (props) => {

  const divStyle = {
    height: props.height.toString() + 'px',
    lineHeight: props.height.toString() + 'px'
  };

  console.log(divStyle)
    return (
      <div className="addnewcard-card" style={divStyle}>
        <div className="addnewcard-text">
          {props.cardText}
        </div>
      </div>
    )
  }

export default AddNewCard