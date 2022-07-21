import React from "react";
// import 'swiper/css/bundle';
// import { Link } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";


const SwiperHome = ({movie}) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
  {console.log(`${baseUrlForMovie}${movie.poster_path}`)}
  return(
    <>
    <CardMedia
      component="img"
      image={`${baseUrlForMovie}${movie.poster_path}`}
      alt="seekor kucing"
      sx={{objectFit: 'cover'}}
    />
    </>
  );
};

export default SwiperHome;