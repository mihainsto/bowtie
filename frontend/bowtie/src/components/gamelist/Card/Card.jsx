import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./Card.scss";
import CardImage from "../CardImage/CardImage";

const processLaunchDate = (date) => {
  return date;
};
// Component that renders a card with a game and a image
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
            <div className="card-content">
              {props.cardImage ? <CardImage image={props.cardImage} /> : null}
              <div className="card-text">{props.cardText}</div>
              {!typeof props.launchDate === "undefined" ? (
                <div className="card-release-date">
                  Launch date:{" "}
                  <span className="date">
                    {processLaunchDate("29 August 2020")}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
