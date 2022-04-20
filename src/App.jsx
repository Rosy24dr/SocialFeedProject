import React, {useState} from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";


function App() {
    const[posts, setPosts]=useState([{name: 'Rosy', post:'I love my family.' }])
  return (
    <div>
      <CreatePost createPost={posts}/>
      <DisplayPosts displayPost={posts}/>
    </div>
  );
}

export default App;


