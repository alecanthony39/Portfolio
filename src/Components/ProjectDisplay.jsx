import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../Helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../Styles/ProjectDisplay.css";
const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projectList[id];

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <a href={project.link}>
        <img src={project.image} alt="Project Pic" />
      </a>
      <p>
        <b>Description:</b> {project.description}
      </p>

      <GitHubIcon />
    </div>
  );
};

export default ProjectDisplay;
