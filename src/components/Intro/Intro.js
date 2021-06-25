import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <React.Fragment>
      <div className="fullBackground">
        <div className="profilePic">
          <img
            src="https://scontent.fhyd16-1.fna.fbcdn.net/v/t31.18172-8/14890444_811947902241672_3521237704725685913_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1OsZo0zuF7EAX9oF09l&_nc_ht=scontent.fhyd16-1.fna&oh=a511a26cc6f5876d7d6e8d879aaaf570&oe=60F60B8E"
            alt="mouli"
            className="profile-img"
          />
        </div>
        <div className="heading">
          <h1>Hi,</h1>
          <h1>This is Sasanka Mouli Veleti</h1>
          <p>I am a passionate developer with an edge of data</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
