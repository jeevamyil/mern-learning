import React from "react";
import Profilep from "../../shared/components/UIcomponents/Profilep";
import { Link } from "react-router-dom";
const User = (props) => {
  return (
    <div id="card">
      <Link to={`/${props.id}/places`}>
       
        <div>
          <Profilep src={props.image} alt={props.name} />
        </div>
        <div>
          <h2>{props.name}</h2>
          <h3>
            {props.places} {props.places === 1 ? "place" : "places"}
          </h3>
        </div>
     
      </Link>
      </div>
  );
};

export default User;
