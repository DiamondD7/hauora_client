import React from "react";

import "../styles/aboutstyles.css";
const About = () => {
  return (
    <div style={{ height: "750px" }}>
      <div className="about-cards-container__wrapper">
        <div className="about-card__wrapper">
          <h4>About us</h4>
          <p>
            At Hauora, we believe that healthcare should be accessible,
            seamless, and efficient. <br /> <br /> Our platform connects
            patients with trusted healthcare professionals, making it easier to
            book appointments, receive virtual consultations, and manage medical
            records—all in one place.
          </p>
        </div>
        <div className="about-card__wrapper">
          <h4>Our story</h4>
          <p>
            Hauora was founded with a simple yet powerful vision: to bridge the
            gap between patients and healthcare professionals through
            technology. Recognizing the challenges of long wait times,
            inaccessible medical records, and inefficient communication in
            healthcare, we set out to create a solution that makes healthcare
            more convenient and patient-centered. <br /> <br /> Driven by
            innovation and a passion for improving healthcare accessibility, our
            team built a platform that empowers both patients and professionals.
            From secure video consultations to streamlined appointment
            management, we are committed to transforming how healthcare services
            are delivered.
          </p>
        </div>
        <div className="about-card__wrapper">
          <h4>What we do</h4>
          <p>
            Whether you need a quick diagnosis via video call or a face-to-face
            appointment, our platform ensures that you get the right care at the
            right time. <br /> <br /> Patients can track their appointment
            history, access personal health records, and communicate with
            healthcare providers, while professionals can efficiently manage
            their schedules, view patient details, and collaborate through
            secure messaging. At Hauora, we are dedicated to making healthcare
            more connected, efficient, and patient-focused. <br />
            <span
              style={{
                backgroundColor: "#d6e8ff",
                color: "#9dcd5a",
                fontWeight: "bold",
              }}
            >
              Your health, your way—simplified.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
