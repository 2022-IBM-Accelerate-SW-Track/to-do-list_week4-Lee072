import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/myPicture.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Mia Lee</div>
            <div className="brief_description">
              Hello, I am currently 20 years old and attending GCU for a B.S in computer programming.
              I enjoy music and playing videogames.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
