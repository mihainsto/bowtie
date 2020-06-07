/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useState, useRef } from "react";

//import TitleCard from "/../TitleCard/TitleCard"
import TitleCard from "../TitleCard/TitleCard";
import Card from "../Card/Card";
import AddNewCard from "../AddNewCard/AddNewCard";
import SearchGameCard from "../SearchGameCard/SearchGameCard";
import "./List.scss";

const List = (props) => {
  const [newEntry, setNewEntry] = useState("");
  const [addButtonVisibile, setAddButtonVisibile] = useState(
    "list-visibility-visible"
  );
  const [searchVisible, setSearchVisible] = useState("list-visibility-hidden");
  const searchElement = useRef(null);

  const searchOnChangeValueHandler = (val) => {
    setNewEntry(val.target.value);
  };

  const addNewClicked = () => {
    searchElement.current.focus();
  };
  const searchFocused = () => {
    setAddButtonVisibile("list-visibility-hidden");
    setSearchVisible("list-visibility-visible");
  };
  const searchBlured = () => {
    setAddButtonVisibile("list-visibility-visible");
    setSearchVisible("list-visibility-hidden");
  };
  return (
    <div className="list-list-wrapper">
      <div className="list-title-card">
        <TitleCard title={props.listItems.title} />
      </div>
      <div className="list-list list-overflow">
        {props.listItems.items.map((item) => (
          <div className="list-card">
            <Card cardText={item} />
          </div>
        ))}
        <div className="list-card" className={searchVisible}>
          <SearchGameCard
            onChangeValue={searchOnChangeValueHandler}
            ref={searchElement}
            focused={searchFocused}
            blured={searchBlured}
          />
        </div>
        <div className="list-add-new-wrapper">
          <div
            className="list-card"
            className={addButtonVisibile}
            onClick={addNewClicked}
          >
            <AddNewCard cardText="+ Add new game" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
