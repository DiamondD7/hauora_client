import React, { useState } from "react";
import HauoraLogo from "../assets/img/HauoraLogo.png"; // Adjust the path as necessary
import LandingPicture from "../assets/img/LandingPicture.png"; // Adjust the path as necessary
import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import emailjs from "@emailjs/browser";

import "../styles/landingstyles.css";
const LandingNav = ({ componentRendered, setComponentRendered }) => {
  return (
    <div>
      <ul className="landing-nav__list">
        <li
          className={`${componentRendered === "landing" ? "active" : ""}`}
          onClick={() => setComponentRendered("landing")}
        >
          HOME
        </li>
        <li
          className={`${componentRendered === "about" ? "active" : ""}`}
          onClick={(e) => setComponentRendered("about")}
        >
          ABOUT
        </li>
        <li
          className={`${componentRendered === "contact" ? "active" : ""}`}
          onClick={(e) => setComponentRendered("contact")}
        >
          CONTACT
        </li>
        <li
          className={`${componentRendered === "faq" ? "active" : ""}`}
          onClick={(e) => setComponentRendered("faq")}
        >
          FAQ
        </li>
      </ul>
    </div>
  );
};

const Landing = () => {
  const [showRequestSuccess, setShowRequestSuccess] = useState(false);
  const [componentRendered, setComponentRendered] = useState("landing");
  const [userParams, setUserParams] = useState({
    name: "",
    email: "",
    message: `HAUORA SUBSCRIPTION INTEREST`,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    const templateParams = {
      from_name: userParams.name,
      from_email: userParams.email,
      to_name: "Hauora Team",
      message: userParams.message,
    };

    try {
      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (response) => {
          console.log("Sent successfully:", response);
          setShowRequestSuccess(true);
          setTimeout(() => {
            setShowRequestSuccess(false);
            window.location.reload(); // Reload the page after showing success message
          }, 5000); // Hide the success message after 3 seconds

          setUserParams({ name: "", email: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert(
            "There was an error sending your subscription. Please try again."
          );
        }
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    setUserParams((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      style={{
        backgroundColor: "#e5f0ff",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <div className="landing-hauora-image-container__wrapper">
        <div>
          <img src={HauoraLogo} className="haurora-logo__img" />
        </div>
        <div>
          <LandingNav
            componentRendered={componentRendered}
            setComponentRendered={setComponentRendered}
          />
        </div>
      </div>

      {componentRendered === "about" ? <About /> : ""}

      {componentRendered === "contact" ? <Contact /> : ""}

      {componentRendered === "faq" ? <Faq /> : ""}

      {/* Render the landing statement */}

      {showRequestSuccess && (
        <div className="landing-request-success__wrapper">
          <h3>Sent request successful!</h3>
          <p>Thank you for subscribing! We will be in touch soon.</p>
        </div>
      )}

      {componentRendered === "landing" ? (
        <div className="landing-statement__wrapper">
          <div>
            <h1>
              Join the Future of Telemedicine{" "}
              <span
                style={{
                  backgroundColor: "#9dcd5a",
                  color: "#f3f3f3",
                  padding: "0 10px",
                }}
              >
                — Anytime, Anywhere.
              </span>
            </h1>
            <p>
              Be among the first to access our secure, patient-first platform
              connecting you with trusted healthcare professionals for virtual
              consultations, easy appointment booking, and instant medical
              records access — 100% online.
            </p>

            <form className="landing-statement__form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={userParams.name}
                onChange={(e) => handleChange(e)}
              />
              <br />
              <input
                type="text"
                placeholder="Enter valid email"
                name="email"
                value={userParams.email}
                onChange={(e) => handleChange(e)}
              />
              <br />
              <button type="submit">Submit</button>
            </form>

            <br />
            <br />
            {/* <label
              style={{
                fontSize: "12px",
                letterSpacing: "1px",
                color: "rgba(0,0,0,0.3)",
              }}
            >
              www.mywebsite.co.nz
            </label> */}
          </div>

          <div>
            <img
              src={LandingPicture}
              className="landing-statement-picture__img"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Landing;
