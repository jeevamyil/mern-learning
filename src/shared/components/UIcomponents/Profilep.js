import React from "react";
import "./Profilep.css";

const Profilep = (props) => {
  return (
    <div id="photo">
      <img src={props.src} alt={props.id} height="40" width="40" />
    </div>
  );
};

export default Profilep;
