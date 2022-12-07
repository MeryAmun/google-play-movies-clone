import React from 'react'
import { BsFileX, BsTextCenter } from 'react-icons/bs'

const TopMoviesCard = ({number,id,title, image,rating,pG,category, icon,price}) => {
  return (

    // ========THIS IS THE THE TOP MOVIES CARD===============
    <div className='d-flex justify-content-center'key={id}>

    <img src={image} class="card-img-top" alt="..."/>
    <div class="d-flex flex-column justify-content-between align-items-center">
      <span class="">{title}</span>
      <span class="">{pG}</span>
      <span class="">{category}</span>
      <div class="d-flex align-items-center">
      <span class="">{rating}</span>
      <span class="">{icon}</span>
      <span class="">{price}</span>
    </div>
    </div>
   
     </div>
  
  )
}

export default TopMoviesCard