import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideosList from "../../components/VideosList/VideosList";
import "./VideoDetailsPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, apiKey } from "../../consts";

function VideoDetailsPage() {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const getRequestUrl = `${baseURL}videos?api_key=${apiKey}`;
        const result = await axios.get(getRequestUrl);
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
        const getRequestUrl = `${baseURL}videos/${videoId}?api_key=${apiKey}`;
        const result = await axios.get(getRequestUrl);
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
      <VideoPlayer video={video} />
      <div className="video__bottom-section">
      <VideoDetails video={video} />
      <VideosList filteredVideos={videos} />
      </div>
    </main>
  );
}

export default VideoDetailsPage;
