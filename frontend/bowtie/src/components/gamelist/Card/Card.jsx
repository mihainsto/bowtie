import React from "react"

import "./Card.scss"

const Card = (props) => {
    return (
      <div className="card-card">
        <div className="card-text">
          {props.cardText}
        </div>
      </div>
    )
  }

export default Card