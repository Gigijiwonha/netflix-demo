import React from 'react'
import './Homepage.style.css';
import OpeningPage from './components/OpeningPage/OpeningPage';
import Banner from './components/Banner/Banner';
import PopularMovieSlides from './components/PopularMovieSlides/PopularMovieSlides';
import TopRatedMovieSlides from './components/TopRatedMovieSlides/TopRatedMovieSlides';
import UpcomingMovieSlides from './components/UpcomingMovieSlides/UpcomingMovieSlides'

function Homepage() {
  return (
    <div className='hompage-background'>
      <OpeningPage/>
      <Banner/>
      <PopularMovieSlides/>
      <TopRatedMovieSlides/>
      <UpcomingMovieSlides/>
    </div>
  )
}

export default Homepage
