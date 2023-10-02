import React from "react";
import "../Styles/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/alecanthony/">
          <LinkedInIcon />
        </a>

        <a href="https://github.com/alecanthony39">
          <GitHubIcon />
        </a>
      </div>
      <p> &copy; Alec Anthony 2023</p>
    </div>
  );
};

export default Footer;
