import React from 'react'

const MoviesCard = ({title, image,rating, icon, oldPrice,price}) => {
  return (

    // ========THIS IS THE TOP MOVIES CARD, IT RECEIVES  FIVE DEFINED PROPERTIES===================
    <div class="card" style={{width: "18rem"}}>
    <img src={image} class="card-img-top" alt="Movies"/>
    <div class="card-body">
      <span class="card-text">{title}</span>
    </div>
    <div class="card-body">
      <span class="card-text">{rating}</span>
      <span class="card-text">{icon}</span>
      <span class="card-text text-decoration-line-through">{oldPrice}</span>
      <span class="card-text">{price}</span>
    </div>
     </div>
  )
}

export default MoviesCard