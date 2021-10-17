import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "mat",
      image:"https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530827853?k=6&m=530827853&s=170667a&w=0&h=inEm9JhbGdvhKKelvzdyR44pNG5CU98DQ0goRhKLViA=",
      placeCount: 3,
    },
    {
      id: "u2",
      name: "math",
      image:"https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530827853?k=6&m=530827853&s=170667a&w=0&h=inEm9JhbGdvhKKelvzdyR44pNG5CU98DQ0goRhKLViA=",
      placeCount: 2,
    },
    {
      id: "u3",
      name: "tom",
      image:"https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530827853?k=6&m=530827853&s=170667a&w=0&h=inEm9JhbGdvhKKelvzdyR44pNG5CU98DQ0goRhKLViA=",
      placeCount: 1,
    },
  ];

  return (
    <div>
      <UserList items={USERS} />
    </div>
  );
};

export default Users;
