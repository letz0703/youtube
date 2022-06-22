import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => {
  return (
    <section className={styles.detail}>
      <iframe
        title="LetTube"
        id="ytplayer"
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
        className={styles.video}
      ></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre>{snippet.channelDescription}</pre>
      {/* //https://developers.google.com/youtube/youtube_player_demo?hl=ko */}
    </section>
  );
  //https://developers.google.com/youtube/youtube_player_demo?hl=ko
};

export default VideoDetail;
