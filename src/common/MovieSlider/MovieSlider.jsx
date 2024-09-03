import React from 'react'
import './MovieSlider.style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({title, movies, responsive}) => {
  return (
    <div>
       <h3>{title}</h3>
        <Carousel
            infinite={true}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            itemClass="movie-slider"
            containerClass="carousel-container"
        >
            {movies.map((movie, key)=> <MovieCard movie={movie} key={key}/>)}
        </Carousel>
    </div>
  )
}

export default MovieSlider
