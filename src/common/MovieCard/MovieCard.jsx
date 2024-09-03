import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';

const MovieCard = ({movie}) => {
  return (
    <div className='movieCard-background' style={{
        backgroundImage : "url("+`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie?.
            poster_path}`+")",
    }}>
        <div className='movieCard-info'>
            <h1>{movie.title}</h1>
            <div className='movieCard-info-badge'>
                {movie.genre_ids.map((id)=> <Badge bg="danger" >{id}</Badge>)}
            </div>
            <div className='movieCard-infoDetail'>
                <div>Popularity {movie.popularity}</div>
                <div>{movie.adult?"over 18":"under 18"}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard
