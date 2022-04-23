import React, { useState } from "react";
import "./CreatePost.css"

const CreatePost = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
      name: name,
      post: post,
      date: date,
    };
    console.log(newEntry);
    props.createNewPost(newEntry);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="userName">Name</label>
        <input
          className="inputOne"
          type="text"
          name="userName"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label for="post">Post</label>
        <input
          className="inputTwo"
          type="text"
          name="post"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
      </div>
      <div>
        <label for="date">Date</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <button>Create</button>
    </form>
  );
};

export default CreatePost;
