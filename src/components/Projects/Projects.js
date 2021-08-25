import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Projects.css";

const Projects = () => {
  const [projects, setprojects] = useState([]);
  useEffect(() => {
    axios.get("./portfolio/data/projects.json").then((res) => {
      if (res.data.projects) {
        setprojects(res.data.projects);
      }
    });
  }, []);
  return (
    <div className="projects-fullBackground ">
      {projects.map((project) => {
        return (
          <Card key={project.pid} className="positioning">
            <div>{project.pname}</div>
            <p>
              <a href={project.pgitlink} target="_blank" rel="noreferrer">
                Project Link
              </a>
            </p>
            <p>
              Technologies User: <br></br>
              {project.LangTech}
            </p>
          </Card>
        );
      })}
    </div>
  );
};

export default Projects;
