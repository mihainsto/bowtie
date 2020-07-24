import React from "react";
import "./GameSearchModal.scss";
import { FaSearch } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { games_search } from "../../../Api/games";
import { useLocalStorage } from "@rehooks/local-storage";
import { queryByRole } from "@testing-library/react";

const transformDateIntoYear = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.getFullYear();
};
const SearchResultsComponent = (props) => {
  if (props.searchResults) {
    console.log(props.searchResults);
    return (
      <div className="search-results-container">
        {props.searchResults.map((item) => {
          if (item !== null)
            return (
              <div
                className="search-result-element"
                onClick={() => props.gameItemClicked(item)}
              >
                <div
                  className="image"
                  style={{
                    backgroundImage: "url(https://" + item["image"] + ")",
                  }}
                ></div>
                <div className="search-result-text">
                  {item["name"]}
                  {typeof item["first_release_date"] !== "undefined" &&
                    " (" +
                      transformDateIntoYear(item["first_release_date"]) +
                      ")"}
                </div>
              </div>
            );
        })}
        <div
          className="see-more-btn"
          onClick={props.showMoreClicked}
          style={{
            visibility: props.showMoreStatus ? "visible" : "hidden",
            display: props.emptyResponseMessage ? "none" : "block",
          }}
        >
          Show More
        </div>
        <div
          className="empty-response-message"
          style={{
            display: props.emptyResponseMessage ? "block" : "none",
          }}
        >
          Nothing more to show
        </div>
      </div>
    );
  } else if (props.searchingStatus === true) {
    return (
      <div className="search-results-container">
        <div className="searching-status-label">Searching</div>
      </div>
    );
  } else if (props.emptyResponseMessage === true) {
    return (
      <div className="search-results-container">
      <div
        className="empty-response-message"
        style={{
          display: props.emptyResponseMessage ? "block" : "none",
        }}
      >
        Nothing to show
      </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
const GameSearchModal = (props) => {
  const [jwt] = useLocalStorage("jwt");
  const searchInputElement = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [showMoreStatus, setShowMoreStatus] = useState(false);
  const [searchingStatus, setSearchingStatus] = useState(false);
  const [emptyResponseMessage, setEmptyResponseMessage] = useState(false);
  const [page, setPage] = useState(1);

  const updateSearchData = async (query, page) => {
    console.log({ query: query, page: page });
    if (query.length > 2 && page === 1) {
      const response = await games_search(jwt, query, page);
      console.log(searchInputElement.current.value.length)
      if (searchInputElement.current.value.length <= 2)
        setSearchResults(null)
      else
        setSearchResults(response);
      setShowMoreStatus(true);
      setSearchingStatus(false);
      if (response === null) 
        setEmptyResponseMessage(true);

    } else if (query.length > 2 && page > 1) {
      const response = await games_search(jwt, query, page);
      setSearchResults(searchResults.concat(response));
      if (response === null) {
        setShowMoreStatus(false);
        setEmptyResponseMessage(true);
      } else if (response.length !== 0) {
        setShowMoreStatus(true);
      }
    }
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchQuery);
      setPage(1);
      updateSearchData(searchQuery, page);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const searchInputChanged = (event) => {
    if (event.target.value.length <= 2)
      setSearchingStatus(false);
    else
      setSearchingStatus(true);
    setEmptyResponseMessage(false);
    setSearchResults(null);
    setPage(1);
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    if (props.status) {
      searchInputElement.current.focus();
    }
  }, [props.status]);

  const showMoreClicked = () => {
    updateSearchData(searchQuery, page + 1);
    setShowMoreStatus(false);
    setPage(page + 1);
  };
  const cleanModal = () => {
    setSearchQuery("");
    setSearchResults(null);
    setShowMoreStatus(false);
    setSearchingStatus(false);
    setEmptyResponseMessage(false);
  }
  return (
    <div
      className="modal-wrapper"
      onClick={(event) => {
        props.modalOutsideClicked(event);
        cleanModal()
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
          showMoreStatus={showMoreStatus}
          searchingStatus={searchingStatus}
          gameItemClicked={(event) => {
            props.gameItemClicked(event);
            cleanModal()
          }}
          emptyResponseMessage={emptyResponseMessage}
        />
      </div>
    </div>
  );
};

export default GameSearchModal;
