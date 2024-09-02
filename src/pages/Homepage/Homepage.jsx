import React from 'react'
import './Homepage.style.css';
import Banner from './components/Banner/Banner';
import PopularMovieSlides from './components/PopularMovieSlides/PopularMovieSlides';

function Homepage() {
  return (
    <div className='hompage-background'>
      <Banner/>
      <PopularMovieSlides/>
    </div>
  )
}

export default Homepage
