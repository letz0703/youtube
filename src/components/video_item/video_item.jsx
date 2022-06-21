import React from "react";
import styles from "../video_item/video_item.module.css";

const VideoItem = ({ video, video: { snippet }, onVideoClick }) => (
  <li className={styles.container} onClick={() => onVideoClick(video)}>
    <div className={styles.video}>
      <img
        src={snippet.thumbnails.medium.url}
        alt="video tumbnail"
        className={styles.thumb}
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={snippet.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
