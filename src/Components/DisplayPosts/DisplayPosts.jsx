import React from "react";

const DisplayPosts = (props) => {
  let singlePost = props.displayPost.map((post) => {
    return (
      <div>
        <div>
          {post.name} {post.post}
        </div>
        <button>like</button>
        <button>dislike</button>
      </div>
    );
  });
  return <div>{singlePost}</div>;
};

export default DisplayPosts;