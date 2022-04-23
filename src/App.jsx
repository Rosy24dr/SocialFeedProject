import React, { useState } from "react";
// import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import Post from "./Components/Post/Post";
import "./App.css"

function App() {
  const [posts, setPosts] = useState([
    { name: "Rosy Ferrell", post: "It's my birthday!!", date: "1/10/2022" },
  ]);

  function addNewPost(entry) {
    let tempEntries = [...posts, entry];
    setPosts(tempEntries);
  }
  return (
    <body className="body" >
      <div>
          <h1>Social<small className="text-muted">Feed</small></h1>
        </div>
      <div className="container">
        <div className= "entry">
          <CreatePost createNewPost={addNewPost} /></div>
        <div className="post"><Post posts={posts} /></div>
      </div>
    </body>
   
  );
}

export default App;