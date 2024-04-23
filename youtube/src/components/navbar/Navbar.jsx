import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
//need to understand this  ternary logic 
  return (
    <div className= {isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
          
        </div>
        <div className="right">
          <Search className="icons" />
          <span>KID</span>
          <Notifications className="icons" />
          <img
            src="https://media.gettyimages.com/id/1476060163/photo/john-mayer-solo-acoustic-nashville-tn.jpg?s=1024x1024&w=gi&k=20&c=UZHz5NwtrAO7WW5jhCN-qT1EGnhaZ8MVBVTSeVq9JTw="
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icons" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
