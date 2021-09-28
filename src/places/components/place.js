import React from "react";
import { useState } from "react";
import Modal from "../../shared/components/Modal/Modal";
import "./place.css";

const Place = (props) => {
  const [modelState, setModelState] = useState(false);
  const triggerModel = (props) => {
    setModelState(true);
  };
  const closeModel = (props) => {
    setModelState(!modelState);
  };

  return (
    <div className="container">
      <div id="card">
        <img src={props.image} alt={props.id} id="img"></img>
        <div id='card-body'>
        <h2>{props.id}</h2>
        <h2>{props.name}</h2>
        <h2>{props.address}</h2>
        <h2>{props.userId}</h2>
        </div>
        <Modal click={closeModel} state={modelState}></Modal>
        <button className='btn btn-lg btn-info' onClick={triggerModel}> Map</button>
      </div>
    </div>
  );
};

export default Place;
