import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/placeList";

export const placelist = [
  {
    name: "london",
    id: "p1",
    address: "london",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F02%2F9322ddd523604ecbf1a2cf92dde51c3elondon.jpg&f=1&nofb=1",
    coordinates: { lat: "placeholder", long: "placeholder" },
    userId: "u1",
  },
  {
    name: "kenya",
    id: "p2",
    address: "kenya",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.matadornetwork.com%2Fblogs%2F1%2F2011%2F05%2Fkenya-1200x900.jpg&f=1&nofb=1",
    coordinates: { lat: "placeholder", long: "placeholder" },
    userId: "u2",
  },
  {
    name: "malaysia",
    id: "p3",
    address: "petronas tower",
    image:
      "https://pickyourtrail.com/blog/wp-content/uploads/2020/05/The_Petronas_Twin_Towers_in_Kuala_Lumpur_Malaysia-scaled.jpeg",
    coordinates: { lat: "placeholder", long: "placeholder" },
    userId: "u3",
  },
];
const Places = (props) => {
  const a = useParams().id;
  const filteredplace = placelist.filter((item) => item.userId === a);
  if (a === undefined) {
    return (
      <div>
        <h2>All places</h2>
        <PlaceList items={placelist} />
      </div>
    );
  }

  return (
    <div>
      <PlaceList items={filteredplace} />
    </div>
  );
};

export default Places;
