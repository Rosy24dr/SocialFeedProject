import React, { useState } from "react";

const CreatePost = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
      name: name,
      post: post,
    };
    console.log(newEntry);
    props.createNewPost(newEntry);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Name</label>
        <input
          type="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label>Post</label>
        <input
          type="post"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
      </div>
      <button>Create</button>
    </form>
  );
};

export default CreatePost;
