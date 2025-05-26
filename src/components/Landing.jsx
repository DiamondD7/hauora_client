import React, { useState } from "react";
import HauoraLogo from "../assets/img/HauoraLogo.png"; // Adjust the path as necessary
import LandingPicture from "../assets/img/LandingPicture.png"; // Adjust the path as necessary
import About from "./About";
import Contact from "./Contact";

import "../styles/landingstyles.css";
import Faq from "./Faq";
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
        <li>SERVICES</li>
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
  const [componentRendered, setComponentRendered] = useState("landing");

  return (
    <div
      style={{
        backgroundColor: "#e5f0ff",
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

      {componentRendered === "landing" ? (
        <div className="landing-statement__wrapper">
          <div>
            <h1 style={{ width: "500px" }}>
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

            <form className="landing-statement__form">
              <input type="text" placeholder="Name" />
              <br />
              <input type="text" placeholder="Email" />
              <br />
              <button>Submit</button>
            </form>

            <br />
            <br />
            <label
              style={{
                fontSize: "12px",
                letterSpacing: "1px",
                color: "rgba(0,0,0,0.3)",
              }}
            >
              www.mywebsite.co.nz
            </label>
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
