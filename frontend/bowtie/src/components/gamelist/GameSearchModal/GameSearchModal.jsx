import React from "react";
import "./GameSearchModal.scss";
import { FaSearch } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
const GameSearchModal = (props) => {
  const searchInputElement = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputChanged = (event) => {
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    if (props.status) {
      searchInputElement.current.focus();
    }
  }, [props.status]);
  return (
    <div
      className="modal-wrapper"
      onClick={(event) => {
        props.modalOutsideClicked(event);
        setSearchQuery("");
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
      </div>
    </div>
  );
};

export default GameSearchModal;
