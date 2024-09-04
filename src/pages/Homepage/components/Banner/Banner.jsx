import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import './Banner.style.css';

function Banner() {

    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    console.log("data>>>", data);
    if(isLoading){
        return <LoadingSpinner/> // Displaying loading spinner later
    }
    if(isError){
        <Alert variant='danger'>(error.message)</Alert>
    }

    const randomIndex = Math.floor(Math.random() * data?.results.length);
    const movie = data?.results[randomIndex];

  return (
    <div className='banner-background' style={{
        backgroundImage : "url("+`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie?.
            poster_path}`+")"
    }}>
        <div className='banner-info'>
            <h1>{movie?.title}</h1>
            <p>{movie?.overview}</p>
        </div>
    </div>
  )
}

export default Banner;
