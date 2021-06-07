import React,{useEffect,useState} from "react";
import "./Experience.css";
import axios from "axios";

const Experience = (props) => {
  const [experience, setexperience] = useState([]);
  useEffect(() => {
    axios.get("./portfolio/data/experience.json").then((res) => {
      if (res.data.experiences) {
        setexperience(res.data.experiences);
      }
    });
  }, []);
  return (
    <div className="timeline">
      {experience.map((exp, pos) => {
        return pos % 2 ? (
          <div className="container left">
            <div className="content">
              <h2>{exp.year}</h2>
              <p>
                {exp.description}
              </p>
            </div>
          </div>
        ) : (
          <div className="container right">
            <div className="content">
              <h2>{exp.year}</h2>
              <p>
                {exp.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
