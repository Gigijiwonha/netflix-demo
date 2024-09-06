import React, { useState } from 'react'
import './MovieTrailer.style.css';
import { useMovieTrailerQuery } from '../../hooks/useMovieTrailer';
import YouTube from 'react-youtube';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const MovieTrailer = ({movieId, playvideo, setPlayVideo}) => {

  const {data} = useMovieTrailerQuery(movieId);
  console.log("trailerdata>>>", data);
  const handleClose = () => setPlayVideo(false);

  const onPlayerReady = event => {
    event.target.playVideo();
  };

  const opts = {
    height: "450",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
        <Modal show={playvideo} onHide={handleClose} backdrop={true} centered  className="trailer-container">
        <button onClick={handleClose} className='trailer-closeBtn'> <FontAwesomeIcon icon={faXmark} /> </button>
        <Modal.Body className="d-flex justify-content-center align-items-center modal-content-container">
        {data?.results?.length > 0 ? (
          <div className="video-frame">
            <YouTube
              videoId={data?.results[0].key}
              opts={opts}
              onReady={onPlayerReady}
            />
          </div>
        ) : (
          <div className="text-center">No Trailer Available</div>
        )}
        </Modal.Body>
        </Modal>
  )
}

export default MovieTrailer
