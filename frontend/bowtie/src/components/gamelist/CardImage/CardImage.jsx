import React from "react";
import { useState } from "react";
import "./CardImage.scss";
const CardImage = (props) => {
  const cropSize = { x: 0, y: 0, height: 200, width: 200 };
  const withHttp = (url) =>
    !/^https?:\/\//i.test(url) ? `https://${url}` : url;

  return (
    <div>
      <img src={withHttp(props.image)} style={{width: 300, height: 150}}></img>
    </div>
  );
};

export default CardImage;
