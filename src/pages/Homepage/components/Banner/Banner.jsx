import React, { useState } from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import './Banner.style.css';
import imageLogo from '../../../../assets/imageLogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons'
import MovieTrailer from '../../../../common/MovieTrailer/MovieTrailer';
import { useNavigate } from 'react-router-dom';

function Banner() {

    const navigate = useNavigate();
    const [playvideo, setPlayVideo] = useState(false);

    const playTrailer = () => {
        setPlayVideo(true);
    }
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    console.log("data>>>", data);
    if(isLoading){
        return <LoadingSpinner/> 
    }
    if(isError){
        <Alert variant='danger'>(error.message)</Alert>
    }

    const randomIndex = Math.floor(Math.random() * data?.results.length);
    const movie = data?.results[randomIndex];

    const goToDetailPage =()=> {
        navigate(`/movies/${movie.id}`);
    }

  return (
    <div className='banner-background' style={{
        backgroundImage : "url("+`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${movie?.
            poster_path}`+")"
    }}>
        {playvideo && <MovieTrailer movieId ={movie.id} setPlayVideo={setPlayVideo} playvideo={playvideo} />}
        <div className='banner-info'>
            <img src={imageLogo} alt='Logo' className='banner-logo' />
            <h1 className='banner-title'>{movie?.title}</h1>
            <div className='banner-contentsInfo'><FontAwesomeIcon icon={faStar} className='startBtn'/> {movie?.vote_average.toFixed(1)} ({movie?.vote_count}) | {movie?.runtime}m | {movie?.release_date?.split("-")[0]} | {movie?.
original_language.toUpperCase()}</div>
            <div className='banner-overview'>{movie?.overview}</div>
            <div className='banner-Btns'>
                <button onClick={goToDetailPage}> <FontAwesomeIcon icon={faPlay} className='banner-playbtn' />  View Details </button>
                <button onClick={playTrailer}><FontAwesomeIcon icon={faPlay} className='banner-playbtn' />  Trailer </button>
            </div>
        </div>
    </div>
  )
}

export default Banner;
