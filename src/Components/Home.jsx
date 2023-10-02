import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Alec</h2>
        <div className="prompt">
          <p>
            Former childcare professional ready to take his first steps as a
            software developer!
          </p>
          <a href="https://www.linkedin.com/in/alecanthony/">
            <LinkedInIcon />
          </a>
          <a href="mailto:alecanthony39@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/alecanthony39">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>React, HTML, CSS, NPM, BootStrap</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, PostgreSql</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
