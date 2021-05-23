import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <React.Fragment>
      <div className="fullBackground">
          <div className='heading'>
              <h1>Hi,</h1>
              <h1>This is Sasanka Mouli Veleti</h1>
          </div>
          <div className='profilePic'>
              <img src="https://scontent.fhyd2-1.fna.fbcdn.net/v/t31.18172-1/p240x240/14890444_811947902241672_3521237704725685913_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=yQN6xVUEghsAX_G8rai&_nc_ht=scontent.fhyd2-1.fna&tp=6&oh=ff764b333fa9614016e3849bef12fe08&oe=60A5493B" alt='mouli'/>
          </div>
          <div className="clearfix"></div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
