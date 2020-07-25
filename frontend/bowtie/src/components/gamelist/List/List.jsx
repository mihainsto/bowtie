/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import TitleCard from "../TitleCard/TitleCard";
import Card from "../Card/Card";
import "./List.scss";
import { Droppable, Draggable } from "react-beautiful-dnd";

// Component for the list
// This components loops trough the list cards and
// uses Card component to render game cards
const List = (props) => {

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
