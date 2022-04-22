import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const [likeButton, setLikeButton] = useState('inactive');
  const [dislikeButton, setDislikeButton] = useState('inactive');

  const likeToggle = () => {
    if (likeButton === 'inactive') {
      setLikeButton('active');
    } else {
      setLikeButton('inactive');
    }
  };

  const dislikeToggle = () => {
    if (dislikeButton === 'inactive') {
      setDislikeButton('active');
    } else {
      setDislikeButton('inactive');
    }
  };

  return (
    <div>
      <button type="button" className={likeButton} onClick={likeToggle}>
        like
      </button>
      <button type="button" className={dislikeButton} onClick={dislikeToggle}>
        dislike
      </button>
    </div>
  );
};

export default Button;
