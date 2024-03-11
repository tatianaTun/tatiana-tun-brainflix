import { useNavigate } from "react-router-dom";
import "./UploadPage.scss";
import publishIcon from "../../assets/Icons/publish.svg";
import axios from "axios";
import { useState } from "react";

function UploadPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function videoSubmit(e) {
    e.preventDefault(); 

    //Generate the current timestamp
    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    const postVideo = async () => {
      //create a video object to be posted to backend
      const videoData = {
        title: title,
        channel: "Unknown User",
        image: "http://localhost:8080/public/images/image0.jpg",
        description: description,
        views: "0",
        likes: "0",
        duration: "Unknown",
        video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
        timestamp: timestamp,
        comments: [],
      };

      //Posting to backend
      try {
        const requestUrl = `http://localhost:8080/upload`;

        const result = await axios.post(requestUrl, videoData);
        alert("Your video is uploaded! Check out our other videos on the home page");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };

    postVideo();
  }

  return (
    <>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form onSubmit={videoSubmit}>
          <div className="upload__sections">
            <div className="upload__section">
              <h3>VIDEO THUMBNAIL</h3>
              <img
                src="http://localhost:8080/public/images/Upload-video-preview.jpg"
                className="upload__thumbnail"
              ></img>{" "}
            </div>
            <div className="upload__section">
              <h3>TITLE YOUR VIDEO</h3>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a title to your video"
              ></input>
            </div>
            <div className="upload__section">
              <h3>ADD A VIDEO DESCRIPTION</h3>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>
          <div className="upload__buttons">
            <button type="submit" className="upload__submit-button">
              <img src={publishIcon} className="upload__publish-icon"></img>
              PUBLISH
            </button>
            <button className="upload__cancel-button">CANCEL</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default UploadPage;
