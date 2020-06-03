import React from "react"

import "./SearchGameCard.scss"

const SearchGameCard = React.forwardRef((props, ref) => {
    return (
      <div className="searchgamecard-card">
        <div className="searchgamecard-text">
          <input type="text" 
          placeholder="Search for a game" 
          className="searchgamecard-input"
          onChange={props.onChangeValue}
          ref = {ref}
          />
        </div>
      </div>
    )
  })

export default SearchGameCard