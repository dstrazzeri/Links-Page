import React from "react";

import { BsLinkedin, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import videoBg from "../assets/video.mp4";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Danielle Strazzeri</h1>
        <p>Full Stack Web Developer • Graphic Designer</p>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/danielle-yvette-strazzeri/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            <BsLinkedin
              style={{
                border: "1px solid white",
                padding: "15px",
                borderRadius: "50%",
                color: "white",
                marginRight: "20px",
              }}
            />{" "}
          </a>
          <a
            href="https://twitter.com/strazzberi"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsTwitter
              style={{
                border: "1px solid white",
                padding: "15px",
                borderRadius: "50%",
                color: "white",
                marginRight: "20px",
              }}
            />{" "}
          </a>
          <a
            href="https://www.instagram.com/strazzberi/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsInstagram
              style={{
                border: "1px solid white",
                padding: "15px",
                borderRadius: "50%",
                color: "white",
                marginRight: "20px",
              }}
            />
          </a>
          <a
            href="https://github.com/dstrazzeri"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub
              style={{
                border: "1px solid white",
                padding: "15px",
                borderRadius: "50%",
                color: "white",
                marginRight: "20px",
              }}
            />
          </a>
          <a href="/" target="_blank" rel="noreferrer noopener">
            <FaGlobe
              style={{
                border: "1px solid white",
                padding: "15px",
                borderRadius: "50%",
                color: "white",
                marginRight: "20px",
              }}
            />
          </a>
          <a href="mailto: dstrazzeri303@gmail.com">
            <IoMail
              style={{
                border: "1px solid white",
                padding: "15px",
                borderRadius: "50%",
                color: "white",
                marginRight: "20px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;