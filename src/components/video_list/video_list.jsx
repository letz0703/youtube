import VideoItem from "../video_item/video_item";
import styles from "../video_list/video_list.module.css";

const VideoList = (props) =>
  props.videos.map((video) => (
    <ul className={styles.videos}>
      <VideoItem key={video.id} video={video} />
    </ul>
  ));

export default VideoList;
