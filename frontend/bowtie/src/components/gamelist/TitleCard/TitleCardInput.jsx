import React from "react"

import "./TitleCard.scss"

// Component that contains the title card with an input element in it
// Is used when a user adds a new list
const TitleCard = React.forwardRef((props, ref) => {
    return (
      <div className="titleCard-card">
        <div className="titleCard-title-text">
        <input type="text" 
          placeholder="Enter the title of the list" 
          className="titleCard-card-input"
          onChange={props.onChangeValue}
          ref = {ref}
          onFocus= {props.focused}
          onBlur= {props.blured}
          onKeyPress= {props.onKeyPress}
          value= {props.value}
          />
        </div>
      </div>
    )
  })

export default TitleCard