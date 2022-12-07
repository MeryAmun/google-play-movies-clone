import React from 'react'
const TopMoviesCard = ({id,title, image,rating,pG,category, icon,price}) => {
  return (

    // ========THIS IS THE THE TOP MOVIES CARD===============
    <div className='d-flex justify-content-center m-1 w-100'key={id}>
    <img src={image} class="" alt="top movies" width='120px'/>
    <div class="d-flex flex-column justify-content-start align-items-center">
      <span class="m-1">{title}</span>
      <span class="m-1">{pG}</span>
      <span class="m-1">{category}</span>
      <div class="m-1 d-flex align-items-center">
      <span class="m-1">{rating}</span>
      <span class="m-1">{icon}</span>
      <span class="m-1">{price}</span>
    </div>
    </div>
   
     </div>
  
  )
}

export default TopMoviesCard