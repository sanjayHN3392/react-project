import React from "react";
import "./ResturantCard.css";

const ResturantCard = (props) => {
  const { name, rating, cuisine, image, prepTimeMinutes, tags } = props?.resObj;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="Meghan Foods"
        src={image}
      />
      <div>
        <h1 className="res-name">{name}</h1>
        <h1 className="restaurant-cuisines">{cuisine + tags.join(',')}</h1>
      </div>
      <h3>Rating-{rating}</h3>
      <h3>{prepTimeMinutes} mins</h3>
    </div>
  );
};

export default ResturantCard;
