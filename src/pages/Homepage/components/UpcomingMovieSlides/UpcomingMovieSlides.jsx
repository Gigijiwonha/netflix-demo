import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies'
import Alert from 'react-bootstrap/Alert';
import 'react-multi-carousel/lib/styles.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {responsive} from "../../../../constants/responsive"
import "./UpcomingMovieSlides.style.css";

const UpcomingMovieSlides = () => {


    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
    console.log("data2>>>", data);
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <Alert variant='danger'>(error.message)</Alert>
    }

  return (
    <div className='upcoming-movie-container'>
      <MovieSlider title='Upcoming Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default UpcomingMovieSlides
