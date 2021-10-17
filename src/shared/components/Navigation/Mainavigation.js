import React from "react";
import { Link, useHistory } from "react-router-dom";
import MainHeader from "./MainHeader";

const Mainavigation = (props) => {
  const history = useHistory();

  return (
    <MainHeader>
      <nav
        className="navbar  navbar-expand-lg navbar-light"
        style={{ "background-color": "#e3f2ff" }}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <h1 className="display-4">Trippr🧭</h1>
          </Link>

          <button
            className="btn btn-outline-primary ms-auto me-2"
            onClick={() => history.push("/")}
          >
            <h1 className="display-6">Home</h1>
          </button>
          <button
            className=" btn btn-outline-danger"
            onClick={() => history.push("/places")}
          >
            <h1 className="display-6">All locations</h1>
          </button>
        </div>
      </nav>
    </MainHeader>
  );
};

export default Mainavigation;
