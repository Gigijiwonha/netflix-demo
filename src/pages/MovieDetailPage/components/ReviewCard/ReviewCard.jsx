import React, { useState } from 'react'
import './ReviewCard.style.css';


const ReviewCard = ({review}) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const isLongContent = review.content.length > 200;
  const displayContent = isExpanded ? review.content : `${review.content.slice(0, 200)}...`;

  return (
    <div className='reviewCard-container'>
      <div className='reviewCard-info'>
        <h2>{review.author}</h2>
        <h3>{new Date(review.created_at).toLocaleDateString()}</h3>
      </div>
      <p className='reviewCard-content'>{displayContent}{isLongContent && (
        <button onClick={toggleExpand} className="reviewCard-toggle-btn">
          {isExpanded ? 'Show Less' : 'See All'}
        </button>)}
      </p>
    </div>
  )
}

export default ReviewCard
