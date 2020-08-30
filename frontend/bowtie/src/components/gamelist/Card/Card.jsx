import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./Card.scss";
import CardImage from "../CardImage/CardImage";
import { OptionsContext } from "Context.js";
import {useContext} from "react";
import { useEffect, useState } from "react";

// Function to process the release date
// For pretty display
// This functon will return jsx containing the release date
// Or the number of remaning days if there are <10 
const processLaunchDate = (date) => {
  return ("")
  const formDate = new Date(date * 1000);
  var today = new Date();
  const differenceInTime = formDate.getTime() - today.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  if (differenceInDays < 0) return "";

  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(formDate);

  if (differenceInDays < 10 && differenceInDays > 0) {
    return (
      <div className="card-release-date">
        Launch in:{" "}
        <span className="date">{Math.floor(differenceInDays)} Days</span>
      </div>
    );
  }

  if (differenceInDays === 0) {
    return (
      <div className="card-release-date">
        <span className="date">Launch today</span>
      </div>
    );
  }

  return (
    <div className="card-release-date">
      Launch date:{" "}
      <span className="date">{day + "-" + month + "-" + year}</span>
    </div>
  );
};

// Component that renders a card with a game and a image and a release date
const Card = (props) => {
  const [context, setContext] = useContext(OptionsContext);
  const [launchDate, setLaunchDate] = useState();

  // Processing the date only one time to avoid performance drops
  useEffect(()=>{
    setLaunchDate(processLaunchDate(props.cardReleaseDate))
  }, [])

  // if (typeof context === "undefined") {
  //   return("")
  // }
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
              
              {typeof props.cardReleaseDate !== "undefined"
                ? launchDate
                : ""}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
