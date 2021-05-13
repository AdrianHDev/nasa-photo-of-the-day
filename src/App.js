import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar/SearchBar"
import Posts from "./Components/Posts/Posts"
import "./App.css";



function App() {
  const [posts, setPosts] = useState([])
  const [ curPost, setCurPost ] = useState(0);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=GqwnOIiwwEun9e4WUdF698ve4xVRq3cr3Ga9DjXw", {params: {count: 10}})
    .then((data => {
      console.log(data);
      setPosts(data.data);
    }))
  }, []);

  return (
    <div className="App">
      <SearchBar setCurPost={setCurPost} posts={posts}></SearchBar>
      <Posts curPost={curPost} setCurPost={setCurPost} posts={posts}></Posts>
    </div>
  );
}

export default App;
