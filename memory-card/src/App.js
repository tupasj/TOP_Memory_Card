import React, { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Cards from "./components/Cards";
import "./styles/styles.css";

const App = () => {
  const [points, setPoints] = useState(0);
  const [bestPts, setBestPts] = useState(0);

  const addPoint = () => {
    setPoints(points + 1);
  }

  const addBestPt = () => {
    setBestPts(bestPts + 1);
  }

  return (
    <>
      <header>
        <span>Memory Game</span>
        <Scoreboard points={points} bestPts={bestPts} />
      </header>
      <main>
        <Cards onClick={addPoint} />
      </main>
    </>
  );
};

export default App;
