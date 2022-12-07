import React from "react";

const MoviesCard = ({ id, title, image, rating, icon, oldPrice, price }) => {
  return (
    // ========THIS IS THE TOP MOVIES CARD, IT RECEIVES  FIVE DEFINED PROPERTIES===================
    <div className="flex-1 m-1 p-2 w-100 h-100" key={id}>
      <img src={image} className="" alt="Movies" width="200px" height="276px" />
      <div className="">
        <span className="m-1 p-0 ">{title}</span>
      </div>
      <div className="d-flex justify-content-start align-items-center">
        <span className="m-1">{rating}</span>
        <span className="m-1">{icon}</span>
        <span className="m-1 text-decoration-line-through">{oldPrice}</span>
        <span className="m-1">{price}</span>
      </div>
    </div>
  );
};

export default MoviesCard;
