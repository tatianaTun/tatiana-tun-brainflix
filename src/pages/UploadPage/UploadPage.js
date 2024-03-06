import { useNavigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import "./UploadPage.scss";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import publishIcon from "../../assets/Icons/publish.svg";

function UploadPage() {
  const navigate = useNavigate();
  function videoUploaded() {
    alert(
      "Your video is uploaded! Check out our other videos on the home page"
    );
    // Navigate to the home page
    navigate("/");
  }

  return (
    <>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form>
          <div className="upload__sections">
            <div className="upload__section">
              <h3>VIDEO THUMBNAIL</h3>
              <img src={Thumbnail} className="upload__thumbnail"></img>{" "}
            </div>
            <div className="upload__section">
              <h3>TITLE YOUR VIDEO</h3>
              <input
                type="text"
                placeholder="Add a title to your video"
              ></input>
            </div>
            <div className="upload__section">
              <h3>ADD A VIDEO DESCRIPTION</h3>
              <textarea placeholder="Add a description to your video"></textarea>
            </div>
          </div>
          <div className="upload__buttons">
            <button
              type="submit"
              className="upload__submit-button"
              onClick={videoUploaded}
            >
              <img src={publishIcon} className="upload__publish-icon"></img>
              PUBLISH
            </button>
            <button type="button" className="upload__cancel-button">
              CANCEL
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default UploadPage;
