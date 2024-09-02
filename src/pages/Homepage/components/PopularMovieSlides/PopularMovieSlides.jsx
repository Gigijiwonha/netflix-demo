import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './PopularMovieSlides.style.css';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

function PopularMovieSlides() {

    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    console.log("data2>>>", data);
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <Alert variant='danger'>(error.message)</Alert>
    }

  return (
    <div className='popular-movie-container'>
        <h3>Popular Movies</h3>
        <Carousel
            infinite={true}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            itemClass="movie-slider"
            containerClass="carousel-container"
        >
            {data.results.map((movie, key)=> <MovieCard movie={movie} key={key}/>)}
        </Carousel>
    </div>
  )
}

export default PopularMovieSlides
