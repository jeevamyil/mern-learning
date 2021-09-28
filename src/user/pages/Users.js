import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "mat",
      image:
        "https://webimages.mongodb.com/_com_assets/cms/kobuybqq12c9ya16f-mernstack_visualized.png?auto=format%2Ccompress",
      placeCount: 3,
    },
    {
      id: "u2",
      name: "math",
      image:
        "https://webimages.mongodb.com/_com_assets/cms/kobuybqq12c9ya16f-mernstack_visualized.png?auto=format%2Ccompress",
      placeCount: 2,
    },
    {
      id: "u3",
      name: "tom",
      image:
        "https://webimages.mongodb.com/_com_assets/cms/kobuybqq12c9ya16f-mernstack_visualized.png?auto=format%2Ccompress",
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
