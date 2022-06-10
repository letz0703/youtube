import React, { memo } from "react";
import VideoItem from "./video_item";
const VideoList = memo((props) => {
  const videoitems = Object.entries(props);
  const videos = videoitems[0][1];
  const title = videos.map((item) => {
    const snippet = item.snippet;
    return snippet.title;
  });

  return (
    <>
      <h1>{title}</h1>
    </>
  );
});
export default VideoList;
