import "./VideoDetails.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import likesIcon from "../../assets/Icons/likes.svg";
import viewsIcon from "../../assets/Icons/views.svg";
import commentIcon from "../../assets/Icons/add_comment.svg";

function VideoDetails({
  channel,
  comments,
  description,
  likes,
  timestamp,
  title,
  views,
}) {
  function formateDate(timestamp) {
    // Create a new Date object using the timestamp
    const date = new Date(timestamp);

    // Get the month, day, and year from the date object
    const month = date.getMonth() + 1; // Note: January is 0, so we add 1 to get the correct month
    const day = date.getDate();
    const year = date.getFullYear();

    // Format the date as month/day/year
    const formattedDate = month + "/" + day + "/" + year;
    return formattedDate;
  }

  return (
    <section className="video">
      <div className="video__information">
        <h1 className="video__title">{title}</h1>
        <div className="video__data">
          <div className="video__data-left">
            <p className="video__channel">By {channel}</p>
            <p className="video__timestamp">{formateDate(timestamp)}</p>
          </div>
          <div className="video__data-right">
            <div className="video__views">
              <img
                className="video__views-logo"
                src={viewsIcon}
                alt="video views"
              ></img>
              <span className="video__views-text">{views}</span>
            </div>
            <div className="video__likes">
              <img
                className="video__likes-logo"
                src={likesIcon}
                alt="video likes"
              ></img>
              <span className="video__likes-text">{likes}</span>
            </div>
          </div>
        </div>
        <p className="video__description">{description}</p>
      </div>
      <div className="video__comments">
        <p className="video__comments-count">{comments.length} Comments </p>
        <h4 className="video__form-header">JOIN THE CONVERSATION</h4>
        <div className="video__form-container">
          <img
            className="video__form-avatar"
            src={avatar}
            alt="form avatar"
          ></img>
          <form>
            <textarea
              type="textarea"
              placeholder="Add a new comment"
            ></textarea>
            <button>
              <img src={commentIcon}></img>COMMENT
            </button>
          </form>
        </div>

        <div className="video__comments-list">
          {comments.map((comment) => (
            <article className="video__comment" key={comment.id}>
              <div className="video__comment-avatar"></div>
              <div className="video__comment-right">
                <div className="video__comment-top">
                  <p className="video__comment-name">{comment.name}</p>
                  <p className="video__comment-date">
                    {formateDate(comment.timestamp)}
                  </p>
                </div>
                <p className="video__comment-text">{comment.comment}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoDetails;
