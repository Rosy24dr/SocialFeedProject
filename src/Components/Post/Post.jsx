import React from "react";
import Button from "../Button/Button"
import DisplayPosts from "../DisplayPosts/DisplayPosts";
import {format} from 'date-fns'

const Post = (props) => {
  let singlePost = props.posts.map((post) => {
    return (
      <div>
        <DisplayPosts name={post.name} post={post.post} date={post.date} />
        <Button onClick={props.handleClick}></Button>
        <hr/>
      </div>
    );
  });
  return <div>{singlePost}</div>;
};

export default Post;


{/* <DisplayPosts name={post.name} post={post.post} date={format(post.date, 'dd/mm/yyyy')} /> */}