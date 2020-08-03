import React from "react";
import { useState} from "react";
import "./CardImage.scss";
// Component that renders a image
// Is used by a card
const CardImage = (props) => {

  const [displayImage, setDisplayImage] = useState(true);
  const withHttp = (url) =>
    !/^https?:\/\//i.test(url) ? `https://${url}` : url;

  // If the image dose not exist we do not display it
  const imageDoseNotExist = () => {
    setDisplayImage(false);
  };
  
  if(displayImage && !(props.image.includes("undefined"))){
    return (
        <div className="card-image">
          <img
            src={withHttp(props.image)} 
            onError={imageDoseNotExist}
            alt=""
          ></img>
        </div>
    );
  } else {
    return(<div></div>)
  }
}


export default CardImage;
