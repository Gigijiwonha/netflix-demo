import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import 'react-multi-carousel/lib/styles.css';
import './PopularMovieSlides.style.css';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {responsive} from "../../../../constants/responsive"


function PopularMovieSlides() {

    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    console.log("data2>>>", data);
    if(isLoading){
      return <LoadingSpinner/>
    }
    if(isError){
        return <Alert variant='danger'>(error.message)</Alert>
    }

  return (
    <div className='popular-movie-container'>
       <MovieSlider title='Popular Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default PopularMovieSlides
