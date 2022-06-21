import VideoItem from "../video_item/video_item";
const VideoList = ({ videos, onVideoClick }) =>
  videos.map((video) => (
    <VideoItem onVideoClick={onVideoClick} key={video.id} video={video} />
  ));

export default VideoList;
