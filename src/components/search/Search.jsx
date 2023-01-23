import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import React, { useState } from "react";
import SearchItem from "../searchItem/SearchItem";
import { DateRange } from "react-date-range";
import photo from "../landing/carbanner/images__1_-removebg-preview.png";
import "./search.scss";
export default function Search() {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const testData = [
    {
      name: "Car Rantal",
      address: "Prembazar,Birgonj,Dinajpur",
      photos: [photo, photo, photo, photo],
      distance: "6km",
      desc: "Dinajpur",
      rating: "5 Star",
      cheapestPrice: "1000$",
    },
    {
      name: "Car Rantal",
      address: "Prembazar,Birgonj,Dinajpur",
      photos: [photo, photo, photo, photo],
      distance: "6km",
      desc: "Dinajpur",
      rating: "5 Star",
      cheapestPrice: "1000$",
    },
    {
      name: "Car Rantal",
      address: "Prembazar,Birgonj,Dinajpur",
      photos: [photo, photo, photo, photo],
      distance: "6km",
      desc: "Dinajpur",
      rating: "5 Star",
      cheapestPrice: "1000$",
    },
    {
      name: "Car Rantal",
      address: "Prembazar,Birgonj,Dinajpur",
      photos: [photo, photo, photo, photo],
      distance: "6km",
      desc: "Dinajpur",
      rating: "5 Star",
      cheapestPrice: "1000$",
    },
    {
      name: "Car Rantal",
      address: "Prembazar,Birgonj,Dinajpur",
      photos: [photo, photo, photo, photo],
      distance: "6km",
      desc: "Dinajpur",
      rating: "5 Star",
      cheapestPrice: "1000$",
    },
    {
      name: "Car Rantal",
      address: "Prembazar,Birgonj,Dinajpur",
      photos: [photo, photo, photo, photo],
      distance: "6km",
      desc: "Dinajpur",
      rating: "5 Star",
      cheapestPrice: "1000$",
    },
    {
      name: "Car Rantal",
      address: "Prembazar,Birgonj,Dinajpur",
      photos: [photo, photo, photo, photo],
      distance: "6km",
      desc: "Dinajpur",
      rating: "5 Star",
      cheapestPrice: "1000$",
    },
    {
      name: "Car Rantal",
      address: "Prembazar,Birgonj,Dinajpur",
      photos: [photo, photo, photo, photo],
      distance: "6km",
      desc: "Dinajpur",
      rating: "5 Star",
      cheapestPrice: "1000$",
    },
    {
      name: "Car Rantal",
      address: "Prembazar,Birgonj,Dinajpur",
      photos: [photo, photo, photo, photo],
      distance: "6km",
      desc: "Dinajpur",
      rating: "5 Star",
      cheapestPrice: "1000$",
    },
  ];

  return (
    <div className="search">
      <div className="heading">
        Search <span>Cars</span>
      </div>

      <div className="content">
        <div className="left">
          <div className="heading">Select Date Range</div>
          <div className="calender">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              className="date"
              minDate={new Date()}
            />
          </div>

          <div className="heading">Select Price Range</div>
          <div className="price">
            <div className="from">
              <span>From</span>
              <input type="number" name="startPrice" id="startPrice" />
            </div>
            <div className="from">
              <span>To</span>
              <input type="number" name="endPrice" id="endPrice" />
            </div>
          </div>
          <div className="button">Search</div>
        </div>
        <div className="cars">
          {testData.map((item) => (
            <SearchItem item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
