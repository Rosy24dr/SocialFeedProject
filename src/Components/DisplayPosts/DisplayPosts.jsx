import React, { useEffect } from "react";

const DisplayPosts = (props) => {
  useEffect(() => {
    console.log(props.name);
  });

  return (
    <div>
      <div>{props.name}</div>
      <div>{props.post}</div>
      <div>{props.date}</div>
    </div>
  );
};

export default DisplayPosts;
