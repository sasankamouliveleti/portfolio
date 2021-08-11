import React, { useEffect, useState } from "react";
import "./Intro.css";

const Intro = () => {
  const [greeting, setgreeting] = useState("");
  useEffect(() => {
    let time = new Date();
    if (time.toTimeString().split(" ")[0].split(":")[0] <= 12) {
      setgreeting("Good Morning");
    } else {
      setgreeting("Good Evening");
    }
  }, []);
  return (
    <React.Fragment>
      <div className="intro-fullBackground">
        <div className="profilePic">
          <img
            src="/portfolio/images/profile.jpg"
            alt="mouli"
            className="profile-img"
          />
        </div>
        <div className="heading">
          <h1>Hi {greeting},</h1>
          <h1>This is Sasanka Mouli Veleti</h1>
          <p>
            I am a passionate developer and have a keen interest in the field of
            Full Stack Development and Machine Learning
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
