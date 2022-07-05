import React from "react";

const Scoreboard = (props) => {
  const points = props.points;
  const bestPts = props.bestPts;

  return (
    <>
      <span className="scoreboard">
        <span className="score">Current score: {points}</span>|
        <span className="best-score">Best score: {bestPts}</span>
      </span>
    </>
  );
};

export default Scoreboard;
