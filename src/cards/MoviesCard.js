import React from 'react'

const MoviesCard = ({id,title, image,rating, icon, oldPrice,price}) => {
  return (

    // ========THIS IS THE TOP MOVIES CARD, IT RECEIVES  FIVE DEFINED PROPERTIES===================
      <div className="card" style={{width: "18rem"}} key={id}>
    <img src={image} className="card-img-top" alt="Movies"/>
    <div className="card-body">
      <span className="card-text">{title}</span>
    </div>
    <div className="card-body">
      <span className="card-text">{rating}</span>
      <span className="card-text">{icon}</span>
      <span className="card-text text-decoration-line-through">{oldPrice}</span>
      <span className="card-text">{price}</span>
    </div>
    </div>
  )
}

export default MoviesCard