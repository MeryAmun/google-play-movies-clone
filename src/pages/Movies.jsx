import React from 'react';
import { DealsOnMoviePurchases, MostPopularMovies, NewToRent, OffersOnRentals, TopCharts, TopNewReleases } from '../components';





const Movies = () => {

  return (
    <div>
  <TopNewReleases/>
  <DealsOnMoviePurchases/>
  <TopCharts/>
  <MostPopularMovies/>
  <OffersOnRentals/>
  <NewToRent/>
    </div>
  )
}

export default Movies