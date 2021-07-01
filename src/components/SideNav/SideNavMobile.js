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
  };
  return (
    <React.Fragment>
      <div className="headerLayout">
        <div className="topnav">
          {toggle ? (
            <div className="links">
              <Link to="/portfolio" onClick={toggleHamburger}>
                Introduction
              </Link>
              <Link to="/exp" onClick={toggleHamburger}>
                Experience
              </Link>
              <Link to="/skills" onClick={toggleHamburger}>
                Skills
              </Link>
              <Link to="/projects" onClick={toggleHamburger}>
                Projects
              </Link>
              <Link to="/contact" onClick={toggleHamburger}>
                Contact Me
              </Link>
            </div>
          ) : (
            ""
          )}
          <a className="icon">
            <FaBars onClick={toggleHamburger} />
          </a>
        </div>
        {!toggle ? (
          <React.Fragment>
            <div className="logoHeader">
              <Link to="/portfolio">
                <img
                  src="/portfolio/images/hamsa.jpg"
                  width="50%"
                  alt="The Portfolio Logo"
                />
              </Link>
            </div>
            <div className="socialLinks">
              <ul className="socialLogos">
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
              </ul>
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
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
