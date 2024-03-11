import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideosList from "../../components/VideosList/VideosList";
import "./VideoDetailsPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import { baseURL, apiKey } from "../../consts";

function VideoDetailsPage() {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {

    //SPRINT-2
    // const getVideos = async () => {
    //   try {
    //     const getRequestUrl = `${baseURL}videos?api_key=${apiKey}`;
    //     const result = await axios.get(getRequestUrl);
    //     const videos = result.data;
    //     console.log(result.data);
    //     const filteredList = videos.filter((video) => {
    //       return video.id !== videoId;
    //     });
    //     setVideos(filteredList);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // getVideos();

    // const getVideo = async () => {
    //   try {
    //     const getRequestUrl = `${baseURL}videos/${videoId}?api_key=${apiKey}`;
    //     const result = await axios.get(getRequestUrl);
    //     setVideo(result.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // getVideo();


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
      <VideoPlayer mainVideo={video} />
      <div className="video__bottom-section">
      <VideoDetails mainVideo={video} />
      <VideosList filteredVideos={videos} />
      </div>
    </main>
  );
}

export default VideoDetailsPage;
