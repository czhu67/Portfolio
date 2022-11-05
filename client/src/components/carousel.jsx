import React, { useState } from "react";

var Carousel = (props) => {
  const [photo, setPhoto] = useState(0);

  return (
    <div className="carousel">
      <button onClick={() => {
        if (photo === 0) {
          setPhoto(props.photos.length - 1);
        } else {
          setPhoto(photo - 1);
        }
      }}>{'<'}</button>
      <img src={require(`../assets/${props.photos[photo]}`).default} onClick={() => {
        props.setZoom(!props.zoom);
        props.setExpanded({photo: photo, project: props.name});
      }} className="demo"/>
      <button onClick={() => {
        if (photo === props.photos.length - 1) {
          setPhoto(0);
        } else {
          setPhoto(photo + 1);
        }
      }}>{'>'}</button>
    </div>
  )
}

export default Carousel;