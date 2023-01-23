import { Add, Remove } from "@material-ui/icons";
import React, { useState } from "react";
import "./togglenav.scss";
export default function Togglenav({ menuOpen }) {
  const [selectMenu, setselectMenu] = useState("");

  return (
    <div className={menuOpen ? "Togglenav active" : "Togglenav"}>
      <div className="wrapper">
        <div className="menuItem">
          <div className="menuItemHead">
            <span>Home</span>
            {selectMenu === "home" ? (
              <Remove onClick={() => setselectMenu("")} />
            ) : (
              <Add onClick={() => setselectMenu("home")} />
            )}
          </div>
          <div className={selectMenu === "home" ? "nested active" : "nested"}>
            <ul>
              <li>Menu One</li>
              <li>Menu Two</li>
              <li>Menu Three</li>
              <li>Menu Four</li>
            </ul>
          </div>
        </div>
        <div className="menuItem">
          <div className="menuItemHead">
            <span>Pages</span>
            {selectMenu === "pages" ? (
              <Remove onClick={() => setselectMenu("")} />
            ) : (
              <Add onClick={() => setselectMenu("pages")} />
            )}
          </div>
          <div className={selectMenu === "pages" ? "nested active" : "nested"}>
            <ul>
              <li>Menu One</li>
              <li>Menu Two</li>
              <li>Menu Three</li>
              <li>Menu Four</li>
            </ul>
          </div>
        </div>
        <div className="menuItem">
          <div className="menuItemHead">
            <span>Services</span>
            {selectMenu === "services" ? (
              <Remove onClick={() => setselectMenu("")} />
            ) : (
              <Add onClick={() => setselectMenu("services")} />
            )}
          </div>
          <div
            className={selectMenu === "services" ? "nested active" : "nested"}
          >
            <ul className={selectMenu === "home" ? "active" : ""}>
              <li>Menu One</li>
              <li>Menu Two</li>
              <li>Menu Three</li>
              <li>Menu Four</li>
            </ul>
          </div>
        </div>
        <div className="menuItem">
          <div className="menuItemHead">
            <span>Shop</span>
            {selectMenu === "shop" ? (
              <Remove onClick={() => setselectMenu("")} />
            ) : (
              <Add onClick={() => setselectMenu("shop")} />
            )}
          </div>
          <div className={selectMenu === "shop" ? "nested active" : "nested"}>
            <ul>
              <li>Menu One</li>
              <li>Menu Two</li>
              <li>Menu Three</li>
              <li>Menu Four</li>
            </ul>
          </div>
        </div>
        <div className="menuItem">
          <div className="menuItemHead">
            <span>Blog</span>
            {selectMenu === "blog" ? (
              <Remove onClick={() => setselectMenu("")} />
            ) : (
              <Add onClick={() => setselectMenu("blog")} />
            )}
          </div>
          <div className={selectMenu === "blog" ? "nested active" : "nested"}>
            <ul className={selectMenu === "home" ? "active" : ""}>
              <li>Menu One</li>
              <li>Menu Two</li>
              <li>Menu Three</li>
              <li>Menu Four</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
