import React, { useState } from "react";
import Googlemap from "./Googlemap";
import { useWindowSize } from "react-use";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const mapStyleMobile = {
    width: "350px",
    height: "400px",
  };
  const mapStyleWeb = {
    width: "500px",
    height: "500px",
  };
  const windowSize = useWindowSize();
  const mapStyles = windowSize.width < 769 ? mapStyleMobile : mapStyleWeb;
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="contact-fullBackground ">
      <div className="contact-card">
        <div className="contact-form">
          Please Fill the Below. I will connect with you as soon as I can
          <br />
          <br />
          <br />
          <form onSubmit={formSubmitHandler}>
            <label for="fname">Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="contact-map">
        <Googlemap mapsstyle={mapStyles} />
      </div>
    </div>
  );
};

export default Contact;
