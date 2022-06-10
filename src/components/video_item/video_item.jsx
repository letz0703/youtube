import React, { memo } from "react";

const VideoItem = memo((props) => <h1>{props.video.snippet.title}</h1>);

export default VideoItem;
