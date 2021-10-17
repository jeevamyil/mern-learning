import React from "react";
import "./Profilep.css";

const Profilep = (props) => {
  return (
    <div id="photo">
      <img src={props.src} alt={props.id} height="90" width="90" class="rounded-circle" />
    </div>
  );
};

export default Profilep;
