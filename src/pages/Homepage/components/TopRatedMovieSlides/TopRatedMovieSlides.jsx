import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies'
import Alert from 'react-bootstrap/Alert';
import 'react-multi-carousel/lib/styles.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import {responsive} from "../../../../constants/responsive"
import "./TopRatedMovieSlides.style.css";

const TopRatedMovieSlides = () => {

    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
    console.log("data2>>>", data);
    if(isLoading){
      return <LoadingSpinner/>
    }
    if(isError){
        return <Alert variant='danger'>(error.message)</Alert>
    }

  return (
    <div className='topRated-movie-container'>
      <MovieSlider title='Top-Rated Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default TopRatedMovieSlides
