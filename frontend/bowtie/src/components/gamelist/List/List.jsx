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
import { Droppable, Draggable } from "react-beautiful-dnd";

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
    <Draggable
      draggableId={props.listId}
      index={props.index}
      key={props.listId}
    >
      {(provided) => (
        <div
          className="list-list-wrapper"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="list-title-card" {...provided.dragHandleProps}>
            <TitleCard title={props.title} />
          </div>
          <div className="list-list list-overflow">
            <Droppable droppableId={props.listId} type="card">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {props.listCards.map((item, index) => (
                    <div className="list-card">
                      <Card
                        cardText={item.cardTitle}
                        cardId={item.cardId}
                        index={index}
                      />
                    </div>
                  ))}
                  <div className="list-padding-emptyadd"></div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

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
      )}
    </Draggable>
  );
};

export default List;
