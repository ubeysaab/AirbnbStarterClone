import React from "react";
import star from "../images/star.png";
import { useState } from "react";
import img from "../images/katie-zaferes.png";
export default function Card(props) {
  console.log("rendered child");
  let img = `images/${props.img}`;
  //   console.log(img);
  let [fav, setFav] = useState(props.fav);
  function addTofav() {
    setFav(!fav);
  }
  return (
    <div className="card">
      {props.state === 0 && <div className="card__soldState">Sold Out </div>}
      <img src={`${img}`} className="card__img" />
      <div className="card__stats">
        <img
          dataId={props.id}
          src={fav === true ? "/images/star.png" : "/images/staroff.png"}
          className="card__star"
          onClick={addTofav}
          //   onClick={props.fun}
        />
        <span>{props.rating}</span>
        <span className="gray"> ({props.review}) • </span>
        <span className="gray"> USA</span>
      </div>
      <p className="card__title"> {props.title}</p>
      <p className="card__price">
        <span className="bold">From $ {props.price} </span> / person
      </p>
    </div>
  );
}

// <div className="card">
//     <img src={`${img}`} className="card__img" />
//     <div className="card__stats">
//         <img src={star} className="card__star" />
//         <span>5.0</span>
//         <span className="gray"> (6) • </span>
//         <span className="gray"> USA</span>
//     </div>
//     <p className="card__title"> life lessons with katie zafers</p>
//     <p className="card__price"><span className="bold">From $ 136 </span> / person</p>
// </div>
