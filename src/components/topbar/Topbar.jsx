import { Link } from "@material-ui/core";
import { Facebook, Instagram, Twitter, Menu, Remove } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import "./topbar.scss";
import ToggleNav from "../toggleNav/Togglenav";
export default function Topbar() {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="topbar">
      <div className="top">
        <div className="logo">Rana Car Rantal</div>
        <div className="navbar">
          <Link to="#">Home</Link>
          <Link to="#">Cars</Link>
          <Link to="#">Cart</Link>
          <Link to="#">Reviews</Link>
          <Link to="#">Contact</Link>
        </div>
        <div className="links">
          <span>
            <Facebook />
          </span>
          <span>
            <Twitter />
          </span>
          <span>
            <Instagram />
          </span>
        </div>
        <div className="menu">
          {!menuOpen && <Menu onClick={() => setmenuOpen(true)} />}

          {menuOpen && <Remove onClick={() => setmenuOpen(false)} />}
        </div>
      </div>
      <div className="bottom">
        <ToggleNav menuOpen={menuOpen} />
      </div>
    </div>
  );
}
