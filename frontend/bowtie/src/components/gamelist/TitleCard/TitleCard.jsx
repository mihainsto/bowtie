import React from "react"

import "./TitleCard.scss"

const TitleCard = (props) => {
    return (
      <div className="titleCard-card">
        <div className="titleCard-title-text">
          {props.title}
        </div>
      </div>
    )
  }

export default TitleCard