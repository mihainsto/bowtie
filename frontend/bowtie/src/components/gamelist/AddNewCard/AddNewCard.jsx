import React from "react"

import "./AddNewCard.scss"

const Card = (props) => {
    return (
      <div className="addnewcard-card">
        <div className="addnewcard-text">
          {props.cardText}
        </div>
      </div>
    )
  }

export default Card