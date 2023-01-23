import { Facebook, Instagram, YouTube, Twitter } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <div className="name">
            <span>Rana</span> Rantal
          </div>
          <div className="links">
            <Facebook />
            <Twitter />
            <Instagram />
            <YouTube />
          </div>
        </div>
        <div className="right">
          <div className="column">
            <div className="heading">Pages</div>
            <a href="#">item</a>
            <a href="#">item</a>
            <a href="#">item</a>
            <a href="#">item</a>
            <a href="#">item</a>
          </div>
          <div className="column">
            <div className="heading">Pages</div>
            <a href="#">item</a>
            <a href="#">item</a>
            <a href="#">item</a>
            <a href="#">item</a>
            <a href="#">item</a>
          </div>
          <div className="column">
            <div className="heading">Pages</div>
            <a href="#">item</a>
            <a href="#">item</a>
            <a href="#">item</a>
            <a href="#">item</a>
            <a href="#">item</a>
          </div>
        </div>
      </div>
      <div className="bottom">@ Ranarantal All Right Riseved</div>
    </div>
  );
}
