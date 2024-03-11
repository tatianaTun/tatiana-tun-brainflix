import { Link } from "react-router-dom";
import "./VideosList.scss";

function VideosList({ filteredVideos }) {

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
