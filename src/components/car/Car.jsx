import React from "react";
import photo from "../landing/carbanner/images__1_-removebg-preview.png";
import "./car.scss";
export default function Car() {
  return (
    <div className="car">
      <div className="imgContainer">
        <img src={photo} alt="" />
      </div>
      <div className="textContainer">
        <div className="name">Honda Civic</div>
        <div className="rate">50$ per day</div>
        <div className="view">See More</div>
      </div>
    </div>
  );
}
