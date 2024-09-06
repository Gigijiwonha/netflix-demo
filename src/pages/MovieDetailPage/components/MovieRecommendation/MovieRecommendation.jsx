import React from 'react'
import './MovieRecommendation.style.css';
import { useMovieRecommendationQuery } from '../../../../hooks/useMovieRecommendation';
import { useParams } from 'react-router-dom';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {responsive} from "../../../../constants/responsive"
import Alert from 'react-bootstrap/Alert';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';

const MovieRecommendation = () => {
    const {id} = useParams();
    const {data, isLoading, isError, error} = useMovieRecommendationQuery({id});

    if (isLoading) {
        return <LoadingSpinner/>
    }
    if (isError) {
        <Alert variant='danger'>(error.message)</Alert>
    }

  return (
    <div className='movieRecommendation-container'>
      <MovieSlider title='Movie Recommendation' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default MovieRecommendation
