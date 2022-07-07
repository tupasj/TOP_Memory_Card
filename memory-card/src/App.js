import React, { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Cards from "./components/Cards";
import "./styles/styles.css";

const App = () => {
  const [points, setPoints] = useState(0);
  const [bestPts, setBestPts] = useState(0);
  const [level, setLevel] = useState(1);
  const [clickedCards, setClickedCards] = useState([]);

  const addPoint = () => {
    setPoints(points + 1);
  }

  const addBestPt = () => {
    setBestPts(bestPts + 1);
  }

  const getClickedCard = (e) => {
    const clickedCard = e.currentTarget;
    return clickedCard;
  }

  const handleClick = (e) => {
    const clickedCard = getClickedCard(e);
    const alreadyClicked = checkClicked(clickedCard);
    setClickedCards(clickedCards.concat(clickedCard.id));
    addPoint();
  }

  const checkClicked = (e) => {
    return clickedCards.includes(e.id);
  }

  // useEffect(() => {
  //   console.log();
  //   console.log(clickedCards)
  // }, [clickedCards]);

  return (
    <>
      <header>
        <span>Memory Game</span>
        <Scoreboard points={points} bestPts={bestPts} level={level}/>
      </header>
      <main>
        <Cards level={level} onClick={handleClick} />
      </main>
    </>
  );
};

export default App;
