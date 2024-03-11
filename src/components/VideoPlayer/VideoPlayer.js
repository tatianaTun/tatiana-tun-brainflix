import "./VideoPlayer.scss";

function VideoDetails({ image, videoUrl }) {

  return (
    <video className="video__media" controls poster={image}>
      <source src={videoUrl} type="video/mp4"></source>
    </video>
  );
}

export default VideoDetails;
