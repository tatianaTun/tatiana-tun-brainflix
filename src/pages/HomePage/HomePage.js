import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, apiKey } from "../../consts";
import axios from "axios";
import "./HomePage.scss";

function HomePage() {
  const [video, setVideo] = useState(null);
  useEffect(() => {
    const getVideo = async () => {
      try {
        const getRequestUrl = `${baseURL}videos?api_key=${apiKey}`;
        const result = await axios.get(getRequestUrl);
        setVideo(result.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getVideo();
  }, []);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <Navigate to={`/${video.id}`}></Navigate>
    )
}

export default HomePage;
