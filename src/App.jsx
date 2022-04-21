import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import Post from "./Components/Post/Post";


function App() {
  const [posts, setPosts] = useState([
    { name: "Rosy Ferrell", post: "It's my birthday!!", date: "1/10/1022" },
  ]);

  function addNewPost(entry) {
    let tempEntries = [...posts, entry];
    setPosts(tempEntries);
  }
  return (
    <div>
      <CreatePost createNewPost={addNewPost} />
      <DisplayPosts displayPost={posts} />
      <Post post={posts} />
    </div>
  );
}

export default App;