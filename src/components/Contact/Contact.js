import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./Contact.css";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

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
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA1U5dMD244c6AjAudqfE2vVvSiRCQvEnU" }}
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={8}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Contact;
