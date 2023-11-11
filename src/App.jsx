import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const text = "Hello! I'm Amit Datta";
  const text2 =
    "I’m a versatile developer with expertise in both frontend and MERN stack development.";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03, // Adjust the stagger duration between characters
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const handleClick = () => {
    const emailTo = 'recipient@example.com';
    const emailCC = 'cc@example.com';
    const emailSub = 'Subject of the email';
    const emailBody = 'Body of the email';
    
    const mailtoLink = `mailto:${encodeURIComponent(emailTo)}?cc=${encodeURIComponent(emailCC)}&subject=${encodeURIComponent(emailSub)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
  };
  return (
    <div>
      <div className="full-screen-div">
        <div>
          <div className="container0">
            <img
              src="./AMIT.svg"
              alt=""
              style={{
                width: "65px",
                position: "fixed",
                marginTop: "1%",
                marginLeft: "1%",
              }}
            />
          </div>

          <div className="container1">
            {" "}
            <br />
            <button className="btn1">More about me</button>
            <button className="btn1">Resume</button>
            <button className="btn1">Achievements</button>
            <button className="btn1">Other Skills</button>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className="container2">
          <div className="container3">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button className="btn2">Got a question?</button>
              <button className="btn3">Get in touch</button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "100px",
              }}
            >
              <button className="btn2">I'm on socials</button>
              <button className="btn3">Follow me on Instagram</button>
            </div>
          </div>
          <div className="container4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="staggered-text"
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={textVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="staggered-text2"
            >
              {text2.split("").map((char, index) => (
                <motion.span key={index} variants={textVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <div className="container5">
            <div className="column">
              <p style={{ color: "white", fontSize: "26px" }}>Projects</p>
              <a>NeighborServe - a service marketplace platform</a>
              <a>CompArena - Get regular update of comp</a>
              <a>A2z Wholesale e-commerce</a>
              <a>Football DB</a>
              <a>Hangman</a>
              <a>UIU Room finder</a>
            </div>
            <div className="column">
              <p style={{ color: "white", fontSize: "26px" }}>Stack</p>
              <a>Javascript</a>
              <a>TailwindCSS</a>
              <a>React</a>
              <a>NodeJs</a>
              <a>Express Js</a>
              <a>PHP</a>
              <a>C</a>
              <a>C++</a>
              <a>MongoDB</a>
              <a>MySQL</a>
              <a>Git</a>
              <a>Figma</a>
              <a>Vercel</a>
            </div>
            <div className="column">
              <p style={{ color: "white", fontSize: "26px" }}>Contacts</p>
              <a href="https://github.com/AmitDattaShuvo119">Github</a>
              <a href="https://www.linkedin.com/in/amitdattashuvo119/">
                LinkedIn
              </a>
              <a href="https://twitter.com/Aaaamiitt">Twitter</a>
              <a href="https://www.facebook.com/profile.php?id=100073515732885">
                Facebook
              </a>

              <button
                className="btn4"
                onClick={handleClick}
                style={{ textAlign: "center", marginTop: "200px" }}
              >
                Email me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
