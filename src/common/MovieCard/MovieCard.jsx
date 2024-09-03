import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import './MovieCard.style.css';

const MovieCard = ({movie}) => {

    const {data:genreData} = useMovieGenreQuery(); 
    console.log("genre>>>",genreData);

    const showGenre =(genreIdList)=>{
        if (!genreData) return [];
        const genreNameList = genreIdList.map((id)=>{
            console.log("total list>>>",genreIdList); //Array [28, 18]
            console.log("received ids>>>",id); //28, 18
            const genreObj = genreData.find((genre)=> genre.id === id) // genre = {id: 28, name:'Action'}
            console.log("genre object>>>", genreObj);
            return genreObj.name;
        })
        return genreNameList;
    }

  return (
    <div className='movieCard-background' style={{
        backgroundImage : "url("+`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie?.
            poster_path}`+")",
    }}>
        <div className='movieCard-info'>
            <h1>{movie.title}</h1>
            <div className='movieCard-info-badge'>
                {showGenre(movie.genre_ids).map((id)=> <Badge bg="danger" >{id}</Badge>)}
            </div>
            <div className='movieCard-infoDetail'>
                <div>Popularity {movie.popularity}</div>
                <div className={`movieCard-infoDetail-adult ${movie.adult ? 'adult' : 'all'}`}>{movie.adult?"18":"All"}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard
