import React from "react";
import User from "./User";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>No users yet</h2>
      </div>
    );
  }
  return (
    <div className='container'>
      {props.items.map((item) => (
        <User
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          places={item.placeCount}
        />
      ))}
    </div>
  );
};

export default UserList;
