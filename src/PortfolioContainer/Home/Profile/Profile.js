import React from 'react'
import Typical from 'react-typical'
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/dvmendoza" target="_blank">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.google.com/" target="_blank">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/daniel-mendoza-957323220/" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Daniel</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical 
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev 🔴",
                  1000,
                  "Full Stack Developer 💻",
                  1000,
                  "MERN Stack Dev 😎",
                  1000,
                  "Cross Platform Dev 🔗",
                  1000,
                  "React/React Native Dev 🌐",
                  1000,
                ]}
                />
              </h1>
            </span>
              <span className="profile-role-tagline">
                I love building applications with front and back end operations.
              </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="DanielMendoza.pdf" download="Daniel Mendoza.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}