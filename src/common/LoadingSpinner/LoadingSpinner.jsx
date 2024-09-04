import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import "./LoadingSpinner.style.css";

const LoadingSpinner = () => {
  return (
    <div className='loading-container'>
      <ClipLoader color="red" size={150} />
    </div>
  )
}

export default LoadingSpinner
