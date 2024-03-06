import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import searchIcon from "../../assets/Icons/search.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  //Create an eventlistener for upload button click

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__logo"></img>
      </Link>
      <div className="header__right-container">
        <form>
          <input type="text" placeholder="Search"></input>
          <img src={searchIcon}></img>
        </form>
        <button>
          <Link to="/upload" className="header__upload-link">
            <img src={uploadIcon}></img>UPLOAD
          </Link>
        </button>
        <img src={avatar} className="header__avatar"></img>
      </div>
    </header>
  );
};

export default Header;
