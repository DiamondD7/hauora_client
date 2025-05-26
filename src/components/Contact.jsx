import React from "react";

import "../styles/contactstyles.css";
const Contact = () => {
  return (
    <div style={{ height: "750px" }}>
      <div className="contact-header__wrapper">
        <h1>Have a Question? Let’s Chat</h1>
        <h5 style={{ textAlign: "center" }}>
          Have questions about how our platform works, want to partner with us,
          or need support? We’d love to hear from you. Whether you’re a patient,
          healthcare provider, or just curious — drop us a message and we’ll get
          back to you as soon as possible.
        </h5>
        <br />
        <h5 style={{ textAlign: "center", color: "#9dcd5a" }}>
          Your health matters. So does your voice.
        </h5>
      </div>

      <br />
      <br />
      <br />
      <div className="contact-contents__wrapper">
        <div className="contact-content__wrapper">
          <p>Socials</p>
          <p>@hauoraHealthNZ</p>
        </div>
        <div className="contact-content__wrapper">
          <p>Email</p>
          <p>hauora.nz.health@gmail.com</p>
        </div>
        <div className="contact-content__wrapper">
          <p>Phone</p>
          <p>+64 21 0299 2483</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
