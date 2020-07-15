import React from "react";
import "./GameSearchModal.scss";
import { FaSearch } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
const dumySearchResults = [
  "Mini Metro",
  "Metro Exodus",
  "Metro Last Light",
  "Metro 2033",
];

const SearchResultsComponent = (props) => {
  if (props.searchResults) {
    return (
      <div className="search-results-container">
        {props.searchResults.map((item) => (
          <div className="search-result-element">{item}</div>
        ))}
        <div className="see-more-btn" onClick={props.showMoreClicked}>
          Show More
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
const GameSearchModal = (props) => {
  const searchInputElement = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const searchInputChanged = (event) => {
    setSearchQuery(event.target.value);
    setSearchResults(dumySearchResults);
  };
  useEffect(() => {
    if (props.status) {
      searchInputElement.current.focus();
    }
  }, [props.status]);

  const showMoreClicked = () => {
    const newData = ["Life Is Strange 2", "Metro Last Light", "Just Cause 4"]
    setSearchResults(searchResults.concat(newData));
  };
  return (
    <div
      className="modal-wrapper"
      onClick={(event) => {
        props.modalOutsideClicked(event);
        setSearchQuery("");
        setSearchResults(null);
      }}
      style={{ display: props.status ? "block" : "none" }}
    >
      <div
        className="game-search-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="icon">
          {" "}
          <FaSearch size="40" style={{ color: "rgb(238,247,255)" }} />{" "}
        </span>

        <span className="search-box">
          <input
            type="text"
            placeholder="Search for a game"
            ref={searchInputElement}
            value={searchQuery}
            onChange={searchInputChanged}
          ></input>
        </span>

        <SearchResultsComponent
          searchResults={searchResults}
          showMoreClicked={showMoreClicked}
        />
      </div>
    </div>
  );
};

export default GameSearchModal;
