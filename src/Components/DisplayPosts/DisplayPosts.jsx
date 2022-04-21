import React from "react";

const DisplayPosts = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.post}</div>
      <div>{props.date}</div>
    </div>
  );
};

export default DisplayPosts;
