import React from "react";
import Button from "../Button/Button";
import DisplayPosts from "../DisplayPosts/DisplayPosts";

const Post = (props) => {
  let singlePost = props.posts.map((post) => {
    return (
      <div>
        <DisplayPosts name={post.name} post={post.post} date={post.date} />
        <Button onClick={props.handleClick}>{props.like}</Button>
      </div>
    );
  });
  return <div>{singlePost}</div>;
};

export default Post;
