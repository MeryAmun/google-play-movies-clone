import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MoviesCard, TopMoviesCard } from "../cards";
import { topMoviesData } from "../data/dummyData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const TopMovies = () => {
  const [movies] = useState(topMoviesData);

  const slides = [];

  for (let i = 0; i < movies.length; i++) {
    slides.push(
      <SwiperSlide key={movies[i].id}>
        <div className="movieItem">
          <TopMoviesCard
            id={movies[i].id}
            image={movies[i].image}
            title={movies[i].title}
            rating={movies[i].rating}
            icon={movies[i].icon}
           pG={movies[i].pG}
           category={movies[i].category}
            price={movies[i].price}
          />
        </div>
      </SwiperSlide>
    );
  }

  return (
    // ================HERE, WE ARE IMPORTING THE MOVIES FROM DUMMY DATA FILE INSIDE THE DATA FOLDER, THEN WE PARSE IT INTO THE MOVIE CARD INSIDE THE CARDS FOLDER
    <div className="w-100 d-flex flex-column justify-content-start m-4">
      <div className=" d-flex flex-column justify-content-start">
        <Nav.Item>
          <Link
            to="#"
            className="border px-3 py-1 m-2 rounded-pill text-decoration-none text-secondary font-weight-normal"
          >
            Movies
          </Link>
        </Nav.Item>
      </div>
      <div className="moviesContainer d-flex align-items-center overflow-hidden">
        <Swiper
          id="swiper"
          virtual
          slidesPerView={6}
          spaceBetween={5}
          onReachEnd={() => {
            console.log("reach end");
            const tmp = slides.unshift();
            slides.push(tmp);
          }}
          navigation
          pagination
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};

export default TopMovies;
