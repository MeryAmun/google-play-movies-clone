import React from 'react'

const TopChartCard = ({number,id,title, image,rating,pG,category, icon,price}) => {
  return (

    // ========THIS IS THE THE TOP MOVIES CARD===============
    <div class="card" style={{width: "18rem"}} key={id}>
    <img src={image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <span class="card-text">{title}</span>
      <span class="card-text">{pG}</span>
      <span class="card-text">{category}</span>
    </div>
    <div class="card-body">
      <span class="card-text">{rating}</span>
      <span class="card-text">{icon}</span>
      <span class="card-text">{price}</span>
    </div>
     </div>
  )
}

export default TopChartCard