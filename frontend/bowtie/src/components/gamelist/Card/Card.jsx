import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./Card.scss";
import CardImage from "../CardImage/CardImage"
const Card = (props) => {
  return (
    <Draggable
      draggableId={props.cardId}
      index={props.index}
      key={props.cardId}
    >
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          // TODO: Style when dragging
          //isDragging={snapshot.isDragging}
        >
          <div className="card-card">
            <div className="card-text">
              <CardImage image={props.cardImage} />
              {props.cardText}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
