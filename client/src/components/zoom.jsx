import React, { useState } from "react";

var Zoom = (props) => {
  const [display, setDisplay] = useState(props.picture.photo);
  const [showArrows, setShowArrows] = useState(false);

  var projectPics = props.allPhotos[props.picture.project];

  return (
    <div className="modal" onClick={(e) => {
      if (e.target.className === "modal") {
        props.setZoom(false);
      }
    }}>
      {projectPics.length !== 1 ? <button className="modalButtons" onClick={() => {
        if (display === 0) {
          setDisplay(projectPics.length - 1);
        } else {
          setDisplay(display - 1);
        }
      }}>{'<'}</button> : null}
      { display !== null? <img src={require(`../assets/${projectPics[display]}`).default} className="zoomView"/> : null}
      {projectPics.length !== 1 ? <button className="modalButtons" onClick={() => {
        if (display === projectPics.length - 1) {
          setDisplay(0);
        } else {
          setDisplay(display + 1);
        }
      }}>{'>'}</button> : null}
    </div>
  )
};

export default Zoom;
