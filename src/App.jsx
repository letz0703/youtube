import React, { useState, useEffect } from "react";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import Search from "./components/search/search";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  // end of postman fetch

  return (
    <div className={styles.app}>
      <Search onSearch={search} />
      <ul className={styles.ul}>
        <VideoList videos={videos} />
      </ul>
    </div>
  );
}

export default App;
