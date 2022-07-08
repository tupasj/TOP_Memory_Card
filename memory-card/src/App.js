import React, { useState } from "react";
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

  const addPoint = () => {
    addBestPt();
    setPoints(points + 1);
  };

  // If level > 3, congratulations and play again button sets level to 1.
  const nextLevel = () => {
    setPoints(0);
    setBestPts(0);
    setLevel(level + 1);
  };

  return (
    <>
      <header>
        <span>Memory Game</span>
        <Scoreboard points={points} bestPts={bestPts} level={level} />
      </header>
      <main>
        <Cards points={points} setPoints={setPoints} addPoint={addPoint} level={level} nextLevel={nextLevel} />
      </main>
    </>
  );
};

export default App;
