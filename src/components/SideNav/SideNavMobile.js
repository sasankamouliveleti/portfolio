import React, { useState } from "react";
import "./SideNav.css";
import { Route, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
const SideNavMobile = () => {
  const [toggle, settoggle] = useState(false);
  const toggleHamburger = () => {
    settoggle(!toggle);
    console.log("fsdfsd");
  };
  return (
    <React.Fragment>
      <div className="topnav">
        {toggle ? (
          <div className="links">
            <Link to="/portfolio">Introduction</Link>
            <Link to="/exp">Experience</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link>
          </div>
        ) : (
          ""
        )}
        <a className="icon">
          <FaBars onClick={toggleHamburger} />
        </a>
      </div>
      <Route path="/portfolio" exact component={Intro} />
      <Route path="/exp" exact component={Experience} />
      <Route path="/skills" exact component={Skills} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Contact} />
    </React.Fragment>
  );
};

export default SideNavMobile;
