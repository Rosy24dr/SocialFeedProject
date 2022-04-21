import React from "react";
import { format } from "date-fns";

const Post = (props) => {
  let singlePost = props.post.map((post) => {
    return (
      <div>
        <div>{post.name}</div>
        <div>{post.post}</div>
        <div>{post.date}</div>
        <button>like</button>
        <button>dislike</button>
      </div>
    );
  });
  return <div>{singlePost}</div>;
};

export default Post;
