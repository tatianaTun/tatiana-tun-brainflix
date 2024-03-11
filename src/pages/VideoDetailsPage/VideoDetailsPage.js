import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideosList from "../../components/VideosList/VideosList";
import "./VideoDetailsPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function VideoDetailsPage() {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const requestUrl = `http://localhost:8080/videos`;
        const result = await axios.get(requestUrl);
        const videos = result.data;

        const filteredList = videos.filter((video) => {
          return video.id !== videoId;
        });
        setVideos(filteredList);
      } catch (error) {
        console.log(error);
      }
    };

    getVideos();

    const getVideo = async () => {
      try {
        const requestUrl = `http://localhost:8080/videos/${videoId}`;
        const result = await axios.get(requestUrl);
        setVideo(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getVideo();
  }, [videoId]);

  if (!videos.length || !video) {
    return <div>Loading page...</div>;
  }

  return (
    <main>
      <VideoPlayer image={video.image} videoUrl={video.videoUrl} />
      <div className="video__bottom-section">
        <VideoDetails
          channel={video.channel}
          comments={video.comments}
          description={video.description}
          likes={video.likes}
          timestamp={video.timestamp}
          title={video.title}
          views={video.views}
        />
        <VideosList filteredVideos={videos} />
      </div>
    </main>
  );
}

export default VideoDetailsPage;
