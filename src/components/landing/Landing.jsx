import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import "./landing.scss";
import carimg from "./images__2_-removebg-preview.png";
import car1 from "./carbanner/images__1_-removebg-preview.png";
import car2 from "./carbanner/images__3_-removebg-preview.png";
import car3 from "./carbanner/images-removebg-preview.png";
export default function Landing() {
  const [carIndex, setcarIndex] = useState(3);
  const [fadeInOut, setfadeInOut] = useState(false);

  const handleChangeCar = (index) => {
    if (index != carIndex) {
      const carId = document.getElementById("carImg");
      carId.classList.add("come");
      carId.classList.remove("come");
      carId.classList.add("go");
      setfadeInOut(false);

      setTimeout(() => {
        setfadeInOut(true);
        setcarIndex(index);

        carId.classList.remove("go");
        carId.classList.add("come");
      }, 400);
    }
  };

  const cars = [
    {
      name: "Nissan",
      tittle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Placeat nostrum vero magnam autem quam, adipisci`,
      poduction: "2020 - 2023",
      Designer: "Md Rokibul Islam",
      img: carimg,
    },
    {
      name: "Mitsubisi",
      tittle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Placeat nostrum vero magnam autem quam, adipisci`,
      poduction: "2021 - 2023",
      Designer: "Md Ahsan Islam",
      img: car1,
    },
    {
      name: "Toyota",
      tittle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Placeat nostrum vero magnam autem quam, adipisci`,
      poduction: "2010 - 2020",
      Designer: "Al Amin Islam",
      img: car2,
    },
    {
      name: "Tata",
      tittle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Placeat nostrum vero magnam autem quam, adipisci`,
      poduction: "2018 - 2019",
      Designer: "Siam Bappi",
      img: car3,
    },
  ];
  return (
    <div className="Landing">
      <div className="left">
        <div className="img">
          <img className="image" id="carImg" src={cars[carIndex].img} alt="" />
        </div>
        <div className="pagination">
          <span
            className={carIndex == 0 ? "active" : ""}
            onClick={() => handleChangeCar(0)}
          >
            1
          </span>
          <span
            className={carIndex == 1 ? "active" : ""}
            onClick={() => handleChangeCar(1)}
          >
            2
          </span>
          <span
            className={carIndex == 2 ? "active" : ""}
            onClick={() => handleChangeCar(2)}
          >
            3
          </span>
          <span
            className={carIndex == 3 ? "active" : ""}
            onClick={() => handleChangeCar(3)}
          >
            4
          </span>
          <span
            onClick={() => handleChangeCar(carIndex == 0 ? 3 : carIndex - 1)}
          >
            <ArrowLeft />
          </span>
          <span
            onClick={() => handleChangeCar(carIndex == 3 ? 0 : carIndex + 1)}
          >
            <ArrowRight />
          </span>
        </div>
      </div>
      <div className="right">
        <div className="name">Rana Car Rantal</div>
        <div className={fadeInOut ? "fadeIn carName" : "carName"}>
          {cars[carIndex].name}
        </div>
        <div className={fadeInOut ? "fadeIn tittle" : "tittle"}>
          {cars[carIndex].tittle}
        </div>

        <a href="#">Discover</a>
        <div className="made">
          <div className="item">
            <span>Production</span>
            <span className={fadeInOut ? "fadeIn" : ""}>
              {cars[carIndex].poduction}
            </span>
          </div>
          <div className="item">
            <span>Desiner</span>
            <span className={fadeInOut ? "fadeIn" : ""}>
              {cars[carIndex].Designer}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
