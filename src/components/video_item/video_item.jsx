import React, { memo } from "react";

const VideoItem = ({ video: { snippet } }) => (
  <li>
    <img src={snippet.thumbnails.medium.url} alt="video tumbnail" />
    <p>{snippet.title}</p>
    <p className="f4">{snippet.description}</p>
  </li>
);

export default VideoItem;
