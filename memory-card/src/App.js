import React, { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Cards from "./components/Cards";
import "./styles/styles.css";

const App = () => {
  const [points, setPoints] = useState(0);
  const [bestPts, setBestPts] = useState(0);
  const [level, setLevel] = useState(1);

  const addBestPt = () => {
    if (points >= bestPts) {
      setBestPts(bestPts + 1);
    }
  };

  // If pts >= cardsArray.length (computed), nextLevel().
  const addPoint = (limit) => {
    addBestPt();
    setPoints(points + 1);
  };

  // If level > 3, congratulations and play again button sets level to 1.

  return (
    <>
      <header>
        <span>Memory Game</span>
        <Scoreboard points={points} bestPts={bestPts} level={level}/>
      </header>
      <main>
        <Cards level={level} addPoint={addPoint} />
      </main>
    </>
  );
};

export default App;