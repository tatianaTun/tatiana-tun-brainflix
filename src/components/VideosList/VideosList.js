import { Link } from "react-router-dom";
import "./VideosList.scss";

function VideosList({ filteredVideos }) {
  // const [videos, setVideos] = useState([]);
  // const { videoId } = useParams();

  // useEffect(() => {
  //   const getVideos = async () => {
  //     try {
  //       const getRequestUrl = `${baseURL}videos?api_key=${apiKey}`;
  //       const result = await axios.get(getRequestUrl);
  //       const videos = result.data;
  //       const filteredList = videos.filter((video) => {
  //         return video.id !== videoId;
  //       });
  //       setVideos(filteredList);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getVideos();
  // }, [videoId]);

  // if (!videos.length) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <section className="videos">
        <h2 className="videos__header">NEXT VIDEOS</h2>
        <div className="videos__list">
          {filteredVideos.map((video) => (
            <Link to={`/${video.id}`} key={video.id} className="videos__link">
              <article className="videos__card">
                <img src={video.image} alt="" className="videos__image" />
                <div className="videos__details">
                  <h3 className="videos__title">{video.title}</h3>
                  <p className="videos__channel">{video.channel}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default VideosList;
