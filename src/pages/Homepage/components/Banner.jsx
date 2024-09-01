import React from 'react'
import { usePopularMoviesQuery } from '../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css';

function Banner() {

    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    console.log("data>>>", data);
    if(isLoading){
        <h1>Loading...</h1> // Displaying loading spinner later
    }
    if(isError){
        <Alert variant='danger'>(error.message)</Alert>
    }

  return (
    <div className='banner-background' style={{
        backgroundImage : "url("+`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].
            poster_path}`+")"
    }}>
        <div className='banner-info'>
            <h1>{data?.results[0].title}</h1>
            <p>{data?.results[0].overview}</p>
        </div>
    </div>
  )
}

export default Banner;
