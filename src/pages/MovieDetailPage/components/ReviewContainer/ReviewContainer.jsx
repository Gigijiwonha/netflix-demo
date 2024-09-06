import React, { useState } from 'react'
import './ReviewContainer.style.css';
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview'
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import Alert from 'react-bootstrap/Alert';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewContainer = () => {

    const [showAll, setShowAll] = useState(false);
    const {id} = useParams();
    const {data, isLoading, isError, error} = useMovieReviewQuery(id);
    console.log ('reviewData>>>', data);

    const reviewsToShow = showAll ? data?.results : data?.results?.slice(0, 3) || [];

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    if (isLoading) {
        return <LoadingSpinner/>
    }
    if (isError) {
        <Alert variant='danger'>(error.message)</Alert>
    }

  return (
    <div>
      <h2 className='Review-title'>Review</h2>
      {data?.results?.length > 0 ? (
        <div className='ReviewCardContainer'>
          {reviewsToShow?.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
          <button onClick={handleToggle} className='ReviewContiner-btn'>
            {showAll ? 'Show Less' : 'See All Reviews'}
          </button>
        </div>
      ) : (
        <div>No Reviews</div>
      )}
  </div>
  )
}

export default ReviewContainer
