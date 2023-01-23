import React from "react";
import photo from "../landing/carbanner/images__1_-removebg-preview.png";
import "./about.scss";
export default function About() {
  return (
    <div className="about">
      <div className="heading">
        About <span>Us</span>
      </div>
      <div className="container">
        <div className="imgContainer">
          <img src={photo} alt="about photo" />
        </div>
        <div className="textContainer">
          <div className="heading2">About us</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora
            repellat consectetur vel quo soluta minus illum quibusdam cupiditate
            dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            tempora repellat consectetur vel quo soluta minus illum quibusdam
            cupiditate dolorem
            <br />
            <br />
            eligendi natus error eaque beatae iure, minima molestias saepe
            sapiente? eligendi natus error eaque beatae iure, minima molestias
            saepe sapiente?
          </div>
          <div className="btn">Learn More</div>
        </div>
      </div>
    </div>
  );
}
