import React from "react"
import "./TitleCard.scss"
import {RiMenuAddLine} from "react-icons/ri"
// Component that renders the title card of a list
const TitleCard = (props) => {
    return (
      <div className="titleCard-card">
        <div className="titleCard-title-text">
          {props.title}
        </div>
        <span className="plusIcon" onClick={props.onAddNewCardClick}>
          <RiMenuAddLine size="40"/>
          </span>
      </div>
    )
  }

export default TitleCard