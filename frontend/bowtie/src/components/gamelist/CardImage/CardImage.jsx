import React from "react";
import { useState } from "react";
import "./CardImage.scss"
const CardImage = (props) => {
  const cropSize = { x: 0, y: 0, height: 200, width: 200 };
  const withHttp = (url) =>
    !/^https?:\/\//i.test(url) ? `https://${url}` : url;

  return (
    <div className="cardImage">
      <img src={withHttp(props.image)}></img>
    </div>
  );
};

export default CardImage;
