import NavBar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import Hero from "./components/Hero.jsx";
import { useState } from "react";
import data from "./data.js";
import "./App.css";
function App() {
  let [newData, setNewData] = useState(data);
  let [dataArray, setDataArray] = useState(
    newData.map((item) => (
      <Card
        key={item.id}
        location={item.location}
        price={item.price}
        rating={item.stats.rating}
        review={item.stats.reviewCount}
        title={item.title}
        img={item.coverImg}
        desc={item.description}
        state={item.openSpots}
        fav={item.favorite}
        fun={addToFavori}
        id={item.id - 1}
      />
    ))
  );

  function addToFavori(e) {
    console.log(e.target.getAttribute("dataId"));
    setNewData((prev) => {
      let temporaryArray = prev;
      temporaryArray[e.target.getAttribute("dataId")].favorite =
        !temporaryArray[e.target.getAttribute("dataId")].favorite;

      return temporaryArray;
    });
    console.log("new data : ", newData);
    
  }

  function add() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <NavBar />
      {/* <button onClick={add}> {count}</button> */}
      <Hero />
      <div className="cardsContainer">{dataArray}</div>
    </>
  );
}

export default App;
