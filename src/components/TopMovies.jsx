import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TopMoviesCard } from "../cards";
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
      </SwiperSlide>
    );
  }

  return (
    // ================HERE, WE ARE IMPORTING THE MOVIES FROM DUMMY DATA FILE INSIDE THE DATA FOLDER, THEN WE PARSE IT INTO THE MOVIE CARD INSIDE THE CARDS FOLDER
    <div className="w-100 d-flex flex-column justify-content-start m-4 topContainer ">
      <div className=" d-flex flex-column justify-content-start m-3">
        <h2 className="text-dark font-weight-bold">Top Charts</h2>
        <Nav.Item>
          <Link
            to="#"
            className="border px-3 py-1 m-2 rounded-pill text-decoration-none text-secondary font-weight-normal"
            style={{backgroundColor: '#ebb2b2'}}
          >
           Top Movies
          </Link>
        </Nav.Item>
      </div>
      <div className="d-block align-items-center overflow-hidden  border h-100">
        <Swiper
          id="swiper"
          virtual
          slidesPerView={3}
          spaceBetween={5}
          onReachEnd={() => {
            console.log("reach end");
            const tmp = slides.unshift();
            slides.push(tmp);
          }}
          navigation
          pagination
        >
          {
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
          <TopMoviesCard
            id={movie.id}
            image={movie.image}
            title={movie.title}
            rating={movie.rating}
            icon={movie.icon}
           pG={movie.pG}
           category={movie.category}
            price={movie.price}
          />
      </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    </div>
  );
};

export default TopMovies;
