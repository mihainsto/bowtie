import React from "react";
import { useState, useEffect } from "react";
import "./CardImage.scss";
const CardImage = (props) => {
  const [displayImage, setDisplayImage] = useState(false);
  const cropSize = { x: 0, y: 0, height: 200, width: 200 };
  const withHttp = (url) =>
    !/^https?:\/\//i.test(url) ? `https://${url}` : url;

  useEffect(() => {
    setDisplayImage(true);
  }, [props.image]);

  const imageDoseNotExist = () => {
    setDisplayImage(false);
  };
  const imageLoaded = () => {
    setDisplayImage(true);
  };
    return (
      <div className={displayImage?"":"display-none"}>
        <div className="cardImage">
          <img
            src={withHttp(props.image)} 
            onError={imageDoseNotExist}
            onLoad={imageLoaded}
            alt=""
          ></img>
        </div>
      </div>
    );
  }


export default CardImage;
