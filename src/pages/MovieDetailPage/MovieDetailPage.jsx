import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {useMovieDetailQuery} from '../../hooks/useMovieDetail';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import './MovieDetailPage.style.css';
import imageLogo from '../../assets/imageLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons'
import MovieTrailer from '../../common/MovieTrailer/MovieTrailer';
import ReviewContainer from './components/ReviewContainer/ReviewContainer';
import MovieRecommendation from './components/MovieRecommendation/MovieRecommendation';


function MovieDetailPage() {

  const [playvideo, setPlayVideo] = useState(false);

  const playTrailer = () => {
    setPlayVideo(true);
  }
  const {id} = useParams();
  console.log("ID for movieDetial>>>", id);
  const {data: movieData, isLoading, isError, error} = useMovieDetailQuery({id});
  if ( movieData?.id) {
    console.log("DetailMovie Data>>>",  movieData);
  } else {
    console.log("Data not available yet.");
  }
  if (isLoading) {
    return <LoadingSpinner/>
  }
  if (isError) {
    <Alert variant='danger'>(error.message)</Alert>
  }

  return (
    <div className='movieDetail-container'>
      {playvideo && <MovieTrailer movieId ={movieData.id} setPlayVideo={setPlayVideo} playvideo={playvideo} />}
      <div className='movieDetail-topContainer'>
        <div className='moveieDetail-imgContainer'>
        {movieData?.poster_path? (
              <img
                src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${movieData?.poster_path}`}
                alt="movie-img"
                className='movieDetail-img'
              />
          ) : (
            <img
              src="https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
              alt="no-img-available"
              className='movieDetail-noImgAvailable'
            />
          )}
        </div>
       
        <div className='movieDetail-contentInfo'>
          <img src={imageLogo} alt='Logo' className='movieDetail-logo' />
          <h1 className='movieDetail-title'>{movieData.title}</h1>
          <div className='movieDetail-info'><FontAwesomeIcon icon={faStar} className='startBtn'/> {movieData?.vote_average.toFixed(1)} ({movieData?.vote_count}) | {movieData?.runtime}m | {movieData?.release_date?.split("-")[0]} | {movieData?.
original_language.toUpperCase()}</div>
          <div className='movieDetail-genreBad'>
              {movieData.genres.map((genre)=> <Badge bg="danger" >{genre.name}</Badge>)}
          </div>
          <div className='moveDetail-overviewTitle'>Overview</div>
          <div>{movieData.overview}</div>
          <div className='moveDetail-Btns'>
            <button> <FontAwesomeIcon icon={faPlay} className='playbtn' />  Play </button>
            <button onClick={playTrailer} ><FontAwesomeIcon icon={faPlay} className='playbtn'/>  Trailer </button>
          </div>
        </div>
      </div>
      <div className='bottomContainer'>
        <ReviewContainer />
        <MovieRecommendation/>
      </div>
    </div>
  )
}

export default MovieDetailPage
