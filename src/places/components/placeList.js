import React from "react";
import Place from "./place";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>the list is empty</h2>
      </div>
    );
  }
  return (
    <div>
 
        {props.items.map((item) => (
          <Place
            key={item.id}
            id={item.id}
            name={item.name}
            address={item.address}
            image={item.image}
            coordinates={item.coordinates}
            userId={item.userId}
          />
        ))}
     
    </div>
  );
};

export default PlaceList;
