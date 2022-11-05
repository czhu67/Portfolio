import React, { useState } from "react";

var Zoom = (props) => {
  const [display, setDisplay] = useState(props.picture.photo);
  var projectPics = props.allPhotos[props.picture.project];

  console.log(props);

  return (
    <div className="modal" onClick={(e) => {
      if (e.target.className === "modal") {
        props.setZoom(false);
      }
    }}>
      <button className="modalButtons" onClick={() => {
        if (display === 0) {
          setDisplay(projectPics.length - 1);
        } else {
          setDisplay(display - 1);
        }
      }}>{'<'}</button>
      { display !== null? <img src={require(`../assets/${projectPics[display]}`).default} className="zoomView"/> : null}
      <button className="modalButtons" onClick={() => {
        if (display === projectPics.length - 1) {
          setDisplay(0);
        } else {
          setDisplay(display + 1);
        }
      }}>{'>'}</button>
    </div>
  )
};

export default Zoom;