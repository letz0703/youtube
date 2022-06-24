import React, { useState, useEffect, useCallback } from "react";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import Search from "./components/search/search";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  // end of postman fetch
  /*   console.log("header!!!"); */
  return (
    <div className={styles.app}>
      <Search onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
