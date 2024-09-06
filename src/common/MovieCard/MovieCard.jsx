import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import './MovieCard.style.css';

const MovieCard = ({movie}) => {

    const navigate = useNavigate();
    const {data:genreData} = useMovieGenreQuery(); 
    console.log("genre>>>",genreData);
    console.log("movieeee>>>>>", movie);

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

    const goToDetailPage =()=> {
        navigate(`/movies/${movie.id}`);
    }

  return (
    <div className='movieCard-background' style={{
        backgroundImage : "url("+`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie?.
            poster_path}`+")",
    }} onClick={goToDetailPage}>
        <div className='movieCard-info'>
            <h1>{movie.title}</h1>
            <div className='movieCard-info-badge'>
                {showGenre(movie.genre_ids).map((id)=> <Badge bg="danger" >{id}</Badge>)}
            </div>
            <div className='movieCard-infoDetail'>
                <div className={`movieCard-infoDetail-adult ${movie.adult ? 'adult' : 'all'}`}>{movie.adult?"18":"All"}</div>
            </div>
            <div>
                <button className='movieCard-detailBtn' onClick={goToDetailPage}>View Details</button>
            </div>
        </div>
    </div>
  )
}

export default MovieCard
