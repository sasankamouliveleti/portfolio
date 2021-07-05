import React from "react";
import SkillBar from "react-skillbars";
import "./Skills.css";
const skills = [
  { type: "Javascript", level: 85 },
  { type: "Python", level: 80 },
  { type: "ReactJS", level: 70 },
  { type: "NodeJS", level: 65 },
  { type: "Microservices", level: 40 },
  { type: "MachineLearning", level: 30 },
  { type: "DataScience", level: 30 },
];
const Skills = () => {
  return (
    <div className="skills-fullBackground">
      <div className="skills">
        <SkillBar skills={skills} animationDelay={500} />
      </div>
    </div>
  );
};

export default Skills;
