import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { useWindowSize } from "react-use";
import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";

import "./SideNav.css";

const SideNav = () => {
  const windowSize = useWindowSize();
  const [menuClick, setMenuClick] = useState(false);

  return (
    <React.Fragment>
      {windowSize.width < 769 && (
        <span
          onClick={() => {
            setMenuClick(!menuClick);
          }}
        >
          Menu
        </span>
      )}
      {menuClick ? (
        <div className="sideNav">
          <ul className="sideItems">
            <li className="logo">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwniptafcXkU6bILGu54Y1TSHs74JbvdoSEdV4JQ=s176-c-k-c0x00ffffff-no-rj"
                width="70%"
              />
            </li>
            <li className="sideItem">
              <Link
                to="/"
                onClick={() => {
                  setMenuClick(!menuClick);
                }}
              >
                Introduction
              </Link>
            </li>
            <li className="sideItem">
              <Link
                to="/exp"
                onClick={() => {
                  setMenuClick(!menuClick);
                }}
              >
                Experience
              </Link>
            </li>
            <li className="sideItem">
              <Link
                to="/skills"
                onClick={() => {
                  setMenuClick(!menuClick);
                }}
              >
                Skills
              </Link>
            </li>
            <li className="sideItem">
              <Link
                to="/projects"
                onClick={() => {
                  setMenuClick(!menuClick);
                }}
              >
                Projects
              </Link>
            </li>
            <li className="sideItem">
              <Link
                to="/contact"
                onClick={() => {
                  setMenuClick(!menuClick);
                }}
              >
                Contact Me
              </Link>
            </li>
            <li className="social">
              <span className="footerBody">
                <p>
                  <a
                    href="https://www.linkedin.com/[removed]"
                    rel="nofollow noreferrer"
                    target="blank"
                  >
                    <img
                      src="https://i.stack.imgur.com/gVE0j.png"
                      alt="linkedin"
                      width="40px"
                    />{" "}
                  </a>
                  &nbsp;
                  <a
                    href="https://github.com/[removed]"
                    rel="nofollow noreferrer"
                    target="blank"
                  >
                    <img
                      src="https://i.stack.imgur.com/tskMh.png"
                      alt="github"
                      width="40px"
                    />{" "}
                  </a>
                </p>
              </span>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
      {windowSize.width > 769 && (
        <div className="sideNav">
          <ul className="sideItems">
            <li className="logo">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwniptafcXkU6bILGu54Y1TSHs74JbvdoSEdV4JQ=s176-c-k-c0x00ffffff-no-rj"
                width="70%"
              />
            </li>
            <li className="sideItem">
              <Link to="/">Introduction</Link>
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
                    href="https://www.linkedin.com/[removed]"
                    rel="nofollow noreferrer"
                    target="blank"
                  >
                    <img
                      src="https://i.stack.imgur.com/gVE0j.png"
                      alt="linkedin"
                      width="40px"
                    />{" "}
                  </a>
                  &nbsp;
                  <a
                    href="https://github.com/[removed]"
                    rel="nofollow noreferrer"
                    target="blank"
                  >
                    <img
                      src="https://i.stack.imgur.com/tskMh.png"
                      alt="github"
                      width="40px"
                    />{" "}
                  </a>
                </p>
              </span>
            </li>
          </ul>
        </div>
      )}

      <Route path="/" exact component={Intro} />
      <Route path="/exp" exact component={Experience} />
      <Route path="/skills" exact component={Skills} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Contact} />
    </React.Fragment>
  );
};

export default SideNav;
