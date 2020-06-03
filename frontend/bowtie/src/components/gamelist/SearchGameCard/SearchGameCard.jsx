import React from "react"

import "./SearchGameCard.scss"

const SearchGameCard = (props) => {
    return (
      <div className="searchgamecard-card">
        <div className="searchgamecard-text">
          <input type="text" 
          placeholder="Search for a game" 
          className="searchgamecard-input"
          onChange={props.onChangeValue}
          />
        </div>
      </div>
    )
  }

export default SearchGameCard