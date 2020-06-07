import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./Card.scss";

const Card = (props) => {
  return (
    <Draggable draggableId={props.cardId} index={props.index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="card-card">
            <div className="card-text">{props.cardText}</div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
