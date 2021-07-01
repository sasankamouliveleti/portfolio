import React from "react";
import { Route, Link } from "react-router-dom";
import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";

import "./SideNav.css";

const SideNav = () => {
  return (
    <React.Fragment>
      <div className="sideNav">
        <ul className="sideItems">
          <li className="logo">
            <Link to="/portfolio">
              <img
                src="/portfolio/images/hamsa.jpg"
                width="70%"
                alt="THe Portfolio Logo"
              />
            </Link>
          </li>
          <li className="sideItem">
            <Link to="/portfolio">Introduction</Link>
          </li>
          <li className="sideItem">
            <Link to="/exp">Experience</Link>
          </li>
          <li className="sideItem">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="sideItem">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="sideItem">
            <Link to="/contact">Contact Me</Link>
          </li>
          <li className="social">
            <span className="footerBody">
              <p>
                <a
                  href="https://www.linkedin.com/in/sasanka-mouli-veleti/"
                  rel="nofollow noreferrer"
                  target="blank"
                >
                  <img
                    src="https://i.stack.imgur.com/gVE0j.png"
                    alt="linkedin"
                    width="40px"
                  />
                </a>
                &nbsp;
                <a
                  href="https://github.com/sasankamouliveleti"
                  rel="nofollow noreferrer"
                  target="blank"
                >
                  <img
                    src="https://i.stack.imgur.com/tskMh.png"
                    alt="github"
                    width="40px"
                  />
                </a>
              </p>
            </span>
          </li>
        </ul>
      </div>
      <Route path="/portfolio" exact component={Intro} />
      <Route path="/exp" exact component={Experience} />
      <Route path="/skills" exact component={Skills} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Contact} />
    </React.Fragment>
  );
};

export default SideNav;
