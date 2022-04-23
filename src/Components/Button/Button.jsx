import React, { useState } from "react";
import "./Button.css";
import { FaRegThumbsUp,FaRegThumbsDown } from "react-icons/fa";

const Button = (props) => {
  const [likeButton, setLikeButton] = useState('inactive');
  const [dislikeButton, setDislikeButton] = useState('inactive');

  const likeToggle = () => {
    if (likeButton === 'inactive') {
      setLikeButton('likeActive');
      setDislikeButton('inactive');
    } else {
      setLikeButton('inactive');
    }
  };

  const dislikeToggle = () => {
    if (dislikeButton === 'inactive') {
      setDislikeButton('dislikeActive');
      setLikeButton('inactive')
    } else {
      setDislikeButton('inactive');
    }
  };

  return (
    <div>
      <button type="button" className={likeButton} onClick={likeToggle}>
        <FaRegThumbsUp/>
      </button>
      
      <button type="button" className={dislikeButton} onClick={dislikeToggle}>
        <FaRegThumbsDown/>
      </button>
    </div>
  );
};

export default Button;
