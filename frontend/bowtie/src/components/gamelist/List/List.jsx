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
            <TitleCard title={props.title} onAddNewCardClick={props.onAddNewCardClick}/>
          </div>
          <div className="list-list list-overflow">
            <Droppable droppableId={props.listId} type="card">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {props.listCards.map((item, index) => (
                    <div className="list-card">
                      <Card
                        cardText={item.cardTitle}
                        cardImage={item.cardImage}
                        cardId={item.cardId}
                        index={index}
                      />
                    </div>
                  ))}
                  <div className="list-padding-emptyadd"></div>
                  {provided.placeholder}
                  <div className="list-bottom-padding"></div> 
                </div>
              )}
            </Droppable>
                  
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default List;
