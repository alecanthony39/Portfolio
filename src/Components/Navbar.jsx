import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import AlecPic from "../AlecImg2.jpg";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowNavbar(false);
  }, [location]);
  return (
    <div className="navbar" id={showNavbar ? "open" : "close"}>
      <div className="tog-button">
        <button
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
        >
          <FaBars />
        </button>
      </div>

      <div className="links">
        <img src={AlecPic} alt="MyPicture" />
        <Link to="/"> Home</Link>
        <Link to="/Experience">Experience</Link>
        <Link to="/Projects"> My Projects</Link>
      </div>
    </div>
  );
};

export default Navbar;
