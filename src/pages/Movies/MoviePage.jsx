import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css';

function MoviePage() {

  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const keyword = query.get("q");
  const genre = query.get("g");
  const navigate = useNavigate();

  const handlePageClick=({selected})=>{
    setPage(selected + 1);
  }

  const {data:genreData} = useMovieGenreQuery(); 
  const {data:movieData, isLoading, isError, error} = useSearchMovieQuery(keyword, genre, page);

  useEffect(() => {
    if (movieData?.results) {
      if (!keyword && genre) {
        const filteredMovieArray = movieData.results.filter((movie) =>
          genre ? movie.genre_ids.includes(Number(genre)) : true
        ) || [];
        setSelectedMovies(filteredMovieArray);
      } else {
        setSelectedMovies(movieData.results);
      }
      
    }
  }, [movieData, genre, keyword]);

  if(isLoading){
    return <LoadingSpinner/>
  }
  if(isError){
    return <Alert variant='danger'>(error.message)</Alert>
  }

  const showMoviesByGenre =(genreId)=>{
    navigate(`/movies?g=${genreId}`)
    const filteredMovieArray = movieData?.results?.filter((movie) =>
    genreId ? movie.genre_ids.includes(Number(genreId)) : true
  ) || [];
    setPage(1);
    return setSelectedMovies(filteredMovieArray);
  }

  const sortedByPopularity = () => {
    const sortedByPopMovies = [...selectedMovies].sort((a, b) => b.popularity - a.popularity);
    setSelectedMovies(sortedByPopMovies); 
  };
  console.log("pppp", selectedMovies);

  const sortedByRating = () => {
    const sortedByRatingMovies = [...selectedMovies].sort((a, b) => b.vote_average
    - a.vote_average
    );
    setSelectedMovies(sortedByRatingMovies); 
  };




  return (
    <div className='moviepage-section'>
      <div className='moviepage-genreList-title'>Entertain for every mood</div>
      <div className='moviepage-genreList'>
        {genreData?.map((genre)=> 
        <button onClick={()=>showMoviesByGenre(genre.id)}>{genre.name}</button>
        )}
      </div>
      <div className='moviePage-SortedBtn'>
        <button  onClick={sortedByPopularity}>Sort by Popularity</button>
        <button  onClick={sortedByRating}>Sort by Rating</button>
      </div>
      <div className='moviepage-moviesContainer'>
        {keyword && movieData?.results.length === 0 && (
          <p className='moviepage-noResult'>No results found for "{keyword}".</p>
        )}
        {keyword ? (
          movieData?.results
            .filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()))
            .map((movie, index) => (
              <MovieCard movie={movie} key={index} nextClassName="movieCard" />
            ))
        ) : selectedMovies.length > 0 ? (
          selectedMovies.map((movie, index) => (
            <MovieCard movie={movie} key={index} nextClassName="movieCard" />
          ))
        ) : (
          movieData?.results.map((movie, index) => (
            <MovieCard movie={movie} key={index} nextClassName="movieCard" />
          ))
        )}
      </div>
      <div className='moviepage-pagination'>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={movieData?.total_pages}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={page-1}
        />
      </div>
    </div>
  )
}

export default MoviePage