import React, { useState } from "react";
import "./Button.css"

const Button = (props) => {
    // const [status, setStatus]= useState(true);
    // const toggle=() =>{
    //     setStatus(!status)
    // }
    // return (
    //     <div>
    //       <button onClick={toggle} className={(status ? 'active':"")}>
    //         {status ? 'like' : 'dislike'}
    //       </button>
    //     </div>
    //   );


  const [likeButton, setLikeButton] = useState('active');
  const [dislikeButton, setDislikeButton] = useState('inactive');

  const toggle=() =>{
        setLikeButton('inactive')
        setDislikeButton('active')
    }

  function handleClick() {
    if (likeButton === "active") {
      setDislikeButton("inactive");
    } else if(dislikeButton === "inactive"){
      setLikeButton("active");
    }
  } 
  return (
    <div>
      <button className={likeButton} onClick={toggle}>like</button>
      <button className={dislikeButton} onClick={toggle}>dislike</button>
    </div>
  );
};

export default Button;
