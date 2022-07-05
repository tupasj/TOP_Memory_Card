import React, { useState } from "react";
import Score from "./components/Score";
import Cards from "./components/Cards";
import "./styles/styles.css";

const App = () => {
  const [points, setPoints] = useState(0);

  return (
    <>
      <header>
        <span>Memory Game</span>
        <Score />
      </header>
      <main>
        <Cards />
      </main>
    </>
  );
};

export default App;