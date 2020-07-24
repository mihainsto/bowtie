import React from "react";
import { useState, useEffect } from "react";
import "./CardImage.scss";
const CardImage = (props) => {
  const [displayImage, setDisplayImage] = useState(true);
  const [hideImage, setHideImage] = useState(true)
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
  // console.log(props.image)
  if(displayImage && !(props.image.includes("undefined"))){
    return (
        <div className="cardImage">
          <img
            src={withHttp(props.image)} 
            onError={imageDoseNotExist}
            onLoad={imageLoaded}
            alt=""
          ></img>
        </div>
    );
  } else {
    return(<div></div>)
  }
}


export default CardImage;
