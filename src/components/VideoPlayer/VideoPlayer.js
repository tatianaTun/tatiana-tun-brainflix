import "./VideoPlayer.scss";

function VideoDetails({ mainVideo }) {
  //video here is the prop, the prop name should be identical to the name of the prop
  const {
    channel,
    comments,
    description,
    duration,
    id,
    image,
    likes,
    timestamp,
    title,
    videoUrl,
    views,
  } = mainVideo;

  return (
    <video className="video__media" controls poster={image}>
      <source src={videoUrl} type="video/mp4"></source>
    </video>
  );
}

export default VideoDetails;
