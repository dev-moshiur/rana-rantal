import React from "react";
import Car from "../car/Car";
import "./topDeals.scss";
export default function Topdeals() {
  return (
    <div className="topDeals">
      <div className="header">
        Our <span>Hot Deals</span>
      </div>

      <div className="itemContainer">
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
      </div>
    </div>
  );
}
