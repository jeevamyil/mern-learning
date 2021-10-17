import React from "react";
import Profilep from "../../shared/components/UIcomponents/Profilep";
import { Link } from "react-router-dom";
const User = (props) => {
  return (
    <div id="card">
      <div className="container-fluid">
        <Link
          to={`/${props.id}/places`}
          style={{ "text-decoration": "none", color: "inherit" }}
        >
          <div className="row">
            <div className="col-3 align-items-center">
              <Profilep src={props.image} alt={props.name} />
            </div>
            <div
              className="col"
              style={{ "background-color": "#f7fcfc", borderRadius: "14px" }}
            >
              <h2 class="fw-light">{props.name}</h2>
              <h3 class="fw-light">
                {props.places} {props.places === 1 ? "place" : "places"}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default User;
