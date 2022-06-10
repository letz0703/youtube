import "./App.css";
import React, { useState, useEffect } from "react";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //paste postman code here
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=US&key=AIzaSyCTNuUzbi5oPOZWRYAT-0rJF9jZKrKWfSM&key=AIzaSyCTNuUzbi5oPOZWRYAT-0rJF9jZKrKWfSM",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  // end of postman fetch

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
      />
      <div>
        <h1>Working!!!</h1>
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;
