import React from "react"

import "./AddNewCard.scss"

const AddNewCard = (props) => {
    return (
      <div className="addnewcard-card">
        <div className="addnewcard-text">
          {props.cardText}
        </div>
      </div>
    )
  }

export default AddNewCard