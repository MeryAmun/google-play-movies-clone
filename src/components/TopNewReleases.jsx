import React from 'react'
import { MoviesCard } from '../cards';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'
import { topNewReleasesData } from '../data/dummyData';

const TopNewReleases = () => {

  return (
    // ================HERE, WE ARE IMPORTING THE MOVIES FROM DUMMY DATA FILE INSIDE THE DATA FOLDER, THEN WE PARSE IT INTO THE MOVIE CARD INSIDE THE CARDS FOLDER
    <div className='container'>
  <div className="container d-flex flex-col justify-content-start align-items-center">
    <h2 className="text-secondary font-weight-bold">Top new movie releases to rent or buy</h2>
    <h5 className="text-secondary font-weight-normal">From the big screen to your screen</h5>
  </div>
<div className="container">
  <CiCircleChevLeft/>
 <div className="container d-flex justify-content-center align-items-center">
 {
    topNewReleasesData.map((movie) => (
      <MoviesCard
      id={movie.id}
      image={movie.image}
      title={movie.title}
      rating={movie.rating}
      icon={movie.icon}
      oldPrice={movie.oldPrice}
      price={movie.price}
      />
    ))
  }
 </div>
  <CiCircleChevRight/>
</div>
    </div>
  )
}

export default TopNewReleases