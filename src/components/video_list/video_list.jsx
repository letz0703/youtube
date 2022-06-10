import VideoItem from "../video_item/video_item";

const VideoList = (props) =>
  props.videos.map((video) => (
    <ul>
      <VideoItem key={video.id} video={video} />
    </ul>
  ));

export default VideoList;
