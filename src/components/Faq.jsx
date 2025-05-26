import React, { useState } from "react";

import "../styles/faqstyles.css";
const Faq = () => {
  const [showAnswer, setShowAnswer] = useState(0);

  const handleShowAnswer = (index) => {
    if (showAnswer === index) {
      setShowAnswer(0);
    } else {
      setShowAnswer(index);
    }
  };
  return (
    <div className="faq-container__wrapper">
      <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>

      <>
        <div className="question-btn" onClick={() => handleShowAnswer(1)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>What is this platform for?</span>
            <span style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
              {showAnswer === 1 ? "-" : "+"}
            </span>
          </div>
        </div>

        {showAnswer === 1 && (
          <div className="answer-btn">
            <label style={{ fontSize: "12px" }}>
              Our platform connects patients with licensed healthcare
              professionals for online consultations. It’s a simple, secure way
              to access care without visiting a clinic — ideal for everyday
              health concerns and follow-ups.
            </label>
          </div>
        )}
      </>

      <>
        <div className="question-btn" onClick={() => handleShowAnswer(2)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Is it free to use?</span>
            <span style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
              {showAnswer === 2 ? "-" : "+"}
            </span>
          </div>
        </div>

        {showAnswer === 2 && (
          <div className="answer-btn">
            <label style={{ fontSize: "12px" }}>
              {" "}
              Yes, creating an account and using the platform is free. You’ll
              only be charged after booking and completing a consultation with a
              doctor.
            </label>
          </div>
        )}
      </>

      <>
        <div className="question-btn" onClick={() => handleShowAnswer(3)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>How do I talk to a doctor?</span>
            <span style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
              {showAnswer === 3 ? "-" : "+"}
            </span>
          </div>
        </div>

        {showAnswer === 3 && (
          <div className="answer-btn">
            <label style={{ fontSize: "12px" }}>
              At this stage, you can speak with a doctor by booking an
              appointment. Once booked, you’ll receive a secure video link to
              connect. Messaging and other features will be available in future
              updates.
            </label>
          </div>
        )}
      </>

      <>
        <div className="question-btn" onClick={() => handleShowAnswer(4)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Is my information private?</span>
            <span style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
              {showAnswer === 4 ? "-" : "+"}
            </span>
          </div>
        </div>

        {showAnswer === 4 && (
          <div className="answer-btn">
            <label style={{ fontSize: "12px" }}>
              Absolutely. Your personal and medical information is stored
              securely and handled with strict privacy protocols. Only doctors
              you’re connected with can view necessary details to support your
              care.
            </label>
          </div>
        )}
      </>
      <>
        <div className="question-btn" onClick={() => handleShowAnswer(5)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>What kinds of conditions can I get help with?</span>
            <span style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
              {showAnswer === 5 ? "-" : "+"}
            </span>
          </div>
        </div>

        {showAnswer === 5 && (
          <div className="answer-btn">
            <label style={{ fontSize: "12px" }}>
              You can consult about flu-like symptoms and other common
              conditions that are suitable for remote assessment. As the
              platform grows, support for more conditions will be added.
            </label>
          </div>
        )}
      </>
      <>
        <div className="question-btn" onClick={() => handleShowAnswer(6)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Can I get prescriptions?</span>
            <span style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
              {showAnswer === 6 ? "-" : "+"}
            </span>
          </div>
        </div>

        {showAnswer === 6 && (
          <div className="answer-btn">
            <label style={{ fontSize: "12px" }}>
              Not yet, but we’re working on it! The ability to receive
              electronic prescriptions will be available soon after launch.
            </label>
          </div>
        )}
      </>
      <>
        <div className="question-btn" onClick={() => handleShowAnswer(7)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Do you support video calls?</span>
            <span style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
              {showAnswer === 7 ? "-" : "+"}
            </span>
          </div>
        </div>

        {showAnswer === 7 && (
          <div className="answer-btn">
            <label style={{ fontSize: "12px" }}>
              Yes. All appointments are conducted through secure Zoom video
              calls to ensure real-time, face-to-face care.
            </label>
          </div>
        )}
      </>
      <>
        <div className="question-btn" onClick={() => handleShowAnswer(8)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>When will it launch?</span>
            <span style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
              {showAnswer === 8 ? "-" : "+"}
            </span>
          </div>
        </div>

        {showAnswer === 8 && (
          <div className="answer-btn">
            <label style={{ fontSize: "12px" }}>
              We're aiming to launch later this year. Sign up now to stay in the
              loop and get early access as we roll out new features.
            </label>
          </div>
        )}
      </>
    </div>
  );
};

export default Faq;
